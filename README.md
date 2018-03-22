# doitnow

> To do app

 Apply Firebase [(Original: doit-vuejs)](https://github.com/joshua1988/doit-vuejs) <br>

[Demo](https://doitnow-53d8d.firebaseapp.com)

## Change Log
#### Improve User Experience - 2018/03
  1. Close modal by mouse click, 'ESC'
  2. Focus on input after add or clear all items

#### Make a branch for applying Vuex

## Build Setup

``` bash

# create project and setup
> npm install -g vue-cli
> vue init webpack doitnow
> cd doitnow
> npm install
> npm run dev
> npm run build

# Firebase setup and deploy
> npm install firebase vuefire --save
> npm install -g firebase-tools
> firebase login
> firebase init
> firebase deploy

# install vuex
> npm install vuex --save

```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
