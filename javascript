const jokeBtn = document.getElementById('jokeBtn');
const jokeParagraph = document.getElementById('joke');

async function fetchJoke() {
  try {
    jokeParagraph.textContent = "Loading joke...";
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const jokeData = await response.json();
    jokeParagraph.textContent = `${jokeData.setup} — ${jokeData.punchline}`;
  } catch (error) {
    console.error('Error fetching joke:', error);
    jokeParagraph.textContent = "Why don't scientists trust atoms? Because they make up everything!";
  }
}

jokeBtn.addEventListener('click', fetchJoke);
