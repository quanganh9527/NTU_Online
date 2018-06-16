import {
    AsyncStorage
} from 'react-native';
const GetToken = async (keyy) => {
    try {
        const item = await AsyncStorage.getItem(keyy);
        if (item !== null)
            return item;
        return '';
    } catch (error) {
        return '';
    }
}
export default GetToken;