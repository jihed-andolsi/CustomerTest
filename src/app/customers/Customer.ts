type Customer = {
    customerID: 0,
    name: {
        first: "",
        last: "",
    },
    birthday: "",
    gender: "",
    lastContact: "",
    customerLifetimeValue: 0,
};
class CustomerEntity {
    private customerID;
    private name;
    private birthday;
    private gender;
    private lastContact;
    private customerLifetimeValue;

    constructor(e: Customer | null) {
        const $this = this;
        if (e) {
            $this.customerID = (typeof e !== "undefined"  && e.hasOwnProperty("customerID")) ?  e.customerID : 0;
            $this.name = {
                first: (typeof e !== "undefined"  && e.hasOwnProperty("name")) ? e.name.first : "",
                last: (typeof e !== "undefined" && e.hasOwnProperty("name")) ? e.name.last : "",
            };
            $this.birthday = (typeof e !== "undefined" && e.hasOwnProperty("birthday")) ? e.birthday : "";
            $this.gender = (typeof e !== "undefined" && e.hasOwnProperty("gender")) ? e.gender : "";
            $this.lastContact = (typeof e !== "undefined" && e.hasOwnProperty("lastContact")) ? e.lastContact : "";
            $this.customerLifetimeValue = (typeof e !== "undefined" && e.hasOwnProperty("customerLifetimeValue")) ?
                e.customerLifetimeValue : 0;
        }

    }

    public getCustomerID() {
        return this.customerID;
    }

    public setCustomerID(id: number) {
        this.customerID = id;
    }

    public getFirstName() {
        return this.name.first;
    }
    public setFirstName(firstname: string) {
        this.name.first = firstname;
    }
    public getLastName() {
        return this.name.last;
    }
    public setLastName(lastname: string) {
        this.name.last = lastname;
    }
    public getName() {
        return `${this.getFirstName()} ${this.getLastName()}`;
    }

    public getBirthday() {
        return this.birthday;
    }
    public setBirthday(birthday) {
        this.birthday = birthday;
    }

    public getGender() {
        return this.gender;
    }
    public setGender(gender: string) {
        this.gender = gender;
    }

    public getLastContact() {
        return this.lastContact;
    }
    public setLastContact(lastContact: string) {
        this.lastContact = lastContact;
    }

    public getCustomerLifetimeValue() {
        return this.customerLifetimeValue;
    }

    public setCustomerLifetimeValue(customerLifetimeValue: number) {
        this.customerLifetimeValue = customerLifetimeValue;
    }

}
export {Customer, CustomerEntity};
