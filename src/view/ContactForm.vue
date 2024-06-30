<template>
    <header>
        <router-link :to="{ name: 'index' }"><h1>Capybara Games</h1></router-link>
        <NavAside />
    </header>
    <main>
        <h2>Contacto</h2>
        <form class="contact-form" method="post" onsubmit="sendContactForm(event)">
            <label for="name">Nombre<input type="text" id="name" name="name" placeholder="Nombre"></label> 
            <label for="email">Email<input type="email" id="email" name="email" placeholder="Email"></label>
            <label for="message">Mensaje<textarea id="message" name="message" placeholder="Mensaje"></textarea></label>
            <button type="submit" value="Submit">Enviar</button>
        </form>
    </main>
    <FooterComp />
</template>

<script setup>
    import NavAside from '../components/NavAside.vue'
    import FooterComp from '../components/FooterComp.vue'
</script>

<style>

</style>