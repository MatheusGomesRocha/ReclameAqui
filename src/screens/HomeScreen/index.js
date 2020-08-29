import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

import {
    Container,

    Texto,
    InputView,
    Input,
    Btn,
} from './style';

export default () => {
    const navigation = useNavigation();

    return(
        <Container>
            <Texto> Pesquise sobre a reputação de algum lugar ou restaurante de Paramoti</Texto>
            <InputView>
                <Input placeholder="Busque por um lugar" placeholderTextColor="#bbb"/>
                <Btn underlayColor="#C50750" onPress={() => navigation.navigate('searched')}>
                    <Icon name="search" size={25} color="#fff"/>
                </Btn>
            </InputView>
        </Container>
    );
}