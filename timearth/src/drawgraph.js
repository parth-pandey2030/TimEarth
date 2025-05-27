import { currentpath } from "./data";

export function drawPoint(x, y, ctx, size = 1, color = 'black') {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
}

export default function DrawCurrentGraph(ctx) {
    for (let i = 25; i <= 100; i++) {
        i += 2000;
        let gigatons = currentpath[i.toString()];
        drawPoint(i, gigatons, ctx);
    }
}