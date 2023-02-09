import { formData } from "./data.js";
import { ifPersonalInput } from "./ifInputValue.js";
import { validateFname,validateLname ,validateEmail,validateNumber } from "./validations.js";
export const inputExport = ()=>{
    // FIST PAGE
    const photo_input = document.querySelector('#photo-input');
    var uploaded_image = "";
    photo_input.addEventListener("change", function () {
        document.querySelector('.personalDiv').style.display='block'
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            uploaded_image = reader.result;
            const addPhoto = document.querySelector("#addPhoto");
            addPhoto.style.backgroundImage = `url(${uploaded_image})`;
            addPhoto.style.backgroundPosition = 'center'
            addPhoto.style.backgroundSize='cover'
        })
        formData.image= reader
        reader.readAsDataURL(this.files[0]);
    })
    const addFname = document.getElementById('addFname');
    const inputFname = document.getElementById('fname-inp');
    inputFname.addEventListener('input',()=>{
        formData.name=inputFname.value.split(' ').join('')
        addFname.textContent = formData.name
        ifPersonalInput(inputFname);
        validateFname()
    })
    const addLname = document.getElementById('addLname');
    const inputLname = document.getElementById('lname-inp');
    inputLname.addEventListener('input',()=>{
        formData.surname=inputLname.value.split(' ').join('')
        addLname.textContent = formData.surname
        ifPersonalInput(inputLname);
        ifPersonalInput(inputFname);
        validateLname()
    })
    const addMail = document.getElementById('addMail')
    const mail = document.getElementById('eMail')
    mail.addEventListener('input',()=>{
        formData.email=mail.value.split(' ').join('')
        addMail.textContent = formData.email
        ifPersonalInput(mail);
        validateEmail()
    })
    const addPhone = document.getElementById('addPhone')
    const phone = document.getElementById('number')
    phone.addEventListener('input',()=>{
        formData.phone_number=phone.value.split(' ').join('')
        addPhone.textContent = formData.phone_number
        ifPersonalInput(phone);
        validateNumber()
    })
    const aboutMe = document.getElementById('aboutMe')
    const about = document.getElementById('personal-about')
    about.addEventListener('input',()=>{
        formData.about_me=about.value
        aboutMe.textContent = formData.about_me
        ifPersonalInput(about);
    })
    // SECOND PAGE
    const addPosition = document.getElementById('addPosition')
    const position = document.getElementById('position')
    position.addEventListener('input',()=>{
        formData.experiences[0].position=position.value
        addPosition.textContent=formData.experiences[0].position+','
    })
    const addEmployer = document.getElementById('addEmployer')
    const employer = document.getElementById('employer')
    employer.addEventListener('input',()=>{
        formData.experiences[0].employer=employer.value
        addEmployer.textContent=formData.experiences[0].employer
    })
    const addStart = document.getElementById('addStart')
    const startDate = document.getElementById('startDate-inp')
    startDate.addEventListener('input',()=>{
        formData.experiences[0].start_date=startDate.value
        addStart.textContent=formData.experiences[0].start_date + ' - '
    })
    const addDue = document.getElementById('addDue')
    const dueDate = document.getElementById('dueDate-inp')
    dueDate.addEventListener('input',()=>{
        formData.experiences[0].due_date=dueDate.value
        addDue.textContent=formData.experiences[0].due_date
    })
    const addDescription = document.getElementById('addDescription')
    const description = document.getElementById('experience-desc')
    description.addEventListener('input',()=>{
        formData.experiences[0].description=description.value
        addDescription.textContent=formData.experiences[0].description
    })
    // THIRD PAGE
    const addInstitute = document.getElementById('addInstitute')
    const institute = document.getElementById('institute')
    institute.addEventListener('input',()=>{
        formData.educations[0].institute=institute.value
        addInstitute.textContent=formData.educations[0].institute+','
    })
    const addDegree = document.getElementById('addDegree')
    const degree = document.getElementById('degree')
    degree.addEventListener('input',()=>{
        formData.educations[0].degree=degree.value
        addDegree.textContent=formData.educations[0].degree
    })
    const addDue2 = document.getElementById('addDue2')
    const educFinish = document.getElementById('educFinish')
    educFinish.addEventListener('input',()=>{
        formData.educations[0].due_date=educFinish.value
        addDue2.textContent=formData.educations[0].due_date
    })
    const addDescription2 = document.getElementById('addDescription2')
    const educDescr = document.getElementById('education-desc')
    educDescr.addEventListener('input',()=>{
        formData.educations[0].description=educDescr.value
        addDescription2.textContent=formData.educations[0].description
    })
}