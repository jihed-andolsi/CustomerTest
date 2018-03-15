import CustomerService from "./../src/app/customers/CustomerService.ts";
import Customer from "./../src/app/customers/Customer.ts";
let assert = require("assert");
describe("Customer service", () => {
    let service;
    beforeEach(() => {
        service = new CustomerService();
        service.setData([
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
            }
        ])
    });


    describe("add customer", () => {
        it("should add customer", () => {
            service.add(new Customer({
                "name": {
                    "first": "Peter 2",
                    "last": "Smith 2"
                },
                "birthday": "1996-10-13",
                "gender": "m",
                "lastContact": "2017-06-01T23:28:56.782Z",
                "customerLifetimeValue": 191.12
            }))
            let expected = [
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
                },{
                    "customerID": 2,
                    "name": {
                        "first": "Peter 2",
                        "last": "Smith 2"
                    },
                    "birthday": "1996-10-13",
                    "gender": "m",
                    "lastContact": "2017-06-01T23:28:56.782Z",
                    "customerLifetimeValue": 191.12
                }
            ]
            assert.equal(JSON.stringify(service.getList()), JSON.stringify(expected));
        });
    });


    describe("edit customer", () => {
        it("should edit customer", () => {
            let idToEdit = 1;
            let expected = new Customer({
                "customerID": idToEdit,
                "name": {
                    "first": "Peter 3",
                    "last": "Smith 3"
                },
                "birthday": "1996-14-13",
                "gender": "m",
                "lastContact": "2017-06-01T23:28:56.782Z",
                "customerLifetimeValue": 191.12
            })
            let edit = service.edit(idToEdit, expected);
            assert.equal(edit, true);
            let result = service.getById(idToEdit);
            assert.equal(JSON.stringify(result), JSON.stringify(expected));
        });
    });



    describe("delete customer", () => {
        it("should delete customer", () => {
            let idToDelete = 1;
            let del = service.del(idToDelete);
            assert.equal(del, true);
            let result = service.getById(idToDelete);
            assert.equal(result, undefined);
        });
    });



});