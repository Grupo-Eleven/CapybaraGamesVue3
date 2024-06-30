<template>
    <header>
        <a href="index.html"><h1>Capybara Games</h1></a>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="videogames-list.html">Lista de Videojuegos</a></li>
                <li><a href="contact.html">Contacto</a></li>
            </ul>
        </nav>
        <aside id="aside">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="videogames-list.html">Lista de Videojuegos</a></li>
                <li><a href="contact.html">Contacto</a></li>
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