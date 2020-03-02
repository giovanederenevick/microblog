import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import firebase from '../../services/firebaseConnection'

import { Background, Container} from './styles'

export default function Preload({ navigation }){

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                navigation.navigate('Home')
            }else{
                navigation.navigate('SignIn')
            }
        })
    })

    return(
        <Background>
            <Container>
                <ActivityIndicator color='#FFF' size={50} />
            </Container>
        </Background>
    )
}