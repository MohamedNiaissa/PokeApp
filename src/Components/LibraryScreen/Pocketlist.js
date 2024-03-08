import {FlatList} from 'react-native';
import {useEffect, useState} from 'react';
import apiHelper from '../../../api/apiHelper';

const Pocketlist = ({renderItem}) => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemons = await apiHelper.getAllPokemonData(100);
      setPokemon(pokemons);
    };
    fetchPokemon();
  }, []);

  return <FlatList data={pokemon} renderItem={renderItem} />;
};

export default Pocketlist;
