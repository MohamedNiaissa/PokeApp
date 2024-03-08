import {Image, Text, TouchableOpacity, View} from 'react-native';
import style from './CatchScreenStyle';
import React, {useEffect, useState} from 'react';
import playSound from "../../helper/soundHelper";


const QuizAnswerGroup = ({answer, wrongAnswer, type, handleAnswer}) => {
  const soundImg = 'https://cdn-icons-png.flaticon.com/512/95/95021.png';
  const coinFlip = Math.floor(Math.random() * 2) + 1;
  const [sound, setSound] = useState({});
  const [wrongSound, setWrongSound] = useState({});

  let answerRight = coinFlip === 1 ? answer : wrongAnswer;
  let answerLeft = coinFlip === 1 ? wrongAnswer : answer;

  useEffect(() => {
    (() => {
      if (type === 'cry') {
        console.log('cry', answer);
        setSound(answer);
        setWrongSound(wrongAnswer);
      }
    })();
  }, [type, answer, wrongAnswer, answerLeft, answerRight]);

  return (
    <>
      {type !== 'cry' && answer != undefined && (
        <View style={style.choiceDiv}>
          <TouchableOpacity
            style={style.buttonLeft}
            onPress={() => {
              handleAnswer(answerLeft, answer);
            }}>
            <Text style={style.buttonText}>{`${answerLeft}`}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.buttonRight}
            onPress={() => {
              handleAnswer(answerRight, answer);
            }}>
            <Text style={style.buttonText}>{`${answerRight}`}</Text>
          </TouchableOpacity>
        </View>
      )}
      {type === 'cry' && answer != undefined && (
        <>
          <View style={style.choiceDiv}>
            <TouchableOpacity
              style={style.buttonLeft}
              onPress={() => {
                coinFlip === 1 ? playSound(sound) : playSound(wrongSound);
              }}>
              <Image source={{uri: soundImg}} style={style.soundImg} />
            </TouchableOpacity>
            <TouchableOpacity
              style={style.buttonRight}
              onPress={() => {
                coinFlip === 1 ? playSound(wrongSound) : playSound(sound);
              }}>
              <Image source={{uri: soundImg}} style={style.soundImg} />
            </TouchableOpacity>
          </View>
          <View style={style.choiceDiv}>
            <TouchableOpacity
              style={style.buttonLeft}
              onPress={() => {
                handleAnswer(answerLeft, answer);
              }}>
              <Text style={style.buttonText}>{'Left'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.buttonRight}
              onPress={() => {
                handleAnswer(answerRight, answer);
              }}>
              <Text style={style.buttonText}>{'Right'}</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );
};

export default QuizAnswerGroup;
