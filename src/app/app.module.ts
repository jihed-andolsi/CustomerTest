/**
 * Load angular app
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import mainService from './main/mainService';
import customerService from './customer/customerService';
import config from './app.routes';


const MODULE_NAME = 'app';
angular.module(MODULE_NAME, [uiRouter]).config(config)
    .service('mainService', mainService)
    .service('customerService', customerService);

export default MODULE_NAME;