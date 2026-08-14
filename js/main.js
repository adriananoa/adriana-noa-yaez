document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".contenido-slider");
    let index = 0;

    if (slides.length > 0) {
        // Muestra solo el slide actual y oculta los demás
        function cambiarSlide() {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? "block" : "none";
            });
            index = (index + 1) % slides.length; // Avanza al siguiente y reinicia al llegar al final
        }

        // Ejecutar inmediatamente al cargar
        cambiarSlide();

        // Cambia de imagen automáticamente cada 4 segundos (4000 ms)
        setInterval(cambiarSlide, 4000);
    }
});
