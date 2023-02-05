export const pageButtonsExport = ()=>{
    const nextButton1 = document.getElementById('nextPage1')
    const nextButton2 = document.getElementById('nextPage2')
    const nextButton3 = document.getElementById('nextPage3')
    const prevButton1 = document.getElementById('previous1')
    const prevButton2 = document.getElementById('previous2')
    const p1 = document.getElementById('page1')
    const p2 = document.getElementById('page2')
    const p3 = document.getElementById('page3')
    nextButton1.addEventListener('click',()=>{
        p1.style.display='none'
        p2.style.display='block'
    })
    nextButton2.addEventListener('click',()=>{
        p2.style.display='none'
        p3.style.display='block'
    })
    prevButton1.addEventListener('click',()=>{
        p2.style.display='none'
        p1.style.display='block'
    })
    prevButton2.addEventListener('click',()=>{
        p3.style.display='none'
        p2.style.display='block'
    })
}