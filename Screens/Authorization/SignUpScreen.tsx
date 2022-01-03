import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
    ScrollView, 
    TouchableOpacity
} from 'react-native';
import {  } from 'react-native-gesture-handler';
import BgView from '../../Hooks/BgView';
import { navigate } from '../../Navigation/CostumNavigation';




const SignUpScreen = () => {
    const [userType, setUserType] = useState<string>();
    const [nameSurname, setNameSurname] = useState<string>();
    const [phoneNumber, setPhoneNumber] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [address, setAddress] = useState<string>();
    return (
        <BgView >
            <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
            <Image source={require('../../Assets/images/walker-img.png')} style={{ width: 201, height: 35, alignSelf: 'center', marginVertical: 40 }} />

                <TextInput
                    style={styles.input}
                    placeholder='მომხმარებელი / ვოლქერი'
                    placeholderTextColor='#986BEF'
                    value={userType}
                    onChangeText={(newValue: string) => setUserType(newValue)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='სახელი, გვარი'
                    placeholderTextColor='#986BEF'
                    value={nameSurname}
                    onChangeText={(newValue: string) => setNameSurname(newValue)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='ტელეფონი'
                    placeholderTextColor='#986BEF'
                    value={phoneNumber}
                    onChangeText={(newValue: string) => setPhoneNumber(newValue)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='ელ-ფოსტა'
                    placeholderTextColor='#986BEF'
                    value={email}
                    onChangeText={(newValue: string) => setEmail(newValue)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='მისამართი'
                    placeholderTextColor='#986BEF'
                    value={address}
                    onChangeText={(newValue: string) => setAddress(newValue)}
                />
                <TouchableOpacity
                    style={styles.authBtn}
                >
                    <Text
                        style={styles.btnTitle}
                    >
                        რეგისტრაცია
                    </Text>
                </TouchableOpacity>
            </ScrollView>
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
        alignItems: 'center'
    },
    btnTitle: {
        color: '#FFFFFF'
    }

})



export default SignUpScreen;