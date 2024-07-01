<template>
    <header>
        <router-link :to="{ name: 'index' }"><h1>Capybara Games</h1></router-link>
        <NavAside />
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
            <li class="add-new" v-if="token">                
                <router-link :to="{ name: 'new-videogame' }">
                    <div></div>
                    <p>Agregar nuevo</p>
                </router-link>
            </li>
        </ol>
    </main>
    <FooterComp />
</template>

<script setup>
    import NavAside from '../components/NavAside.vue'
    import FooterComp from '../components/FooterComp.vue'
    import { useGamesStore } from "../stores/games"
    import { storeToRefs } from 'pinia';
    import { ref } from 'vue';

    const games = useGamesStore()
    const { games_list } = storeToRefs(games)
    const { getGames } = games

    getGames()

    let token = localStorage.getItem('token')
    console.log(token)
    console.log('token:')

</script>

<style>

</style>