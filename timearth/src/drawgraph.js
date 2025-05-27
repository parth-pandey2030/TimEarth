import { currentpath } from "./data";

export const ctx = document.getElementById("currentpath").getContext("2d");
export function drawPoint(x, y, size = 1, color = 'black') {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
}

export default function DrawCurrentGraph() {
    for (let i = 25; i <= 100; i++) {
        i += 2000;
        let gigatons = currentpath[i.toString()];
        drawPoint(i, gigatons);
    }
}