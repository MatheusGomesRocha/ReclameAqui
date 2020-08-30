import React, {useState} from 'react';
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
    const [placeName, setPlaceName] = useState();
    const [userName, setUserName] = useState();
    const [comment, setComment] = useState();
    
    const user = auth().currentUser;    // Pega o usuário logado (que acabou de logar junto com o cadastro)

    function DoComment() {
        if(placeName && comment) {
            setUserName('0')
            firestore()
            .collection('comments')
            .add({
                userId: user.uid,
                placeName: placeName,
                userName: userName,
                comment: comment,
            })
            .then(() => {
                alert('Comentário feito com sucesso');
            })
    }

    return(
        <Container>
            <Scroll>
                <InputView>
                    <Label> Nome do local </Label>
                    <Input placeholder="Empresa, Lugar, Restaurantes..." placeholderTextColor="#bbb" onChangeText={pn=>setPlaceName(pn)} />
                </InputView>
                <InputView>
                    <Label> Seu nome </Label>
                    <Input placeholder="Deixe vazio caso prefira anônimato" placeholderTextColor="#bbb" onChangeText={un=>setUserName(un)}/>
                </InputView>
                <InputView>
                    <Label> Comentário </Label>
                    <Input onChangeText={c=>setComment(c)} multiline style={{height: 250, textAlign: 'center'}} placeholder="Escreva aqui seu comentário" placeholderTextColor="#bbb"/>
                </InputView>
                <Btn underlayColor="#C50750" onPress={() => DoComment()}>
                    <BtnText> Finalizar </BtnText>
                </Btn>
            </Scroll>
        </Container>
    );
}