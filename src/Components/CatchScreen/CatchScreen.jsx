import {
  SafeAreaView,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
} from 'react-native';
import apiHelper from '../../../api/apiHelper';
import {useEffect, useState} from 'react';
import style from './CatchScreenStyle';
import QuizAnswerGroup from './QuizAnswerGroup';
import FlavorText from './FlavorText';

const CatchScreen = () => {
  const [pokemon, setPokemon] = useState({});
  const [wrongAnswer, setWrongAnswer] = useState();
  const [reload, setReload] = useState(0);
  const [flavorText, setFlavorText] = useState('catch');
  // paramater the user is quizzed on
  const [parameter, setParameter] = useState();
  const background =
    'https://static.wikia.nocookie.net/pokemoncrater/images/b/bc/Grass_Type.jpg/revision/latest?cb=20100315205316';

  const handleAnswer = (answer, correctAnswer) => {
    console.log('answered');
    console.log(answer);
    if (correctAnswer === answer) {
      //addPokemon to collection
      // TODO add pokemon to collection here or in place of the log
      console.log(pokemon); //pokemon is accessible through the state
      setFlavorText('success');
      setPokemon({});
      setTimeout(() => {
        setReload(reload + 1);
      }, 2000);
    } else {
      setFlavorText('failed');
      setPokemon({});
      setTimeout(() => {
        setReload(reload + 1);
      }, 2000);
    }
  };

  useEffect(() => {
    (async () => {
      setFlavorText('catch');
      const randomIndex = Math.floor(Math.random() * 1025) + 1;
      const pokemon = await apiHelper.getPokemonData(randomIndex);
      console.log(pokemon);
      try {
        const quiz = await apiHelper.getQuizParameter();
        setParameter(quiz.quizzType);
        setWrongAnswer(quiz.wrongAnswer);
      } catch (e) {
        console.error(e);
      }
      setPokemon(pokemon);
    })();
  }, [reload]);

  return (
    <ImageBackground source={{uri: background}} style={style.background}>
      {pokemon && (
        <View style={style.flex}>
          <Text style={style.pkText}>
            What's {pokemon.name}'s {parameter} ?
          </Text>
          {pokemon.sprite && (
            <View style={style.pokeView}>
              <Image
                style={style.pokemon}
                source={{
                  uri: pokemon.sprite,
                }}
              />
              <Text style={style.pokeViewText}>{pokemon.name}</Text>
            </View>
          )}
          <QuizAnswerGroup
            answer={pokemon[parameter]}
            wrongAnswer={wrongAnswer}
            type={parameter}
            handleAnswer={handleAnswer}
          />
        </View>
      )}
      <FlavorText mode={flavorText} />
    </ImageBackground>
  );
};

export default CatchScreen;
