const url = "https://ghibliapi.herokuapp.com/people"

const select = document.querySelector("select");


fetch(url)
    .then((res) => res.json())
    .then((resJson) => {
    // console.log(resJson)
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
        const info = document.querySelector('#info')
        info.innerHTML = ""
        const names = document.createElement('h4')
        names.innerHTML = `Name: ${resJson.name}`
        info.append(names);

        const age = document.createElement('p')
        age.innerHTML = `Age: ${resJson.age}`
        info.append(age);

        const eyeColor = document.createElement('p')
        eyeColor.innerHTML = `Eye Color: ${resJson.eye_color}`
        info.append(eyeColor);

        const hairColor = document.createElement('p')
        hairColor.innerHTML = `Hair Color: ${resJson.hair_color}`
        info.append(hairColor);
        
        const form = document.querySelector('form')
        form.addEventListener('submit', (event) => {
        event.preventDefault();
        const shoutout = document.querySelector('#shoutout')
        let shoutoutVal = shoutout.value
        const ul = document.querySelector('ul')
        ul.innerHTML = ''
        const li = document.createElement('li')
        li.innerHTML = `<strong>${resJson.name}: ${shoutoutVal}</strong>`
        ul.append(li);
            
            
        // if (!shoutoutVal){
        //     const p = document.createElement('p')
        //     p.classList.add('error')
        //     p.innerHTML = `Must add a shoutout for ${resJson.name}`
        //     form.append(p)
        // } else {
        //     header4.removeChild(p)
        // }
                    
        });
        form.reset();
    })
    .catch((err) => console.log(err))
});
