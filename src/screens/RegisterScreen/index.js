import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {
    Container,      // Toda a tela

    Input,          // Input
    Btn,            // Botão que realiza cadastro
    BtnText,        // Texto do botão
} from './style';

export default () => {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    
    function SignUp(e, p) {     // Função de cadastro
        if(!name || !email || !pass || !confirmPass) {      // Todos os campos precisam está preenchidos
            alert('Todos os campos são obrigatórios');
        } else if (pass != confirmPass) {       // As senhas tem que ser iguais
            alert('As senhas não coincidem');   
        } else {    //  Se tudo estiver correto realiza o cadastro
            navigation.reset({
                index: 0,
                routes: [
                    { name: 'login' },
                ]
            });
            alert('Conta criada, agora faça o login');
            auth()      // Cria um usuário com email e senha no firebase Auth
            .createUserWithEmailAndPassword(e, p)   
            .then(() => {  
                const user = auth().currentUser;    // Pega o usuário logado (que acabou de logar junto com o cadastro)
                firestore()                         // Seta os dados preenchidos em uma collection "users" no firestore
                .collection('users')
                .doc(user.uid)                      // O doc que é a identificação do Documento, irá receber o uid(ID) do usuário
                .set({
                    id: user.uid,
                    name: name,
                    email: e,
                    password: p,
                })
            })
            .catch(error => {       // Erro de se o email digitado já esteja cadastrado
                if(error.code == 'auth/email-already-in-use') {     // Erro que acontece caso já tenha um usuário com o mesmo email
                    alert('Este email já está cadastro, tente outro');
                }
            })
        }
    }
    return(
        <Container>
            <Icon style={{marginBottom: 50}} name="user-circle" color="#fff" size={80} />

            <Input placeholder="Nome" placeholderTextColor="#bbb" onChangeText={n=>setName(n)}/>
            <Input keyboardType="email-address" placeholder="Email" placeholderTextColor="#bbb" onChangeText={e=>setEmail(e)}/>
            <Input secureTextEntry={true} placeholder="Senha" placeholderTextColor="#bbb" onChangeText={p=>setPass(p)}/>
            <Input secureTextEntry={true} placeholder="Confirmar senha" placeholderTextColor="#bbb" onChangeText={cp=>setConfirmPass(cp)}/>
            
            <Btn underlayColor="#C50750" onPress={() => SignUp(email, pass)}>
                <BtnText> Finalizar </BtnText>
            </Btn>
        </Container>
    );
}