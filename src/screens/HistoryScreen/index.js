import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    Container,
    Scroll,
    DefaultView,
    Row,
    PlaceName,
    Date,
    DefaultText,
} from './style';

export default () => {
    return(
        <Container>
            <Scroll>
            <DefaultView>
                <Row>
                    <PlaceName>Praça central </PlaceName>
                    <Icon name="ellipsis-v" size={20} color="#bbb"/>
                </Row>
                <Date>28/08/2020 </Date>
                <DefaultText>Hey guys in this video I’m examining you whilst you lay on a table, I have latex and rubber gloves on. I measure you, resuscitate you, conduct eye exams, feel your body, brush you, put makeup on you, take pictures of you, include writing sounds, hand sounds, ring sounds, up close whispers and MORE lots of personal attention here </DefaultText>
            </DefaultView>
            <DefaultView>
                <Row>
                    <PlaceName>Praça central </PlaceName>
                    <Icon name="ellipsis-v" size={20} color="#bbb"/>
                </Row>                
                <Date>28/08/2020 </Date>
                <DefaultText>Hey guys in this video I’m examining you whilst you lay on a table, I have latex and rubber gloves on. I measure you, resuscitate you, conduct eye exams, feel your body, brush you, put makeup on you, take pictures of you, include writing sounds, hand sounds, ring sounds, up close whispers and MORE lots of personal attention here </DefaultText>
            </DefaultView>
            <DefaultView>
                <Row>
                    <PlaceName>Praça central </PlaceName>
                    <Icon name="ellipsis-v" size={20} color="#bbb"/>
                </Row>                
                <Date>28/08/2020 </Date>
                <DefaultText>Hey guys in this video I’m examining you whilst you lay on a table, I have latex and rubber gloves on. I measure you, resuscitate you, conduct eye exams, feel your body, brush you, put makeup on you, take pictures of you, include writing sounds, hand sounds, ring sounds, up close whispers and MORE lots of personal attention here </DefaultText>
            </DefaultView>
            <DefaultView>
                <Row>
                    <PlaceName>Praça central </PlaceName>
                    <Icon name="ellipsis-v" size={20} color="#bbb"/>
                </Row>                
                <Date>28/08/2020 </Date>
                <DefaultText>Hey guys in this video I’m examining you whilst you lay on a table, I have latex and rubber gloves on. I measure you, resuscitate you, conduct eye exams, feel your body, brush you, put makeup on you, take pictures of you, include writing sounds, hand sounds, ring sounds, up close whispers and MORE lots of personal attention here </DefaultText>
            </DefaultView>
            </Scroll>
        </Container>
    );
}