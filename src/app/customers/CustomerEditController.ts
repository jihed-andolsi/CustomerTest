/**
 * fetch and edit customer by id
 */
class CustomerEditController {
    constructor($scope, $stateParams, customer, customerService, $state) {
        // check if customer is found
        if(!customer){
            $state.go('App.error');
        }
        $scope.customerId = $stateParams.customerId; // get id of customer from params
        $scope.customer = customer; // get customer by id service resolve
        // submit form action
        $scope.submitForm = ()=>{
            // check if form is valid
            if ($scope.customerForm.$valid) {
                // edit customer
                let edit = customerService.edit($stateParams.customerId, $scope.customer);
                if(edit){
                    //redirect to show page
                    $state.go('App.show_customer', {customerId: $stateParams.customerId});
                }
            }
        }

    }
}
CustomerEditController.$inject = ['$scope', '$stateParams', 'customer', 'customerService', '$state']; //inject service in controller
export default CustomerEditController;
