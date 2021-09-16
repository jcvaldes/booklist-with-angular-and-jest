Project for the unit test course

# BookListApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Eliminar jasmine
npm remove @types/jasmine @types/jasminewd2 jasmine-core jasmine-spec-reporter karma-jasmine karma-jasmine-html-reporter karma karma-chrome-launcher karma-coverage -S

## Instalar Jest 

https://github.com/briebug/jest-schematic

```
ng add @briebug/jest-schematic
```

## Levantar el servidor

```
 npm i -g json-server

 $ json-server db.json
 ```

## en setup-jest.ts
 
reemplazar

import 'jest-preset-angular';

por 

import 'jest-preset-angular/setup-jest';
