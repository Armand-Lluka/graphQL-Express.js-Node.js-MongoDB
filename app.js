const express = require("express");
const graphqlHttp = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();

app.use(express.json());

app.use(
    "/graphql",
    graphqlHttp({
        schema: buildSchema(`
        type RootQuery {
            events: [String!]!  
        }

        type RootMutation {
            createEvent(name: String): String
        }
    
        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
        rootValue: {
            events: () => {
                return ["Shopping", "Dreaming", "Coding"];
            },
            createEvent: args => {
                const eventName = args.name;
                return eventName;
            }
        },
        graphiql: true
    })
);

app.listen(3000);

// app.get("/", (req, res, next) => {
//   res.send("hello, world");
// });
