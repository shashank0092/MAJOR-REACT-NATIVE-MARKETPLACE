import { View, Image, Text, TouchableOpacity, TextInput } from "react-native"
import tw from "../../lib/tailwind";
import Icon from 'react-native-vector-icons/FontAwesome';
const SetupProfile = () => {
    return (
        <>
            <View>
                <View style={tw`mt-5 ml-5`} >
                    <View style={tw`flex  flex-row items-center w-full gap-24 `} >
                        <TouchableOpacity style={tw` w-10 p-2  rounded-full flex  items-center  `} >
                            <Icon name="chevron-left" size={20} color="#FFFFFF" type="AntDesign" />
                        </TouchableOpacity>
                        <Text style={tw` text-white font-bold text-lg  `} >Setup Profile</Text>
                    </View>
                    <View style={tw`flex items-center gap-5`} >
                        <View>
                            <Text style={tw`text-white font-bold`}  >Upload Profile Photo</Text>
                        </View>
                        <View>
                            <Image source={require("../../assets/TestProfile.png")} />
                        </View>
                    </View>
                    <View>
                        <View style={tw`bg-[#253341] m-5 rounded-xl justify-center `} >
                            <Text style={tw`text-white text-xs p-1 `} >Username</Text>
                            <TextInput />
                        </View>
                        <View style={tw`bg-[#253341] m-5 rounded-xl justify-center `} >
                            <Text style={tw`text-white text-xs p-1 `} >Email</Text>
                            <TextInput />
                        </View>
                    </View>
                    <View style={tw`w-full p-4 `} >
                        <TouchableOpacity style={tw`bg-blueBtn p-5 rounded-lg   w-full  `}  ><Text style={tw`text-white text-center font-bold `}>Continue</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

export default SetupProfile;