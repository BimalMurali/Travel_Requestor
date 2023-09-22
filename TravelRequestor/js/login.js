//document addEventListener
var admin='bimal';
var adminPwd='12345'
var employee='rohan';
var employeePwd='123';
document.addEventListener('DOMContentLoaded',function(){

    

    //content
    const form=document.getElementById('travelForm');
    const nameInput=document.getElementById('txtname');
    const passInput=document.getElementById('pwd');

    //Error message
    const passError= document.getElementById('passError');
    const nameError= document.getElementById('NameError');
    const passwordError=document.getElementById('pwd');

    //form addEventListener

    form.addEventListener('submit',function(event){
        //prevent form submission
        event.preventDefault();
        //validation fullname
        if(!nameInput.value.trim()){
            nameError.textContent='name is required';

        }
        else{
            nameError.textContent='';
        }

         //validation password
         if(!passInput.value.trim()){
            passError.textContent='password is required';

        }
        else{
            passError.textContent='';
        }


        //checking for username and password
        if(nameInput.value===admin && passInput.value===adminPwd){
            //redirect to admin home page
            window.location.href = "adminPage.html";
        }
        else if(nameInput.value===employee && passInput.value===employeePwd){
            // redirect to employee home page 
            window.location.href="employeePage.html"
        }
        else{
            //print error message
            passError.textContent='Please enter valid username and password'

        }
        


    });
    



});