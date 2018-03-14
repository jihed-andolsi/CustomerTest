class customerListController {
    constructor($scope, customers) {
        $scope.customers = customers;
    }
}
customerListController.$inject = ['$scope', 'customers'];
export default customerListController;
