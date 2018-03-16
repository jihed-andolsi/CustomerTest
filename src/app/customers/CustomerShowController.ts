/**
 * show customer detail
 */
class CustomerShowController {
    public static $inject = [
        "$scope", "$stateParams", "customer", "CustomerService", "$state",
    ]; // inject services to controller
    constructor($scope, $stateParams, customer, CustomerService, $state) {
        if (!customer) {
            $state.go("App.error");
        }
        $scope.customerId = $stateParams.customerId; // get customer id from params
        $scope.customer = customer; // get customer object by id using service
        // delete action
        $scope.del = () => {
            // delete customer from array
            const del = CustomerService.del($stateParams.customerId);
            if (del) {
                // if deleted redirect to page list customer
                $state.go("App.customer_list");
            }
        };
    }
}

export default CustomerShowController;
