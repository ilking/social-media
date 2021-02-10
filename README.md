# Objective

Build a mock social media website using React + redux

# Setup

Install with `npm i`

# Run

> npm start

# Design choices

- Uses functional react and hooks over classes for ease of reading, performance boost.
- Redux for shared state management
- Reselect for memoized expensive caclulations (getting comments of a particular post).
  - Using Redux for state, Middleware for all API calls, and [Reselect](https://www.npmjs.com/package/reselect) for reading from redux allows for very easy seperation of concerns and keeps most component files very thin.
  - If I were to implement unit tests here, I would start by writing tests around the selectors.
- scss instead of vanilla css because its just better.
- Opted for bulk fetching comments and posts at startup instead of fetching in chunks for simplicity and because
  - this is a very small app and simplicity makes for easier reading
  - the api is highly reliable and available
  - **If either of these conditions were not true, I'd have started by lazy loading comments only as they were needed for each open post. If performance was still a concern, I'd have used pagination to retrieve posts in chunks. API docs indicate that these features are supported.**
  - If I did implement a lazy loading strategy, I would fetch data from redux using [Re-reselct](https://www.npmjs.com/package/re-reselect) as it allows multiple results to be stored by a selector.
- Chose not to implement any particular react UI library. I'm most familiar with Antd, but it would be overkill here and doing the html/scss manually better demonstrates my abilities.
- Chose not to use a library to handle the comment submission form for simplicity.
