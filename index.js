document.getElementById('myForm').addEventListener('submit', postMsg);

function postMsg(e){
e.preventDefault();

let title = document.getElementById('title').value;
let message = document.getElementById('message').value;

fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method:'POST',
    headers: {
        'Accept':'application/json, text/plain, */*',
        'Content-type':'application/json'
    },
    body:JSON.stringify({
        title,
        message
    })
})
.then((res)=>res.json())
.then((data)=>{
    let title = data.title;
    let message = data.message;
    let msgCard = `<div class="card" id="msgDisplay">
      <div class="card-header">
       Your Message
      </div>
      <div class="card-body">
        <h5 class="card-title" id="msgTitle">${title}</h5>
        <p class="card-text" id="msgTxt">${message}</p>
      </div>
    </div>`
    document.getElementById('output').innerHTML = msgCard;

 

})

}
