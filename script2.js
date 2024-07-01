document.addEventListener('DOMContentLoaded', () => {
    
    const currencies = document.getElementById('currencies')
    const DOLAR_prices = [ 0, 25, 60 ]          
    
    currencies.addEventListener('change', (event) => {
        const selectCurrency = event.target.value //options
        
        const prices = document.getElementsByClassName('columLeft__price')
        fetchingAPI('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json')
        .then(data => {
            for (let i = 0; i < prices.length; i++){
                if (selectCurrency === 'EUR'){
                    let quantity = prices[i].textContent.substring(1)
                    let convertCoin = Math.ceil(quantity * data.usd.eur)
                    prices[i].textContent = `€${convertCoin}`
                }
                if (selectCurrency === 'USD'){
                    let quantity = prices[i].textContent.substring(1)
                    prices[i].textContent = `$${DOLAR_prices[i]}`
                }
                if (selectCurrency === 'GBP'){
                    let quantity = prices[i].textContent.substring(1)
                    let convertCoin = Math.ceil(quantity * data.usd.gbp)
                    prices[i].textContent = `£${convertCoin}`
                }
            }
        })

    
    })
    
    
    
})

async function fetchingAPI (url) {
    const request = await fetch(url)
    const dataJson = await request.json()

    return dataJson
}

function handleChangeCurrency (currentCoin) {
    const buckett = {
        USD,
        EUR,
        GBP
    }

    if (currentCoin === 'USD'){
        buckett.EUR = price[i].textContent 
    }
}