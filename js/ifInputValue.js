// Start Point of the right block, add/delete first div for personal information
export function ifPersonalInput(input) {
    if(input.value){
        document.querySelector('.personalDiv').style.display='block'
        document.querySelector('.logo-12').style.display='block'
    }else{
        document.querySelector('.personalDiv').style.display='none'
        document.querySelector('.logo-12').style.display='none'
    }
}