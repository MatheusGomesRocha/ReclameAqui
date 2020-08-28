import React from 'react';

import {
    Container,

    Input,
    Btn,
    BtnText,
} from './style';

export default () => {
    return(
        <Container>
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