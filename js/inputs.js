import { formData } from "./data.js";
export const inputExport = ()=>{
    // FIST PAGE
    const photo_input = document.querySelector('#photo-input');
    var uploaded_image = "";
    photo_input.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        const addPhoto = document.querySelector("#addPhoto");
        addPhoto.style.backgroundImage = `url(${uploaded_image})`;
        addPhoto.style.backgroundPosition = 'center'
        addPhoto.style.backgroundSize='cover'
    })
    reader.readAsDataURL(this.files[0]);
    })
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
        formData.about_me=about.value
    })
    // SECOND PAGE
    const addPosition = document.getElementById('addPosition')
    const position = document.getElementById('position')
    position.addEventListener('input',()=>{
        addPosition.textContent=position.value+','
        formData.position=position.value
    })
    const addEmployer = document.getElementById('addEmployer')
    const employer = document.getElementById('employer')
    employer.addEventListener('input',()=>{
        addEmployer.textContent=employer.value
        formData.employer=employer.value
    })
    const addStart = document.getElementById('addStart')
    const startDate = document.getElementById('startDate-inp')
    startDate.addEventListener('input',()=>{
        addStart.textContent=startDate.value + ' - '
        formData.start_date=startDate.value
    })
    const addDue = document.getElementById('addDue')
    const dueDate = document.getElementById('dueDate-inp')
    dueDate.addEventListener('input',()=>{
        addDue.textContent=dueDate.value
        formData.experiences[0].due_date=dueDate.value
    })
    const addDescription = document.getElementById('addDescription')
    const description = document.getElementById('experience-desc')
    description.addEventListener('input',()=>{
        addDescription.textContent=description.value
        formData.experiences[0].description=description.value
    })
    // THIRD PAGE
    const addInstitute = document.getElementById('addInstitute')
    const institute = document.getElementById('institute')
    institute.addEventListener('input',()=>{
        addInstitute.textContent=institute.value+','
        formData.institute=institute.value
    })
    const addDegree = document.getElementById('addDegree')
    const degree = document.getElementById('degree')
    degree.addEventListener('input',()=>{
        addDegree.textContent=degree.value
        formData.degree=degree.value
    })
    const addDue2 = document.getElementById('addDue2')
    const educFinish = document.getElementById('educFinish')
    educFinish.addEventListener('input',()=>{
        addDue2.textContent=educFinish.value
        formData.educations[0].due_date=educFinish.value
    })
    const addDescription2 = document.getElementById('addDescription2')
    const educDescr = document.getElementById('education-desc')
    educDescr.addEventListener('input',()=>{
        addDescription2.textContent=educDescr.value
        formData.educations[0].description=educDescr.value
        console.log(formData);
    })
}