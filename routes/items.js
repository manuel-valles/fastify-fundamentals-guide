const {
  getItems,
  getItem,
  addItem,
  deleteItem,
  updateItem,
} = require('../controllers/items');

// Item schema
const Item = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    price: { type: 'number' },
  },
};

// Options
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

const deleteItemOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
      },
    },
  },
  handler: deleteItem,
};

const updateItemOptions = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: updateItem,
};

const itemRoutes = (fastify, options, done) => {
  // Get all items
  fastify.get('/items', getItemsOptions);

  // Get item
  fastify.get('/items/:id', getItemOptions);

  // Add item
  fastify.post('/items', addItemOptions);

  // Delete item
  fastify.delete('/items/:id', deleteItemOptions);

  // Update item
  fastify.put('/items/:id', updateItemOptions);

  done();
};

module.exports = itemRoutes;
