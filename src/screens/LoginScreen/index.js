import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {connect} from 'react-redux';

import {
    Container,

    Input,
    Btn,
    BtnText,

    RegisterView,
    RegisterText,
    RegisterBtn,
} from './style';

function LoginScreen(props) {
    const navigation = useNavigation();
    
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    function SignIn(e, p) {
        if (!email || !pass) {
            alert('Todos os campos são obrigatórios');
        }  else {
            auth()      // Cria um usuário com email e senha no firebase Auth
            .signInWithEmailAndPassword(e, p)   
            .then(() => {   
                alert('Login realizado com sucesso');    
                props.setEmail(e);
                navigation.reset({
                    index: 0,
                    routes: [
                        { name: 'Home' },
                    ]
                });
            })
            .catch(error => {
                if (error) {
                    alert('Email ou senha incorreta');
                }
            });
        }
    }

    return(
        <Container>
            <Icon style={{marginBottom: 50}} name="user-circle" color="#fff" size={80} />
            <Input keyboardType="email-address" placeholder="Email" placeholderTextColor="#bbb" onChangeText={e=>setEmail(e)} />
            <Input secureTextEntry={true} placeholder="Senha" placeholderTextColor="#bbb" onChangeText={p=>setPass(p)} />
            <Btn underlayColor="#C50750" onPress={() => SignIn(email, pass)}>
                <BtnText> Finalizar </BtnText>
            </Btn>
            <RegisterView>
                <RegisterText> Não pussui uma conta? </RegisterText>
                <RegisterBtn onPress={() => navigation.navigate('register')}>
                    <RegisterText style={{fontWeight: 'bold', color: '#fff'}}> Cadastre-se </RegisterText>
                </RegisterBtn>
            </RegisterView>
        </Container>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setEmail:(email)=>dispatch({type:'SET_EMAIL', payload: {email}})    // Seta o email do usuário com redux
    };
}

export default connect(null, mapDispatchToProps) (LoginScreen);