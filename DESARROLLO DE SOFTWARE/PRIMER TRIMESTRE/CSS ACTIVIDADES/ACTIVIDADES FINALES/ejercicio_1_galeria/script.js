

const toggle = document.getElementById("toggle-tema");

toggle.addEventListener("click", () => {

    const temaActual = document.documentElement.getAttribute("data-theme");

    const nuevoTema = temaActual === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", nuevoTema);

    localStorage.setItem("tema", nuevoTema);
});