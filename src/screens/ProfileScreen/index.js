import React, {useState} from 'react';

import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";

import {
    Container,
    Input,
    Btn,
    BtnText,
} from './style';

export default () => {
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <Container>
            <Modal
            statusBarTranslucent={true}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                }}
            >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Input style={{borderWidth: 1, borderColor: '#333'}} placeholder="Confirme sua senha"/>

                    <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#333" }}
                    onPress={() => {
                        setModalVisible(!modalVisible);
                    }}
                    >
                    <Text style={styles.textStyle}> Confirmar </Text>
                    </TouchableHighlight>
                </View>
            </View>
            </Modal>

            <Input placeholder="Matheus" placeholderTextColor="#bbb"/>
            <Input placeholder="matheusgomes192@hotmail.com" placeholderTextColor="#bbb"/>
            <Input placeholder="******" placeholderTextColor="#bbb"/>
            <Btn underlayColor="#C50750" onPress={() => setModalVisible(true)}>
                <BtnText> Editar </BtnText>
            </Btn>
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
      backgroundColor: "white",
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
      height: 300
    },
    openButton: {
      marginTop: 20,
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      width: '80%',
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