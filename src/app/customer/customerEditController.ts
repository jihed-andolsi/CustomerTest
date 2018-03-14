class customerEditController {
    constructor($scope, $stateParams, customer, customerService) {
        $scope.customerId = $stateParams.customerId;
        $scope.customer = customer;

        $scope.submitForm = ()=>{
            if ($scope.customerForm.$valid) {
                //let customer = $scope.customer;
                let edit = customerService.edit($stateParams.customerId, $scope.customer);
                alert(edit);
            }
        }
    }
}
customerEditController.$inject = ['$scope', '$stateParams', 'customer', 'customerService'];
export default customerEditController;
