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
        }else
            if (name == ""){
                myerror.textContent = "Please enter a valid name (e.g. John Smit)"; 
                myerror.style.color = "red";
                Name.style.border= '2px solid red';
                Name.style.borderTop= 'none';
                Name.style.borderRight= 'none';
                Name.style.borderLeft= 'none';
            }else

                if (message == ""){
                    myerror2.textContent = "Please enter a message"; 
                    myerror2.style.color = "red";
                    Message.style.border= '2px solid red';
                    Message.style.borderTop= 'none';
                    Message.style.borderRight= 'none';
                    Message.style.borderLeft= 'none';
                    return false

    }
    
    ajaxC(name, Mail, message);
    return true
});

    function ajaxC(name,mail,message){
       
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "traitement.php?submit=true&name=" + name + "&mail=" + mail + "&message=" + message);
    
        if(xhr.status === 200) {
            let response = document.querySelector(".mailvalide");
            response.innerHTML = "<p>" + xhr.responseText + "</p>";
            if(xhr.responseText === "Votre mail a bien Ã©tÃ© envoyÃ© !"){
                response.style.color = "#00bcd4";
                response.style.border = "2px solid #00bcd4";
            } else if(xhr.responseText === "Votre mail n'a pas pu Ãªtre envoyÃ©") {
                response.style.color = "red";
                response.style.border = "2px solid red";
            } else {
                response.style.color = "orange";
                response.style.border = "2px solid orange";
            }
            response.style.display = "block";
        } else {
            console.log(xhr.status);
        }
        xhr.send();
    }


    






   
   




