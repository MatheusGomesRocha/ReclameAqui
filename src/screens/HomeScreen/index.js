import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    Container,

    Texto,
    InputView,
    Input,
    Btn,
} from './style';

export default () => {
    return(
        <Container>
            <Texto> Pesquise sobre a reputação de algum lugar, restaurante de Paramoti</Texto>
            <InputView>
                <Input placeholder="Busque por um lugar" placeholderTextColor="#bbb"/>
                <Btn underlayColor="#C50750" onPress={() => alert('Testando')}>
                    <Icon name="search" size={25} color="#fff"/>
                </Btn>
            </InputView>
        </Container>
    );
}