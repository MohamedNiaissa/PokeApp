import style from "./DetailScreenStyle";
import {Image, ImageBackground, View, Text, TouchableOpacity} from "react-native";
import React from "react";
import Sound from "react-native-sound";
import playSound from "../../helper/soundHelper";


const DetailScreen = ({pokemon}) =>{
    const soundImg = 'https://cdn-icons-png.flaticon.com/512/95/95021.png';
    const background =
        'https://e1.pxfuel.com/desktop-wallpaper/694/543/desktop-wallpaper-pokedex-template-by-hatirem-pokemon-pokedex-background-thumbnail.jpg';
    const sound = new Sound(pokemon.cry)


    return (
        <ImageBackground source={{uri: background}} style={style.background}>
            <View style={style.pokedex}>
                <Text style={style.pokename}>{pokemon.name}</Text>
                <Image
                    style={style.sprite}
                    source={{
                        uri: pokemon.sprite,
                    }}
                />
                <TouchableOpacity
                    style={style.button}
                    onPress={() => {
                        playSound(sound)
                    }}>
                    <Image source={{uri: soundImg}} style={style.soundImg} />
                </TouchableOpacity>
                <Text style={style.text}>{pokemon.types}</Text>
                <Text style={style.text}>weight : {pokemon.weight}  height : {pokemon.height}</Text>
            </View>
        </ImageBackground>
    )
}

export default DetailScreen;