export let formData=
{
    "name": "",
    "surname": "",
    "email": "",
    "phone_number": "",
    "experiences": [
      {
        "position": "",
        "employer": "",
        "start_date": "",
        "due_date": "",
        "description": ""
      }
    ],
    "educations": [
      {
        "institute": "",
        "degree": "",
        "due_date": "",
        "description": ""
      }
    ],
    "image": "",
    "about_me": ""
  }


  export function removeEmptyValues(obj) {
    for (const prop in obj) {
      if (obj[prop] === null || obj[prop] === undefined || obj[prop] === '') {
        delete obj[prop];
      } else if (typeof obj[prop] === 'object') {
        removeEmptyValues(obj[prop]);
        if (Object.keys(obj[prop]).length === 0) {
          delete obj[prop];
        }
        
      }
    }
    return obj;
  }
  //  ბოლოს გაგზავნისას შემიძლია ეს გამოვიყენო და თუ
  //            ცარიელი იქნება რამე ამ ობიექტში წაშლის 



  
  // export function setFormData(newValue){
  //   formData=newValue
  // }

  // export let index = 0
  // export function setIndex(newIndex){
  //   index=newIndex
  // }


