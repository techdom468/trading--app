
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
      const dashboard = document.querySelector('.dashboard');
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
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    setInterval(updatePrices, 10000);
    searchBar.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        const cards = document.querySelectorAll('.card');
        const dashboard = document.querySelector('.dashboard');
        cards.forEach(card => {
            const stockName = card.querySelector('h3').textContent.toLowerCase();
            if (stockName.includes(query)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
  
    // Fetch portfolio data
    fetch('/api/portfolio')
      .then(response => response.json())
      .then(data => {
        const portfolioList = document.getElementById('portfolio-list');
        portfolioList.innerHTML = ''; // Clear existing content
        data.forEach(stock => {
          const listItem = document.createElement('div');
          listItem.className = 'portfolio-item';
          listItem.innerHTML = `
            <h3>${stock.name}</h3>
            <p>Quantity: ${stock.quantity}</p>
          `;
          portfolioList.appendChild(listItem);
        });
      })
      .catch(error => console.error('Error fetching portfolio data:', error));
  });