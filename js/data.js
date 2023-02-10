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

// NOTE FOR REDBERRY: THIS FUNCTION IS FROM GOOGLE, PLEASE DONT JUDGE :D 
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


