import CustomerService from "./../src/app/customers/CustomerService.ts";
import {CustomerEntity} from "./../src/app/customers/Customer.ts";
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
            service.add(new CustomerEntity({
                "name": {
                    "first": "Peter 2",
                    "last": "Smith 2"
                },
                "birthday": "1996-10-13",
                "gender": "m",
                "lastContact": "2017-06-01T23:28:56.782Z",
                "customerLifetimeValue": 191.12
            }))
            const expected = [
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
            const idToEdit = 1;
            const expected = new CustomerEntity({
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
            const edit = service.edit(idToEdit, expected);
            assert.equal(edit, true);
            const result = service.getById(idToEdit);
            assert.equal(JSON.stringify(result), JSON.stringify(expected));
        });
    });



    describe("delete customer", () => {
        it("should delete customer", () => {
            const idToDelete = 1;
            const del = service.del(idToDelete);
            assert.equal(del, true);
            const result = service.getById(idToDelete);
            assert.equal(result, undefined);
        });
    });



});