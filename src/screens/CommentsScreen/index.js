import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {
    Container,
    Scroll,
    InputView,
    Label,
    Input,
    Btn,
    BtnText
} from './style';

export default () => {
    const navigation = useNavigation();

    const [title, setTitle] = useState();
    const [userName, setUserName] = useState();
    const [comment, setComment] = useState();
    
    const user = auth().currentUser;    // Pega o usuário logado (que acabou de logar junto com o cadastro)

    let day = new Date().getDate();
    let month = new Date().getMonth()+1;
    let year = new Date().getFullYear()
    let today = day+'/'+month+'/'+year;

    function DoComment() {
        if(title && comment) {
            navigation.navigate('Home');
            setUserName(null)
            firestore()
            .collection('comments')
            .add({
                userId: user.uid,
                title: title,
                userName: userName,
                comment: comment,
                date: today,
            })
            .then(() => {
                alert('Comentário feito com sucesso');
            })
        }
    }

    return(
        <Container>
            <Scroll>
                <InputView>
                    <Label> Nome do local </Label>
                    <Input placeholder="Empresa, Lugar, Restaurantes..." placeholderTextColor="#bbb" onChangeText={t=>setTitle(t)} />
                </InputView>
                <InputView>
                    <Label> Seu nome </Label>
                    <Input placeholder="Deixe vazio caso prefira anônimato" placeholderTextColor="#bbb" onChangeText={un=>setUserName(un)}/>
                </InputView>
                <InputView>
                    <Label> Comentário </Label>
                    <Input onChangeText={c=>setComment(c)} multiline={true} style={{height: 250, textAlign: 'center'}} placeholder="Escreva aqui seu comentário" placeholderTextColor="#bbb"/>
                </InputView>
                <Btn underlayColor="#C50750" onPress={() => DoComment()}>
                    <BtnText> Finalizar </BtnText>
                </Btn>
            </Scroll>
        </Container>
    );
}