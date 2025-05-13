const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Allows all origins

// To allow specific origin:
// app.use(cors({ origin: 'https://your-frontend-domain.com' }));

app.get('/data', (req, res) => {
  res.json({ message: 'CORS enabled' });
});

app.listen(3000, () => console.log('Server running on port 3000'));


// // Dummy JavaScript file for sports webpage

// document.addEventListener('DOMContentLoaded', () => {
//     console.log('Sports webpage loaded');

//     // Check if we are on the teams page
//     if (window.location.pathname.includes('teams.html')) {
//         fetchTeamsData();
//     }
// });

// // Function to fetch data from SportRadar API without including the API key in the URL
// function fetchTeamsData() {
//     // const apiUrl = 'https://api.sportradar.com/basketball/trial/v7/en/teams.json';
//     const apiUrl = 'http://localhost:3001/basketball/trial/v7/en/teams.json?api_key=YOUR_API_KEY';
 
//     // Using Fetch API with headers
//     fetch(apiUrl, {
//         headers: {
//             'api_key': 'GXmTJ5RmOM23HAVB5Kao72jdM1ys74rE7OHrIBn1'
//         }
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             updateTeamsSection(data);
//         })
//         .catch(error => console.error('CORS error: ', error));
// }
// // function fetchTeamsData() {
// //     const apiKey = 'GXmTJ5RmOM23HAVB5Kao72jdM1ys74rE7OHrIBn1';
// //     const apiUrl = `https://api.sportradar.com/basketball/trial/v7/en/teams.json?api_key=${apiKey}`;

// //     // Using Fetch API
// //     fetch(apiUrl)
// //         .then(response => response.json())
// //         .then(data => {
// //             console.log(data);
// //             updateTeamsSection(data);
// //         })
// //         .catch(error => console.error('Error fetching data:', error));


// // Function to update the Teams section with fetched data
// function updateTeamsSection(data) {
//     const teamsSection = document.querySelector('.teams');
//     teamsSection.innerHTML = ''; // Clear existing content

//     data.teams.forEach(team => {
//         const teamElement = document.createElement('div');
//         teamElement.classList.add('team');
//         teamElement.innerHTML = `
//             <h3>${team.name}</h3>
//             <p>City: ${team.city}</p>
//             <p>Abbreviation: ${team.abbreviation}</p>
//         `;
//         teamsSection.appendChild(teamElement);
//     });
// }


    
//     // Highlight the active link
//     const currentPage = window.location.pathname.split('/').pop();
//     const navLinks = document.querySelectorAll('nav ul li a');
    
//     navLinks.forEach(link => {
//         if (link.getAttribute('href') === currentPage) {
//             link.classList.add('active');
//         }
//     });


// Dummy JavaScript file for sports webpage

document.addEventListener('DOMContentLoaded', () => {
    console.log('Sports webpage loaded');

    // Check if we are on the teams page
    if (window.location.pathname.includes('teams.html')) {
        fetchTeamsData();
    }
});

// Function to fetch data from SportRadar API without including the API key in the URL
function fetchTeamsData() {
    // const apiUrl = 'https://api.sportradar.com/basketball/trial/v7/en/teams.json';
    const apiUrl = 'http://localhost:3001/basketball/trial/v7/en/teams.json?api_key=YOUR_API_KEY';
 
    // Using Fetch API with headers
    fetch(apiUrl, {
        headers: {
            'api_key': 'GXmTJ5RmOM23HAVB5Kao72jdM1ys74rE7OHrIBn1'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            updateTeamsSection(data);
        })
        .catch(error => console.error('CORS error: ', error));
}
// function fetchTeamsData() {
//     const apiKey = 'GXmTJ5RmOM23HAVB5Kao72jdM1ys74rE7OHrIBn1';
//     const apiUrl = `https://api.sportradar.com/basketball/trial/v7/en/teams.json?api_key=${apiKey}`;

//     // Using Fetch API
//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             updateTeamsSection(data);
//         })
//         .catch(error => console.error('Error fetching data:', error));


// Function to update the Teams section with fetched data
function updateTeamsSection(data) {
    const teamsSection = document.querySelector('.teams');
    teamsSection.innerHTML = ''; // Clear existing content

    data.teams.forEach(team => {
        const teamElement = document.createElement('div');
        teamElement.classList.add('team');
        teamElement.innerHTML = `
            <h3>${team.name}</h3>
            <p>City: ${team.city}</p>
            <p>Abbreviation: ${team.abbreviation}</p>
        `;
        teamsSection.appendChild(teamElement);
    });
}


    
    // Highlight the active link
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });