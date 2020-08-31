import styled from 'styled-components/native';


// Toda a tela
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #5E239D;
`;


// Rolagem da tela
export const Scroll = styled.ScrollView``;


// + View pai
// + View filha dentro do array
// + View da linha que contém título e o Icon
// + Título do comentário (lugar)
// + Data que o comentário foi feito
// + Texto com o comentário
export const DefaultView = styled.View`
`;
export const ItemView = styled.View`
    padding: 30px;
`;
export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
export const Title = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
`;
export const Date = styled.Text`
    color: #bbb;
    margin-top: 2px;
`;
export const DefaultText = styled.Text`
    color: #fff;
    margin-top: 2px;
`;