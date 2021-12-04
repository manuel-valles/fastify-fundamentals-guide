const fastify = require('fastify')({ logger: true });
fastify.register(require('./routes/items'));

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (error) {
    fastify.log.erroror(err);
    process.exit(1);
  }
};

start();
