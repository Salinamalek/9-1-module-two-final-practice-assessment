const url = "https://ghibliapi.herokuapp.com/people"

fetch(url)
.then((res) => res.json())
.then((resJson) => {
    console.log(resJson)
    for (let i = 0; i < resJson.length; i++) {
        const name = resJson[i].name
        const select = document.querySelector("select")
        const newOpt = document.createElement("option")
        newOpt.textContent = name
       select.append(newOpt);   
    }
})
.catch((err) => console.log(err));