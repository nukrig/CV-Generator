export const inputExport = ()=>{
    const addFname = document.getElementById('addFname');
    const inputFname = document.getElementById('fname-inp');
    inputFname.addEventListener('input',()=>{
        addFname.textContent = inputFname.value
        formData.name=inputFname.value
    })
    const addLname = document.getElementById('addLname');
    const inputLname = document.getElementById('lname-inp');
    inputLname.addEventListener('input',()=>{
        addLname.textContent = inputLname.value
        formData.surname=inputLname.value
    })
    const addMail = document.getElementById('addMail')
    const mail = document.getElementById('eMail')
    mail.addEventListener('input',()=>{
        addMail.textContent = mail.value
        formData.email=mail.value
    })
    const addPhone = document.getElementById('addPhone')
    const phone = document.getElementById('number')
    phone.addEventListener('input',()=>{
        addPhone.textContent = phone.value
        formData.phone_number=phone.value
    })
    const aboutMe = document.getElementById('aboutMe')
    const about = document.getElementById('personal-about')
    about.addEventListener('input',()=>{
        aboutMe.textContent = about.value
        formData.experiences=about.value
    })
}