class customerAddController {
    constructor($scope) {
        $scope.submitForm = ()=>{
            if ($scope.customerForm.$valid) {
                alert('add customer');

                let customer = $scope.customer;
            }
        }
    }
}
customerAddController.$inject = ['$scope'];
export default customerAddController;
