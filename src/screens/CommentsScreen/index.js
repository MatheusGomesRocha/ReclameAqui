import React from 'react';

import {
    Container,
    Scroll,
    InputView,
    Label,
    Input,
    Btn,
    BtnText
} from './style';

export default () => {
    return(
        <Container>
            <Scroll>
                <InputView>
                    <Label> Nome do local </Label>
                    <Input placeholder="Empresa, Lugar, Restaurantes..." placeholderTextColor="#bbb"/>
                </InputView>
                <InputView>
                    <Label> Seu nome </Label>
                    <Input placeholder="Deixe vazio caso prefira anônimato" placeholderTextColor="#bbb"/>
                </InputView>
                <InputView>
                    <Label> Comentário </Label>
                    <Input multiline style={{height: 250, textAlign: 'center'}} placeholder="Escreva aqui seu comentário" placeholderTextColor="#bbb"/>
                </InputView>
                <Btn underlayColor="#C50750" onPress={() => alert('olá mundo')}>
                    <BtnText> Finalizar </BtnText>
                </Btn>
            </Scroll>
        </Container>
    );
}