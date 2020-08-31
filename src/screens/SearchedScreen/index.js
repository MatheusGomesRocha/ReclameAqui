import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useRoute} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import OptionsMenu from "react-native-option-menu";     // Lib menu estilo dropdown

import {
    Container,          // Toda a tela

    Scroll,             // Rolagem da tela

    BigText,            // Texto grande no topo da tela

    CommentView,        // View pai dos comentários
    ItemView,           // View filha dos comentários dentro do array
    Title,              // Título (nome do lugar)
    Row,                // View pai horizontal
    RowChild,           // View filha horizontal
    Column,             // View dentro da RowChild em coluna
    NameText,           // Nome do usuário
    Date,               // Data do comentário
    CommentText         // Comentário
} from './style';

export default () => {
    const route = useRoute();       // Rota para pegar o parâmetro enviado da tela home

    const [comments, setComments] = useState([]);

    let userSearch = route.params.title;          // O que o usuário digitou na tela Home
    
    useEffect(() => {           // Pega os serviços que estão em uma collection "cuts" no firebase e passa para um array
        const subscriber = firestore()
          .collection('comments')
          .onSnapshot(querySnapshot => {
            const commentsArray = [];

            querySnapshot.forEach(documentSnapshot => {
                commentsArray.push({
                    ...documentSnapshot.data(),
                    key: documentSnapshot.id,
                });
            });

            setComments(commentsArray);         // Seta os comentários em um array
          });
    
        // Unsubscribe from events when no longer in use
        return () => subscriber();
      }, []);

    const filterData = comments.filter((item) => {              // Array que será mostrado, pegando o valor digitado do usuário e filtrando para mostrar os que tem
        return item.title.indexOf(userSearch) >=0
    }) 

    return(
        <Container>
            <Scroll showsVerticalScrollIndicator={false}>
                <BigText style={{marginBottom: 20}}>Você pesquisou por "{userSearch}" </BigText>
                <BigText style={{marginBottom: 50}}>Aqui estão os resultados do que você pesquisou</BigText>
            <CommentView>
                {filterData.map((c, k) => (
                    <ItemView key={k}>
                        <>
                            <Title>{c.title}</Title>
                            <Row>
                                <RowChild>
                                    <Icon name ="user-circle" size={50} color="#fff" />
                                    <Column>
                                        <NameText> {c.userName?c.userName:'Anônimo'} </NameText>
                                        <Date> {c.date} </Date> 
                                    </Column>
                                </RowChild>
                                <OptionsMenu
                                    customButton={<Icon name="ellipsis-v" size={25} color="#bbb" />}                                 
                                    buttonStyle={{ width: 60, height: 8, margin: 7.5, resizeMode: "contain" }}
                                    options={["Reportar por spam", "Reportar comentário"]}
                                />
                            </Row>
                            <CommentText>{c.comment} </CommentText>
                        </>
                    </ItemView>
                ))}
            </CommentView>
            </Scroll>
        </Container>
    );
}