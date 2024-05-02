const displayUser = document.getElementById('displayUser');
const submitButton = documnet.getElementById('submitBtn');
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const dobInput = document.getElementById('dobInput');
  


class NewUser{
    constructor(nameInput, ageInput, dobInput){
        this.name = nameInput.value
        this.age = ageInput.value
        this.dob = dobInput.value
    }
}


submitButton.addEventListener('Click',postUser());


let postUser = () =>{
    displayUser.textContent = NewUser.value
}
