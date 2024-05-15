document.addEventListener('DOMContentLoaded', function() {
    fetch('https://favqs.com/api/qotd')
      .then(response => response.json())
      .then(data => {
        const quote = data.quote.body;
        document.getElementById('quote').innerText = `"${quote}"`;
      })
      .catch(error => {
        console.error('Error fetching quote:', error);
        document.getElementById('quote').innerText = 'Failed to fetch quote. Please try again later.';
      });
  });
  