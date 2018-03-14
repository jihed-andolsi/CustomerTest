class customerController {
    constructor($scope, $stateParams, customer, customerService, $state) {
        $scope.customerId = $stateParams.customerId;
        $scope.customer = customer;
        $scope.del = () => {
            let del = customerService.del($stateParams.customerId);
            if(del){
                $state.go('App.customer_list');
            }
        }
    }
}
customerController.$inject = ['$scope', '$stateParams', 'customer', 'customerService', '$state'];
export default customerController;
