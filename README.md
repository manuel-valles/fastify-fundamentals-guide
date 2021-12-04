# Fastify Fundamentals Guide

**[Fastify](https://www.fastify.io/)** is a fast and low overhead web framework for Node.js. It's comparable to _Express_ and it is very similar in that it is very minimalist. However there are some advantages like a complete [ecosystem](https://www.fastify.io/ecosystem/) of plugins that are offered (`jwt`, `mongodb`, `swagger`,...).

> Using the `REST Client` extension for HTTP request in VSCode.
> <br><br><img src="./images/REST-Client-example.png" width="300">

## Build a REST API

### 1. Set up project

```bash
    $ npm init -y
    $ npm i fastify fastify-swagger uuid
    $ npm i -D nodemon
```

### 2. Basic Server

```js
const fastify = require('fastify')({ logger: true });

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (error) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
```

### 3. Routing

```js
fastify.get('/items/:id', (request, reply) => {
  const { id } = request.params;

  const item = items.find((item) => item.id === id);
  reply.send(item);
});
```

#### 3.1. Options and Validation Schemas

```js
{
  schema: {
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string' }, // if this is changed to 'integer' it will coerce it, e.g. '1' -> 1
            name: { type: 'string' }, // if this is commented out it won't be included in the HTTP response
          },
        },
      },
    },
  },
};
```

To avoid repeating yourself you can create an `Item schema` as follows:

```js
const Item = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
  },
};
```

#### 3.1. Handlers

The routes can be simplified with the handler included in the options:

```js
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

// Get item by id
fastify.get('/items/:id', getItemOptions);
```
