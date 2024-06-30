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
        <h2>Contacto</h2>
        <form class="contact-form" method="post" onsubmit="sendContactForm(event)">
            <label for="name">Nombre<input type="text" id="name" name="name" placeholder="Nombre"></label> 
            <label for="email">Email<input type="email" id="email" name="email" placeholder="Email"></label>
            <label for="message">Mensaje<textarea id="message" name="message" placeholder="Mensaje"></textarea></label>
            <button type="submit" value="Submit">Enviar</button>
        </form>
    </main>
    <footer>
        <p>Derechos de autor © 2024 CapybaraGames</p>
        <p>Contáctanos en info@capybaragames.com</p>
    </footer>
</template>