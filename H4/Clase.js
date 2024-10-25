const canvas = document.getElementById('circlePattern');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawCircles();
}

function drawCircles() {
    const Radio = 20;  
    const Espacio = 2.5 * Radio;  

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate how many rows and columns fit in the window
    const columns = Math.floor(canvas.width / Espacio);
    const rows = Math.floor(canvas.height / Espacio);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            // Alternating color for circles (similar to your reference)
            ctx.beginPath();
            const color = (col + row) % 2 === 0 ? 'cyan' : 'pink';
            ctx.fillStyle = color;

            // Calculate x, y position of each circle
            const x = col * Espacio + Radio;
            const y = row * Espacio + Radio;

            // Draw the circle
            ctx.arc(x, y, Radio, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = 'yellow';  // Add a border similar to your image
            ctx.stroke();
        }
    }
}

// Resize the canvas when the window is resized
window.addEventListener('resize', resizeCanvas);

// Initial canvas size setup and draw the circles
resizeCanvas();