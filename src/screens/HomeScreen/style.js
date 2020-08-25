import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #5E239D;
    align-items: center;
    justify-content: center;
`;

export const Texto = styled.Text`
    color: #fff;
    font-size: 20px;
    text-align: center;
    margin: 0 25px 30px 25px;
`;

export const InputView = styled.View`
    flex-direction: row;
    width: 80%;
`;

export const Input = styled.TextInput`
    flex: 1;
    padding: 10px;
    height: 60px;
    font-size: 16px;  
    color: #000;
    background-color: #fff;
    borderTopLeftRadius: 10px;
    borderBottomLeftRadius: 10px;
`;

export const Btn = styled.TouchableHighlight`
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 20%;
    background-color: #F61067;
    borderTopRightRadius: 10px;
    borderBottomRightRadius: 10px;
`;