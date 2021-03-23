import React from 'react';
import {TextInput, StyleSheet, SafeAreaView} from 'react-native';


const InputProps = () => {

    const [text, onChangeText] = React.useState("Input Base");

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        paddingLeft: 10
    },
})

export default InputProps;