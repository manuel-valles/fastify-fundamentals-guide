const fastify = require('fastify')({ logger: true });
const PORT = process.env.PORT || 3000;

fastify.get('/items', (req, res) => {
  res.send({ test: 'Hello World!' });
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
