let Name = document.getElementsByClassName('name')[0];
let myerror = document.getElementById("error");
let myForm = document.getElementById('myForm');
const mail = document.getElementsByClassName("mail")[0];
const myerror1 = document.getElementById("error1");
const Message = document.getElementsByClassName('message')[0];;
const myerror2 = document.getElementById("error2");
let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const button = document.getElementsByClassName('submit')[0];

button.addEventListener('click', () => {
    let Mail = mail.value;
    let mailvalid = Mail.match(emailRegex);
    let name = Name.value;
    let message = Message.value;

    if (Mail == "") {
        
    myerror1.textContent = "Please enter a valid email (e.g. johnsmit@mail.com)"; 
    myerror1.style.color = "red";
    mail.style.border= '2px solid red';
    mail.style.borderTop= 'none';
    mail.style.borderRight= 'none';
    mail.style.borderLeft= 'none';


    } else if (mailvalid == Mail.match(emailRegex)){
            myerror1.textContent = "Please enter a valid email (e.g. johnsmit@mail.com)"; 
            myerror1.style.color = "red";
            mail.style.border= '2px solid red';
            mail.style.borderTop= 'none';
            mail.style.borderRight= 'none';
            mail.style.borderLeft= 'none';
        }
            if (name == ""){
                myerror.textContent = "Please enter a valid name (e.g. John Smit)"; 
                myerror.style.color = "red";
                Name.style.border= '2px solid red';
                Name.style.borderTop= 'none';
                Name.style.borderRight= 'none';
                Name.style.borderLeft= 'none';
            }

                if (message == ""){
                    myerror2.textContent = "Please enter a message"; 
                    myerror2.style.color = "red";
                    Message.style.border= '2px solid red';
                    Message.style.borderTop= 'none';
                    Message.style.borderRight= 'none';
                    Message.style.borderLeft= 'none';

    }
    
    // myForm.addEventListener("submit", (e){

    // }
    
    });


    






   
   




