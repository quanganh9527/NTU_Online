import {combineReducers} from 'redux';
import CheckLogin from './Action/CheckLogin';
import Checkuser from './Action/Checkuser';
const reducer =combineReducers({
    CheckLogin:CheckLogin,
    Checkuser: Checkuser
});
export default reducer;