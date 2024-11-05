// fetchData.js

const API_KEY = 'a7468aff15ad4e2b8150ffb3cee15558'; 

async function fetchFootballData() {
  const url = 'http://api.football-data.org/v4/competitions/';
  
  try {
    console.log('Fetching football data...');
    const response = await fetch(url, {
      headers: { 'X-Auth-Token': API_KEY }
    });
    console.log('Response status:', response.status);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Football data:', data);
  } catch (error) {
    console.error('An error happened:', error);
  }
}

fetchFootballData();