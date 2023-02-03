const inputFname = document.getElementById('fname-inp')
const inputLname = document.getElementById('lname-inp')
const right = document.querySelector('.div-personal-right')

// const person={
//     name:'',
//     surname:''
// }
// person.name='giorgi'
// console.log(person);
const spanFname = document.createElement('span')
const spanLname=document.createElement('span')
inputFname.addEventListener('input',()=>{
    spanFname.textContent=inputFname.value+'  '
    right.appendChild(spanFname)
    // person.name=spanFname.value
    console.log(spanFname.value);
})
inputLname.addEventListener('input',()=>{
    spanLname.textContent=inputLname.value
    right.appendChild(spanLname)
    // person.name=spanLname.value
    console.log(spanLname.value);
})