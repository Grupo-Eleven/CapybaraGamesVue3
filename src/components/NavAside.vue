<template>
    <nav>
        <ul>
            <li><router-link :to="{ name: 'index' }">Home</router-link></li>
            <li><router-link :to="{ name: 'videogames-list' }">Lista de Videojuegoss</router-link></li>
            <li><router-link :to="{ name: 'contact' }">Contacto</router-link></li>
            <li><router-link :to="{ name: 'login' }">Ingresar</router-link></li>
        </ul>
    </nav>
    <aside id="aside">
        <ul>
            <li><router-link :to="{ name: 'index' }">Home</router-link></li>
            <li><router-link :to="{ name: 'videogames-list' }">Lista de Videojuegoss</router-link></li>
            <li><router-link :to="{ name: 'contact' }">Contacto</router-link></li>
            <li><router-link :to="{ name: 'login' }">Ingresar</router-link></li>
        </ul>
    </aside>
</template>

<script setup>

</script>

<style>

</style>