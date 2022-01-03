import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import BgView from '../../Hooks/BgView';
import { navigate } from '../../Navigation/CostumNavigation';


const SignInScreen = () => {
    const [userName, setUserName] = useState<string>();
    const [passowrd, setPassword] = useState<string>();
    const [isRemembered, setIsRemembered] = useState<boolean>(false);


    return (
        <BgView >
            <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center' }}>
                <Image source={require('../../Assets/images/walker-img.png')} style={{ width: 201, height: 35, alignSelf: 'center', marginBottom: 40 }} />
                <TextInput
                    style={styles.input}
                    placeholder='მომხმარებელი / ვოლქერი'
                    placeholderTextColor='#986BEF'
                    value={userName}
                    onChangeText={(newValue: string) => setUserName(newValue)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='პაროლი'
                    secureTextEntry={true}
                    placeholderTextColor='#986BEF'
                    value={passowrd}
                    onChangeText={(newValue: string) => setPassword(newValue)}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <CheckBox
                            value={isRemembered}
                            onValueChange={() => setIsRemembered(!isRemembered)}
                        />
                        <Text
                            style={{ color: '#986BEF' }}
                        >დამახსოვრება</Text>
                    </View>

                    <TouchableOpacity>
                        <Text style={{ color: '#986BEF' }}>
                            დაგავიწყდა პაროლი ?
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.authBtn}
                    onPress={() => navigate('HomePageScreen')}>
                    <Text style={styles.btnTitle} >
                        ავტორიზაცია
                    </Text>
                </TouchableOpacity>
            </View>
        </BgView>
    );
};

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 56,
        backgroundColor: '#F3E9FB',
        borderRadius: 20,
        paddingLeft: 20,
        marginVertical: 10,
    },
    authBtn: {
        marginVertical: 10,
        width: '100%',
        height: 56,
        borderRadius: 20,
        backgroundColor: '#B38AEA',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    btnTitle: {
        color: '#FFFFFF'
    }

})



export default SignInScreen;