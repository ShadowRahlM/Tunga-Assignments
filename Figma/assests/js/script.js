// filepath: /assests/js/script.js

// Fetch JSON data
fetch('./assets/data/data.json')
  .then(response => response.json())
  .then(data => {
    const timeframes = data.timeframes;
    const timeframe = 'weekly'; // Change this to 'daily' or 'monthly' as needed

    // Update Work Card
    document.getElementById('work-current').textContent = `${timeframes.work.current}hrs`;
    document.getElementById('work-previous').textContent = `Previous - ${timeframes.work.previous}hrs`;

    // Update Play Card
    document.getElementById('play-current').textContent = `${timeframes.play.current}hrs`;
    document.getElementById('play-previous').textContent = `Previous - ${timeframes.play.previous}hrs`;

    // Update Study Card
    document.getElementById('study-current').textContent = `${timeframes.study.current}hrs`;
    document.getElementById('study-previous').textContent = `Previous - ${timeframes.study.previous}hrs`;

    // Update Exercise Card
    document.getElementById('exercise-current').textContent = `${timeframes.exercise[timeframe].current}hrs`;
    document.getElementById('exercise-previous').textContent = `Previous - ${timeframes.exercise[timeframe].previous}hrs`;

    // Update Social Card
    document.getElementById('social-current').textContent = `${timeframes.social.current}hrs`;
    document.getElementById('social-previous').textContent = `Previous - ${timeframes.social.previous}hrs`;

    // Update Self-Care Card
    document.getElementById('self-care-current').textContent = `${timeframes.self-care.current}hrs`;
    document.getElementById('self-care-previous').textContent = `Previous - ${timeframes.self-care.previous}hrs`;
  })
  .catch(error => console.error('Error fetching JSON data:', error));