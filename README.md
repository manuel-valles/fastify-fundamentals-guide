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
