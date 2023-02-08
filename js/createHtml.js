export function newExperience(templateIndex){
return  `<form>
    <div class="div-position" style="margin: 29px 0 0 126px;">
        <label class="main-labels" for="position">თანამდებობა</label><br>
        <input class="full-width-input" type="text" name="position" id="position${templateIndex}" placeholder="დეველოპერი, დიზაინერი, ა.შ.">
        <h4 class="warning">მინიმუმ 2 სიმბოლო</h4>
    </div>
    <div class="div-employer">
        <label class="main-labels" for="employer">დამსაქმებელი</label><br>
        <input class="full-width-input" type="text" name="employer" id="employer${templateIndex}" placeholder="დამსაქმებელი">
        <h4 class="warning">მინიმუმ 2 სიმბოლო</h4>
    </div>
        <div class="div-startDate">
        <label class="main-labels" for="sDate">დაწყების რიცხვი</label><br>
        <input class="name-inp" type="date" name="date" id="startDate-inp${templateIndex}" placeholder="ანზორ">
    </div>
    <div class="div-endDate">
        <label class="main-labels" for="lname">დამთავრების რიცხვი</label><br>
        <input class="name-inp" type="date" name="date" id="dueDate-inp${templateIndex}" placeholder="მუმლაძე">
    </div>
    <div class="div-description">
        <label class="main-inputs" for="description">აღწერა</label>
        <textarea class="exp-txtarea textarea" name="descr" id="experience-desc${templateIndex}" placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"></textarea>
    </div>
        <span class="bottom-line"></span>
    </form>
    `
}

export function newEducation(templateIndex){
    return  `<form>
    <div class="div-institute" style="margin: 29px 0 0 126px;">
        <label class="main-labels" for="institute">სასწავლებელი</label><br>
        <input class="full-width-input" type="text" name="institute" id="institute${templateIndex}" placeholder="სასწავლებელი">
        <h4 class="warning">მინიმუმ 2 სიმბოლო</h4>
     </div>
     <div class="div-stage">
            <label class="main-labels" for="stage">ხარისხი</label><br>
            <select class="name-inp" name="stage" id="degree${templateIndex}" aria-placeholder="აირჩიეთ ხარისხი">
            </select>
     </div>
     <div class="div-educFinish">
        <label class="main-labels" for="finish">დამთავრების რიცხვი</label><br>
        <input class="name-inp" type="date" name="finishInput" id="educFinish${templateIndex}" placeholder="მუმლაძე">
     </div>
     <div class="div-description2">
        <label class="main-inputs" for="description">აღწერა</label>
        <textarea class="educ-txtarea textarea" name="descr" id="education-desc${templateIndex}" placeholder="განათლების აღწერა"></textarea>
     </div>
     <span class="bottom-line"></span>
        </form>
        `
    }
