import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import firebase from '../../services/firebaseConnection'
import Modal from 'react-native-modal'

import { Container, Autor, TextoAutor, DataPost, AreaHeader, ButtonExcluir, TextoButtonExcluir , AreaFooter, ButtonEditar, TextoButtonEditar, AreaTextInput, BtnSalvar,
    TextBtnSalvar, BtnCancelar, TextBtnCancelar, ContainerModal, AreaBtn} from './styles'

export default function ListPosts({ data }){

    const [isVisible, setIsVisible] = useState(false)
    const [textoNew, setTextoNew] = useState(data.textoPost)

    let uid = firebase.auth().currentUser.uid

    async function handleDeletar(){
        await firebase.database().ref('posts').child(data.key).remove()
    }

    async function handleEditar(){
        await firebase.database().ref('posts').child(data.key).set({
            nomeAutor : data.nomeAutor,
            usuario : data.usuario,
            textoPost : textoNew, 
            date : data.date
        })

        setIsVisible(false)
    }

    const renderExcluir = () => {
        if(data.usuario === uid){
            return(
                <ButtonExcluir onPress={handleDeletar}>
                    <TextoButtonExcluir>deletar</TextoButtonExcluir>
                </ButtonExcluir>
            )
        }
    }

    const renderEditar = () => {
        if(data.usuario === uid){
            return(
                <ButtonEditar onPress={() => setIsVisible(true)}>
                    <TextoButtonEditar>editar</TextoButtonEditar>
                </ButtonEditar>
            )
        }else {
            return(
                <Text></Text>
            )
        }
    }

    return(
        <Container>
            <AreaHeader>
                <Autor>{data.nomeAutor}</Autor>
                {renderExcluir()}
            </AreaHeader>
            
            <TextoAutor>{data.textoPost}</TextoAutor>
                
            <AreaFooter>
                {renderEditar()}
                <DataPost>{data.date}</DataPost>
            </AreaFooter>


            <Modal isVisible={isVisible}>
                <ContainerModal>
                    <AreaTextInput
                    onChangeText={(value) => setTextoNew(value)}
                    >
                    {data.textoPost}
                    </AreaTextInput>
                    <AreaBtn>
                        <BtnCancelar onPress={() => setIsVisible(false)}>
                            <TextBtnCancelar>Cancelar</TextBtnCancelar>
                        </BtnCancelar>
                        <BtnSalvar onPress={handleEditar}>
                            <TextBtnSalvar>Salvar</TextBtnSalvar>
                        </BtnSalvar>
                    </AreaBtn>
                </ContainerModal>
            </Modal>
        </Container>
    )
}