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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ut aspernatur perferendis beatae quae repudiandae harum architecto laborum provident voluptatum! 
                Adipisci quia ea nostrum cupiditate reiciendis soluta tempora exercitationem praesentium. 
                Voluptatum possimus quas modi maiores sint? Eius, quam laborum hic harum iure sequi recusandae deleniti, 
                nostrum aperiam, tenetur voluptatem dicta asperiores!</p>
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