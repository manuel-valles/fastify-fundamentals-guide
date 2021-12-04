const items = require('../mock/Items.js');

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
  handler: (request, reply) => {
    reply.send(items);
  },
};

const getItemOptions = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: (request, reply) => {
    const { id } = request.params;

    const item = items.find((item) => item.id === id);
    reply.send(item);
  },
};

const itemRoutes = (fastify, options, done) => {
  // Get all items
  fastify.get('/items', getItemsOptions);

  // Get item by id
  fastify.get('/items/:id', getItemOptions);

  done();
};

module.exports = itemRoutes;
