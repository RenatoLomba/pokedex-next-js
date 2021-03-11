import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export async function getStaticProps(context) {
    let pokemons = [];
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokedex/2/');
        if (response.ok) {
            const json = await response.json();
            pokemons = json.pokemon_entries
        }
    } catch (error) {
        alert(error.message);
    }
    return {
        props: { pokemons } // will be passed to the page component as props
    }
}

const Home = (props) => {
    const { pokemons } = props;

    return (
        <div>
            Pokédex - DevSoutinho
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/sobre">
                        Sobre
                    </Link>
                </li>
            </ul>
            <ul>
                {pokemons.length > 0 && pokemons.map((pokemon, key) => {
                    return (
                        <li key={pokemon.entry_number}>
                            { pokemon.pokemon_species.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Home;
