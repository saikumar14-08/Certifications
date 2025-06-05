import express from 'express';
import { graphql } from 'graphql';
import { graphqlHTTP } from 'express-graphql';
import { Schema } from './src/data/schema.js';
import 'dotenv/config'
const root = {
  hello: () => 'Hello world!'
};

const app = express();


// serving static files
app.use(express.static('public'));

// GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema: Schema,
    graphiql: true, // Enable GraphiQL interface

}));

app.listen(process.env.PORT, () => 
    console.log(`Your server is running on port ${process.env.PORT}`)
);
