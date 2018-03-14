/**
 * service customer to fetch some api, here we have localy stored data
 */
class customerService{
    constructor(){
        // data json
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
    // get full list of customers, here if we have an API we should use pagination
    getList(){
        return this.data;
    }

    // get customer by id, return object
    getById(id){
        let list = this.getList();
        let [custo]=  list.filter(customer =>{
            if(customer.customerID == id){
                return customer;
            }
        });

        return custo;
    }

    // edit customer by id, return boolean
    edit(customerID, newCustomerValue){
        let custo = this.getById(customerID);
        custo = newCustomerValue;
        return true;
    }


    // add customer to the list
    add(newCustomerValue){
        let list = this.getList();
        let counter = Math.max(...list.map(e=>{return e.customerID})) + 1; // get new id to setup new customer
        newCustomerValue.customerID = counter; //set the new id to the new customer
        this.data.push(newCustomerValue); // push customer to the list
        return newCustomerValue;
    }

    // delete customer from list
    del(customerID){
        // filter list and get new list without customer to delete
        this.data = this.getList().filter(customer =>{
            if(customer.customerID != customerID){
                return customer;
            }
        });

        return true;
    }
}

export default customerService;