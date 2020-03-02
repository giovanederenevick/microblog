import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components/native'

export const Background = styled(LinearGradient).attrs({
    colors: ['#6fa287', '#2c6d57']
})`
    flex : 1
`

export const Container = styled.View`
    flex : 1;
    align-items : center;
    justify-content : center;
`

export const AreaInput = styled.View`
    flex-direction : row;
`

export const Input = styled.TextInput`
    background : #FFF;
    color : #222;
    font-size : 17px;
    border-radius : 7px;
    width : 90%;
    margin-bottom : 15px;
    padding : 10px;
`

export const SubmitButton = styled.TouchableOpacity`
    align-items : center;
    justify-content : center;
    background-color : #35AAFF;
    height : 45px;
    width : 90%;
    border-radius : 7px;
    margin-top : 10px
`

export const SubmitText = styled.Text`
    color : #FFF;
    font-size : 18px;
`

export const SignUpLink = styled.TouchableOpacity`
    margin-top : 10px;
`

export const SignUpText = styled.Text`
    color : #FFF;
    padding-bottom : 15px;
`