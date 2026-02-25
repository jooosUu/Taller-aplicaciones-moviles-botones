import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const handleLogin = () => {
        if (password === '1234') {
            setErrorMessage('');
            router.push('/dashboard');
        } else {
            setErrorMessage('Datos erróneos');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar Sesión</Text>

            <TextInput
                style={styles.input}
                placeholder="Usuario"
                value={usuario}
                onChangeText={setUsuario}
            />

            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true} // Oculta la contraseña con asteriscos
            />

            {errorMessage !== '' && (
                <Text style={styles.errorText}>{errorMessage}</Text>
            )}

            <Button title="Ingresar" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
    },
    errorText: {
        color: 'red',
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

export default LoginScreen;
