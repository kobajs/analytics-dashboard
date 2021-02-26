# Gist Light

## Environment Variables

```
// .env
REACT_APP_API_URL=api-url/prod
REACT_APP_API_TOKEN=your-token
```

## Requirements

Node v12+

## Installation

1. Download and install [Node](https://nodejs.org/)
2. Clone this repo: `git clone https://github.com/kobajs/analytics-dashboard.git` (HTTPS) or `git clone git@github.com:kobajs/analytics-dashboard.git` (SSH)
3. Install project dependencies: `npm install`

### Development

When adding new components or features, it will refresh automatically, leading to a better Developer Experience:

- `npm start`

### Run tests

Make sure that your tests are okay before refactoring or adding new features:

- `npm run test`

### Run storybook

To run an isolated environment to develop components:

- `npm run storybook`

### Run build

To generate a compiled source code prepared for production distribution:

- `npm run build`

### Run Component Generator (**PLUS**)

To generate a component with all of project standards:

- `npm run generate`

## Requirements

### Task 1

Create an interactive web page that visualizes how average, low and high prices change over time on a selected trade-lane, for a customizable date range. Our stack is based on D3, ReactJS, Redux and Webpack, but you are free to choose anything you like.

The user of the page should be able to search for origin and destination ports, pick the date range they are interested in, and when those are chosen the user should see a graph that displays average, low and high market prices over time.

### Task 2

Imagine that users now want to be able to download the visualization from Task 1 as an image that they can later embed in their presentations and reports. Users want the image to include the graph of the selected price and the color-coded legend.

Describe, using a couple of paragraphs, how you would solve this new user problem. If you can think of alternative solutions, describe them along with their trade-offs.

Answer: 

## Tradeoffs

It's more clear to check each issue to see the design thinking about decisions.

The main points here:

- Because of time: not tested some feature parts, not implemented a customized DateRangePicker, not focused on styles;
- **Redux** x MobX:  to carry an async integration with API Layer;
- **redux-toolkit** x redux from scratch: to save time;
- **Typescript** x Javascript: some interfaces was a proper way to type checking and document at code;
- **Material-UI** x Custom components: to save time;
- **makeStyles** x styled-components: to have easier integration out-of-box with MUI components;
- **Storybook**: to develop isolated components;
- **PlopJS**: to generate the components with the code standards;
- **Theming**: to bring some default styles over MUI components;
- **moment** x date-fns: more experience;
- **recharts** x react-d3-library: more community support and features;
- **react-testing-library** x enzyme: because of behaviour-oriented test + community trends;

## Project Roadmap

Check this [Board](https://github.com/kobajs/analytics-dashboard/projects/1) to see what it was planned and what it was prioritized as next tasks.