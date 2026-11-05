// MENU RESPONSIVO DO CATÁLOGO

const menuBtn = document.getElementById("menuBtn");

const menu = document.getElementById("menu");


// ABRIR E FECHAR MENU

menuBtn.addEventListener("click", () => {

    const estaAberto = menu.classList.toggle("aberto");

    menuBtn.setAttribute("aria-expanded", estaAberto);

    menuBtn.textContent = estaAberto ? "×" : "☰";

});


// FECHAR MENU AO CLICAR EM UMA OPÇÃO

menu.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

        menu.classList.remove("aberto");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.textContent = "☰";

    });

});