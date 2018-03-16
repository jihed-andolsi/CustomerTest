/**
 * fetch and edit customer by id
 */
class CustomerEditController {
    public static $inject = [
        "$scope", "$stateParams", "customer", "CustomerService", "$state",
    ]; // inject service in controller
    constructor($scope, $stateParams, customer, CustomerService, $state) {
        // check if customer is found
        if (!customer) {
            $state.go("App.error");
        }
        $scope.customerId = $stateParams.customerId; // get id of customer from params
        $scope.customer = customer; // get customer by id from service resolve
        // submit form action
        $scope.submitForm = () => {
            // check if form is valid
            if ($scope.customerForm.$valid) { // edit customer
                const edit = CustomerService.edit($stateParams.customerId, $scope.customer);
                if (edit) {
                    // redirect to show page
                    $state.go("App.show_customer", {customerId: $stateParams.customerId});
                }
            }
        };
    }
}

export default CustomerEditController;
