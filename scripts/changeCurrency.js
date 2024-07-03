const API = new Api('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json')
const DOLAR_prices = [0, 25, 60]
const currencies = document.getElementById('currencies')

currencies.addEventListener('change', (event) => {
    const selectCurrency = event.target.value //options

    const prices = document.getElementsByClassName('columLeft__price')

    API.getRequest().then((jsonData) => {

        for (let i = 0; i < prices.length; i++) {

            if (selectCurrency === 'USD') {
                let quantity = prices[i].textContent.substring(1)
                prices[i].textContent = `$${DOLAR_prices[i]}`
            }

            if (selectCurrency === 'EUR') {
                let convertCoin = Math.ceil((prices[i].textContent.substring(1)) * jsonData.usd.eur)
                prices[i].textContent = `€${convertCoin}`
            }

            if (selectCurrency === 'GBP') {
                let convertCoin = Math.ceil((prices[i].textContent.substring(1)) * jsonData.usd.gbp)
                prices[i].textContent = `£${convertCoin}`
            }
        }
    })

})