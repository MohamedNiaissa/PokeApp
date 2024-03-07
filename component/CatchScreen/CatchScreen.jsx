import {SafeAreaView, Text, View, Image, ImageBackground, Button, TouchableOpacity} from "react-native";
import apiHelper from "../../api/apiHelper";
import {useEffect, useState} from "react";
import style from "../CatchScreen/CatchScreenStyle";
import QuizAnswerGroup from "./QuizAnswerGroup";


const CatchScreen = () =>{
    const [pokemon,setPokemon] = useState({});
    const [wrongAnswer, setWrongAnswer] = useState()
    // paramater the user is quizzed on
    const [parameter, setParameter] = useState()
    const background = "https://static.wikia.nocookie.net/pokemoncrater/images/b/bc/Grass_Type.jpg/revision/latest?cb=20100315205316"


    useEffect(()=>{
        (async()=>{
            const randomIndex = Math.floor(Math.random() * 1025) + 1
           const pokemon=  await apiHelper.getPokemonData(randomIndex);
           console.log(pokemon);
           try{
               const quiz = await apiHelper.getQuizParameter();
               setParameter(quiz.quizzType)
               setWrongAnswer(quiz.wrongAnswer)
           }catch(e){
               console.error(e)
           }
           setPokemon(pokemon);
        })()
    },[])


    return(
        <ImageBackground source={{uri:background}} style={style.background}>
            {pokemon && (
                <View style={style.flex}>
                    <Text style={style.pkText}>What's {pokemon.name}'s {parameter} ?</Text>
                    <View style={style.pokeView}>
                        <Image
                            style={style.pokemon}
                            source={{
                                uri:pokemon.sprite
                            }}/>
                        <Text style={style.pokeViewText} >{pokemon.name}</Text>
                    </View>
                    <QuizAnswerGroup answer={pokemon[parameter]} wrongAnswer={wrongAnswer} type={parameter}></QuizAnswerGroup>
                </View>
            )}
        </ImageBackground>
    )
}

export default CatchScreen