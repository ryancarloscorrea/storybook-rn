import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const LoadingButton = () => {

    return (
        <View style={styles.container}>
            <Button
                title="Button Base"
                onPress={() => { }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 150,
    },
})

export default LoadingButton;