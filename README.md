# SpaceX

This project is a test case utilizing the Vite build tool, Apollo Client for GraphQL, Redux Toolkit for global state management, and Material-UI framework. The project is structured based on the Atomic Design methodology.

## Installation

1. Clone the repository:
2. npm install OR yarn
3. npm run dev OR yarn Dev

## Technologies Used

- Vite
- Apollo Client
- Redux Toolkit
- Material-UI
- React
- TypeScript

## Environment Variables

The project uses environment variables for configuration. Create a `.env` file in the root directory of the project and add the following variable:

VITE_API=https://spacex-production.up.railway.app

## GraphQL Schema

To download the GraphQL schema and generate TypeScript types, you can use the following npm scripts:

- `schema:download`: Downloads the schema from the specified endpoint.
- `schema:generate-watch`: Generates TypeScript types based on the downloaded schema and watches for changes.

## Known Issues

- The filter for launches list is not working properly due to server, I pass the filter but it doesn't work.