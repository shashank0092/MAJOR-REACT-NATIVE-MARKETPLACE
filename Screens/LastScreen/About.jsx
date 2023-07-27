import { View, Text, Image, TouchableOpacity } from "react-native"
import tw from "../../lib/tailwind"
import FontIcon from 'react-native-vector-icons/FontAwesome';

const About = () => {
    return (
        <>
            <View style={tw`bg-appbgColor h-full`} >
                <View style={tw`mt-5  `} >
                    <View style={tw`flex flex-row items-center gap-32 border-b-2 border-white py-4 `} >
                        <View style={tw`ml-5`} >
                            <TouchableOpacity>
                            <FontIcon name="chevron-left" size={20} color="#FFFFFF" type="AntDesign" />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={tw`text-white font-bold text-2xl`} >About</Text>
                        </View>
                    </View>

                    <View style={tw`flex justify-center items-center mt-5 gap-5`} >
                        <View>
                            <Image source={require("../../assets/HomeLogo.png")} />
                        </View>
                        <View>
                            <Text style={tw`text-white font-bold`} >We're building an open digital economy</Text>
                        </View>
                        <View>
                            <Text style={tw`text-center ml-5 mr-5 text-white font-light leading-5  `} >
                                At OpenSea, we're excited about a brand new
                                type of digital good called a non-fungible
                                token, or NFT. NFTs have exciting new properties:
                                they're unique, provably scarce, tradeable, and
                                usable across multiple applications.
                                Just like physical goods, you can do
                                whatever you want with them! You could
                                throw them in the trash, gift them to a friend
                                across the world, or go sell them on an
                                open marketplace. But unlike physical goods,
                                they're armed with all the programmability of
                                digital assets. Today, we're proud to be the first
                                and largest marketplace for NFTs.
                            </Text>
                        </View>
                    </View>

                    <View>
                        <View style={tw`w-full p-4 `} >
                            <TouchableOpacity style={tw`bg-blueBtn p-5 rounded-lg   w-full  `}  ><Text style={tw`text-white text-center font-bold `}>Next</Text></TouchableOpacity>
                        </View>
                    </View>

                    <View style={tw`flex  justify-center items-center`} >
                        <View style={tw`flex flex-row justify-center  items-center gap-5 `} >
                            <View>
                                <Text style={tw`text-[#1D9BF0] font-bold `}  >Terms of Service</Text>
                            </View>
                            <View>
                                <FontIcon name="circle" color="#1D9BF0" type="FontAwesome" />
                            </View>
                            <View>
                                <Text style={tw`text-[#1D9BF0] font-bold `} >Privacy Policy</Text>
                            </View>
                        </View>
                    </View>

                    <View style={tw`flex justify-center items-center mt-5`} >
                        <Text style={tw`text-[#B4B4B4]`} >Version 2.1.0 Build 16</Text>
                        <Text style={tw`text-[#B4B4B4]`} >2018 - 2022 Ozone Networks,Inc</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default About