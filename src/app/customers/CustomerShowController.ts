/**
 * show customer detail
 */
class CustomerController {
    static $inject = ['$scope', '$stateParams', 'customer', 'customerService', '$state']; //inject services to controller
    constructor($scope, $stateParams, customer, customerService, $state) {
        if(!customer){
            $state.go('App.error');
        }
        $scope.customerId = $stateParams.customerId; //get customer id from params
        $scope.customer = customer; // get customer object by id using service
        // delete action
        $scope.del = () => {
            // delete customer from array
            let del = customerService.del($stateParams.customerId);
            if(del){
                //if deleted redirect to page list customer
                $state.go('App.customer_list');
            }
        }
    }
}

export default CustomerController;
