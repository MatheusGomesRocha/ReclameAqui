import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { connect, useSelector } from 'react-redux';

import {
    Container,
    Scroll,
    UserView,
    UserEmail,
    DefaultView,
    ItemBtn,
    DefaultText

    
} from './style';

function UserScreen(props) {
    const navigation = useNavigation();

    const user = useSelector(state => state.user.email);

    function SignOut() {
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
                <UserEmail> {user? user : 'Faça login'} </UserEmail>
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
        SignOut:(SignOut)=>dispatch({type:'SIGN_OUT'}),     // Log Out
    };
}

export default connect(null, mapDispatchToProps) (UserScreen);