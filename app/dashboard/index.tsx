import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const DashboardScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Dashboard</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
    }
});

export default DashboardScreen;
