# Sanity.io dynamic field sets

This project tries to implement dynamic fields inside a document while reusing as much as possible of the Sanity Studio core code for actual field rendering.

![Switching between field sets](readme/sanity-dynamic-fields-base.gif)

## Getting started

This project tries to use a local install of `@sanity/cli` to avoid global installs. Because of this you have to do the following to get started:

1. Install dependencies in folder `./` (run `yarn install` or `npm install` here)
2. Install dependencies in folder `./studio` (run `yarn install` or `npm install` here)
3. In root run `yarn start` or `npm start`

The `./studio` folder contains the actual Sanity studio instance.