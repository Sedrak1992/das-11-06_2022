const API_URL = "https://jsonplaceholder.typicode.com/users";
const userList = document.querySelector(".userList");

sorchInput.oninput = function (event) {
     const searchValue = event.target.value.toLowrCase();
     const usraArray = Array.from(document.querySelectorAll("#sorchInput"))
     usraArray.forEach(function(user){
      if(user.innerText.toLowrCase().includes(searchValue)){
        console.log(user.innerText);
      }    
};

const users = [];

function createUsersList() {
  users.forEach(function (user) {
    userList.innerHTML += `

      <div class="user">
  
      <p>${user.name}</p>


  </div>
  `;
  });
}
function getUsers() {
  fetch(API_URL)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (json) {
      // console.log(json)
      json.forEach(function (user) {
        users.push(user);
      });
      createUsersList();
    });
}

getUsers();
