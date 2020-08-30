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
    const [search, setSearch] = useState();

    return(
        <Container>
            <Texto> Pesquise sobre a reputação de algum lugar ou restaurante de Paramoti</Texto>
            <InputView>
                <Input returnKeyType="search" onSubmitEditing={() => navigation.navigate('searched', { title: search })} placeholder="Busque por um lugar" placeholderTextColor="#bbb" onChangeText={t=>setSearch(t)}/>
                <Btn underlayColor="#C50750" onPress={() => navigation.navigate('searched', { title: search })}>
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