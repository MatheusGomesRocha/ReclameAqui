import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    Container,
    Scroll,
    UserView,
    UserEmail,
    DefaultView,
    ItemBtn,
    DefaultText

    
} from './style';

export default () => {
    const [user, setUser] = useState(false);            // Temporário, trocar para CurrentUser do Firebase

    
    return(
        <Container>
            <UserView>
                <Icon name="user-circle" color="#fff" size={70} />
                <UserEmail> matheusgomes192 </UserEmail>
            </UserView>

            <DefaultView>
                <ItemBtn>
                    <>
                        <DefaultText> Faça Login </DefaultText> 
                        <Icon name="angle-right" size={30} color="#fff" />
                    </>
                </ItemBtn>
                {user?
                    <>
                        <ItemBtn>
                            <>
                                <DefaultText> Meu Perfil </DefaultText> 
                                <Icon name="angle-right" size={30} color="#fff" />
                            </>
                        </ItemBtn>
                        <ItemBtn>
                            <>
                                <DefaultText> Histórico </DefaultText> 
                                <Icon name="angle-right" size={30} color="#fff" />
                            </>
                        </ItemBtn>
                        <ItemBtn>
                            <>
                                <DefaultText> Sair </DefaultText> 
                                <Icon name="angle-right" size={30} color="#fff" />
                            </>
                        </ItemBtn>
                    </>
                : null}

            </DefaultView>

        </Container>
    );
}