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
    <main v-if="actual_game">
        <h2>{{ actual_game.nombre }}</h2>
        <article class="details-videogame">
            <div class="details-img">
                <img src="/img/celeste_logo.png" alt="">
                <div class="details-info">
                    <h3>Categoría:</h3>
                    <p>{{ actual_game.categoria }}</p>
                    <h3>Plataforma:</h3>
                    <p>{{ actual_game.plataforma }}</p>
                    <h3>Trailer:</h3>
                    <a :href="actual_game.url">Ver online</a>
                </div>
            </div>
            <div class="details-description">
                <h3>Descripción:</h3>
                <p>{{ actual_game.about }}</p>
            </div>
        </article>
    </main>
    <footer>
        <p>Derechos de autor © 2024 CapybaraGames</p>
        <p>Contáctanos en info@capybaragames.com</p>
    </footer>
</template>

<script setup>
    import { useGamesStore } from "../stores/games"
    import { storeToRefs } from 'pinia';
    import { onBeforeMount } from "vue";

    const games = useGamesStore()
    const { actual_game } = storeToRefs(games)
    const { getGame } = games

    onBeforeMount(() => {
        getGame()
    })
</script>

<style>

</style>