// Tormi Laane
// Harjutus 08
// 07.11.2024

// Mündid
function getCoins() {
    const coins = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20]
    const MAX_COIN_VALUE = 2
    let current = 0
    let coinValueList = []
    while (current < coins.length) {
        const currentValue = coins[current]
        if(currentValue > MAX_COIN_VALUE) {
            current++
            continue
        }
        coinValueList.push(currentValue)
        current++
    }
    let currentCoinAmount = 0
    let separateCoinList = []
    for (const coin of coinValueList) {
        if (!separateCoinList.includes(coin))
        {
            separateCoinList.push(coin)
        }
    }
    for (let i = 0; i < separateCoinList.length; i++)
    {
        coin = separateCoinList[i]
        currentCoinAmount = 0
        for (let j = 0; j < coinValueList.length; j++)
        {
            if (coin == coinValueList[j])
            {
                currentCoinAmount++
            }
        }
        document.write(`${separateCoinList[i]} kokku: ${currentCoinAmount}<br />`)
    }
    let allCoinsSum = 0
    for (const coin of coinValueList) {
        allCoinsSum += coin
    }
    document.write(`All coins sum: ${allCoinsSum}`)
}