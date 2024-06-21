import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert, Image, StatusBar, Pressable, Text } from "react-native";
import { Icon, Input } from 'react-native-elements';

export default function LoginPage() {
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [email, setEmail] = useState('@');
    const [password, setPassword] = useState('_password_');
    const [isEmailError, setIsEmailError] = useState(false);
    const [isPasswordError, setIsPasswordError] = useState(false);

    useEffect(() => {
        validateFields();
    }, [email, password]);

    const validateFields = () => {
        setIsEmailError(!email.trim().includes('@') || email === null);
        setIsPasswordError(password.length !== 10 || password === null);
    };

    const login = async () => {
        if (!isPasswordError && !isEmailError && email !== '@' && password !== '_password_') {
            try {
                // Lógica de login aqui...
            } catch (error) {
                console.log(error);
                throw new Error('Erro ao logar... :(');
            }
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={"transparent"} translucent />
            <View style={styles.content}>
                <Image style={styles.Image}
                    source={require('../../assets/pagina principal/logo.png')}
                />
                <Input
                    placeholder="Digite o email..."
                    label="Email"
                    onChangeText={text => setEmail(text)}
                    errorMessage={isEmailError ? 'Email inválido!' : ''}
                    inputContainerStyle={
                        isEmailError ? styles.input_container_error : styles.input_container
                    }
                />
                <Input
                    placeholder="Digite a senha..."
                    label="Senha"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={passwordVisible}
                    errorMessage={isPasswordError ? 'Senha inválida!' : ''}
                    maxLength={10}
                    inputContainerStyle={
                        isPasswordError ? styles.input_container_error : styles.input_container
                    }
                  
                />
                <Pressable style={styles.button} onPress={login}>
                    <Text style={styles.buttonText}  onClick={()=> navigation.navigate('Home') }>Entrar</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffd4df', 
        padding: 30,
    },
    content: {
        width: '100%',
        height: '60%',
        backgroundColor: '#ffffff',
        padding: 30,
        borderRadius: 15, 
        elevation: 15, 
        alignItems: 'center',
        gap: 10
    },
    input_container: {
        marginBottom: 10,
        borderRadius: 5,
    },
    input_container_error: {
        marginBottom: 10,
        borderColor: '#F5A9BC', 
    },
    button: {
        width: '50%',
        padding: 16,
        borderRadius: 25, 
        backgroundColor: '#F5A9BC', 
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff', 
    },
    Image:{
        width: '100%',
        height: '35%',
        borderRadius: 20
    }
});
