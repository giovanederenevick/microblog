import styled from 'styled-components/native'
import Textarea from 'react-native-textarea';

export const Container = styled.View`
    background-color : #FFF;
    margin-bottom : 15px;
    padding : 10px;
    border-radius : 10px;
`
export const AreaHeader = styled.View`
    flex-direction : row;
    align-items : center;
    justify-content : space-between;
`

export const Autor = styled.Text`
    color : #000;
    font-weight : bold;
    font-size : 15px;
`

export const ButtonExcluir = styled.TouchableOpacity`
`
export const TextoButtonExcluir = styled.Text`
    color : #6fa287;
    font-weight : 500;
    font-size : 12px;
`

export const TextoAutor = styled.Text`
    padding : 10px;
    color : #222;
`

export const DataPost = styled.Text`
    margin-top : 5px;
    text-align : right;
    font-style : italic;
`
export const AreaFooter = styled.View`
    flex-direction : row;
    align-items : center;
    justify-content : space-between;
`
export const ButtonEditar = styled.TouchableOpacity`
`

export const TextoButtonEditar = styled.Text`
    color : #6fa287;
    font-weight : 500;
    font-size : 12px;
`
export const ContainerModal = styled.View``

export const AreaTextInput = styled(Textarea).attrs({
    textAlignVertical : 'top',
    height: 150,
    flex : 1,
    padding: 10,
    margin : 15,
    borderRadius : 10
})`
    background-color : #FFF;
`

export const BtnSalvar = styled.TouchableOpacity`
    background-color : #6fa287;
    width : 80px;
    height : 30px;
    align-items : center;
    justify-content : center;
    border-radius : 10px;
`

export const TextBtnSalvar = styled.Text`
    color : #FFF;   
`

export const BtnCancelar = styled.TouchableOpacity`
    background-color : #2c6d57;
    width : 80px;
    height : 30px;
    align-items : center;
    justify-content : center;
    border-radius : 10px;
`

export const TextBtnCancelar = styled.Text`
    color : #FFF;    
`

export const AreaBtn = styled.View`
    flex-direction : row;
    justify-content : space-around;
`