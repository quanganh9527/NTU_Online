import { AsyncStorage } from 'react-native';
const GetListInfo = async () => {
    try {
        const myarray = await AsyncStorage.multiGet(['hoten','gioitinh','chuyennghanh','noisinh','ngaysinh','lop','mssv']);
        // const myarray = await AsyncStorage.multiGet(['hoten','ngaysinh']);
        if (myarray !== null)
            return myarray;
    } catch (error) {
        return error;
    }
}
export default GetListInfo;