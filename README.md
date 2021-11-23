# a-lovely-graphql-server

> See the [Presentation Slides](https://1drv.ms/p/s!AvUc1cvPrJnWvtI2Ha9qbYakUWSBUg?e=E7N6p3) for context!

## Usage

Start off by installing dependencies:

```shell
yarn
```

### GraphQL Server

Start the base GraphQL server:

```shell
yarn start
```

You'll then be able to view the GraphQL API server at http://localhost:4000/graphql.

### Codegen

Next, in a separate terminal, you can trigger code generation based off that GraphQL server:

```shell
yarn gql
```

Generated types will then exist in `src/generated/graphql.ts`.
