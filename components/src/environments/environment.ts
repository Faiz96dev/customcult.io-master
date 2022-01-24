// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDc1GaoH2--o_h3txkyy1o1llo2bNnqMjg',
    authDomain: 'customcult-50950.firebaseapp.com',
    databaseURL: 'https://fireship-app.firebaseio.com',
    projectId: 'customcult-50950',
    storageBucket: 'customcult-50950.appspot.com',
    messagingSenderId: '1030682540509',
    appId: '1:1030682540509:web:4d36f05f2c3a367e285e34',
    measurementId: 'G-YTGH0BM7EV'
  },
  // stripe: 'pk_test_m3a5moXVKgThpdfwzKILvnbG'
  stripe: 'pk_live_qSaGVmF1x4X3vIWZmpbgceNU'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
