import styled from 'styled-components/native';


// Toda a tela
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #5E239D;
    align-items: center;
`;


// Rolagem da tela
export const Scroll = styled.ScrollView``;


// + View com icone e email do usuário
// + Texto com email do usuário
export const UserView = styled.View`
    height: 250px;
    width: 100%;
    align-items: center;
    justify-content: center;
    borderBottomWidth: 1px;
    borderBottomColor: #aaa;
`;
export const UserEmail = styled.Text`
    color: #fff;
    font-size: 24px;
    margin-top: 15px;
`;


// + View com todos os itens
// + Botão com um item
// + Texto padrão dentro do botão
export const DefaultView = styled.View`
    width: 100%;
`;
export const ItemBtn = styled.TouchableHighlight`
    borderBottomWidth: 1px;
    borderBottomColor: #aaa;
    height: 80px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px 0 10px;
`;
export const DefaultText = styled.Text`
    font-size: 18px;
    color: #fff;
`;