const person = {
    firstname: 'Jane',
    lastname: 'Doe',
    fullname: function() {
      return this.firstname + ' ' + this.lastname;
    }
  };

 // How many properties does the object have? Name them
 console.log(Object.keys(person).length); // 3 , first name , last name and fullname

