import React from 'react';
import {
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    Text,
    Image,
    View,
    Pressable
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BgView from '../../Hooks/BgView';
import { navigate } from '../../Navigation/CostumNavigation';




const AuthScreen = () => {
    return (
        <BgView style={{ flex: 1 }} >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../../Assets/images/walker-img.png')} style={{ width: 201, height: 35, marginBottom: 50 }} />
                <TouchableOpacity
                    style={styles.authBtn}
                    onPress={() => navigate('SignInScreen')}>
                    <Text style={styles.btnTitle} >
                        ავტორიზაცია
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.authBtn}
                    onPress={() => navigate('SignUpScreen')}>
                    <Text style={styles.btnTitle}>
                        რეგისტრაცია
                    </Text>
                </TouchableOpacity>
            </View>
        </BgView>
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
    }

})



export default AuthScreen;