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
import BgView from '../Hooks/BgView';




const AuthScreen = () => {
    return (
        <BgView >
           <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
               <Image source={require('../Assets/images/walker-img.png')} style={{width: 201, height: 35}} />
               <Pressable style={{ marginHorizontal: 20, width: '100%', height: 56, borderRadius: 10, backgroundColor:' #B38AEA', justifyContent: 'center', alignItems: 'center'}} >
                   <Text >
                       ავტორიზაცია
                   </Text>
               </Pressable>
               <Pressable style={{marginHorizontal: 20, width: '100%', height: 56, borderRadius: 10, backgroundColor:' #B38AEA', justifyContent:'center', alignItems: 'center'}} >
                   <Text >
                       რეგისტრაცია
                   </Text>
               </Pressable>
               </View>
        </BgView>
    );
};

const styles = StyleSheet.create({
    

})



export default AuthScreen;