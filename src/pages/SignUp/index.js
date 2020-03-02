import React, { useState } from 'react'
import firebase from '../../services/firebaseConnection'
import { Alert, Keyboard } from 'react-native'

import { Background, Container, AreaInput, Input, SubmitButton, SubmitText, SignInButton, SignInText, HeaderText } from './styles'

export default function SignUp({ navigation }){

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    firebase.auth().signOut()

    async function handleSubmit(){
        if(nome !== '' && email !== '' && password !== ''){
            await firebase.auth().createUserWithEmailAndPassword(email, password)
                .then( async () => {
                    let uid = firebase.auth().currentUser.uid
                    await firebase.database().ref('users').child(uid).set({
                        nome : nome
                    })
                })
                .catch(error => {
                    if(error.code === 'auth/invalid-email'){
                        Alert.alert(
                            'Email inválido',
                            'Verifique o email inserido',
                            [
                                {
                                    text : 'Fechar',
                                    style : 'cancel'
                                }
                            ]
                        )
                        return
                    }
                    if(error.code === 'auth/weak-password'){
                        Alert.alert(
                            'Senha muito fraca',
                            'A senha deve conter no mínimo 6 caracteres',
                            [
                                {
                                    text : 'Fechar',
                                    style : 'cancel'
                                }
                            ]
                        )
                        return
                    }
                    alert(error.code)
                })
        }
    }

    return(
        <Background>
            <Container>

                <HeaderText>Criar uma nova conta</HeaderText>
                
                <AreaInput>
                    <Input 
                        placeholder="Nome"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={nome}
                        onChangeText={(nome) => setNome(nome)}
                    />
                </AreaInput>
                
                <AreaInput>
                    <Input 
                        placeholder="Email"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input 
                        placeholder="senha"
                        autoCorrect={false}
                        autoCapitalize="none"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                    />
                </AreaInput>

                <SubmitButton onPress={handleSubmit}>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>

                <SignInButton onPress={() => navigation.navigate('SignIn')}>
                    <SignInText>Já possuo uma conta</SignInText>
                </SignInButton>

            </Container>
        </Background>
    )
}