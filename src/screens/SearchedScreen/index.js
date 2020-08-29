import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useRoute} from '@react-navigation/native';

import {
    Container,
    Scroll,
    BigText,
    CommentView,
    ItemView,
    Row,
    RowChild,
    Column,
    UserImg,
    NameText,
    Date,
    CommentText
} from './style';

export default () => {
    const route = useRoute();

    let userSearch = route.params.title;          // O que o usuário digitou na tela Home
    
    // let hours = [
    //     {user: 'Matheus'},
    //     {user: 'Pe'},
    //     { user: 'Perigo'},
    //     { user: 'Ka'},
    //     { user: 'Fe'},
    //     { user: 'Li'},
    //     { user: 'Em'},
    // ];

    // const filterData = hours.filter((item) => {              Array que será mostrado, pegando o valor digitado do usuário e filtrando para mostrar os que tem
    //     return item.user.indexOf(userSearch) >=0
    // }) 

    return(
        <Container>
            <Scroll>
                <BigText> Você pesquisou por "{userSearch}" </BigText>
            <CommentView>
                {/* Temporário, tranformar em array vindo do BD */}
                <ItemView>
                    <Row>
                        <RowChild>
                            <Icon name="user-circle" size={70} color="#fff" />
                            <Column>
                                <NameText> Matheus Gomes </NameText>
                                <Date> 28/08/2020 </Date>            
                            </Column>
                        </RowChild>
                        <Icon name="ellipsis-v" size={25} color="#bbb" />
                    </Row>
                    <CommentText>
                        Hey guys in this video I’m doing random, unpredictable and non sensical things to you, but with a medical vibe. I’m playing with your face, using latex, Whisepring, numbers, inaudible, tv remote, light triggers, follow my finger, up close, writing sounds and way more. 
                        Longer version available on my Patreon 
                    </CommentText>
                </ItemView>
            </CommentView>
            </Scroll>
        </Container>
    );
}