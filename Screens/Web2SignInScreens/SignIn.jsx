import { Text, TextInput, View, TouchableOpacity, Image } from "react-native"
import CheckBox from '@react-native-community/checkbox';
import tw from "../../lib/tailwind";


const SignIn = () => {
    return (
        <>
            <View style={tw`bg-appbgColor h-full `} >
                <View  >
                    <View  >
                        <View style={tw`bg-blueBtn flex justify-center items-center gap-16 py-5`} >
                            <View>
                                <Text style={tw`text-white font-bold text-2xl mt-5`} >Sign In</Text>
                            </View>
                            <View>
                                <Text style={tw`text-white font-bold text-xl`}>HI, Welcome Back! </Text>
                            </View>
                        </View>
                    </View>
                    <View style={tw`ml-5 mt-10`}>
                        <View>
                            <Text style={tw`leading-[50px] text-white font-bold `} >Email Address</Text>
                            <TextInput
                                style={tw`bg-white rounded-2xl mr-5 text-black font-bold `}
                                cursorColor={"black"}
                                inputMode="email"
                                placeholder="Enter Email Here"
                                placeholderTextColor={"black"}
                            />
                        </View>
                        <View>
                            <Text style={tw`leading-[50px] text-white font-bold `} >Password</Text>
                            <TextInput
                                style={tw`bg-white rounded-2xl mr-5 text-black font-bold `}
                                cursorColor={"black"}
                                secureTextEntry={true}
                                placeholder="Enter Password Here"
                                placeholderTextColor={"black"}
                            />
                        </View>
                        <View style={tw`flex flex-row items-center gap-20 mt-5 `} >
                            <View style={tw`flex flex-row items-center `}>
                                <CheckBox
                                    value={true}
                                />
                                <Text>Remember Me</Text>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <Text style={tw`font-light text-red-400`} >Forgot Password</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={tw`w-full p-4 `} >
                        <TouchableOpacity style={tw`bg-blueBtn p-5 rounded-lg   w-full  `}  ><Text style={tw`text-white text-center`}>SIGN IN</Text></TouchableOpacity>
                    </View>
                </View>

                <View  >
                    <Text style={tw `text-white text-center text-lg font-bold py-10 `} >OR SIGN IN WITH</Text>
                </View>

                <View style={tw`flex flex-row justify-around`} >
                    <TouchableOpacity>
                        <Image source={require("../../assets/google.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require("../../assets/twitter.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require("../../assets/instagram.png")} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
export default SignIn;