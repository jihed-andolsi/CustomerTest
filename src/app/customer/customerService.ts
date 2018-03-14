/**
 * Created by Andolsi on 28/02/2018.
 */
class customerService{
    constructor(){
        this.data = [
            {
                "customerID": 1,
                "name": {
                    "first": "Peter",
                    "last": "Smith"
                },
                "birthday": "1996-10-12",
                "gender": "m",
                "lastContact": "2017-06-01T23:28:56.782Z",
                "customerLifetimeValue": 191.12
            },
            {
                "customerID": 2,
                "name": {
                    "first": "Anna",
                    "last": "Hopp"
                },
                "birthday": "1987-05-03",
                "gender": "w",
                "lastContact": "2017-07-08T13:18:56.888Z",
                "customerLifetimeValue": 50.99
            },
            {
                "customerID": 3,
                "name": {
                    "first": "Christian",
                    "last": "Cox"
                },
                "birthday": "1991-02-21",
                "gender": "m",
                "lastContact": "2017-08-01T11:57:47.142Z",
                "customerLifetimeValue": 0
            },
            {
                "customerID": 4,
                "name": {
                    "first": "Roxy",
                    "last": "Fox"
                },
                "birthday": "1979-06-30",
                "gender": "w",
                "lastContact": "2017-01-2-29T21:08:50.700Z",
                "customerLifetimeValue": 213.12
            },
            {
                "customerID": 5,
                "name": {
                    "first": "Eric",
                    "last": "Adam"
                },
                "birthday": "1969-11-21",
                "gender": "m",
                "lastContact": "2017-03-18T12:20:06.702Z",
                "customerLifetimeValue": 1019.91
            }
        ]
    }
    getList(){
        return this.data;
    }
    getById(id){
        let [custo] = this.filterById(id);
        return custo;
    }

    filterById(id){
        let list = this.getList();
        let custo=  list.filter(customer =>{
            if(customer.customerID == id){
                return customer;
            }
        });

        return custo;
    }

    edit(customerID, newCustomerValue){
        let custos = this.filterById(customerID);
        custos.map(e => {
            e.name.first = newCustomerValue.name.first;
            e.name.last = newCustomerValue.name.last;
            e.birthday = newCustomerValue.birthday;
            e.gender = newCustomerValue.gender;
        })
        return true;
    }

    add(newCustomerValue){
        let list = this.getList();
        let counter = Math.max(...list.map(e=>{return e.customerID})) + 1;
        newCustomerValue.customerID = counter;
        this.data.push(newCustomerValue);
        return newCustomerValue;
    }

    del(customerID){
        this.data = this.getList().filter(customer =>{
            if(customer.customerID != customerID){
                return customer;
            }
        });

        return true;
    }
}

export default customerService;