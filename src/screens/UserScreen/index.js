import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { connect, useSelector } from 'react-redux';

import {
    Container,      // Toda a tela

    Scroll,         // Rolagem da tela
    
    UserView,       // View com icone e email do usuário
    UserEmail,      // Texto com email do usuário

    DefaultView,    // View com todos os itens 
    ItemBtn,        // Botão com um item
    DefaultText     // Texto padrão dentro do botão
} from './style';

function UserScreen(props) {
    const navigation = useNavigation();

    const user = useSelector(state => state.user.email);        // Pega o email do redux

    let userSplit = user.split('@')[0];     // Quebrando email para pegar o nome antes do @


    function SignOut() {        // Função de realizar o SignOut (logOff)
        auth().signOut();
        props.SignOut();
        navigation.reset({
            index: 0,
            routes: [
                { name: 'Home' },
            ]
        });
    }
    
    return(
        <Container>
            <UserView>
                <Icon name="user-circle" color="#fff" size={70} />
                <UserEmail> {user? userSplit : 'Faça login'} </UserEmail>
            </UserView>

            <DefaultView>
                {user? null :
                    <ItemBtn underlayColor="#511E88" onPress={() => navigation.navigate('login')}>
                        <>
                            <DefaultText> Faça login </DefaultText> 
                            <Icon name="angle-right" size={30} color="#fff" />
                        </>
                    </ItemBtn>
                }

                {user?
                    <>
                        <ItemBtn underlayColor="#511E88" onPress={() => navigation.navigate('profile')}>
                            <>
                                <DefaultText> Meu perfil </DefaultText> 
                                <Icon name="angle-right" size={30} color="#fff" />
                            </>
                        </ItemBtn>
                        <ItemBtn underlayColor="#511E88" onPress={() => navigation.navigate('history')}>
                            <>
                                <DefaultText> Histórico </DefaultText> 
                                <Icon name="angle-right" size={30} color="#fff" />
                            </>
                        </ItemBtn>
                        <ItemBtn underlayColor="#511E88" onPress={SignOut}>
                            <>
                                <DefaultText> Sair </DefaultText> 
                                <Icon name="angle-right" size={30} color="#fff" />
                            </>
                        </ItemBtn>
                    </>
                : null}
            </DefaultView>

        </Container>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        SignOut:(SignOut)=>dispatch({type:'SIGN_OUT'}),     // LogOut
    };
}

export default connect(null, mapDispatchToProps) (UserScreen);