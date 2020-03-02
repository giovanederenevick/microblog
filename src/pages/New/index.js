import React, {useState} from 'react'
import firebase from '../../services/firebaseConnection'
import { Alert, Keyboard } from 'react-native'

import { Background, Container, TextInput, TextLabel, AreaFooter, TextChar, ButtonEnviar, TextButonEnviar, ButtonVoltar, TextVoltar } from './styles'

export default function New({ navigation }){

    const [chars, setChars] = useState(0)
    const [textoPost, setTextoPost] = useState('')

    async function handleSubmit(){
        Keyboard.dismiss()

        if(chars > 280 || chars === 0){
            Alert.alert(
                'Texto Inválido',
                'Texto não pode ser vazio nem possuir mais de 280 caracteres.',
                [
                    {
                        text : 'Fechar',
                        style : 'cancel'
                    }
                ]
            )
            return
        }else{
            let uid = firebase.auth().currentUser.uid
            
            let posts = firebase.database().ref('posts')
            
            let key = (await posts.push()).key

            let nomeAutor
            
            await firebase.database().ref('users').child(uid).child('nome').on('value', (snapshot) => {
                nomeAutor = snapshot.val()
            })

            await posts.child(key).set({
                usuario : uid,
                nomeAutor : nomeAutor,
                textoPost : textoPost,
                date : new Date().toLocaleDateString()
            }).then(
                navigation.navigate('Home')
            )
        }


    }

    return(
        <Background>
            <ButtonVoltar onPress={() => navigation.navigate('Home')}>
                <TextVoltar>HOME</TextVoltar>
            </ButtonVoltar>
            <Container>
                <TextLabel>Criar um novo post</TextLabel>
                <TextInput 
                placeholder="texto"
                multiline = {true}
                numberOfLines = {10}
                onChangeText={(value) => {
                    setChars(0+value.length) 
                    setTextoPost(value)
                    }}
                />
                <AreaFooter>
                    <TextChar>{chars}/280</TextChar>
                    <ButtonEnviar onPress={handleSubmit}>
                        <TextButonEnviar>Enviar</TextButonEnviar>
                    </ButtonEnviar>
                </AreaFooter>
            </Container>
        </Background>
    )
}