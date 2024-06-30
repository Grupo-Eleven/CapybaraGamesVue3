//Importo librerías y métodos
import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

// Declaro urls globales de APIS
const url = 'https://a12bba12-b258-4707-b64c-9719a13b2b47-00-3d7rffcg997ll.kirk.replit.dev'

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

    return { url, getGames, games_list }
})