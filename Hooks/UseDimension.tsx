import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';



export const useDimension = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);


    useEffect(() => {
        const windowWidth = Dimensions.get('window').width;
        const windowHeight = Dimensions.get('window').height;
        setWidth(windowWidth);
        setHeight(windowHeight);
    }, []);

    return {
        width, height
    };
};