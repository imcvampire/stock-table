# Stock table

## Description
This dir contains source code for client webapp.

## Requirements:
```
node: ^8.5.0
npm: ^5.3.0
```

## Install dependencies:

```
npm install
```

## How to  start development:

```
npm start
```

## How to build: 

```
npm run build
```

## How to test:

In watch mode: `npm run test`

In coverage mode: `npm run test:coverage`

## FAQ:

> Q: Why don't you use Redux(MobX, ...)?
>
> A: This is simple app with 2 routes and 1 state which has 2 array in root component. So using 
some library state management is overkill. Moreover just using state and props brings better 
performance.

> Q: App crashs in iOS 9 and below?
>
> A: I use [Intl](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl) API in this app. 
Right now, it isn't available in iOS 9 and below, but I'm too lazy to include 1 polyfill so sorry ...

> Q: App isn't show any data?
>
> A: You need to start server first. 
