import styled from 'styled-components/native';


// Toda a tela
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #5E239D;
`;


// Rolagem da tela
export const Scroll = styled.ScrollView`
    padding: 30px;
`;


// Texto grande no topo da tela
export const BigText = styled.Text`
    color: #fff;
    font-size: 18px;
    text-align: left;
`;


// + View pai dos comentários
// + View filha dos comentários dentro do array
// + Título (nome do lugar)
// + View pai horizontal
// + View filha horizontal
// + View dentro da RowChild em coluna
// + Nome do usuário
// + Data do comentário
// + Comentário
export const CommentView = styled.View`
`;
export const ItemView = styled.View`
    margin-bottom: 40px;
`;
export const Title = styled.Text`
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
`;
export const Row = styled.View`
    flex-direction: row;
    margin-bottom: 15px;
    justify-content: space-between;
`;
export const RowChild = styled.View`
    flex-direction: row;

`;
export const Column = styled.View`
    flex-direction: column;

`;
export const UserImg = styled.Image``;
export const NameText = styled.Text`
    font-size: 16px;
    color: #ccc;
    margin-left: 10px;
`;
export const Date = styled.Text`
    margin-left: 10px;
    color: #aaa;
`;
export const CommentText = styled.Text`
    color: #ccc;
    font-size: 16px;
`;
