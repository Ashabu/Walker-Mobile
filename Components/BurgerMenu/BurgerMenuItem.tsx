import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    ImageSourcePropType,
    StyleSheet
} from 'react-native';
import { navigate } from '../../Navigation/CostumNavigation';


interface IBmElement {
    element: IBmItemProps
};

interface IBmItemProps {
    name: string,
    routeName: string,
    icon: ImageSourcePropType,
};


const BurgerMenuItem: React.FC<IBmElement> = (props) => {
    return (
        <TouchableOpacity
            style={styles.element}
            onPress={() => navigate(props.element.routeName)}>
            <Image source={props.element.icon} style={styles.icon} />
            <Text>
                {props.element.name}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    element: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20

    },
    icon: {
        width: 30,
        height: 30,
        marginRight: 10,

    }
});

export default BurgerMenuItem;