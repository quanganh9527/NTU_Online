import { StackNavigator } from 'react-navigation';
import ScreenLogin from './Components/Login/ScreenLogin';
import SlideMenu from './Components/SlideMenu/SlideMenu';
import Home from './Components/Home/Home';
import PointTable from './Components/SlideMenu/ScreenDidLogin/SV/PointTable/PointTable';
import InfoStudent from './Components/SlideMenu/ScreenDidLogin/SV/Info/InfoStudent';
import AddInfo from './Components/SlideMenu/ScreenDidLogin/GV/AddInfo';
import InfoManage from './Components/SlideMenu/ScreenDidLogin/GV/InfoManage';
import PointManage from './Components/SlideMenu/ScreenDidLogin/GV/Point/PointManage';
import Schedule from './Components/SlideMenu/ScreenDidLogin/SV/Schedule/Schedule';
import DetailPost from './Components/Home/DetailPost';
import Seach from './Components/Home/Seach'
const Navigations = StackNavigator({
    SlideMenu: {
        screen: SlideMenu,
        navigationOptions: {
            header: null
        }
    },
    ScreenMenu: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: ScreenLogin,
        navigationOptions: {
            header: null
        }
    },
    Point: {
        screen: PointTable,
        navigationOptions: {
            header: null
        }
    },
    Info: {
        screen: InfoStudent,
        navigationOptions: {
            header: null
        }
    },
    Schedule: {
        screen: Schedule,
        navigationOptions: {
            header: null
        }
    },
    InfoManage: {
        screen: InfoManage,
        navigationOptions: {
            header: null
        }
    },
    PointManage: {
        screen: PointManage,
        navigationOptions: {
            header: null
        }
    },
    DetailPost: {
        screen: DetailPost,
        navigationOptions: {
            header: null
        }
    },
    Seach: {
        screen: Seach,
        navigationOptions: {
            header: null
        }
    },
    
});
export default Navigations;