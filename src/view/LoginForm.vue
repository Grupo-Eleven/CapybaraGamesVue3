<template>
    <header>
        <router-link :to="{ name: 'index' }"><h1>Capybara Games</h1></router-link>
        <NavAside />
    </header>
    <main>
        <h2>Contacto</h2>
        <form class="contact-form" method="post" onsubmit="sendContactForm(event)">
            <label for="name">Usuario:<input type="text" id="user" name="user" v-model="user_data.user"></label> 
            <label for="email">Contraseña:<input type="password" id="password" name="password" v-model="user_data.password"></label>
            <button type="button" @click="login()">Enviar</button>
        </form>
        {{ user_data }}
    </main>
    <FooterComp />
</template>

<script setup>
    import NavAside from '../components/NavAside.vue'
    import FooterComp from '../components/FooterComp.vue'
    import axios from 'axios'

    import { useGamesStore } from "../stores/games"
    import { ref } from 'vue';

    const games = useGamesStore()
    const { url } = games
    

    const user_data = ref({
        user: '',
        password: ''
    })

    const login = async () => {
        try {
            const response = await axios.get(`${url}/api/login`, user_data.value)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

</script>

<style>

</style>