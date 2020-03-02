import React, { useState, useEffect } from 'react'
import firebase from '../../services/firebaseConnection'

import { Background, Container, List, Header, TextHeader, ButtonLogOut, TextButtonLogOut, Footer, ButtonNewPost, TextButtonNewPost} from './styles'
import ListPosts from '../../components/ListPosts'

export default function Home({ navigation }){

    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function carregarLista(){
            await firebase.database().ref('posts')
                .orderByChild('date').on('value', (snapshot) => {
                    setPosts([])

                    snapshot.forEach((childItem) => {
                        let list = {
                            key : childItem.key,
                            nomeAutor : childItem.val().nomeAutor,
                            usuario : childItem.val().usuario,
                            textoPost : childItem.val().textoPost,
                            date : childItem.val().date
                        }

                        setPosts(oldArray => [...oldArray, list].reverse())
                    })
                })
        }

        carregarLista()
    }, [])

    return(
        <Background>
            <Header>
                <TextHeader>MicroBlog</TextHeader>
                <ButtonLogOut onPress={() => firebase.auth().signOut()}>
                    <TextButtonLogOut>LogOut</TextButtonLogOut>
                </ButtonLogOut>
            </Header>

            <Container>
                <List
                    keyExtractor={item => item.key}
                    data={posts}
                    renderItem={({item}) => <ListPosts data={item} />}
                />
            </Container>

            <Footer>
                <ButtonNewPost onPress={() => navigation.navigate('New')}>
                    <TextButtonNewPost>CRIAR NOVO POST</TextButtonNewPost>
                </ButtonNewPost>
            </Footer>
        </Background>
    )
}