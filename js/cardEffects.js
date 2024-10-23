const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const randomCharacter = () => chars[Math.floor(Math.random() * chars.length)];
const randomString = (length) => Array.from({length}).map(randomCharacter).join("");

const cardHover = (card, letters, e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    letters.style.setProperty("--x", `${x}px`);
    letters.style.setProperty("--y", `${y}px`);

    letters.textContent = randomString(2000);
};

const cards = document.querySelectorAll('.card-hover-container');
cards.forEach(card => {
    const letters = card.querySelector('.card-bg-characters');

    card.addEventListener('mousemove', (e) => cardHover(card, letters, e));
    card.addEventListener('touchmove', (e) => cardHover(card, letters, e.touches[0]));
});
