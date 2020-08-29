import React, {useState} from 'react';
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
    const [t, setT] = useState();

    return(
        <Container>
            <Texto> Pesquise sobre a reputação de algum lugar ou restaurante de Paramoti</Texto>
            <InputView>
                <Input placeholder="Busque por um lugar" placeholderTextColor="#bbb" onChangeText={t=>setT(t)}/>
                <Btn underlayColor="#C50750" onPress={() => navigation.navigate('searched', { title: t })}>
                    <Icon name="search" size={25} color="#fff"/>
                </Btn>
            </InputView>
            {/* {t? mostrar se tem algum comentário sobre o lugar que o usuário digitou
                <Texto>
                    {t}
                </Texto>
            : null} */}
        </Container>
    );
}