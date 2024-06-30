//Importo librerías y métodos
import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

// Declaro urls globales de APIS
const url = process.env.VUE_APP_BASE_URL

const games_list = ref([])

export const useGamesStore = defineStore('games', () => {
    const getGames = async () => {
        try {
            const response = await axios.get(`${url}/api/games`)
            console.log(response)
            games_list.value = response.data
        } catch (error) {
            console.log(error)
        }
    }
    getGames()

    return { url, getGames }
})