

//Show notification function 


let notification_container = document.createElement("div");
notification_container.setAttribute("id", "notification_container");
document.body.appendChild(notification_container)
function showNotification(arg){
    let notification_container = document.getElementById("notification_container");
    notification_container.innerHTML = "";
    let notification = document.createElement("div");
    notification.setAttribute("class", "notification");
    if(arg.backgroundColor){
        notification.style.backgroundColor = `${arg.backgroundColor}`
    }
    if(arg.color){
        notification.style.color = `${arg.color}`
    }
    let html = `
        <p class="notificationMessage">${arg.text}</p>
        <button class="notificationButton" onclick="hideNotification()">x</button>  
    `
    notification.innerHTML = html;
    notification_container.appendChild(notification);

}


function hideNotification(){
    document.querySelector("#notification_container .notification").style.display = "none";
}
