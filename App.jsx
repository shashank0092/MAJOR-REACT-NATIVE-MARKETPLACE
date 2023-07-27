import {SafeAreaView,View,Text} from "react-native"
import Welcome from "./Screens/WelcomeScreens/Welcome";
import Web2Login from "./Screens/Web2SignInScreens/Web2SignIn";
import Web3Login from "./Screens/Web3SignInScreens/Web3SignIn";
import SetupProfile from "./Screens/SetProfile/SetupProfile";
import Greetings from "./Screens/SetProfile/Greetings";
import More from "./Screens/LastScreen/More";
import About from "./Screens/LastScreen/About";
import HelpCenter from "./Screens/LastScreen/HelpCenter";





const App=()=>{
  return(
    <>
      <SafeAreaView>
       <View>
        <HelpCenter/>
       </View>
      </SafeAreaView>
    </>
  )
}

export default App;
