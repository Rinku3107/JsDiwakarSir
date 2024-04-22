const singnup=document.getElementById("signup")
console.log(singnup)
singnup.addEventListener("submit" ,(event) => {
 event.preventDefault();

 let name1= document.getElementById("name").value;
 let email1= document.getElementById("email").value;
 let country1= document.getElementById("country").value;
 let phone1= document.getElementById("phone").value;
 let password1= document.getElementById("password").value;


 let userdata={
    name:name1,
    email:email1,
    country:country1,
    phone:phone1,
    password:password1

 }
console.log(userdata);
})

const form= document.getElementById("signin")
console.log("signin");
 form.addEventListener("submit" ,(e)=>{
    e.preventDefault();

    let name1 = document.getElementById("signin-name").value;
    let email1= document.getElementById("signin-email").value;
    let pass1=document.getElementById("signin-password").value;

    let user={
        name:name1,
        email:email1,
        password:pass1
    }
    console.log(user);


 });