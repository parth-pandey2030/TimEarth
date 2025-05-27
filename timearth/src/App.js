import { netzerotimes } from "./data";
import DrawCurrentGraph from "./newdrawgraph";
import { useRef, useEffect } from 'react';

function App() {
    const graphRef = useRef(null);

    useEffect(() => {
        const graph = graphRef.current;
        if (graph) {
            const ctx = graph.getContext("2d");
            const width = graph.width;
            const height = graph.height;

            ctx.clearRect(0, 0, width, height);
            DrawCurrentGraph(ctx, width, height);

            // // Error catcher
            // ctx.fillStyle = "red";
            // ctx.fillRect(10, 10, 10, 10);  // Should see a red dot
        }
    }, []);

    return (
        <div>
            <title> TimEarth </title>
            <h1>Welcome to TimEarth (pronounced "time-earth")!</h1>
            <p align = "left"> Gigatons of CO2 Equivalent/year </p>
            <span>
            <canvas ref={graphRef} width={800} height={400} style={{ border: '1px solid black' }} align="left"></canvas>
            <p align = "right"> Largest Emitters as of 2023: <br /> China: 13,260 tons emitted</p>
            </span>
            <p id="sources" style={{ textAlign: 'center' }}>
                Sources <br />
                <a href="https://en-roads.climateinteractive.org/scenario.html?v=25.5.0" color = "red"> En-ROADS </a> <br />
                <a href="https://worldpopulationreview.com/country-rankings/co2-emissions-by-country" color = "red"> World Population Review </a>
            </p>
        </div>
    );
}

export default App;