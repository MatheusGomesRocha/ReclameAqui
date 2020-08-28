import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    Container,

    Input,
    Btn,
    BtnText,
} from './style';

export default () => {
    return(
        <Container>
            <Icon style={{marginBottom: 50}} name="user-circle" color="#fff" size={80} />

            <Input placeholder="Nome" placeholderTextColor="#bbb"/>
            <Input placeholder="Email" placeholderTextColor="#bbb"/>
            <Input placeholder="Senha" placeholderTextColor="#bbb"/>
            <Input placeholder="Confirmar senha" placeholderTextColor="#bbb"/>
            
            <Btn underlayColor="#C50750" onPress={() => alert('Testando')}>
                <BtnText> Finalizar </BtnText>
            </Btn>
        </Container>
    );
}