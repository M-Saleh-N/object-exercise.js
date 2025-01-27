 //a) Create a person (firstName, lastName, age) object, with a nested address (city, street, zipCode) object
 //b) Add a getFullName method on the person object that prints out the first name and last name
 //c) Access and display the address properties
 //d) Display the full name of Person object using the method you have created

 let person = {
    firstName: 'Saleh',
    lastName: 'Mohammed',
    age: 19,
    address: {
      city: 'Nairobi',
      street: '123 Main St',
      zipCode: '00100'
    },
    getFullName: function(){      
        return `${this.firstName} ${this.lastName}`
    }
  };
  //prints the full name // //d) Display the full name of Person object using the method you have created
  console.log(person.getFullName())

  //accesses and displays the address properties
  console.log(person.address.city)
  console.log(person.address.street)
  console.log(person.address.zipCode)

  //4. Delete the address property in Person
  delete person.address
  