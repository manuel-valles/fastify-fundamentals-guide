const { getItems, getItem, addItem } = require('../controllers/items');

// Item schema
const Item = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    price: { type: 'number' },
  },
};

// Options for get all items
const getItemsOptions = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: Item,
      },
    },
  },
  handler: getItems,
};

const getItemOptions = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: getItem,
};

const addItemOptions = {
  schema: {
    body: {
      type: 'object',
      required: ['name', 'price'],
      properties: {
        name: { type: 'string' },
        price: { type: 'number' },
      },
    },
    response: {
      201: Item,
    },
  },
  handler: addItem,
};

const itemRoutes = (fastify, options, done) => {
  // Get all items
  fastify.get('/items', getItemsOptions);

  // Get item by id
  fastify.get('/items/:id', getItemOptions);

  // Add an item
  fastify.post('/items', addItemOptions);

  done();
};

module.exports = itemRoutes;
