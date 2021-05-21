const makeAnimalList = templater(o=>`
<div class="animallist-item display-flex animal-jump" data-id="${o.id}">
   <div class="flex-none animallist-image"><img src="${o.img}" alt=""></div>
   <div class="animallist-description flex-stretch">
      <div class="animallist-name">${o.name}</div>
      <div class="animallist-info">${o.type}, ${o.breed}</div>
   </div>
   
</div>
`)

const makeUserProfile = o => `
<div class="user-profile-image">
   <img src="${o.img}" alt="">

   <div class="floater bottom right">
      <a href="#user-upload-page" class="icon"><img src="img/icon/pencil.svg" alt=""></a>
   </div>
</div>
<div class="user-profile-description">
   <div class="user-profile-name">${o.name}</div>
   <div class="user-profile-email">${o.email}</div>
</div>
`;

const makeAnimalInfo = o => `
<div class="animal-name">${o.name}</div>
<div class="animal-type">${o.type}</div>
<div class="animal-breed">${o.breed}</div>
<div class="animal-description"><p>${o.description}</p></div>
<button class="form-button animal-delete" data-id="${o.id}">Delete</button>
`;




const makeAnimalPopup = o => `
<div class="display-flex animal-jump" data-id="${o.animal_id?o.animal_id:o.id}">
   <div class="flex-none animal-image-thumb">
      <img src="${o.img}">
   </div>
   <div class="flex-none" style="padding:1em">
      <div class="animal-name">${o.name}</div>
      <div class="animal-type">${o.type}</div>
      <div class="animal-breed">${o.breed}</div>
   </div>
</div>
`;

