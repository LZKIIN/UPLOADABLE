const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colors = ['#9c1c90', '#c92310', '#aa3b62', '#5e1303', '#b59c6f'];
const circles = [];

class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = (Math.random() - 0.5) * 2;
        this.dy = (Math.random() - 0.5) * 2;
        this.growthRate = Math.random() * 0.5 + 0.05;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.radius += Math.sin(Date.now() * 0.005) * this.growthRate;
        this.radius = Math.max(10, Math.min(50, this.radius));

        this.draw();
    }
}

function init() {
    for (let i = 0; i < 60; i++) {
        const radius = Math.random() * 20 + 10;
        const x = Math.random() * (canvas.width - radius * 2) + radius;
        const y = Math.random() * (canvas.height - radius * 2) + radius;
        const color = colors[Math.floor(Math.random() * colors.length)];
        circles.push(new Circle(x, y, radius, color));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < circles.length; i++) {
        circles[i].update();
    }
}

init();
animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    circles.length = 0;
    init();
});