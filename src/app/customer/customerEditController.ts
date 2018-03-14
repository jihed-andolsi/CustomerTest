class customerEditController {
    constructor($scope, $stateParams, customer, customerService, $state) {
        $scope.customerId = $stateParams.customerId;
        $scope.customer = customer;

        $scope.submitForm = ()=>{
            if ($scope.customerForm.$valid) {
                let edit = customerService.edit($stateParams.customerId, $scope.customer);
                if(edit){
                    $state.go('App.show_customer', {customerId: $stateParams.customerId});
                }
            }
        }

    }
}
customerEditController.$inject = ['$scope', '$stateParams', 'customer', 'customerService', '$state'];
export default customerEditController;
