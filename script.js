const fname = document.getElementById('fname')
const surname = document.getElementById('lname')
const form = document.querySelector('.container')
const nameError = document.getElementById('name-error')
const surnameError = document.getElementById('surname-error')
const email =document.getElementById('email')
const emailError = document.getElementById('emailerror')
const rdb1 = document.getElementById('radio1')
const rdb2 = document.getElementById('radio2')
const rdbError = document.getElementById('buttonerror')
const message = document.getElementById('message')
const messageError = document.getElementById('messageerror')
const checkbox = document.getElementById('checkbox')
const checkboxError = document.getElementById('checkboxerror')


form.addEventListener('submit', (e) => {
    
    // for namefields

    if (fname.value === '' || fname.value == null) {
        let messages = []
        messages.push('This field is required')
        if (messages.length > 0) {
            e.preventDefault()
            nameError.innerHTML = messages.join(', ')
        }
    }else{
        nameError.innerHTML = ''
    }

    if(surname.value === '' || surname.value == null){
        let messages = []
        messages.push('This field is required')
        if (messages.length > 0) {
            e.preventDefault()
            surnameError.innerHTML = messages.join(', ')
        }
    }else{
        surnameError.innerHTML = ''
    }

    // for email filed
    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        let messages = []
        messages.push('Please enter a valid email address')
        if (messages.length > 0) {
            e.preventDefault()
            emailError.innerHTML = messages.join(', ')
        }
    }else{
        emailError.innerHTML = ''
    }

    //for radiobutton
    if(rdb1.checked==false && rdb2.checked==false){
        let messages = []
        messages.push('Please select a quiry type')
        if (messages.length > 0) {
            e.preventDefault()
            rdbError.innerHTML = messages.join(', ')
        }
    }else{
        rdbError.innerHTML = ''
    }

    //for message field
    if(message.innerText === '' || message.innerText == null){
        let messages = []
        messages.push('This field is required')
        if (messages.length > 0) {
            e.preventDefault()
            messageError.innerHTML = messages.join(', ')
        }
    }else{
        messageError.innerHTML = ''
    }
    
    //for checkbox
    if(checkbox.checked==false){
        let messages = []
        messages.push('To submit this form, please consent to being contacted')
        if (messages.length > 0) {
            e.preventDefault()
            checkboxError.innerHTML = messages.join(', ')
        }
    }else{
        checkboxError.innerHTML = ''
        e.preventDefault()
        openSuccess()
        
        
    }
})



// for success message
const msg = document.querySelector('#success')

function openSuccess() {
    msg.classList.add('open-success')

    setTimeout(() => {
        closeMessage()
    }, 2000)
    
}

function closeMessage() {
    msg.classList.remove('open-success')
}

