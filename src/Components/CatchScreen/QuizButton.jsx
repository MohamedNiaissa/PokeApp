import {Text, TouchableOpacity} from "react-native";
import React from "react";
import style from './CatchScreenStyle';

const QuizButton = ({answer,correctAnswer, text, handleAnswer, btnStyle}) =>{
    return(
        <TouchableOpacity
            style={btnStyle}
            onPress={() => {
                handleAnswer(answer, correctAnswer);
            }}>
            <Text style={style.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default QuizButton