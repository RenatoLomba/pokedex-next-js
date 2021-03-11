import React from 'react';

const Pokemon = ({ pokemon }) => {
    return (
        <div>
            Id: ...
            <img src={pokemon.sprites.front_default} alt="Imagem do Pokemon" />
        </div>
    )
}
export default Pokemon;

export async function getStaticProps({params}) {
    let pokemon = {};
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
        if (response.ok) {
            const json = await response.json();
            pokemon = json;
        } else {
            throw new Error('Resposta da consulta inválida');
        }
    } catch (error) {
        alert(error.message);
    }
    return {
        props: { pokemon }
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    id: '1'
                }
            }
        ],
        fallback: false
    }
}
