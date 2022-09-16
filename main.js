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
        const h4 = document.querySelector('h4')
        h4.innerHTML = ""
        h4.innerHTML = resJson.name
        const pAge = document.createElement('p')
        pAge.innerHTML = resJson.age
        h4.append(pAge)
    })
    .catch((err) => console.log(err))
});