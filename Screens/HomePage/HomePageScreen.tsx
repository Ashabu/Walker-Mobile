import React from 'react';
import { 
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    StyleSheet
 } from 'react-native';
import AppLayout from '../../Components/AppLayout/AppLayout';

const HomePageScreen = () => {
    return (
        <AppLayout>
            <ScrollView>
                <Text>მთავარი გვერდი</Text>
            </ScrollView>
        </AppLayout>
    );
};

export default HomePageScreen;