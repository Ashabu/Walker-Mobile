import React from 'react';
import { 
    View,
    SafeAreaView, 
    ScrollView,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import { navigate } from '../../Navigation/CostumNavigation';
import DrawerItems from '../../Services/DrawerItems';
import BurgerMenuItem from './BurgerMenuItem';


const BurgerMenu = () => {
    return (
        <SafeAreaView style={{flex: 1, padding: '8%'}}>
            <ScrollView contentContainerStyle={{ marginVertical: '10%',  }}>
            {DrawerItems.map(item => (
                <BurgerMenuItem element={item} key={item.name}/>
            ))}
            
            </ScrollView>
            <View>
            <TouchableOpacity style={styles.authBtn} 
            onPress={() => navigate('AuthScreen')}>
                    <Text style={styles.btnTitle}>გამოსვლა</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    authBtn: {
        marginVertical: 20,
        width: '100%',
        height: 56,
        borderRadius: 10,
        backgroundColor: '#B38AEA',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTitle: {
        color: '#FFFFFF'
    },
    burgerMenuCont: {
        flex: 1,
        backgroundColor: 'FFFFFF',
        justifyContent: 'space-between'
       
        
    },
    
});

export default BurgerMenu;