/**
 * shows list of customers
 */
class customerListController {
    constructor($scope, customers) {
        $scope.customers = customers; // get list of customer using service resolve
    }
}
customerListController.$inject = ['$scope', 'customers'];  //inject service in controller
export default customerListController;
