const express = require('express');
const { createCanvas } = require('canvas');

app = express();

const seededRandom = (seed) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

const getRandomHslColor = (text) => {
    let charSum = 0 // สร้าง seed
    for (let i = 0; i < text.length; i++) {
        charSum += text.charCodeAt(i) * i + 1
    }

    const h = Math.floor(seededRandom(charSum) * 361); // 0 - 360
    const s = Math.floor(seededRandom(charSum + 1) * 31) + 30; // 30 - 60%
    const l = Math.floor(seededRandom(charSum + 2) * 21) + 30; // 20 - 50%
    return `hsl(${h}, ${s}%, ${l}%)`;
}

app.get('/', (req, res) => {
    const param = req.query.name || "US";
    const size = parseInt(req.query.size) || 65;
    let text = param.split(" ");
    if (text.length > 1) {
        text = text[0][0] + text[text.length - 1][0];
    } else {
        text = text[0].substring(0, 2)
    }
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');


    ctx.fillStyle = getRandomHslColor(param);
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = `normal ${size / 2}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillText(text, size / 2, size / 2);

    res.setHeader('Content-Type', 'image/png');
    canvas.pngStream().pipe(res);
})


app.listen(5000, () => {
    console.log("Server is running...")
})