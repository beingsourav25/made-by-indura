const compliments = [
    "You are the reason I smile every day!😊",
    "The most beautiful soul I know.❤️",
    "You are cuter than a basket full of kittens! 🐱",
    "Your jokes are my daily serotonin boost!😂",
    "You are the queen of my heart... and my snack buddy!🍕",
    "You make my world brighter — like a disco ball but cooler!💃"
];

// Automatically change compliments every 3 seconds
function autoChangeCompliments() {
    const complimentText = document.getElementById('compliment');

    function showCompliment() {
        const randomIndex = Math.floor(Math.random() * compliments.length);
        complimentText.textContent = compliments[randomIndex];
    }

    showCompliment();
    setInterval(showCompliment, 3000);
}

// Floating Hearts Animation
function createHearts() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHearts, 400);

// Secret Message + Confetti
function revealSecret() {
    const secretMessage = document.getElementById('secret-message');
    secretMessage.style.display = 'block';

    setTimeout(() => {
        secretMessage.style.display = 'none';
    }, 3000);

    confettiExplosion();
}

// Confetti Explosion
function confettiExplosion() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 300 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 4 + 1,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5
    }));

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
            p.x += p.speedX;
            p.y += p.speedY;
        });
        requestAnimationFrame(drawParticles);
    }

    drawParticles();
}

// Autoplay Video with Sound on Click
window.onload = () => {
    autoChangeCompliments();

    const video = document.getElementById('bg-video');
    document.body.addEventListener('click', () => {
        video.muted = false;
        video.play();
    }, { once: true });
};
