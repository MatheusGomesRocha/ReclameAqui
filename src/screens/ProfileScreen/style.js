import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #5E239D;
    justify-content: center;
    align-items: center;

`;
export const Scroll = styled.ScrollView`

`;

export const InputView = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;

`;

export const Input = styled.TextInput`
    background-color: #fff;
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