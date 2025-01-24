document.addEventListener('DOMContentLoaded', async () => {
  try {
    // const data = await window.electronAPI.fetchDataFromNavidrome();
    const data = { example: 'static data' }; // Remplacez par des données statiques
    console.log('Data from Navidrome API:', data);
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerText = JSON.stringify(data, null, 2);
  } catch (error) {
    console.error('Error fetching data:', error);
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerText = 'Failed to fetch data from Navidrome API. Please check your network connection and API settings.';
  }
});
