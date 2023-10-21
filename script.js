let FirstName = document.getElementById("First name");
let MiddleName = document.getElementById("Middle Name");
let LastName = document.getElementById("Last Name");
let Age = document.getElementById("Age");
let Gender = document.getElementById("Gender");
let Birthday = document.getElementById("Birthday");
let Course = document.getElementById("Course");
let SchoolYear = document.getElementById("School Year");
let postBeingEdited; // Variable to store the post being edited


form.addEventListener("submit", (e) => {
 e.preventDefault();
 console.log("button clicked");
 formValidation();
});

let formValidation = () => {
 if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
    console.log("failure");
 } else {
    console.log("successs");
    msg.innerHTML = "";
    acceptData();
 }
};

let data = {};

let acceptData = () => {
 data["text"] = input.value;
 console.log(data);
 createPost();
};

let createPost = () => {
 posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        <button onClick="editPost(this)" class="edit">Edit</button>
        <i onClick="editPost(this)" class="fas fa-edit"></i>
      </span>
    </div>
    `;
 input.value = "";
};

let deletePost = (e) => {
 e.parentElement.parentElement.remove();
 alert("Data Deleted");
};

let deleteAllPosts = () => {
 const postsContainer = document.getElementById('posts');
 postsContainer.innerHTML = ''; // Clear the content of the posts container
 alert('All posts deleted');
};

let editPost = (element) => {
 const postElement = element.closest('div');
 const postTextElement = postElement.querySelector('p');

 if (postTextElement) {
  const editedText = prompt("Edit your post:", postTextElement.textContent);
  if (editedText) {
      postTextElement.textContent = editedText;
  }
}
};
