import styled from 'styled-components/native';


// Toda a tela
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #5E239D;
    
`;


// Rolagem da tela
export const Scroll = styled.ScrollView`
    width: 100%;
`;


// + View de input
// + Texto "título" do input
// + Input
export const InputView = styled.View`
    margin: 40px 30px 0 30px;
`;
export const Label = styled.Text`
    color: #fff;
`;
export const Input = styled.TextInput`
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
`;


// + Botão de finalizar comentário
// + Texto de botão
export const Btn = styled.TouchableHighlight`
    background-color: #F61067;
    height: 60px;
    margin: 40px 30px 50px 30px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

export const BtnText = styled.Text`
    color: #fff;
    font-size: 18px;
`;