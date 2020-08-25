import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';           /** Import da tela que vai usar */
import UserScreen from '../screens/UserScreen';
import CommentsScreen from '../screens/CommentsScreen';
import CustomTabBar from '../components/CustomTabBar';      /** Import para a TabBar Customizada */



const Tab = createBottomTabNavigator();         /** Função de navegação TAB */

export default () => {      /** Dentro do screen option é recomendado usar quando for icons */
                            /** initialRouteName="" recebe o nome da rota que vai iniciar com o App */
                            /** lazy={} é um boolean. Recebe false se quiser deixar todas as Tabs renderizadas, mesmo sem entrar nelas ainda, e true pro contrário */
                            /** tabBarOptions={{}} é uma prop que recebe opções de estilização do TabBar
                             *  -> showIcon: recebe false caso não queira mostrar os icons mesmo que tenha atribuído um
                             *  -> showLabel: recebe false caso não queria mostrar os títulos 
                             *  -> activeTintColor: recebe a cor padrão de quando a Tab estiver focada/ativa
                             *  -> activeBackgroundColor: recebe a cor do background quando estiver focada
                             *  -> inactiveBackground/TintColor: contrário dos dois acima
                             *  -> style: {}
                             *  -> labelStyle: {}
                             *  -> labelPosition: recebe 'below-icon' abaixo e 'beside-icon' do lado
                             *  -> keyboardHidesTabBar: recebe true se ao abrir o teclado, esconder a TAB
                             */
    return (
        <Tab.Navigator 
        tabBar={(props) => <CustomTabBar {...props} />}
        initialRouteName="Home" 
        tabBarOption={{
            keyboardHidesTabBar: true
        }}
        >
            <Tab.Screen name="Home" component={HomeScreen} tabBarLabel="Home"/>
            <Tab.Screen name="Comments" component={CommentsScreen}/>
            <Tab.Screen name="User" component={UserScreen}/>
        </Tab.Navigator>
    );
}


/** tabBar={(props) => <CustomTabBar {...props} />} no lugar de screenOptions*/
// Opção para TabBar customizada, passa uma props e clona ela no componente importado


// Opção para mostrar uma imagem/icone dependendo do no name da rota, pode ser importado de um componente com essa estrututa (mais fácil de entender)
/** screenOptions={({route}) =>({
            tabBarIcon: () => {
                let imgSource = null;

                switch(route.name) {
                    case 'Home':
                        imgSource = require('../icons/home.png');
                    break;
                    case 'About':
                        imgSource = require('../icons/interface.png');
                    break;
                }

                return <Image source={imgSource} style={{width: 27, height: 27 }}/>
            }
        })} 
*/

