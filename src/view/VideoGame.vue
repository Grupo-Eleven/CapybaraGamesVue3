<template>
    <header>
        <router-link :to="{ name: 'index' }"><h1>Capybara Games</h1></router-link>
        <NavAside />
    </header>
    <main v-if="actual_game">
        <h2>{{ actual_game.nombre }}</h2>
        <button type="button" @click="router.push({ name: 'edit-videogame' , params: { id: actual_game.id }})" v-if="token">EDITAR VIDEOJUEGO</button>
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
            <button type="button" @click="deleteGame(actual_game.id)" v-if="token">Eliminar Videojuego - (¡¡¡SIN CONFIRMACION!!!)</button>
        </article>
    </main>
    <FooterComp />
</template>

<script setup>
    import NavAside from '../components/NavAside.vue'
    import FooterComp from '../components/FooterComp.vue'
    import { useGamesStore } from "../stores/games"
    import { storeToRefs } from 'pinia';
    import { nextTick, onBeforeMount } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import axios from 'axios';


    const games = useGamesStore()
    const { actual_game } = storeToRefs(games)
    const { url, getGame } = games

    const route = useRoute()

    const router = useRouter()

    let token = localStorage.getItem('token')
    console.log(token)
    console.log('token:')

    const deleteGame = async (id) => {
        try {
            const token = localStorage.getItem('token')
            if (!token) {
                throw new Error('Token no encontrado')
            }
            const response = await axios.delete(`${url}/api/game/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(response)
            router.push({ name: 'videogames-list' })
        } catch (error) {
            console.log(error)
        }
    }

    onBeforeMount(() => {
        getGame(route.params.id)
        nextTick()
    })
</script>

<style>

</style>