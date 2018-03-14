class customerAddController {
    constructor($scope, customerService, $state) {
        $scope.submitForm = ()=>{
            if ($scope.customerForm.$valid) {
                let newCusto = customerService.add($scope.customer);
                if(newCusto){
                    $state.go('App.show_customer', {customerId: newCusto.customerID});
                }
            }
        }
    }
}
customerAddController.$inject = ['$scope', 'customerService', '$state'];
export default customerAddController;
