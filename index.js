document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll("#projects .card, #tools .card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.classList.remove("animate__pulse"); // reset if it was still in place
            card.classList.add("animate__animated", "animate__pulse");
        });

        card.addEventListener("animationend", () => {
            card.classList.remove("animate__animated", "animate__pulse");
        });
    });
});