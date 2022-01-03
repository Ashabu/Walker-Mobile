import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { toggleDrawer } from '../../Navigation/CostumNavigation';



const AppHeader = () => {
    return (
        <View style={{width: '100%', height: 60}}>
            <TouchableOpacity style={styles.burgerIcon} onPress={() => toggleDrawer()}>
                <View style={styles.burgerIconLine} />
                <View style={styles.burgerIconLine} />
                <View style={styles.burgerIconLine} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    burgerIcon: {
        width: 26,
        height: 17,
        justifyContent: 'space-between'
    },

    burgerIconLine: {
        width: 26,
        height: 3,
        backgroundColor: '#B38AEA',
        borderRadius: 5
    },
});

export default AppHeader;