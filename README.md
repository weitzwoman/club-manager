# _Club Manager_

#### _A web application to add and view club members. Epicodus JavaScript Week 3 Independent Project 1/20/2017_

#### By _**Tracie Weitzman**_

## Specifications

#### 1. User can enter Name, Email, Phone, and Role for club member Profiles, and view on page.

#### 2. User can edit Name, Phone, Email, and Role details, and Delete Profiles.

#### 3. User can view all Profiles , or sort by Roles.

#### 4. User can view About club.

## Setup/Installation Requirements

* _In the Command Line, run:_
```
git clone https://github.com/weitzwoman/club-manager
cd club-manager
npm install
bower install
npm install angularfire2 firebase --save
touch src/app/api-keys.ts
```
* _Create a New project in Firebase. Select 'Add Firebase to your web app'. In api-keys.ts file, add your unique key values:_
```
export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
```

* _In the Command Line, run:_
```
ng serve

```
* _Then, in any modern browser, open:_
```
localhost:4200
```

## Support and contact details

_Contact me on Github at [weitzwoman](https://github.com/weitzwoman)_

## Technologies Used

* _HTML_
* _CSS_
  * _Bootstrap_
* _JavaScript_
  * _Typescript_
  * _NodeJS_
  * _Angular 2_

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.


### License

Club Manager is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

Club Manager is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with the Club Manager. If not, see http://www.gnu.org/licenses/.

Copyright (c) 2017 **_Tracie Weitzman**
