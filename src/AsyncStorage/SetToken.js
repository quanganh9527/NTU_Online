import {
    AsyncStorage
} from 'react-native';
const SetToken = async(keyy,value) => {
    try {
         await AsyncStorage.setItem(keyy, value);
         return 'THANH_CONG';
    }catch(e){
        return e;
    }
}
export default SetToken ;