import { currentpath } from "./data";

export function drawPoint(x, y, ctx, size = 2, color = 'black') {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
}

export default function DrawCurrentGraph(ctx) {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;

    const years = Object.keys(currentpath).map(Number);
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);
    const minCO2 = Math.min(...Object.values(currentpath));
    const maxCO2 = Math.max(...Object.values(currentpath));

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw axes
    ctx.beginPath();
    ctx.moveTo(40, 0); // Y-axis
    ctx.lineTo(40, height - 30);
    ctx.lineTo(width, height - 30); // X-axis
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Plot data
    for (let year = minYear; year <= maxYear; year++) {
        const gigatons = currentpath[year.toString()];
        if (!gigatons) continue;

        const x = 40 + ((year - minYear) / (maxYear - minYear)) * (width - 50);
        const y = height - 30 - ((gigatons - minCO2) / (maxCO2 - minCO2)) * (height - 40);

        drawPoint(x, y, ctx, 2, "blue");
    }

    // Optional: draw a few year labels
    ctx.fillStyle = "black";
    ctx.font = "10px sans-serif";
    for (let year = minYear; year <= maxYear; year += 25) {
        const x = 40 + ((year - minYear) / (maxYear - minYear)) * (width - 50);
        ctx.fillText(year.toString(), x - 10, height - 15);
    }

    // Optional: label for y-axis
    ctx.fillText(`${maxCO2} Gt`, 5, 10);
    ctx.fillText(`${minCO2} Gt`, 5, height - 35);
}
