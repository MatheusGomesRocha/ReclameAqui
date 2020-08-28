import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

import {
    Container,

    Input,
    Btn,
    BtnText,

    RegisterView,
    RegisterText,
    RegisterBtn,
} from './style';

export default () => {
    const navigation = useNavigation();

    return(
        <Container>
            <Icon style={{marginBottom: 50}} name="user-circle" color="#fff" size={80} />
            <Input placeholder="Email" placeholderTextColor="#bbb" />
            <Input placeholder="Senha" placeholderTextColor="#bbb" />
            <Btn underlayColor="#C50750" onPress={() => alert('Testando')}>
                <BtnText> Finalizar </BtnText>
            </Btn>
            <RegisterView>
                <RegisterText> Não pussui uma conta? </RegisterText>
                <RegisterBtn onPress={() => navigation.navigate('register')}>
                    <RegisterText style={{fontWeight: 'bold', color: '#fff'}}> Cadastre-se </RegisterText>
                </RegisterBtn>
            </RegisterView>
        </Container>
    );
}