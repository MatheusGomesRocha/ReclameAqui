import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {
    Container,
    Scroll,
    DefaultView,
    ItemView,
    Row,
    Title,
    Date,
    DefaultText,
} from './style';

export default () => {
    const user = auth().currentUser;      // Pegando usuário logado
    const [history, setHistory] = useState([]);

        useEffect(() => {       // Pegando os agendamentos do usuário logado no firebase
            if(user) {
                firestore()   
                .collection('comments')
                .where('userId', '==', user.uid)
                .onSnapshot(querySnapshot => {
                    const historyFire = [];

                    querySnapshot.forEach(documentSnapshot => {     // Passando os dados para um array e depois enviando para o FlatList como prop
                        historyFire.push({      
                            ...documentSnapshot.data(),
                            key: documentSnapshot.id,
                        });
                    });

                    setHistory(historyFire);
                });
            }
            } ,[]);

    
    return(
        <Container>
            <Scroll>
            <DefaultView>
                {history.map((h, k) => (
                    <ItemView key={k}>
                        <Row>
                            <Title>{h.title} </Title>
                            <Icon name="ellipsis-v" size={20} color="#bbb"/>
                        </Row>
                        <Date>{h.date} </Date>
                        <DefaultText>{h.comment} </DefaultText>
                    </ItemView>
                ))}
            </DefaultView>
            
            </Scroll>
        </Container>
    );
}