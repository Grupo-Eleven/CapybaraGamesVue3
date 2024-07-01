<template>
    <header>
        <router-link :to="{ name: 'index' }"><h1>Capybara Games</h1></router-link>
        <NavAside />
    </header>
    <main>
        <h2>Home</h2>
        <div class="galery">
            <a href="videogame.html"><img src="/img/HZD_logo.jpg" alt=""></a>
            <a href="videogame.html"><img src="/img/celeste_logo.png" alt=""></a>
            <a href="videogame.html"><img src="/img/Hollow_knight_logo.jpg" alt=""></a>
            <a href="videogame.html"><img src="/img/Hollow_knight_logo.jpg" alt=""></a>
            <a href="videogame.html"><img src="/img/Hollow_knight_logo.jpg" alt=""></a>
        </div>
        <div class="slider">
            <a href="videogame.html"><img src="/img/HZD_logo.jpg" alt=""></a>
            <a href="videogame.html"><img src="/img/celeste_logo.png" alt=""></a>
            <a href="videogame.html"><img src="/img/Hollow_knight_logo.jpg" alt=""></a>
            <a href="videogame.html"><img src="/img/Hollow_knight_logo.jpg" alt=""></a>
            <a href="videogame.html"><img src="/img/Hollow_knight_logo.jpg" alt=""></a>
        </div>
        <article>
            <h2>About us</h2>
            <p>Bienvenido a Capybara Games, tu fuente definitiva para descubrir y explorar el emocionante mundo de los videojuegos. Nuestra misión es brindar a los jugadores de todas las edades y niveles de experiencia una plataforma donde puedan encontrar información detallada y actualizada sobre los juegos más populares y los próximos lanzamientos. <br> <br>
            En Capybara Games, creemos que cada juego tiene una historia única que contar. Por eso, nos dedicamos a ofrecer descripciones completas que te sumergen en el universo de cada título. Desde los trailers más recientes hasta la información esencial sobre plataformas, géneros y características, nuestra página está diseñada para proporcionarte todo lo que necesitas saber para elegir tu próxima aventura digital. <br> <br>
            Nuestro equipo de apasionados gamers y expertos en la industria trabaja incansablemente para mantenerte al día con las últimas novedades y tendencias del mundo de los videojuegos. Ya sea que busques un análisis profundo de un juego, una visión general rápida o simplemente quieras ver el último trailer, Capybara Games es el lugar ideal para satisfacer tu curiosidad y alimentar tu pasión por los videojuegos. <br> <br>
            ¡Únete a nuestra comunidad y explora con nosotros el fascinante universo de los videojuegos!</p>
        </article>
    </main>
    <FooterComp />
</template>

<script setup>
    import NavAside from '../components/NavAside.vue'
    import FooterComp from '../components/FooterComp.vue'
</script>

<style>

</style>