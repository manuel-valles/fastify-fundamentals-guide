const items = require('../mock/Items.js');

const getItems = (request, reply) => {
  reply.send(items);
};

const getItem = (request, reply) => {
  const id = request.params.id;
  const item = items.find((item) => item.id === id);
  reply.send(item);
};

module.exports = {
  getItems,
  getItem,
};
