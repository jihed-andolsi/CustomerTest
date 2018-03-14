class customerController {
    constructor($scope, $stateParams, customer) {
        $scope.customerId = $stateParams.customerId;
        $scope.customer = customer;
    }
}
customerController.$inject = ['$scope', '$stateParams', 'customer'];
export default customerController;
