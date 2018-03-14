class customerAddController {
    constructor($scope, customerService) {
        $scope.submitForm = ()=>{
            if ($scope.customerForm.$valid) {
                let add = customerService.add($scope.customer)
                alert(add);
            }
        }
    }
}
customerAddController.$inject = ['$scope', 'customerService'];
export default customerAddController;
