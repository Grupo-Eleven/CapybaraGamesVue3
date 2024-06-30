<template>
    <header>
        <router-link :to="{ name: 'index' }"><h1>Capybara Games</h1></router-link>
        <nav>
            <ul>
                <li><router-link :to="{ name: 'index' }">Home</router-link></li>
                <li><router-link :to="{ name: 'videogames-list' }">Lista de Videojuegoss</router-link></li>
                <li><router-link :to="{ name: 'contact' }">Contacto</router-link></li>
            </ul>
        </nav>
        <aside id="aside">
            <ul>
                <li><router-link :to="{ name: 'index' }">Home</router-link></li>
                <li><router-link :to="{ name: 'videogames-list' }">Lista de Videojuegoss</router-link></li>
                <li><router-link :to="{ name: 'contact' }">Contacto</router-link></li>
            </ul>
        </aside>
    </header>
    <main>
        <h2>Lista de videojuegos</h2>
        <h3>Todos los videojuegos</h3>
        <ol class="game-list">
            <li :key="game" v-for="(game) in games_list">
                <router-link :to="{ name: 'videogame', params: { id: game.id } }">
                    <img :src="game.url" alt="">
                    <p>{{ game.nombre }}</p>
                </router-link>
            </li>
        </ol>
    </main>
    <footer>
        <p>Derechos de autor © 2024 CapybaraGames</p>
        <p>Contáctanos en info@capybaragames.com</p>

    </footer>
</template>

<script setup>
    import { useGamesStore } from "../stores/games"
    import { storeToRefs } from 'pinia';

    const games = useGamesStore()
    const { games_list } = storeToRefs(games)
    const { getGames } = games

    getGames()
</script>

<style>

</style>