import { Text, View, TouchableOpacity } from "react-native"
import tw from "../../lib/tailwind";

import Icon from 'react-native-vector-icons/FontAwesome';
const SignInWidget = () => {
    return (
        <>
            <View style={tw`bg-appbgColor h-full flex justify-around `} >
                <View></View>
                <View style={tw`ml-5 flex gap-5`} >
                    <View>
                        <Text style={tw`text-white text-2xl w-2/4 leading-9`} >All NFTS are  certifiably unique and ownable </Text>
                    </View>
                    <View style={tw``} >
                        <Text style={tw`text-white font-bold w-5/6`} >A credible and excellent marketplace for non-fungible token.</Text>
                    </View>
                    <View style={tw `flex flex-row items-center gap-10 `} >
                        <View style={tw`w-2/3  py-1`} >
                            <TouchableOpacity style={tw`bg-blueBtn p-5 rounded-lg   w-full  `} onPress={()=>{}}   ><Text style={tw`text-white text-center`}>Connect with Wallet</Text></TouchableOpacity>
                        </View>
                        <View >
                            <TouchableOpacity style={tw `border-t-2 border-white  border-l-2 border-r-2 border-b-2 p-4 rounded-lg `} >
                            <Icon name="chevron-right"  size={20} color="#FFFFFF" type="AntDesign"  />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export default SignInWidget;