import styled from 'styled-components/native';


// Toda a tela
export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #5E239D;
`;


// + Input
// + Botão de realizar login
// + Texto do botão
export const Input = styled.TextInput`
    background-color: #fff;
    padding: 10px;
    height: 60px;
    border-radius: 10px;
    font-size: 16px;
    width: 80%;
    margin-top: 10px;
`;
export const Btn = styled.TouchableHighlight`
    background-color: #F61067;
    height: 60px;
    border-radius: 10px;
    margin-top: 20px;
    width: 80%;
    align-items: center;
    justify-content: center;
`;
export const BtnText = styled.Text`
    color: #fff;
    font-size: 18px;
`;


// + View com texto para realizar cadastro
// + Texto do cadastro
// + Botão para ir para o cadastro
export const RegisterView = styled.View`
    flex-direction: row;
    margin-top: 15px;
`;
export const RegisterText = styled.Text`
    color: #ccc;
    font-size: 16px;
`;
export const RegisterBtn = styled.TouchableOpacity``;
