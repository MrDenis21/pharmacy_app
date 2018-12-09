
let parce_func = (arr) =>{
    arr.forEach(item => {
        let totalOrdersCount = 0;
        item.orderDtails.forEach(order =>{
            totalOrdersCount +=order.ItemsCount;
        });
        if(totalOrdersCount>=item.itemsAvailable) {
            item.needToOrderCount = totalOrdersCount*2;
        } else {
            item.needToOrderCount = 0;
        }

        if(item.itemsAvailable<=3){
            item.needToOrderCount+=5;
        }
        
    });
    return arr;
}

module.exports = {parce_func};