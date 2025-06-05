import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers.js";

const typeDefs = `
  type Contact {
    id:ID
    firstName: String!
    lastName: String!
    email: String
    company: String
  } 
  
  type Query {
    getContacts: [Contact]
    getOneContact(id: ID!): Contact
  }
  input ContactInput {
    id: ID
    firstName: String!
    lastName: String!
    email: String
    company: String
  }

  type Mutation {
    createContact(input: ContactInput!): Contact
    updateContact(id: ID!, input: ContactInput!): Contact
    deleteContact(id: ID!): String    
  }
`;

const Schema = makeExecutableSchema({
  typeDefs, resolvers
});
export { Schema };