const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("myApp", {
  sayHello: (arg) => ipcRenderer.invoke("sayHello", arg),
});

console.log("preload");
