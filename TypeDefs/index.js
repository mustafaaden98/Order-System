const {makeExecutableSchema} = require('@graphql-tools/schema');
let {orders, items} = require('../Data');

//Type Defs 
const typeDefs = `
    type Order {
        id: Int!,
        orderDate: String!,
        customerName: String!,
        customerAddress: String!,
        shipDate: String!,
        grossOrderAmount: Float!,
        totalTax: Float!,
        shippingTax: Float!,
        totalOrderAmount: Float!, 
        items: [Item]!
    }
    type Item {
        itemCode: Int,
        orderId: Int,
        itemDescription: String,
        rate: Float,
        quantity: Int,
        tax: Float
    }
    type Query {
        getOrders: [Order]
        getItems(orderId:Int): [Item]
        getOrderById(orderId: Int) : [Order]
        getFilteredOrder(search: String) : [Order]
    }
    input ItemList {
        itemDescription: String!,
        rate: Float!,
        quantity: Int!,
    }
    type Mutation {
        addOrder(orderDate: String, customerName: String, customerAddress: String, shipDate: String, grossOrderAmount: Float,
            totalTax: Float, shippingTax: Float, totalOrderAmount: Float, itemsL : [ItemList] ): Order
        deleteOrder(id: Int!): [Order]
        updateOrder(id: Int!, customerName: String, customerAddress: String): Order
    }
`;
//Resolvers
const resolvers = {
    Query: {
        //To get all the orders
        getOrders: (obj, args, context, info) => {
            return orders;
        }, 
        //To get orders by Id
        getOrderById: (obj, args, context, info) => {
            const {orderId} = args;
            return orders.filter(order => order.id == orderId);
        },
        //To get items list of a particular order
        getItems: (obj, args, context, info) => {
            const {orderId} = args;
            return items.filter(item => item.orderId == orderId);
        },
        //To get filtered orders
        getFilteredOrder: (obj, args, context, info) => {
            const {search} = args;
            let filteredOrder = orders.filter(order => order.customerName.toLowerCase().includes(search.toLowerCase()));
            return filteredOrder;
        }
    },
    Mutation: {
        //To add new order
        addOrder: (obj, args, context, info) => {
            try{
                const {customerName, customerAddress, orderDate, shipDate,grossOrderAmount,totalTax, shippingTax, totalOrderAmount, itemsL} = args;
                const id = Math.floor(Math.random() * 1000); 
                const itemCode = Math.floor(Math.random() * 1000); 
                let itemsArray = JSON.parse(JSON.stringify(itemsL));
                itemsArray = itemsArray.map((item, index) => {
                    item['orderId'] = id;
                    item['itemCode'] = itemCode;
                    item['tax'] = 20;
                    return item
                })
                const order = {
                    id: id,
                    customerName: customerName,
                    customerAddress: customerAddress,
                    orderDate: orderDate,
                    shipDate: shipDate,
                    grossOrderAmount: grossOrderAmount,
                    totalTax: totalTax,
                    shippingTax: shippingTax,
                    totalOrderAmount: totalOrderAmount, 
                }
                orders.push(order);
                items = [...items, ...itemsArray];
                return order
            }catch(error){
                console.log("Error", error);
            }

        }, 
        //To Update existing order
        updateOrder: (obj,args, context, info) => {
            const {id, customerName, customerAddress} = args;
            let order = orders.find(order => order.id == id);
            if(customerName) order['customerName'] = customerName;
            if(customerAddress) order['customerAddress'] = customerAddress;
            return order;
        }, 
        // To delete order
        deleteOrder: (obj,args, context, info) => {
            const {id} = args;
            let newOrderslist = orders.filter(order => order.id != id);
            orders = [...newOrderslist];
            return newOrderslist
        }
    },
    // Field query for Items in Order
    Order:{
        items:(obj, args, context, info) => {
            return items.filter(item => item.orderId == obj.id)
        }
    },
}
//Schema
const schema = makeExecutableSchema({
    typeDefs : typeDefs,
    resolvers
})

module.exports = schema;