import {CustomerEntity} from './Customer';
/**
 * add customer to the list
 */


class CustomerAddController {
    static $inject = ['$scope', 'customerService', '$state'];//inject service in controller
    constructor($scope, customerService, $state) {
        //initilize customer object
        $scope.customer = new CustomerEntity(null);
        //action form
        $scope.submitForm = ()=>{
            //check if form is valid
            if ($scope.customerForm.$valid) {
                // add new customer
                let newCusto = customerService.add($scope.customer);
                if(newCusto){
                    // if added redirect to show page
                    $state.go('App.show_customer', {customerId: newCusto.getCustomerID()});
                }
            }
        }
    }
}

export default CustomerAddController;
