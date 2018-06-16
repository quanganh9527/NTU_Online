import { StyleSheet } from 'react-native';
import width from '../../../Styles/GetScreen';
import height from '../../../Styles/GetScreen';
const styles = StyleSheet.create({
    View: {
        height:height/10,
        width:width,
        backgroundColor:'#00CCFF',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    icon:{
        height:height/15,
        width:width/10,
        marginLeft: width/40
    }
});
export default styles;