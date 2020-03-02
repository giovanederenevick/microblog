import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components/native'
import Textarea from 'react-native-textarea';

export const Background = styled(LinearGradient).attrs({
    colors: ['#6fa287', '#2c6d57']
})`
    flex : 1
`

export const TextLabel = styled.Text`
    margin : 20px 0 20px 0;
    font-size : 25px;
    color : #FFF;
`

export const Container = styled.View`
    margin-top : 100px;
    align-items : center;
    justify-content : center;
`

export const TextInput = styled(Textarea).attrs({
    textAlignVertical : 'top',
    height: 150,
    flex : 1,
    padding: 10,
    margin : 15,
    borderRadius : 10
})`
    background-color : #FFF;
`


export const AreaFooter = styled.View`
    flex-direction : row;
    justify-content : space-between;
    width : 90%;
`

export const TextChar = styled.Text`
    color : #FFF;
`

export const ButtonEnviar = styled.TouchableOpacity`
    background-color : #35AAFF;
    width : 150px;
    align-items : center;
    justify-content : center;
    border-radius : 10px;
    height : 40px;
`

export const TextButonEnviar = styled.Text`
    color : #FFF;
    font-weight : bold;
    font-size : 15px;
`

export const ButtonVoltar = styled.TouchableOpacity`
    margin : 15px 0 0 15px;
    background-color : #FFF;
    width : 60px;
    padding : 5px;
    justify-content : center;
    align-content : center;
    border-radius : 5px;
`

export const TextVoltar = styled.Text`
    color : #6fa287;
    text-align : center;
    font-weight : bold;
`