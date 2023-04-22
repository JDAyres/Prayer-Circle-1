import React from 'react';
import{ StyleSheet, View, Pressable } from 'react-native';

export default function Footer(param1: Pressable) {
    return (
        <View style={styles.footer}/>        
    );
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "#2B2B2B",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 13,
        width: 415,
        alignItems: 'center'
    }
}); 