const CheckLogin= (state= false,action)=>{
    if(action.type=== 'Didlogin')
    return true;
    return state;
};
export default CheckLogin;