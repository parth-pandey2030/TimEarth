

function App() {
    return (
        <>
            <h1> Welcome to TimEarth (pronounced "time-earth")! </h1>
            <canvas id = "currentpath" width={500} height={300}></canvas>
            <p id = "sources">
            Sources
            <a href = "https://en-roads.climateinteractive.org/scenario.html?v=25.5.0">En-ROADS</a>
            </p>
        </>
    )
}

export default App;