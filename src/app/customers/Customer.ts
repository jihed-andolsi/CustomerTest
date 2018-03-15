class Customer{
    private customerID;
    private name;
    private birthday;
    private gender;
    private lastContact;
    private customerLifetimeValue;

    constructor(e){
        let $this = this;
        $this.customerID = (typeof e != "undefined"  && e.hasOwnProperty('customerID')) ?  e.customerID : 0;
        $this.name = {
            "first": (typeof e != "undefined"  && e.hasOwnProperty('name')) ? e.name.first : "",
            "last": (typeof e != "undefined" && e.hasOwnProperty('name')) ? e.name.last : "",
        }
        $this.birthday = (typeof e != "undefined" && e.hasOwnProperty('birthday')) ? e.birthday : "";
        $this.gender = (typeof e != "undefined" && e.hasOwnProperty('gender')) ? e.gender : "";
        $this.lastContact = (typeof e != "undefined" && e.hasOwnProperty('lastContact')) ? e.lastContact : "";
        $this.customerLifetimeValue = (typeof e != "undefined" && e.hasOwnProperty('customerLifetimeValue')) ? e.customerLifetimeValue : 0;
    }

    getCustomerID(){
        return this.customerID;
    }

    setCustomerID(id){
        this.customerID = id;
    }

    getFirstName(){
        return this.name.first;
    }
    setFirstName(firstname){
        this.name.first = firstname;
    }
    getLastName(){
        return this.name.last;
    }
    setLastName(lastname){
        this.name.last = lastname;
    }
    getName(){
        return `${this.getFirstName()} ${this.getLastName()}`;
    }

    getBirthday(){
        return this.birthday;
    }
    setBirthday(birthday){
        this.birthday = birthday;
    }

    getGender(){
        return this.gender;
    }
    setGender(gender){
        this.gender = gender;
    }

    getLastContact(){
        return this.lastContact;
    }
    setLastContact(lastContact){
        this.lastContact = lastContact;
    }

    getCustomerLifetimeValue(){
        return this.customerLifetimeValue;
    }

    setCustomerLifetimeValue(customerLifetimeValue){
        this.customerLifetimeValue = customerLifetimeValue;
    }

}
export default Customer;