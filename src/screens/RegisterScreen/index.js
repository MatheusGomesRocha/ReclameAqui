import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import {
    Container,

    Input,
    Btn,
    BtnText,
} from './style';

export default () => {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    
    function SignUp(e, p) {
        if(!name || !email || !pass || !confirmPass) {
            alert('Todos os campos são obrigatórios');
        } else if (pass != confirmPass) {
            alert('As senhas não coincidem');
        } else {
            auth()      // Cria um usuário com email e senha no firebase Auth
            .createUserWithEmailAndPassword(e, p)   
            .then(() => {  
                navigation.reset({
                    index: 0,
                    routes: [
                        { name: 'login' },
                    ]
                });
                alert('Conta criada, agora faça o login');
            })
            .catch(error => {
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
            <Input placeholder="Email" placeholderTextColor="#bbb" onChangeText={e=>setEmail(e)}/>
            <Input placeholder="Senha" placeholderTextColor="#bbb" onChangeText={p=>setPass(p)}/>
            <Input placeholder="Confirmar senha" placeholderTextColor="#bbb" onChangeText={cp=>setConfirmPass(cp)}/>
            
            <Btn underlayColor="#C50750" onPress={() => SignUp(email, pass)}>
                <BtnText> Finalizar </BtnText>
            </Btn>
        </Container>
    );
}