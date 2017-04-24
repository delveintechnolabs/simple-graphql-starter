const express = require('express');
const router = express.Router();
const GraphHTTP = require('express-graphql');
const GraphApiSchema = require('../graph-api');

const { graphql } = require('graphql');

router.route('/api')
  .post(GraphHTTP({
    schema: GraphApiSchema,
    pretty: true,
    graphiql: true,
    formatError: (error) => {
      return error.message;
    }
  }))
  .get(GraphHTTP({
    schema: GraphApiSchema,
    pretty: true,
    graphiql: true
  }));

module.exports = router;