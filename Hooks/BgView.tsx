import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';

const bg_image = require('../Assets/images/walker-bg.png');


const BgView = ({children}: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={bg_image} resizeMode="cover" style={styles.image}>
                {children}
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    image: {
        flex: 1,
    },

});


export default BgView;