import {Text, TouchableOpacity, View} from "react-native";
import style from "./CatchScreenStyle";
import {useEffect, useState} from "react";
import Sound from "react-native-sound";

const playSound = (sound) =>{
    try{
        sound.play(()=>{
            console.log("success")
        })
    }catch(e){
        console.log(e)
    }
}


const QuizAnswerGroup = ({answer,wrongAnswer,type,handleAnswer}) =>{
    const coinFlip = Math.floor(Math.random() * 2) + 1
    const [sound,setSound] = useState({})
    const [wrongSound, setWrongSound] = useState({})

    const answerLeft= coinFlip === 1 ? answer : wrongAnswer
    const answerRight = coinFlip === 1 ?  wrongAnswer: answer




    useEffect(()=>{
        (()=>{
            console.log("type",type)
            if(type === "cry"){
                console.log("cry", answer)
                try{
                    const sound = new Sound(answer,null,error => {
                            if(error){
                                console.log(error)
                            }
                        })
                    const wrongSound = new Sound(wrongAnswer,null,error => {
                        if(error){
                            console.log(error)
                        }
                    })
                    playSound(sound)
                    setSound(sound)
                    setWrongSound(wrongSound)
                }catch(e){
                    console.log(e)
                }
            }
        })()
    },[type,answer,wrongAnswer])

    return(
        <>
            {type !== "cry" && (
                <View style={style.choiceDiv}>
                    <TouchableOpacity style={style.button} onPress={()=>{handleAnswer(answerLeft,answer)}} >
                        <Text style={style.buttonText}>
                            { `${answerLeft}`}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.button} onPress={()=>{handleAnswer(answerLeft,answer)}}>
                        <Text style={style.buttonText}>
                            {`${answerRight}`}
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
            {type === "cry" &&(
                <>
                <View style={style.choiceDiv}>
                    <TouchableOpacity style={style.button} onPress={()=>{coinFlip === 1 ? playSound(sound) : playSound(wrongSound)}}>
                        <Text style={style.buttonText}>{"soundTest"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.button} onPress={()=>{coinFlip === 1 ? playSound(wrongSound) : playSound(sound)}}>
                        <Text style={style.buttonText}>{"soundTestWrong"}</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.choiceDiv}>
                    <TouchableOpacity style={style.button} onPress={()=>{handleAnswer(answerLeft,answer)}}>
                        <Text style={style.buttonText}>{"Left"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.button} onPress={()=>{handleAnswer(answerRight,answer)}}>
                        <Text style={style.buttonText}>{"Right"}</Text>
                    </TouchableOpacity>
                </View>
                </>


            )}
        </>
    )
}

export default QuizAnswerGroup