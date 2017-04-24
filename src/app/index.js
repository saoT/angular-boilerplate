import angular from 'angular';

import '../style/app.css';

//------- IMPORT controllers ------//
import boot from './boot';

let app = angular.module('app', []);

app.directive('boot', boot);

export default app;