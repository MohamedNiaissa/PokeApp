import axios from 'axios';
import {PokemonClient} from 'pokenode-ts';

const api = new PokemonClient();

const getPokemonData = async id => {
  const pokeData = await api.getPokemonById(id);
  const types = pokeData.types.map(type => {
    return type.type.name;
  });
  let stringType;
  if (types.length > 1) {
    stringType = `${types[0]} ${types[1]}`;
  } else {
    stringType = `${types[0]}`;
  }
  const typesUrl = pokeData.types.map(type => {
    return type.type.url;
  });
  const name =
    pokeData.name.includes('-') &&
    !pokeData.name.includes('koko' || 'tusk' || 'mime' || 'rime')
      ? pokeData.name.split('-')[0]
      : pokeData.name;
  return {
    id: id,
    name: name,
    type: stringType,
    cry: pokeData.cries.latest,
    typesUrl: typesUrl,
    height: pokeData.height,
    weight: pokeData.weight,
    sprite: pokeData.sprites.front_default,
  };
};

const getQuizParameter = async () => {
  const randomPokemon = Math.floor(Math.random() * 1025) + 1;
  const randomIndex = Math.floor(Math.random() * 4);
  console.log(18, randomIndex);
  const pokeData = await api.getPokemonById(randomPokemon);
  const types = pokeData.types.map(type => {
    return type.type.name;
  });
  let stringType;
  if (types.length > 1) {
    stringType = `${types[0]} ${types[1]}`;
  } else {
    stringType = `${types[0]}`;
  }
  // const typesUrl = pokeData.types.map(type =>{return type.type.url})
  // gets the parameters type for quizz
  const parameters = {
    type: stringType,
    cry: pokeData.cries.latest,
    height: pokeData.height,
    weight: pokeData.weight,
  };
  const quizzType = ['type', 'cry', 'height', 'weight'];

  //extracts a value and a key at random
  const key = quizzType[randomIndex];
  const value = parameters[key];
  const answer = {quizzType: key, wrongAnswer: value};
  return answer;
};

const getAllPokemonData = async limit => {
  let pokemons = [];
  for (let i = 1; i < limit; i++) {
    const pokeData = await api.getPokemonById(i);
    const types = pokeData.types.map(type => {
      return type.type.name;
    });
    let stringType;
    if (types.length > 1) {
      stringType = `${types[0]} ${types[1]}`;
    } else {
      stringType = `${types[0]}`;
    }
    const pokemon = {
      id: randomIndex,
      name: name,
      type: stringType,
      cry: pokeData.cries.latest,
      sprite: pokeData.sprites.front_default,
    };
    pokemons.push(pokemon);
  }

  return pokemons;
};

export default {getPokemonData, getAllPokemonData, getQuizParameter};
