const url = 'https://open-weather13.p.rapidapi.com/city/landon';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6e7b2b50b4mshe55f7b8c08f011dp17c534jsnc98fca49d2c3',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
};

async function fetchData() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchData(); // Call the async function to execute the code
