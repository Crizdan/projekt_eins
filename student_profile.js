// getting reference to html elements//
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const studentId = document.getElementById("studentId");
const year = document.getElementById("year");
const bio = document.getElementById("bio");

const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");
const bioCount = document.getElementById("bioCount");

//BIO CHARACTER COUNTER 
// (every time the user types in the bio, it update the character count)
bio.addEventListener("input", function(){
    let count = bio.value.length;
    bioCount.textContent = `${count}/ 400 characters`
} )

//EMAIL VALIDATION FUNCTION
//this function will check if the email follows a valid format
function validateEmail(emailValue){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(emailValue);
}

//FORM SUBMISSION
submitBtn.addEventListener("click",function(event){
    //prevent page refresh
    event.preventDefault();
    //removes previous messages
    message.innerHTML = "";
    //remove extra spaces
    const nameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const studentIdValue = studentId.value.trim();

    // CHECK EMPTY FIELDS
    if(
        nameValue ===""||
        emailValue ===""||
        studentId ===""||
        year.value ===""
    ){
        message.innerHTML = 
        `⚠ Please complete all required fields.`;
        message.style.color = "red";

        return
    }
    //EMAIL FORMAT CHECK
    if (!validateEmail(emailValue)){
        message.innerHTML = "⚠ Please enter a valid email address.";
        message.style.color = "red";
        return
    }
    //BIO LENGTH CHECK
    if (bio.value.length > 400){
        message.innerHTML = "⚠ Bio cannot exceed 300 characters";
        message.style.color = "red";
        return;
    }
    //SUCCESS MESSAGE
    message.innerHTML = `✅ Profile submitted successfully.
    Welcome ${nameValue}!`
    message.style.color = "green";
    //CONSOLE OUTPUT
    console.log("Student Profile");
    console.log({
        fullName: nameValue,
        email: emailValue,
        studentId : studentIdValue,
        year: year.value,
        bio : bio.value
    });
});