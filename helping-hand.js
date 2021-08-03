function showNotification(){
    let div = document.createElement("div");
    div.setAttribute("id", "notification");
    let html = `
        <p id="notificationMessage">This is your message.that you passed to showNotification as arguments</p>
        <button id="notificationButton">Close</button>  
    `
    div.innerHTML = html;
    document.body.appendChild(div);

}