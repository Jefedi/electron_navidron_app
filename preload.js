const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  fetchDataFromNavidrome: () => ipcRenderer.invoke('fetch-data-from-navidrome'),
});
