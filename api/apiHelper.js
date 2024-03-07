import axios from "axios";
import { PokemonClient } from 'pokenode-ts';

const api = new PokemonClient();

const getPokemonData = async(id) =>{
    const pokeData =  await api.getPokemonById(id)
    const types = pokeData.types.map(type=>{ return type.type.name })
    const typesUrl = pokeData.types.map(type =>{return type.type.url})
    console.log(12, pokeData)
    return {name :pokeData.name, type: types,cry: pokeData.cries.latest, typesUrl: typesUrl, height: pokeData.height, weight: pokeData.weight, sprite: pokeData.sprites.front_default}
}

const getAllPokemonData = async(number)=>{
    let pokemons = []
    for(let i = 1 ; i<number; i++){
        const pokemon = api.getPokemonById(i)
        pokemons.push(pokemon)
    }
    console.log(pokemons)
}

export default {getPokemonData,getAllPokemonData}