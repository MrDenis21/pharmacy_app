
let parce_func = (arr) => {
    arr.forEach(item => {
        let totalOrdersCount = 0;
        item.orderDtails.forEach(order => {
            totalOrdersCount += order.ItemsCount;
        });

        let onePercent = item.itemsAvailable / 100
        let orderedItemsPercent = totalOrdersCount / onePercent

        if (orderedItemsPercent > 60) {
            item.needToOrderCount = Math.round(orderedItemsPercent * onePercent)
        }
        if ((orderedItemsPercent < 60) && (orderedItemsPercent > 30)) {
            item.needToOrderCount = Math.round((orderedItemsPercent * onePercent) / 2)
        }
        if (orderedItemsPercent < 30) {
            item.needToOrderCount = 0
        }

        // Math.round(item.needToOrderCount)
        console.log(item.needToOrderCount)
    })
    return arr
}

module.exports = { parce_func }