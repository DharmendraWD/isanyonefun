let photosContainer = document.querySelector(".photosContainer");

let people = [
    {
        _name:"Dharmendra Sharma", 
        _gender:"Male", 
        _age:19,
        _address:"Sarlahi",
        _desc:"A Talented frontend web Developer who has 8+ years of experience in web. Whose aim is to grow your business digitally all over the world.",
        _like: 222,
        _img:"/assets/photos/IMG_0550-removebg-preview 2.png"
    },
    {
        _name:"", 
        _gender:"Male", 
        _age: 235,
        _address:"Sarlahi",
        _desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quia impedit ducimus ipsa vero repellat? Alias rerum aspernatur quas corrupti vero vitae sequi culpa suscipit earum consequatur. Maiores, minus earum.",
        _like: 291,
        _img:"/assets/photos/IMG_0550-removebg-preview 2.png"
    },

]




 

people.forEach(function(value, index){

let createdElem = document.createElement('div')
createdElem.innerHTML=  `<div class="userDet">
<div class="texts">
<div class="det">
// <p>Name = ${people[index]._name}</p>
<p>Name = ${people[index]._name}</p>
<p>Gender = ${people[index]._gender}</p>
<p>Age = ${people[index]._age}</p>
<p>Address = ${people[index]._address}</p>

</div>
    <p class="desc">${people[index]._desc}</p>
</div>

<div class="photos">
<img src="${people[index]._img}" alt="Images">
    <p class="cmnt">CMNT</p>
</div>
</div>`;
// createdElem =  'kdsskmflsjk';
photosContainer.appendChild(createdElem)

})

console.log(people[0]._img)
// `<div class="userDet">
// <div class="texts">
// <div class="det">
// <p>${people[index]._name}</p>
// <p>${people[index]._age}</p>
// <p>${people[index]._address}</p>

// </div>
//     <p class="desc">${people[index]._desc}</p>
// </div>

// <div class="photos">
//     <img src="${people[index]._img}" alt="Images">
//     <p class="cmnt">CMNT</p>
// </div>
// </div>`