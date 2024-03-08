import {Image, Text, TouchableOpacity, View} from 'react-native';
import style from './CatchScreenStyle';
import React, {useEffect, useState} from 'react';
import Sound from "react-native-sound";

  const playSound = sound => {
    try {
      sound.play(() => {
        console.log('success');
      });
    } catch (e) {
      console.log(e);
    }
  };

const QuizAnswerGroup = ({answer, wrongAnswer, type, handleAnswer}) => {
  const soundImg = 'https://cdn-icons-png.flaticon.com/512/95/95021.png';
  const coinFlip = Math.floor(Math.random() * 2) + 1;

  let answerRight = coinFlip === 1 ? answer : wrongAnswer;
  let answerLeft = coinFlip === 1 ? wrongAnswer : answer;

  const[soundLeft,setSoundLeft] = useState({})
  const[soundRight,setSoundRight] = useState({})

  useEffect(() => {
    (() => {
      if (type === 'cry') {
        try{
          console.log('cry', answer);
          const soundLeft = new Sound(answerRight)
          const soundRight = new Sound(answerLeft)
          setSoundLeft(soundLeft);
          setSoundRight(soundRight);
        }catch(e){
          console.log(e)
        }
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
                playSound(soundLeft)
              }}>
              <Image source={{uri: soundImg}} style={style.soundImg} />
            </TouchableOpacity>
            <TouchableOpacity
              style={style.buttonRight}
              onPress={() => {
                playSound(soundRight)
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
