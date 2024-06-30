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
        <h2>Celeste</h2>
        <article class="details-videogame">
            <div class="details-img">
                <img src="/img/celeste_logo.png" alt="">
                <div class="details-info">
                    <h3>Categoría:</h3>
                    <p>Plataformas</p>
                    <h3>Plataforma:</h3>
                    <p>Escritorio</p>
                    <h3>Trailer:</h3>
                    <a href="https://www.youtube.com/watch?v=70d9irlxiB4">Ver online</a>
                </div>
            </div>
            <div class="details-description">
                <h3>Descripción:</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis labore odit, nobis laudantium quibusdam soluta laboriosam doloremque nesciunt aut odio ut assumenda rerum veniam ullam mollitia fugiat dolorem optio excepturi facilis dicta unde modi neque! Dolorum et fugiat adipisci atque debitis asperiores voluptas non repellendus, voluptatum nostrum perspiciatis. Quod, sint?</p>
            </div>
        </article>
    </main>
    <footer>
        <p>Derechos de autor © 2024 CapybaraGames</p>
        <p>Contáctanos en info@capybaragames.com</p>
    </footer>
</template>

<script setup>

</script>

<style>

</style>