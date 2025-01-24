const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  
  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});


const { ipcMain } = require('electron');
const axios = require('axios');

ipcMain.handle('fetch-data-from-navidrome', async (event) => {
  try {
    const response = await axios.get('https://music.jefe.ovh/api/endpoint', {
      headers: {
        'Authorization': 'Bearer YOUR_API_TOKEN'
      }
    });
    console.log('API Response:', response.data); // Ajoutez ce log
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Navidrome API:', error);
    throw error;
  }
});
