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
        <SafeAreaView>
            <ScrollView contentContainerStyle={{ marginVertical: '10%', paddingLeft: '8%' }}>
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
        marginHorizontal: 20,
        marginVertical: 10,
        width: 320,
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