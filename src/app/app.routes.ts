/**
 * Configure routes
 */

// load needed controllers
import mainCrtl from './main/mainController';
import customerListController from './customer/customerListController';
import customerEditController from "./customer/customerEditController";
import customerAddController from "./customer/customerAddController";
import customerShowController from "./customer/customerShowController";
import customerNotFoundController from "./customer/customerNotFoundController";

class config {
    constructor($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/"); // redirect to / if route not found
        $stateProvider
            // layout of application
            .state('App', {
                templateUrl: 'views/src/app/main/layout.html',
                controller: mainCrtl,
                resolve: {

                },
            })
            // List of customers configuration
            .state('App.customer_list', {
                url: "/",
                views: {
                    'content': {
                        templateUrl: 'views/src/app/customer/views/list.html',
                        controller: customerListController,
                    },
                },
                resolve: {
                    customers : (customerService)=>{
                        return customerService.getList();
                    },

                },
            })
            // edit customer configuration
            .state('App.edit_cutomer', {
                url: "/customer/edit/{customerId}",
                views: {
                    'content': {
                        templateUrl: 'views/src/app/customer/views/edit.html',
                        controller: customerEditController,
                    },
                },
                resolve: {
                    customer : (customerService, $stateParams)=>{
                        return customerService.getById($stateParams.customerId);
                    },

                },
            })
            // show customer configuration
            .state('App.show_customer', {
                url: "/customer/show/{customerId}",
                views: {
                    'content': {
                        templateUrl: 'views/src/app/customer/views/show.html',
                        controller: customerShowController,
                    },
                },
                resolve: {
                    customer : (customerService, $stateParams)=>{
                        return customerService.getById($stateParams.customerId);
                    },
                },
            })
            // add customer configuration
            .state('App.add_customer', {
                url: "/customer",
                views: {
                    'content': {
                        templateUrl: 'views/src/app/customer/views/add.html',
                        controller: customerAddController,
                    },
                },
                resolve: {

                },
            })
            // show not found if customer not found
            .state('App.error', {
                url: "/customer/notFound",
                views: {
                    'content': {
                        templateUrl: 'views/src/app/customer/views/notFound.html',
                        controller: customerNotFoundController,
                    },
                },
                resolve: {

                },
            })
    }
}

config.$inject = ['$stateProvider', '$urlRouterProvider']; // inject services to config class
export default config;