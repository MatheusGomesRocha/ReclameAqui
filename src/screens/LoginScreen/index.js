import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    Container,

    Input,
    Btn,
    BtnText
} from './style';

export default () => {
    return(
        <Container>
            <Icon style={{marginBottom: 50}} name="user-circle" color="#fff" size={80} />
            <Input placeholder="Email" placeholderTextColor="#bbb" />
            <Input placeholder="Senha" placeholderTextColor="#bbb" />
            <Btn>
                <BtnText> Finalizar </BtnText>
            </Btn>
        </Container>
    );
}