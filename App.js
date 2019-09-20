
    import Search from "./screens/search";
    import Add from "./screens/add";
    import Profile from "./screens/profile"
    // import Sidebar from './screens/sidebar'
    // import Login from "./log"
    import Home from "./screens/home"
    import Login from './log'
    
    import {createDrawerNavigator} from "react-navigation-drawer";
    import {createAppContainer} from "react-navigation";
    
    
    const AppStack = createDrawerNavigator({
        home : {screen :Home},
        search : {screen :Search},
        add : {screen :Add},
        profile : {screen : Profile},
        log : {screen : Login}
        
      // },{
      //   contentComponent : Sidebar
      })
     export default  MyApp = createAppContainer(AppStack);