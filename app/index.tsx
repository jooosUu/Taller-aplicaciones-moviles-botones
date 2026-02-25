import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

type TSaludo = {
    show: boolean;
}

const Saludo = (props: TSaludo) => {
    if (props.show) {
        return <Text style={styles.saludoText}>Holaaa !!!!</Text>;
    }
    return <></>;
}

const IndexScreen = () => {
    const [show, setShow] = useState<boolean>(false);
    const [textBtn, setTextBtn] = useState<string>('Mostrar Saludo');

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.buttonProfile}
                onPress={() => {
                    setShow(valor => !valor);
                    setTextBtn(!show ? 'Ocultar Saludo' : 'Mostrar Saludo');
                }}
            >
                <Text style={styles.buttonText}>{textBtn}</Text>
            </TouchableOpacity>

            {show ? <Text style={styles.saludoText}>Holaaa !!!!</Text> : <></>}

            <Saludo show={show} />

            <TextInput
                style={styles.inputProfile}
                placeholder='Ingrese el nombre de la persona'
                value={textBtn}
                onChangeText={(value) => { setTextBtn(value) }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    buttonProfile: {
        backgroundColor: '#007AFF',
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    saludoText: {
        fontSize: 22,
        fontWeight: '600',
        color: '#333',
        marginVertical: 10,
    },
    inputProfile: {
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 14,
        width: '100%',
        marginTop: 20,
        fontSize: 16,
    }
});

export default IndexScreen;
