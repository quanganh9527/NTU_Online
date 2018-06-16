const url = "http://59d2419a0ecfcb0011fd4c2b.mockapi.io/user";
 const TestUser = (user, pass,navigation) =>{
    fetch(url)
        .then((response) => response.json())
        .then(res => {
            return navigation.goBack();
            // for (let i = 0; i < res.length; i++) {
            //     if (res[i + 1].username === user) {
            //         if (res[i + 1].password === pass) {
            //             return navigation.navigate('SlideMenu');
            //         }
            //         else return Alert.alert(
            //             'Alert Title',
            //             'My Alert Msg',
            //             [
            //               {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            //               {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            //               {text: 'OK', onPress: () => console.log('OK Pressed')},
            //             ],
            //             { cancelable: false }
            //           );
            //     }
            //     else return Alert.alert(
            //         'Alert Title',
            //         'My Alert Msg',
            //         [
            //           {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            //           {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            //           {text: 'OK', onPress: () => console.log('OK Pressed')},
            //         ],
            //         { cancelable: false }
            //       );
            // }
        })
}
export default TestUser;