import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import OptionsMenu from "react-native-option-menu";     // Lib menu estilo dropdown 

import {
    Container,      // Toda a tela

    Scroll,         // Rolagem da tela

    DefaultView,    // View pai
    ItemView,       // View filha dentro do array
    Row,            // View da linha que contém título e o Icon
    Title,          // Título do comentário (lugar)
    Date,           // Data que o comentário foi feito
    DefaultText,    // Texto com o comentário
} from './style';

export default () => {
    const user = auth().currentUser;      // Pegando usuário logado
    const [history, setHistory] = useState([]);

        useEffect(() => {       // Pegando os comentários do usuário logado no firebase
            if(user) {          // Só pega se tiver usuário logado
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

                    setHistory(historyFire);        // Seta os dados do Firebase em um array
                });
            }
            } ,[]);

    
    return(
        <Container>
            <Scroll showsVerticalScrollIndicator={false}>
                <DefaultView>
                    {history.map((h, k) => (
                        <ItemView key={k}>
                            <Row>
                                <Title>{h.title} </Title>
                                <OptionsMenu
                                        customButton={<Icon name="ellipsis-v" size={25} color="#bbb" />}                                 
                                        buttonStyle={{ width: 60, height: 8, margin: 7.5, resizeMode: "contain" }}
                                        options={["Excluir"]}
                                    />
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