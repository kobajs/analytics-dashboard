![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/kobajs/analytics-dashboard/CI/main) ![Codecov](https://img.shields.io/codecov/c/github/kobajs/analytics-dashboard)

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

#### Answer

##### Requirements

First, I would analyze if the preview feature should be implemented and if it only needs to be an image or PDF is an options. After that, confirm if some format is a requirement. This step will require the first-requirements

I would scratch a wireframe to validate the data visualization (even if is a copy, it's necessary for documentation) with some Product Owner/Manager supposing that it haven't a UI/UX Designer onboard. This step will describe how and what should I put as graph and legend. It will also confirm what focus point the solution should look carefully.

##### Pre-development

I would ping my teammates, because some of them could already solved this and have some guidance through it.

I would investigate how can I transform a HTML into an image, if some canvas is necessary or maybe some transformation is needed.

I would investigate how should I do that with React, if it's possible with Refs or if it's needed to create a special hidden `<div>` to do that.

I would investigate open-source options since it's a common problem.

I would read the documentation of 3's most used solutions to check if it matches with my problem.

I would prioritize into: deterministic, testable, easy, delightful and offers a Library Review to my teammates with the tradeoffs.

I would test each solution into a simpler and isolated problem.

I would pick one of them and document it into some sort of company's technical documentation.
  
As a possible path, if any options matches, I would learn a lot from other solutions to have a base and directions to create mine from scratch.

##### Development

I would review the requirements and make a bullet list of it:
  - [ ] It needs to be an image
  - [ ] It needs to have the selected market positions
  - [ ] It needs to have the color-legend representing the market positions
  - [ ] It needs to have the selected dates
  - [ ] It needs to have the graph representing all of those criterias

I would use TDD to test what I expect first, maybe a download button calling some function and a preview view with some data there.
In parallel, I would be implementing the feature.

I would focus on reusability because it's a known problem with high chances of. Maybe implement into an inner source package to easier that.
If there's some hard issue, I would choose to pair program.

##### Post-development

I would wait the review of teammates.

I would wait some sort of design and product review.

Document the solution.

I would be happy to know that it's a high value problem which I contributed to solve :)

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
