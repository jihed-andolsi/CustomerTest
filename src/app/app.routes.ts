import mainCrtl from './main/mainController';
import customerListController from './customer/customerListController';
import customerEditController from "./customer/customerEditController";
import customerAddController from "./customer/customerAddController";

class config {
    constructor($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('App', {
                templateUrl: 'views/src/app/main/layout.html',
                controller: mainCrtl,
                resolve: {

                },
            })
            .state('App.customer_list', {
                url: "/",
                views: {
                    'content': {
                        templateUrl: 'views/src/app/customer/view/list.html',
                        controller: customerListController,
                    },
                },
                resolve: {
                    customers : (customerService)=>{
                        return customerService.getList();
                    },
                },
            })

            .state('App.edit_cutomer', {
                url: "/customer/{customerId}",
                views: {
                    'content': {
                        templateUrl: 'views/src/app/customer/view/edit.html',
                        controller: customerEditController,
                    },
                },
                resolve: {
                    customer : (customerService, $stateParams)=>{
                        return customerService.getById($stateParams.customerId);
                    },
                },
            })
            .state('App.add_customer', {
                url: "/customer",
                views: {
                    'content': {
                        templateUrl: 'views/src/app/customer/view/add.html',
                        controller: customerAddController,
                    },
                },
                resolve: {
                    customer : (customerService, $stateParams)=>{
                        return customerService.getById($stateParams.customerId);
                    },
                },
            })
    }
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export default config;