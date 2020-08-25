import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Div = styled.View `
    flex-direction: row;
    background-color: #5E239D;
    borderTopWidth: 1px;
    borderTopColor: #dedede;
`;

const Texto = styled.Text`
    font-size: 12px;
    color: #808080;
`;

const Touch = styled.TouchableOpacity `
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 70px;
`;

const TouchHome = styled.TouchableHighlight `
    width: 80px;
    height: 80px;
    background-color: ${props=>props.bg};
    justify-content: center;
    align-items: center;
    margin-top: -25px;
    border-radius: 35px;
`;

function CustomTabBar ({state, descriptors, navigation}) {          /** Props que vem para facilitar a customização */
    return (
        <Div>
            {state.routes.map((route, index) => {       /** Um map das routes com um index/key */
                const options = descriptors[route.key].options; /** options recebe um descriptors[route.key] que indica que pode acessar as rotas */

                /** Todas as props indicadas no route, irão ser acessadas com o prefixo options. */
                /** Caso queira pegar apenas o nome da rota, traz ela como parâmetro no map e acessa com route.name */
               
                let label = route.name;     /** Label recebe o nome das rotas criadas */
                if(options.tabBarLabel != undefined) {      /** Se tiver um tabBarLabel nas rotas, label o recebe */
                    label = options.tabBarLabel;
                } else if (options.title != undefined) {    /** Se não tiver um tabBarLabel, mas tiver um title, o label o recebe */
                    label = options.title;
                }

                const isFocused = state.index === index;

                function handleTabPress() {         /** Função de clique simples para navegar entre telas */
                    navigation.navigate(route.name); 
                }

                let nameIcon = null;

                switch(route.name) {        /** props.name significa o route.name que foi passado */
                    case 'Home':            /** Caso o nome da rota for Home então... */
                        nameIcon = 'home'
                    break;
                    case 'Comments':           /** Caso for About então... */
                        nameIcon = 'bullhorn'
                    break;
                    case 'User':         /** Caso for Profile então... */
                        nameIcon = 'user'
                    break;
                    case 'Notificações':
                        nameIcon = 'bell-o'
                    break;
                    case 'Ajustes':
                        nameIcon = 'cog'
                    break;
                }

                if(route.name == 'Comments') {       /** Se o nome dar rota for 'Profile' vai receber components diferentes */ 
                    return(
                        <TouchHome bg={isFocused?'#C50750':'#F61067'} underlayColor="#C50750" key={index} onPress={handleTabPress}>
                            <>
                            <Icon name={nameIcon} size={35} color={isFocused?'#fff':'#aaa'}/>
                            </>
                        </TouchHome>
                    );
                } else {
                    return(
                        <Touch key={index} onPress={handleTabPress}>
                            <>
                            <Icon name={nameIcon} size={35} color={isFocused?'#fff':'#aaa'}/>
                            </>
                        </Touch>
                    );
                }
            })}
        </Div>
    );
}

export default CustomTabBar;