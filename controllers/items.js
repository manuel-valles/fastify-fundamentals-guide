const { v4: uuid4 } = require('uuid');
let items = require('../mock/Items.js');

const getItems = (request, reply) => {
  reply.send(items);
};

const getItem = (request, reply) => {
  const id = request.params.id;
  const item = items.find((item) => item.id === id);
  reply.send(item);
};

const addItem = (request, reply) => {
  const { name, price } = request.body;

  const item = {
    id: uuid4(),
    name,
    price,
  };

  items = [...items, item];
  reply.code(201).send(item);
};

module.exports = {
  getItems,
  getItem,
  addItem,
};
