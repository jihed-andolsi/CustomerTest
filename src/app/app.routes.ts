/**
 * Configure routes
 */

// load needed controllers
import MainCrtl from './main/MainController';
import CustomerListController from './customers/CustomerListController';
import CustomerEditController from "./customers/CustomerEditController";
import CustomerAddController from "./customers/CustomerAddController";
import CustomerShowController from "./customers/CustomerShowController";
import CustomerNotFoundController from "./customers/CustomerNotFoundController";

class config {
    static  $inject = ['$stateProvider', '$urlRouterProvider']; // inject services to config class
    constructor($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/"); // redirect to / if route not found
        $stateProvider
            // layout of application
            .state('App', {
                templateUrl: 'views/src/app/main/layout.html',
                controller: MainCrtl,
                resolve: {

                },
            })
            // List of customers configuration
            .state('App.customer_list', {
                url: "/",
                views: {
                    'content': {
                        templateUrl: 'views/src/app/customers/views/list.html',
                        controller: CustomerListController,
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
                        templateUrl: 'views/src/app/customers/views/edit.html',
                        controller: CustomerEditController,
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
                        templateUrl: 'views/src/app/customers/views/show.html',
                        controller: CustomerShowController,
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
                        templateUrl: 'views/src/app/customers/views/add.html',
                        controller: CustomerAddController,
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
                        templateUrl: 'views/src/app/customers/views/notFound.html',
                        controller: CustomerNotFoundController,
                    },
                },
                resolve: {

                },
            })
    }
}
export default config;