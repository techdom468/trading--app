
function updatePrices() {
  fetch('/api/stocks')
      .then(response => response.json())
      .then(data => {
          const cards = document.querySelectorAll('.card');
          data.forEach((stock, index) => {
              const priceElement = cards[index].querySelector('p');
              priceElement.textContent = `Price: $${stock.price}`;
          });
      })
      .catch(error => console.error('Error updating prices:', error));
}
document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.getElementById('search-bar');
  setInterval(updatePrices, 10000);
  searchBar.addEventListener('input', (event) => {
      const query = event.target.value.toLowerCase();
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
          const stockName = card.querySelector('h3').textContent.toLowerCase();
          if (stockName.includes(query)) {
              card.style.display = '';
          } else {
              card.style.display = 'none';
          }
      });
  

  // Fetch stocks data
  fetch('/api/stocks')
      .then(response => response.json())
      .then(data => {
          const dashboard = document.querySelector('.dashboard');
          data.forEach(stock => {
              const card = document.createElement('div');
              card.classList.add('card');
              card.innerHTML = `
                  <h3>${stock.name}</h3>
                  <p>Price: $${stock.price}</p>
              `;
              dashboard.appendChild(card);
          });
      })
      .catch(error => console.error('Error fetching stocks:', error));
});



  // Existing code...

  // Update prices every 10 seconds




  const portfolioForm = document.getElementById('portfolio-form');
  const portfolioList = document.getElementById('portfolio-list');

  portfolioForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const stockName = document.getElementById('portfolio-stock').value;
      const quantity = document.getElementById('portfolio-quantity').value;

      const portfolioItem = document.createElement('div');
      portfolioItem.innerHTML = `<p>${stockName}: ${quantity} shares</p>`;
      portfolioList.appendChild(portfolioItem);

      portfolioForm.reset();
  });
});
