# tslint-no-return

[![npm](https://img.shields.io/npm/v/tslint-no-return.svg)](https://www.npmjs.com/package/tslint-no-return)
[![Build Status](https://travis-ci.org/boiyaa/tslint-no-return.svg?branch=master)](https://travis-ci.org/boiyaa/tslint-no-return) [![Greenkeeper badge](https://badges.greenkeeper.io/boiyaa/tslint-no-return.svg)](https://greenkeeper.io/)

TSLint plugin to disable return statement

## Installation

You'll first need to install [TSLint](https://palantir.github.io/tslint/):

```
$ npm i tslint --save-dev
```

Next, install `tslint-no-return`:

```
$ npm install tslint-no-return --save-dev
```

**Note:** If you installed TSLint globally (using the `-g` flag) then you must also install `tslint-no-return` globally.

## Usage

Add `no-return` to your `tslint.json` configuration file:

```json
{
  "extends": ["tslint-no-return"]
}
```

## Supported Rule

* [`no-return`](docs/rules/no-return.md) - disallow `return` statements
