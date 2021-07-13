
let orders = [
    { id: 1, orderDate: '2021-01-01', customerName: 'Rahul', customerAddress: 'Bangalore', shipDate : '2021-01-04', grossOrderAmount: 2000, totalTax:50, shippingTax:50, totalOrderAmount:2100},
    { id: 2, orderDate: '2021-01-10', customerName: 'Karan', customerAddress: 'Raipur', shipDate : '2021-01-11', grossOrderAmount: 1000, totalTax:40, shippingTax:50, totalOrderAmount:1090},
    { id: 3, orderDate: '2021-01-13', customerName: 'Somjit', customerAddress: 'Nagpur', shipDate : '2021-01-13', grossOrderAmount: 5000, totalTax:100, shippingTax:100, totalOrderAmount:5200},
    { id: 4, orderDate: '2021-01-20', customerName: 'Nafisa', customerAddress: 'Pune', shipDate : '2021-01-21', grossOrderAmount: 2000, totalTax:50, shippingTax:50, totalOrderAmount:2100},
    { id: 5, orderDate: '2021-01-22', customerName: 'Mustafa', customerAddress: 'Mumbai', shipDate : '2021-01-23', grossOrderAmount: 100, totalTax:5, shippingTax:5, totalOrderAmount:110},
    { id: 6, orderDate: '2021-01-22', customerName: 'Salman', customerAddress: 'Kashmir', shipDate : '2021-01-24', grossOrderAmount: 300, totalTax:5, shippingTax:5, totalOrderAmount:110},
    { id: 7, orderDate: '2021-01-23', customerName: 'Sharukh', customerAddress: 'Bangalore', shipDate : '2021-01-25', grossOrderAmount: 4000, totalTax:5, shippingTax:5, totalOrderAmount:110},
    { id: 8, orderDate: '2021-01-24', customerName: 'Ranbir', customerAddress: 'Nagpur', shipDate : '2021-01-26', grossOrderAmount: 5000, totalTax:5, shippingTax:5, totalOrderAmount:110},
    { id: 9, orderDate: '2021-01-25', customerName: 'Sushant', customerAddress: 'Kanpur', shipDate : '2021-01-27', grossOrderAmount: 6000, totalTax:5, shippingTax:5, totalOrderAmount:110},
    { id: 10, orderDate: '2021-01-26', customerName: 'Hrithik', customerAddress: 'Hyderabad', shipDate : '2021-01-28', grossOrderAmount: 1200, totalTax:5, shippingTax:5, totalOrderAmount:110},
    { id: 11, orderDate: '2021-01-22', customerName: 'Varun', customerAddress: 'Goa', shipDate : '2021-01-30', grossOrderAmount: 1400, totalTax:5, shippingTax:5, totalOrderAmount:110}
]


let items = [
    {itemCode : 100, orderId:4, itemDescription: "Sofa", rate: 1000, quantity: 1, tax: 50},
    {itemCode : 101, orderId:4, itemDescription: "Laptop", rate: 1000, quantity: 1, tax: 50},
    {itemCode : 102, orderId:5, itemDescription: "TV", rate: 2000, quantity: 1, tax: 50},
    {itemCode : 103, orderId:5, itemDescription: "Fridge", rate: 3000, quantity: 1, tax: 50},
    {itemCode : 104, orderId:5, itemDescription: "Monitor", rate: 4000, quantity: 1, tax: 50},
    {itemCode : 105, orderId:6, itemDescription: "Mobile", rate: 5000, quantity: 1, tax: 50},
]

module.exports = {orders, items,}