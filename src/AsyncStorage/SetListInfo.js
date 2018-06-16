import { AsyncStorage } from 'react-native';
const SetListInfo = async (hoten, ngaysinh, gioitinh, chuyennghanh, noisinh, lop, mssv) => {
    try {
        // await AsyncStorage.multiSet([['hoten', hoten], ['gioitinh', gioitinh], ['chuyennghanh', chuyennghanh],
        // ['noisinh', noisinh], ['ngaysinh', ngaysinh], ['lop', lop], ['mssv', mssv]]);
        await AsyncStorage.multiSet([['hoten', hoten], ['ngaysinh', ngaysinh]]);
        // await AsyncStorage.multiSet([['gioitinh', gioitinh], ['chuyennghanh', chuyennghanh]]);
        // await AsyncStorage.multiSet([['lop', lop], ['mssv', mssv]]);
        // await AsyncStorage.multiSet([['noisinh', noisinh]]);
    } catch (error) {
        return error;
    }
}
// , gioitinh, chuyennghanh, noisinh, ngaysinh, lop, mssv
export default SetListInfo;