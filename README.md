# SkeletonAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.1.

## Technology
- Angular 4
- Angular-CLI
- Progressive Web App - PWA
- Material Angular
- MaterializeCSS
- Animate CSS

## Steps to create app

### 1. Docker
    docker run -it -v /var/www:/var/www -p 4200:4200 --name node-front ryubr/alpine-node

### 2. Development server
    cd /var/www/ \
    ng new <project-name> 

### 3 Test your app
    ng server --host 0.0.0.0
Go to you browser and tipe: localhost:4200

## To run this app

### 1. Docker
    docker run -it -v /var/www:/var/www -p 4200:4200 --name node-front ryubr/alpine-node

### 2. Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
