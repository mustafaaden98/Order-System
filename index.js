const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const cors = require('cors');
const schema = require("./TypeDefs");

const app = express();

app.use(cors({origin:"*"}))
app.use('/graphql', graphqlHTTP({
    schema, 
    graphiql: true
}));


app.listen(5000, () => console.log("Server is running at port 5000"));