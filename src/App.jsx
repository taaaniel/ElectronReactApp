import React from 'react';
import ReactDOM from 'react-dom';

async function clicked() {
    const result = await myApp.sayHello("Hello from the renderer is here");
    console.log(result)
}

ReactDOM.render(
    <div>
        <button onClick={clicked}>Click Me</button>
        <h2>Hello from React in Electron!</h2>
    </div>
, document.getElementById("root"));