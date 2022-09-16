const url = "https://ghibliapi.herokuapp.com/people"

let people; 
const select = document.querySelector("select");


fetch(url)
    .then((res) => res.json())
    .then((resJson) => {
    // console.log(resJson)
    people = resJson
    for (let i = 0; i < resJson.length; i++) {
        const name = resJson[i].name
        const newOpt = document.createElement("option");
        newOpt.innerHTML = name;
        newOpt.value = resJson[i].id
        select.append(newOpt);  
       }
    })
    .catch((err) => console.log(err));

select.addEventListener("change", () => {
    // console.log(select.value)
    fetch(`${url}/${select.value}`)
    .then((res) => res.json())
    .then((resJson) => {
        // console.log(resJson)
        const div = document.querySelector('#info')
        div.innerHTML = ""
        const names = document.createElement('h4')
        names.innerHTML = resJson.name
        div.append(names);

        const age = document.createElement('p')
        age.innerHTML = resJson.age
        div.append(age);

        const eyeColor = document.createElement('p')
        eyeColor.innerHTML = resJson.eye_color
        div.append(eyeColor);

        const hairColor = document.createElement('p')
        hairColor.innerHTML = resJson.hair_color
        div.append(hairColor);
    })
    .catch((err) => console.log(err))
});