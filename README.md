# doitnow

> To do app

 Apply Firebase [(Original: doit-vuejs)](https://github.com/joshua1988/doit-vuejs) <br>

[Demo](https://doitnow-53d8d.firebaseapp.com)

## Change Log
#### Improve User Experience - 2018/03
  1. Close modal by mouse click, 'ESC'
  2. Focus on input after add or clear all items

#### Apply Vuex (Step1) - 2018/03
  1. Move some flag and input text data to state in store for management by Vuex
  2. Use Vuex Helper

#### Next to do
  1. Use Vuex with Firebase together


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

# install Vuex
> npm install vuex --save

# for using Vuex Helpers (Mapping)
> npm install --save-dev babel-preset-stage-2

```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
