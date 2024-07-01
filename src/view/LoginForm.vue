<template>
    <header>
        <router-link :to="{ name: 'index' }"><h1>Capybara Games</h1></router-link>
        <NavAside />
    </header>
    <main>
        <h2>Contacto</h2>
        <form class="contact-form" method="post" onsubmit="sendContactForm(event)">
            <label for="name">Usuario:<input type="text" id="user" name="user" v-model="user.username"></label> 
            <label for="email">Contraseña:<input type="password" id="password" name="password" v-model="user.password"></label>
            <button type="button" @click="login(user.username, user.password)">Enviar</button>
        </form>
        {{ user }}
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
    

    const user = ref({
        username: '',
        password: ''
    })

    const login = async (username, password) => {
        try {
            const response = await axios.post(`${url}/api/login`,
                { user: username, password },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            )
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

</script>

<style>

</style>