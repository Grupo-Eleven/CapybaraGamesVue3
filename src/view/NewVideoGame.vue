<template>
    <header>
        <router-link :to="{ name: 'index' }"><h1>Capybara Games</h1></router-link>
        <NavAside />
    </header>
    <main>
        <h2>Agregar videojuego</h2>
        <form class="newgame-form" method="post" onsubmit="addNewVideogame(event)">
            <label for="title">Titulo<input type="text" id="title" name="title" placeholder="Nombre" v-model="game.nombre"></label> 
            <label for="description">Descripción<textarea id="description" name="description" placeholder="Descripción" v-model="game.about"></textarea></label>
            <ul id="platform">
                <li>Crossplay</li>
                <li><input type="radio" id="mobile" name="mobile" value="1" v-model="game.plataforma">
                <label for="mobile">Mobile</label></li>
                <li><input type="radio" id="desktop" name="desktop" value="2" v-model="game.plataforma">
                <label for="desktop">Escritorio</label></li>
                <li><input type="radio" id="multiplatform" name="multiplatform" value="3" v-model="game.plataforma">
                <label for="multiplatform">Multiplatforma</label></li>
            </ul> 
            <label for="category">Categoría<select id="category" name="category" v-model="game.categoria">
                <option value="">Elige una categoría.</option>
                <option value="1">Plataformas</option>
                <option value="2">Mundo abierto</option>
                <option value="3">2D</option>
                <option value="4">3D</option>
            </select></label>
            <label for="image">Imagen<input type="file" id="image" name="image"></label> 
            <label for="url">URL de trailer<input type="url" id="url" name="url" placeholder="https://example.com" v-model="game.url"></label> 
            <label for="category">Sección Home<select id="home" name="home" v-model="game.home">
                <option value="">Elige una opción.</option>
                <option value="1">Si</option>
                <option value="0">No</option>
            </select></label>
            <div class="submit-button">
                <label for="new-videogame-submit" class="submit-label-button">ENVIAR</label>
                <button style="display: none;" id="new-videogame-submit" type="submit" value="Submit" @click="postGame()"></button>
            </div>
        </form>
        {{ game }}
    </main>
    <FooterComp />
</template>

<script setup>
    import NavAside from '../components/NavAside.vue'
    import FooterComp from '../components/FooterComp.vue'
    import axios from 'axios'

    import { useGamesStore } from "../stores/games"

    const games = useGamesStore()
    const { url } = games

    const game = ref({
        nombre: '',
        url: '',
        about: '',
        plataforma: '',
        categoria: '',
        home: '',
        img: null
    })

    const postGame = async () => {
        try {
            const response = await axios.post(`${url}/api/game`, )
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
</script>

<style>

</style>