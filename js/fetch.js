import { formData } from "./data.js";
export const fetchGet = (x)=>{
    const stage = document.querySelectorAll('.dropDown')
    fetch('https://resume.redberryinternship.ge/api/degrees')
    .then(response=>response.json())
    .then(data=>
        data.forEach(element => {
            const option = document.createElement('option')
            option.textContent = element.title
            stage[x].appendChild(option)
        })
        )
}

export const fetchPost = ()=>{
    fetch('https://resume.redberryinternship.ge/api/cvs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response)
    .then(data => console.log(data))
    .catch(error => console.log(error));
}
