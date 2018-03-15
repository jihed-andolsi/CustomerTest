/**
 * shows list of customers
 */
class CustomerListController {
    constructor($scope, customers) {
        $scope.customers = customers; // get list of customer using service resolve
    }
}
CustomerListController.$inject = ['$scope', 'customers'];  //inject service in controller
export default CustomerListController;
