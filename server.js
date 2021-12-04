const fastify = require('fastify')({ logger: true });
const PORT = process.env.PORT || 3000;

const items = require('./mock/items.js');

fastify.get('/items', (request, reply) => {
  reply.send(items);
});

fastify.get('/items/:id', (request, reply) => {
  const { id } = request.params;

  const item = items.find((item) => item.id === id);
  reply.send(item);
});

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (error) {
    fastify.log.erroror(err);
    process.exit(1);
  }
};

start();
