import React, { useState, useImperativeHandle, forwardRef } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from "react-native";

const PMButton = forwardRef(({ onCountChange }, ref) => {
    const [count, setCount] = useState(1);

    const plus = () => {
        setCount(count + 1);
    };

    const minus = () => {
        setCount(count - 1);
    };

    useImperativeHandle(ref, () => ({
        getCount: () => count,
    }));

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={minus}>
                <Text style={styles.textButton}>-</Text>
            </TouchableOpacity>
            <TextInput
                style={styles.textInput}
                value={count.toString()}
                editable={false}
            />
            <TouchableOpacity style={styles.button} onPress={plus}>
                <Text style={styles.textButton}>+</Text>
            </TouchableOpacity>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        width: 30,
        height: 30,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    textButton: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
    },
    textInput: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        width: 40,
        height: 30,
        color: 'black',
        borderWidth: 1,
        borderColor: 'grey',
    },
});

export default PMButton;
