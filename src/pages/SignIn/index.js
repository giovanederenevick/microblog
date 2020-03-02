import React, {useState} from 'react'
import firebase from '../../services/firebaseConnection'
import { Alert, Keyboard } from 'react-native'

import { Background, Container, AreaInput, Input, SubmitButton, SubmitText, SignUpLink, SignUpText } from './styles'

export default function SignIn({ navigation }){

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(){
        if(email !== '' && password !== ''){
            await firebase.auth().signInWithEmailAndPassword(email, password)
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
                if(error.code === 'auth/wrong-password'){
                    Alert.alert(
                        'Senha incorreta',
                        'Verifique a senha inserida',
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
                    <SubmitText>Acessar</SubmitText>
                </SubmitButton>

                <SignUpLink onPress={() => navigation.navigate('SignUp')}>
                    <SignUpText>Criar conta gratuita</SignUpText>
                </SignUpLink>
            </Container>
        </Background>
    )
}