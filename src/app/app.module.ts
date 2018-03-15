/**
 * Load angular app
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import MainService from './main/mainService';
import CustomerService from './customers/customerService';
import config from './app.routes';


const MODULE_NAME = 'app';
angular.module(MODULE_NAME, [uiRouter]).config(config)
    .service('mainService', MainService)
    .service('customerService', CustomerService);

export default MODULE_NAME;