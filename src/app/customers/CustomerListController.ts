/**
 * shows list of customers
 */
class CustomerListController {
    static $inject =['$scope', 'customers'];  //inject service in controller
        constructor($scope, customers) {
        $scope.customers = customers; // get list of customer using service resolve
    }
}

export default CustomerListController;
