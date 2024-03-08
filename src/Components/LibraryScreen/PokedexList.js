import {FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {getItem} from '../../helper/asyncStorageHelper';
import apiHelper from '../../../api/apiHelper';

import {useIsFocused} from '@react-navigation/native';

const PokedexList = ({renderItem}) => {
  const isFocused = useIsFocused();
  const {userId} = useSelector(s => s.auth);
  const [pokemonCaptured, setPokemonCaptured] = useState([]);
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        let pokedexs = await getItem('pokedex');
        if (pokedexs !== null) {
          for (let i = 0; i < pokedexs.length; i++) {
            let id = Object.keys(pokedexs[i])[0];
            if (id === userId) {
              let pokemons = [];
              const pokedex = Object.values(pokedexs[i])[0];
              for (let j = 0; j < Object.values(pokedexs[i])[0].length; j++) {
                const result = await apiHelper.getPokemonData(pokedex[j]);
                pokemons = [...pokemons, result];
              }
              setPokemonCaptured(pokemons);
            }
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchPokemon();
  }, [isFocused, userId]);

  return <FlatList data={pokemonCaptured} renderItem={renderItem} />;
};
export default PokedexList;
