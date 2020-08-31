import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    KeyboardAvoidingView,
} from "react-native";

import {
    Container,
    Scroll,
    InputView,
    Input,
    Btn,
    BtnText,
} from './style';

export default () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const [newEmail, setNewEmail] = useState('');
    const [newName, setNewName] = useState('');
    const [newPass, setNewPass] = useState('');

    const user = auth().currentUser;

    useEffect(() => {       // Pega os dados na collection "users" do usuário logado, e setar em uma state, Email, Name, Avatar e Password
        firestore()
        .collection('users')
        .where('id', '==', user.uid)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                setEmail(documentSnapshot.data().email);
                setName(documentSnapshot.data().name);
                setPass(documentSnapshot.data().password);
            });
        });
    }, [])

    function UpdateData() {     // Função que realiza o update das infos do usuário
      if(confirmPass == pass) {
        if(newName || newEmail) {      // Verifica se tem algum desses preenchido
            
            // Cria novas variáveis
            let nameFire = '';    
            let emailFire = '';
            let passFire = '';

            // Caso newName esteja preenchido, recebe o que o usuário digitou, senão, recebe o nome do usuário logado
            // É desse jeito com os 2 abaixo
            if(newName) {
                nameFire = newName;
            } else {
                nameFire = name;
            }

            if(newEmail) {
                emailFire = newEmail;
            } else {
                emailFire = email;
            }

            if(newPass) {
              passFire = newPass;
            } else {
              passFire = pass;
            }

            firestore()     // Realiza o update 
            .collection('users')
            .doc(user.uid)
            .update({
                name: nameFire,
                email: emailFire,
                pass: passFire,
            })
            .then(() => {
                alert('Usuário editado');
            });
        } else {
            alert('Você não digitou nada');
        }
    } else {
        alert('Senhas não coincidem')
    }
  }

  
    return(
        <Container>

            <Modal
            statusBarTranslucent={true}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
            >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>

                    <Input style={{width: '100%'}} placeholder='Confirme sua senha' onChangeText={cp=>setConfirmPass(cp)}/>

                    <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#F61067" }}
                    onPress={UpdateData}
                    >
                    <Text style={styles.textStyle}> Confirmar </Text>
                    </TouchableHighlight>

                </View>
            </View>
            </Modal>
              <InputView>
              <Input defaultValue={name} placeholder="Nome" placeholderTextColor="#bbb" onChangeText={n=>setNewName(n)} />
              <Input defaultValue={email} placeholder="Email" placeholderTextColor="#bbb" onChangeText={e=>setNewEmail(e)} />
              <Input placeholder="*****" placeholderTextColor="#bbb" onChangeText={p=>setNewPass(p)} />
              <Btn underlayColor="#C50750" onPress={() => setModalVisible(true)}>
                  <BtnText> Editar </BtnText>
              </Btn>
              </InputView>
              
            
        </Container>
    );
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    modalView: {
      margin: 20,
      backgroundColor: "#5E239D",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      width: 300, 
      height: 350
    },
    openButton: {
      marginTop: 20,
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      width: '100%',
      height: 50,
      alignItems: "center",
      justifyContent: "center",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });