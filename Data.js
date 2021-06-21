
let orders = [
    { id: 1, orderDate: '2021-01-01', customerName: 'Rahul', customerAddress: 'Bangalore', shipDate : '2021-01-04', grossOrderAmount: 2000, totalTax:50, shippingTax:50, totalOrderAmount:2100},
    { id: 2, orderDate: '2021-01-10', customerName: 'Karan', customerAddress: 'Raipur', shipDate : '2021-01-11', grossOrderAmount: 1000, totalTax:40, shippingTax:50, totalOrderAmount:1090},
    { id: 3, orderDate: '2021-01-13', customerName: 'Somjit', customerAddress: 'Nagpur', shipDate : '2021-01-13', grossOrderAmount: 5000, totalTax:100, shippingTax:100, totalOrderAmount:5200},
    { id: 4, orderDate: '2021-01-20', customerName: 'Nafisa', customerAddress: 'Pune', shipDate : '2021-01-21', grossOrderAmount: 2000, totalTax:50, shippingTax:50, totalOrderAmount:2100},
    { id: 5, orderDate: '2021-01-22', customerName: 'Mustafa', customerAddress: 'Mumbai', shipDate : '2021-01-23', grossOrderAmount: 100, totalTax:5, shippingTax:5, totalOrderAmount:110}
]


let items = [
    {itemCode : 10, orderId:4, itemDescription: "Sofa", rate: 1000, quantity: 1, tax: 50},
    {itemCode : 11, orderId:4, itemDescription: "Laptop", rate: 1000, quantity: 1, tax: 50},
]

module.exports = {orders, items,}