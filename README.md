# RTK Query Example with JSON Placeholder API

This project demonstrates how to use **RTK Query** to fetch data from the **JSON Placeholder API**. It includes an example of how to use **queries** and **mutations** with RTK Query to handle data fetching and updates in a React app.

## Features

- **Queries**: Fetch a list of posts from the JSON Placeholder API.
- **Mutations**: Create a new post using the API.
- **Caching**: Automatically handles caching of data, avoiding redundant requests.
- **Subscriptions**: Data is kept in the cache as long as there are active subscribers.
- **Manual Refetching**: Allows for manual data refetching when necessary.

## Setup

To run this project locally, follow the steps below:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/rtk-query-example.git
   ```

2. Navigate into the project directory:

   ```bash
   cd rtk-query-example
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the app:

   ```bash
   npm start
   ```

The app will be running at `http://localhost:3000`.

## Usage

The application demonstrates two main actions:

1. **Fetching Posts**: Use the `useGetPostsQuery` hook to fetch a list of posts from the JSON Placeholder API.
2. **Creating Posts**: Use the `useCreatePostMutation` hook to create a new post.

### Example Components

- **ComponentOne**: Displays posts by calling `useGetPostsQuery`.
- **ComponentTwo**: Subscribes to a different query parameter and fetches data.
- **ComponentThree**: Creates a form for creating new posts using `useCreatePostMutation`.

## Caching Behavior

RTK Query automatically caches the fetched data based on:

- The API endpoint definition.
- The serialized query parameters.
- Active subscription reference counts.

Once the data is fetched and cached, it will be reused across all components subscribing to the same query parameters. If no components are subscribed, the data will be removed from the cache after a configurable period (default is 60 seconds).

## Refetching Data

You can manually trigger a refetch of data by calling the `refetch` function returned by the query hook or by dispatching the `initiate` action with the `forceRefetch: true` option.

## License

This project is open source and available under the MIT License.

## YouTube Channel

For more tutorials on React, Redux, and RTK Query, check out my YouTube channel: [@pedrotechnologies](https://www.youtube.com/c/pedrotechnologies).
