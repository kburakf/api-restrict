const tags = ['users'];

module.exports = {
  '/users': {
    post: {
      tags,
      summary: 'Create a new user.',
      parameters: [
        {
          name: 'user',
          in: 'body',
          schema: {
            type: 'object',
            properties: {
              firstName: { type: 'string' },
              lastName: { type: 'string' },
              email: { type: 'string' },
              password: { type: 'string' },
            },
            required: ['firstName', 'lastName', 'password', 'email'],
          },
        },
      ],
      responses: {},
      produces: ['application/json'],
    },
    get: {
      tags,
      summary: 'Get user info by user token.',
      parameters: [
        {
          name: 'token',
          in: 'header',
          type: 'string',
          properties: {
            token: { type: 'string' },
          },
          required: ['token'],
        },
      ],
      responses: {},
    },
  },
  '/users/login': {
    post: {
      tags,
      summary: 'Get token with user login.',
      parameters: [
        {
          name: 'user',
          in: 'body',
          schema: {
            type: 'object',
            properties: {
              email: { type: 'string' },
              password: { type: 'string' },
            },
            required: ['email', 'password'],
          },
        },
      ],
      responses: {},
    },
  },
  '/users/chuck-norris': {
    post: {
      tags,
      summary: 'Get random chuck norris text by user token.',
      parameters: [
        {
          name: 'token',
          in: 'header',
          type: 'string',
          properties: {
            token: { type: 'string' },
          },
          required: ['token'],
        },
      ],
      responses: {},
    },
  },
};
