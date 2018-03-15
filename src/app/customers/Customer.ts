class Customer{
    constructor(){
        this.name = {
            "first": "",
            "last": "",
        }
        this.birthday = '';
        this.gender = '';
        this.lastContact = '';
        this.customerLifetimeValue = 0;
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

    getGender(){
        return this.customerLifetimeValue;
    }

    setCustomerLifetimeValue(customerLifetimeValue){
        this.customerLifetimeValue = customerLifetimeValue;
    }

}
export default Customer;