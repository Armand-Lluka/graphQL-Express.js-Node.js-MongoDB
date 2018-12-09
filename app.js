const express = require("express");
const graphqlHttp = require("express-graphql");

const app = express();

app.use(express.json());

app.use("/graphql", graphqlHttp({
    schema: null,
    root: {}
}));

app.listen(3000);



// app.get("/", (req, res, next) => {
//   res.send("hello, world");
// });