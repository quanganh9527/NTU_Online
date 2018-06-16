import height from './GetScreen';
import width from './GetScreen';
import { Platform } from 'react-native';
import { StyleSheet } from 'react-native';
const stylesview = StyleSheet.create({
    fullview: {
        marginTop : Platform.OS === 'ios' ? height/20 : 0,
        flex:1,
        alignItems:'center',
        backgroundColor:'#4FBEFB',
        justifyContent:'space-around',
    },
    inputlogin:{
        height:height/8,
        width: width/1.5,
        borderWidth:2,
        borderColor: '#00CCFF',
        borderRadius: (height/6)/2,
        opacity:1,
        paddingLeft:20,
        fontSize:15,
        marginBottom:10, 
        alignItems:'center',
        justifyContent:'center',
    },
    Buttonlogin:{
        height:height/8,
        width: width/1.5,
        borderWidth:2,
        borderColor: 'white',
        borderRadius: (height/6)/2,
        opacity:1,
        marginBottom:30,
        alignItems:'center',
        justifyContent:'center',
    }
});
export default stylesview;