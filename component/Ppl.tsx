import React, { useEffect, useState } from 'react';
import { Dimensions, ImageBackground, View, ScrollView, Text, TouchableOpacity, Image} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../enviroments/api.json'
import AsyncStorage from '@react-native-async-storage/async-storage';
import IconComponent from './assets/icons/IconComponent';

const Ppl = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [state, setState] = useState({});

    useEffect(() => { 
        navigation.setOptions({headerShown:false});
        getUsuario();
    }, []);

    const getUsuario= async()=>{
        let usuario = await AsyncStorage.getItem("usuario");
        usuario = JSON.parse(usuario);
        setState({...state, usuario})
    };
    
    const getPerfilUsuario=()=>{
        if(!state.usuario) return <View></View>
        return <View style={{backgroundColor:'#00000055', marginTop:50, padding:10 }}>
            <View style={{display:'flex', alignItems:'center'}}>
                <Image
                    style={{ width: 100, height: 100, borderRadius: 10 }}
                    source={{ uri: "https://ruddy.ibrokers.cloud/imagesAdmin/6340999" }}
                />
            </View>
            <View>
                <Text style={{textAlign:'center'}}>{state.usuario.nombres +" "+state.usuario.apellidos}</Text>
            </View>
        </View>
    };

    const getMenu=()=>{
        return <View style={{display:'flex', flexWrap:'wrap', flexDirection:'row', justifyContent:'center'}}>
                <TouchableOpacity style={{backgroundColor:'#00000055', margin:5, width:100, height:100, borderRadius:10, display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:30}}>0</Text>
                    <Text>Empresas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#00000055', margin:5, width:100, height:100, borderRadius:10, display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:30}}>0</Text>
                    <Text>Tareas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#00000055', margin:5, width:100, height:100, borderRadius:10, display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:30}}>0</Text>
                    <Text>Chats</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#00000055', margin:5, width:100, height:100, borderRadius:10, display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:30}}>0</Text>
                    <Text>Amigos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#00000055', margin:5, width:100, height:100, borderRadius:10, display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:30}}>0</Text>
                    <Text>Novedades</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#00000055', margin:5, width:100, height:100, borderRadius:10, display:'flex', justifyContent:'center', alignItems:'center'}} 
                    onPress={()=>{
                        navigation.navigate("Menu");
                    }}>
                    <Text>Menú</Text>
                </TouchableOpacity>
            </View>
    };

    return (
        <View style={{height:Dimensions.get('screen').height}}>
             <ImageBackground 
                source={require('../images/fondo_main.png')}
                style={{height:'110%', width:'100%'}}>
                <ScrollView>
                    {getPerfilUsuario()}
                    <View style={{height:15}}></View>
                    {getMenu()}
                </ScrollView>
            </ImageBackground>
        </View>
    )
};


export default Ppl;