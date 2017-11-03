import Config from '../config';
import api from '../api/api.js';
import {authData} from '../config'
import * as Service from '../request/request.js'
import MyAdapter from './MyAdapter.js';
import React, { Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ToastAndroid,
    TouchableOpacity,
    Image,
    TextInput,
    Dimensions,
    Button,
    TouchableHighlight
} from 'react-native';
import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';
const screenWidth= MyAdapter.screenWidth;
const screenHeight= MyAdapter.screenHeight;
const titleFontSize= MyAdapter.titleFontSize;
const abstractFontSize= MyAdapter.abstractFontSize;
const informationFontSize= MyAdapter.informationFontSize;
const btnFontSize= MyAdapter.btnFontSize;   

export default class UserInformation extends Component{
  _onPress(){

  }
  render() {
    return (
        <View
            style= {{
                flexDirection: 'column',
                flex: 1,
                backgroundColor: 'white'
            }}
        >
            <View style= {{        
                flexDirection: 'row',  
                justifyContent:'center',
                alignItems: 'center',  
                marginTop:0.05*screenHeight,
            }}          
            >
                <Image
                    style= {{
                        width: 0.3*screenHeight,
                        height: 0.3*screenHeight
                    }}
                    source={{uri: 'https://i.loli.net/2017/10/30/59f7235c222ae.png'}}
                />
            </View>
            <View style= {{        
                flexDirection: 'row',  
                justifyContent:'space-between',
                alignItems: 'center',  
                marginTop:0.05*screenHeight,
                marginHorizontal:0.084*screenWidth,
            }}          
            >
                <TouchableHighlight
                    underlayColor="transparent"
                    activeOpacity={0.5}
                    style= {{
                        alignSelf:'flex-start',
                        backgroundColor:"transparent",
                    }}
                    onPress={this._onPress}//关联函数                   
                >
                    <Image
                        style= {{
                            width: 0.1*screenHeight,
                            height: 0.1*screenHeight
                        }}
                        source={require('../images/calendar.png')}
                    />
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor="transparent"
                    activeOpacity={0.5}
                    style= {{
                        alignSelf:'flex-start',
                        backgroundColor:"transparent",
                    }}
                    onPress={this._onPress}//关联函数                   
                >
                    <Image
                        style= {{
                            width: 0.1*screenHeight,
                            height: 0.1*screenHeight
                        }}
                        source={require('../images/ring.png')}
                    />
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor="transparent"
                    activeOpacity={0.5}
                    style= {{
                        alignSelf:'flex-start',
                        backgroundColor:"transparent",
                    }}
                    onPress={()=>this.props.navigation.navigate('PersonalSettings')}//关联函数                   
                >
                    <Image
                        style= {{
                            width: 0.1*screenHeight,
                            height: 0.1*screenHeight
                        }}
                        source={require('../images/setting.png')}
                    />
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor="transparent"
                    activeOpacity={0.5}
                    style= {{
                        alignSelf:'flex-start',
                        backgroundColor:"transparent",
                    }}
                    onPress={this._onPress}//关联函数                   
                >
                    <Image
                        style= {{
                            width: 0.1*screenHeight,
                            height: 0.1*screenHeight
                        }}
                        source={require('../images/upload.png')}
                    />
                </TouchableHighlight>
            </View>
            <View style= {{        
                flexDirection: 'column',  
                justifyContent:'flex-start',
                alignItems: 'center',  
                marginTop:0.05*screenHeight,
                marginHorizontal:0.084*screenWidth,
            }}          
            >
                <View style= {{        
                    flexDirection: 'row',  
                    justifyContent:'space-between',
                    alignItems: 'center',  
                }}          
                >
                    <Text style= {{      
                        fontSize: btnFontSize,  
                        color: 'black',  
                        textAlign: 'center',  
                        marginRight: 0.07*screenWidth,
                    }}
                    >
                        Personal Information
                    </Text>                 
                    <Text style= {{      
                        fontSize: btnFontSize,  
                        color: 'black',  
                        textAlign: 'center',  
                    }}
                    >
                        Personal Information
                    </Text>                 
                </View>
                <View style= {{        
                    flexDirection: 'row',  
                    justifyContent:'space-between',
                    alignItems: 'center',  
                    marginTop: 0.03*screenHeight
                }}          
                >
                    <Text style= {{      
                        fontSize: btnFontSize,  
                        color: 'black',  
                        textAlign: 'center',  
                        marginRight: 0.07*screenWidth,
                    }}
                    >
                        Personal Information
                    </Text>                 
                    <Text style= {{      
                        fontSize: btnFontSize,  
                        color: 'black',  
                        textAlign: 'center',  
                    }}
                    >
                        Personal Information
                    </Text>                 
                </View>
                <View style= {{        
                    flexDirection: 'row',  
                    justifyContent:'space-between',
                    alignItems: 'center',  
                    marginTop: 0.03*screenHeight
                }}          
                >
                    <Text style= {{      
                        fontSize: btnFontSize,  
                        color: 'black',  
                        textAlign: 'center',  
                        marginRight: 0.07*screenWidth,
                    }}
                    >
                        Personal Information
                    </Text>                 
                    <Text style= {{      
                        fontSize: btnFontSize,  
                        color: 'black',  
                        textAlign: 'center',                        
                    }}
                    >
                        Personal Information
                    </Text>                 
                </View>
            </View>
            <View style = {styles.container}>                
                <Button title = '退出登录' onPress = {()=>this.props.navigation.navigate('Home')}/>
            </View>            
        </View>
    );
  }

    // render(){
    //     return(
    //         <View style = {styles.container}>
    //             <Text>假装是用户信息</Text>
    //             <Button title = '退出登录' onPress = {()=>this.props.navigation.navigate('Home')}/>
    //         </View>
    //     )
    // }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});