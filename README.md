# doitnow

> To do app

예제에 Firebase 적용 [(원본: doit-vuejs)](https://github.com/joshua1988/doit-vuejs) <br>

##[Demo](https://doitnow-53d8d.firebaseapp.com)

## Build Setup

``` bash

# create project ans setup
npm install -g vue-cli
vue init webpack doitnow
cd doitnow
npm install
npm run dev
npm run build

# Firebase setup
npm install firebase vuefire --save
npm install -g firebase-tools
firebase login
firebase init
firebase deploy

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
