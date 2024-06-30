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
            <li>
                <a href="videogame.html?id=1">
                    <img src="/img/HZD_logo.jpg" alt="">
                    <p>Primer videojuego</p>
                </a>
            </li>
            <li>                
                <a href="videogame.html?id=2">
                    <img src="/img/celeste_logo.png" alt="">
                    <p>Segundo videojuego</p>
                </a>
            </li>
            <li>            
                <a href="videogame.html?id=3">
                    <img src="/img/Hollow_knight_logo.jpg" alt="">
                    <p>Tercer videojuego</p>
                </a>
            </li>
            <li>                
                <a href="videogame.html?id=4">
                    <img src="/img/Hollow_knight_logo.jpg" alt="">
                    <p title="prueba">Cuarto videojuego con titulo largo</p>
                </a>
            </li>
            <li>                
                <a href="videogame.html?id=5">
                    <img src="/img/Hollow_knight_logo.jpg" alt="">
                    <p>Quinto videojuego</p>
                </a>
            </li>
            <li class="add-new">                
                <a href="new-videogame.html">
                    <div></div>
                    <p>Agregar nuevo</p>
                </a>
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
    console.log('holi')

    const games = useGamesStore()
    const { getGames } = games

    getGames()
</script>

<style>

</style>