import { formData } from "./data.js";
import { fetchExport } from "./fetch.js";fetchExport();
import { inputExport } from "./inputs.js";inputExport();
import { pageButtonsExport } from "./buttons.js";pageButtonsExport();

// const addFname = document.getElementById('addFname');
// const inputFname = document.getElementById('fname-inp');
// let form = localStorage.getItem('data')
// if(form){
//     console.log(form);
//     console.log(JSON.parse(form));
//     setFormData(JSON.parse(form))
//     console.log(addFname);
//     inputFname.value=formData.name
// }



// fetch('https://resume.redberryinternship.ge/api/cvs', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(formData)
// })
// .then(response => response)
// .then(data => console.log(data))
// .catch(error => console.log(error));