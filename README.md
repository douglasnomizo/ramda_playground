[![Build Status](https://travis-ci.org/douglasnomizo/ramda_playground.svg?branch=master)](https://travis-ci.org/douglasnomizo/ramda_playground)
[![Dependency Status](https://david-dm.org/douglasnomizo/ramda_playground.svg)](https://david-dm.org/douglasnomizo/ramda_playground)
[![Coverage Status](https://coveralls.io/repos/github/douglasnomizo/ramda_playground/badge.svg?branch=master)](https://coveralls.io/github/douglasnomizo/ramda_playground?branch=master)
[![Code Climate](https://codeclimate.com/github/douglasnomizo/ramda_playground/badges/gpa.svg)](https://codeclimate.com/github/douglasnomizo/ramda_playground)

# Ramda Playground

[![Greenkeeper badge](https://badges.greenkeeper.io/douglasnomizo/ramda_playground.svg)](https://greenkeeper.io/)

Playground for testing Ramda functional approach to solve common problems.

Currently with the solution for:

- Convert cucumber.js data table to list of objects (map, prop, splitAt, zipObj)
- Group, sort and map a list of objects (descend, groupBy, head, map, pipe, prop, sortWith)
- Generate timesheets report (\_\_, add, complement, curry, filter, length, map, pathOr, prop, propEq, sum)

## Getting Started

### Prerequisites

[NodeJs](https://nodejs.org/en/download/package-manager/)

### Install:

1. Clone the repository:

```bash
git clone https://github.com/douglasnomizo/ramda_playground.git
```

2. Install Node dependencies:

```bash
yarn install
```

## Tests:

Using [ava](https://github.com/avajs/ava) as the default test runner:

```bash
npm test
```

## Lint:

Using [eslint](http://eslint.org/):

```bash
npm run lint
```

## CI

You can also check the last builds on Tavis-CI:

[https://travis-ci.org/douglasnomizo/ramda_playground](https://travis-ci.org/douglasnomizo/ramda_playground)

## Built With

- [Ramda](http://ramdajs.com/) - The coolest javascript funcional library
- [AVA](https://github.com/avajs/ava) - Used to generate RSS Feeds
- [AirBnB Style Guide](https://github.com/airbnb/javascript) - Keep the code clean and consistent

## Authors

- **Douglas Nomizo**
