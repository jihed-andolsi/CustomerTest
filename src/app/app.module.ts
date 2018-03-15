/**
 * Load angular app
 */
import * as angular from 'angular';
import uiRouter from 'angular-ui-router';

import MainService from './main/mainService';
import CustomerService from './customers/customerService';
import Config from './app.routes';


const MODULE_NAME = 'app';
let App = angular.module(MODULE_NAME, [uiRouter])
    .config(Config)
    .service('mainService', MainService)
    .service('customerService', CustomerService);

export default MODULE_NAME;