document.getElementById('searchBtn').addEventListener('click', () => {
    const pokemonName = document.getElementById('pokemonInput').value.toLowerCase();
    fetchPokemonData(pokemonName);
});

function fetchPokemonData(pokemonName) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokemon Gaada');
            }
            return response.json();
        })
        .then(data => {
            displayPokemonInfo(data);
        })
        .catch(error => {
            document.getElementById('pokemonCard').innerHTML = `
                <p style="color: white;">${error.message}</p>
            `;
        });
}

function displayPokemonInfo(pokemon) {
    const pokemonCard = document.getElementById('pokemonCard');
    pokemonCard.innerHTML = `
        <div class="pokemon-info">
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
            <p><strong>Height:</strong> ${pokemon.height/10}m</p>
            <p><strong>Weight:</strong> ${pokemon.weight/10}kg</p>
            <p><strong>Types:</strong> ${pokemon.types.map(type => type.type.name).join(', ')}</p>
        </div>
    `;
}