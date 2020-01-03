# Animal Adoption noREST project 
noRest project is a platform where a user can sign up or login and see animal list. User can also ask questions about each animal.User can go through all the events happening in the city for adoption arranged my our Pawfect organization.


# Angular features implemented
1. We used router outlet to navigate to different pages using "@angular/router".
2. Bootstrap used for awesome css using "@ng-bootstrap/ng-bootstrap".
3. Input and Output to switch between components
4. Activated router to fetch data from URL.
5. Angular material for buttons, fonts, icons, card layout and styling.
6. Matdialog for opening components in a dialog box.
7. Mobiscoll angular calendar to display events.

## Installation
Use angular v8.2.20,nodejs v10.16.3 and mongoDB database
### To run NodeJS
1. Clone the repository `git clone git@github.com:neu-mis-info6150-fall-2019/final-project-norest.git`.
2. Navigate to project directory `cd final-project-norest/Backend`.
3. Run `npm init`.
4. Run `npm install`.
5. Run `npm i express`.
6. Run `npm i mongoose`.
7. Run `npm i nodemon`.
8. Run `npm i body-parser`.
8. Run `npm i nodemailer`.
9. Run `npm i cors`.
10. Run `npm i dotenv`.

### To run angular app
1. Navigate to project directory `cd final-project-norest/Frontend`.
2. npm i -g @angular/cli 
3. npm install @mobiscroll/angular-lite --save
4. npm i mobiscroll config angular
5. npm i ng-circle-progress

## Development server

1. Run `node server.js` for a Nodejs server to connect to Backend.
2. Run `ng serve -o` for a dev server. It loads `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
