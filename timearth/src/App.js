import { netzerotimes } from "./data"; 
import DrawCurrentGraph from "./drawgraph";
import { useRef, useEffect } from 'react';

function App() {
    const graphRef = useRef(null);

    useEffect(() => {
        const graph = graphRef.current;
        if (graph) {
            // TODO: Add rendering data
        }
    })
    return (
        <div>
            <h1> Welcome to TimEarth (pronounced "time-earth")! </h1>
            <canvas ref={graphRef}></canvas>

            
                
            
            <p id = "sources">
            Sources
            <a href = "https://en-roads.climateinteractive.org/scenario.html?v=25.5.0">En-ROADS</a>
            </p>
        </div>
    )
}

export default App;