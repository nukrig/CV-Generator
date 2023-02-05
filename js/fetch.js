export const fetchExport = ()=>{
    const stage = document.getElementById('degree')
    fetch('https://resume.redberryinternship.ge/api/degrees')
    .then(response=>response.json())
    .then(data=>
        data.forEach(element => {
            const option = document.createElement('option')
            option.textContent = element.title
            stage.appendChild(option)
        })
        )
}