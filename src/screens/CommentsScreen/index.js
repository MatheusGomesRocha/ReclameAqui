import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {
    Container,  // Toda a tela

    Scroll,     // Rolagem da tela

    InputView,  // View de input
    Label,      // Texto "título" do input
    Input,      // Input

    Btn,        // Botão de finalizar comentário
    BtnText     // Texto de botão
} from './style';

export default () => {
    const navigation = useNavigation();

    const [title, setTitle] = useState();
    const [userName, setUserName] = useState();
    const [comment, setComment] = useState();
    
    const user = auth().currentUser;    // Pega o usuário logado 

    let day = new Date().getDate();         // Pega dia atual
    let month = new Date().getMonth()+1;    // Mês atual + 1 porque é pego um mês antes do atual
    let year = new Date().getFullYear()     // Ano atual
    let today = day+'/'+month+'/'+year;     // Data formatada para o padrão do Brasil

    function DoComment() {  // Função que realiza o comentário
        if(title && comment) {  // Só adiciona caso tenha título e comentário
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
        } else {
            alert('Parece que você esqueceu de preencher algo');
        }
    }

    return(
        <Container>
            <Scroll showsVerticalScrollIndicator={false}>
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
                    <Input onChangeText={c=>setComment(c)} multiline={true} style={{
                         textAlign: 'center'}} placeholder="Escreva aqui seu comentário" placeholderTextColor="#bbb"/>
                </InputView>
                <Btn underlayColor="#C50750" onPress={() => DoComment()}>
                    <BtnText> Finalizar </BtnText>
                </Btn>
            </Scroll>
        </Container>
    );
}