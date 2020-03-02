import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components/native'

export const Background = styled(LinearGradient).attrs({
    colors: ['#6fa287', '#2c6d57']
})`
    flex : 1
`
export const Header = styled.View`
    height : 55px;
    background-color : #FFF;
    flex-direction : row;
    align-items : center;
    justify-content : space-between;
    padding : 15px;
`

export const TextHeader = styled.Text`
    color : #6fa287;
    font-size : 25px;
    font-style : italic;
    font-weight : bold;
`
export const ButtonLogOut = styled.TouchableOpacity`
    
`

export const TextButtonLogOut = styled.Text`

`

export const Container = styled.View`
    flex : 1;
`
export const List = styled.FlatList.attrs({
    paddingHorizontal : 15,
    paddingVertical : 20
})`
    margin-top : 10px;
`

export const Footer = styled.View`
    height : 55px;
    background-color : #FFF;
    align-items : center;
    flex-direction : row;
    justify-content : flex-end;
    padding : 15px;
`

export const TextButtonNewPost = styled.Text`
    color : #6fa287;
    font-size : 15PX;
    font-weight : bold;
`
export const ButtonNewPost = styled.TouchableOpacity`
    
`