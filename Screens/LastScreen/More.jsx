import { View, Text, TouchableOpacity } from "react-native";
import tw from "../../lib/tailwind";
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';




const More = () => {
    return (
        <>
            <View style={tw`bg-appbgColor h-full `}  >
                <View style={tw`ml-5 mt-5 `} >
                    <View  >
                        <View>
                            <View style={tw`border-b-2 border-white mx-4`} >
                                <Text style={tw`text-white font-bold text-2xl text-center`} >More</Text>
                            </View>
                        </View>
                        <View  >
                            <View style={tw`flex flex-row border-b-2 border-white justify-between  m-4 my-0 py-3 `} >
                                <Text style={tw`text-white   font-medium text-xl`} >About</Text>
                                <TouchableOpacity>
                                    <FontIcon name="chevron-right" size={20} color="#FFFFFF" type="AntDesign" />
                                </TouchableOpacity>
                            </View>

                            <View style={tw`flex flex-row border-b-2 border-white  justify-between m-4 my-0 py-3`}>
                                <Text style={tw`text-white  font-medium text-xl`} >Blog</Text>
                                <TouchableOpacity>
                                    <FontIcon name="chevron-right" size={20} color="#FFFFFF" type="AntDesign" />
                                </TouchableOpacity>
                            </View>

                            <View style={tw`flex flex-row border-b-2 border-white  justify-between m-4 my-0 py-3 `}>
                                <Text style={tw`text-white   font-medium text-xl`}>Help Center</Text>
                                <TouchableOpacity>
                                    <FontIcon name="chevron-right" size={20} color="#FFFFFF" type="AntDesign" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={tw`ml-3 mt-4 flex  gap-5`} >
                        <View style={tw``} >
                            <Text style={tw`text-white text-2xl font-bold  `} >Follow Us</Text>
                        </View>
                        <View style={tw`flex  gap-5`} >
                            <View style={tw`flex flex-row gap-5`} >
                                <View style={tw`w-40 h-40 rounded-xl bg-blueBtn flex justify-end  `} >
                                    <View style={tw`mb-5 ml-3`} >
                                       <TouchableOpacity>
                                       <FontIcon name="twitter" type="SimpleLineIcons" color="#FFFFFF" size={40} />
                                        <Text style={tw`font-bold text-white`} >Twitter</Text>
                                       </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={tw`w-40 h-40 rounded-xl bg-purple-400 flex justify-end `} >
                                    <View style={tw`mb-5 ml-3`} >
                                        <TouchableOpacity>
                                        <FontIcon name="instagram" type="SimpleLineIcons" color="#FFFFFF" size={40} />
                                        <Text style={tw`font-bold text-white`} >Instagram</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={tw`flex flex-row gap-5`} >
                                <View style={tw`w-40 h-40 rounded-xl bg-blue-300 flex justify-end `} >
                                    <View style={tw`mb-5 ml-3`} >
                                       <TouchableOpacity>
                                       <Icon name="discord" type="MaterialIcons"  color="#FFFFFF" size={40} />
                                        <Text style={tw`font-bold text-white`} >Discord</Text>
                                       </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={tw`w-40 h-40 rounded-xl bg-orange-400 flex justify-end `} >
                                    <View style={tw`mb-5 ml-3`} >
                                       <TouchableOpacity>
                                       <FoundationIcon name="social-reddit" type="Foundation" color="#FFFFFF" size={40} />
                                        <Text style={tw`font-bold text-white`} >Reddit</Text>
                                       </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={tw`flex flex-row gap-5`} >
                                <View style={tw`w-40 h-40 rounded-xl bg-red-700 flex justify-end `} >
                                <View style={tw`mb-5 ml-3`} >
                                        <TouchableOpacity>
                                        <SimpleLineIcon name="social-youtube" type="SimpleLineIcons" color="#FFFFFF" size={40} />
                                        <Text style={tw`font-bold text-white`} >Youtube</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        </View>
                    </View>
                    <View>

                    </View>
                </View>
            </View>
        </>
    )
}

export default More;