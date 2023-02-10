export function ifPersonalInput(input) {
    if(input.value){
        document.querySelector('.personalDiv').style.display='block'
        document.querySelector('.logo-12').style.display='block'
    }
}