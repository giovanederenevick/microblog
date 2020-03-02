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