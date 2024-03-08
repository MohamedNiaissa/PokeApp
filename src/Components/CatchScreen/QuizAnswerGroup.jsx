import {Image, Text, TouchableOpacity, View} from 'react-native';
import style from './CatchScreenStyle';
import React, {useEffect, useState} from 'react';
import Sound from 'react-native-sound';

const playSound = sound => {
  try {
    sound.play(() => {
      console.log('success');
    });
  } catch (e) {
    console.log(e);
  }
};

const formatTypeAnswer = answer => {
  try {
    if (answer.includes(',')) {
      const types = answer.split(',');
      console.log('splitted', types);
      answer = `${types[0]} ${types[1]}`;
      console.log('attempted formatting', answer);
      return answer;
    }
    return answer;
  } catch (e) {
    console.log(e);
  }
};

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
        try {
          const sound = new Sound(answer, null, error => {
            if (error) {
              console.log(error);
            }
          });
          const wrongSound = new Sound(wrongAnswer, null, error => {
            if (error) {
              console.log(error);
            }
          });
          playSound(sound);
          setSound(sound);
          setWrongSound(wrongSound);
        } catch (e) {
          console.log(e);
        }
      }
    })();
  }, [type, answer, wrongAnswer, answerLeft, answerRight]);

  return (
    <>
      {type !== 'cry' && answer != undefined && (
        <View style={style.choiceDiv}>
          <TouchableOpacity
            style={style.button}
            onPress={() => {
              handleAnswer(answerLeft, answer);
            }}>
            <Text style={style.buttonText}>{`${answerLeft}`}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.button}
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
              style={style.button}
              onPress={() => {
                coinFlip === 1 ? playSound(sound) : playSound(wrongSound);
              }}>
              <Image source={{uri: soundImg}} style={style.soundImg} />
            </TouchableOpacity>
            <TouchableOpacity
              style={style.button}
              onPress={() => {
                coinFlip === 1 ? playSound(wrongSound) : playSound(sound);
              }}>
              <Image source={{uri: soundImg}} style={style.soundImg} />
            </TouchableOpacity>
          </View>
          <View style={style.choiceDiv}>
            <TouchableOpacity
              style={style.button}
              onPress={() => {
                handleAnswer(answerLeft, answer);
              }}>
              <Text style={style.buttonText}>{'Left'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.button}
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
