# Serverless HelloeWorld

This repo demonstrate how to deploy a simple node.js(express) server to AWS Lambda.

## Installation

Install dependencies:

`npm install`

Install Serverless globally:

`npm install -g serverless`

## Usage

The `serverless.yml` file describe the entry(index.hello) of our lambda function and runtime environment(aws).

For entry, we need to attach our `hello` function onto `module.exports`.

Then run `sls deploy` to let serverless script deploy to AWS Lambda. By the way, `sls` is the shortcut of `serverless` command.
