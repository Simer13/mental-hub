/*function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBody = document.querySelector(".chat-body");
    var userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.textContent = userInput;
    chatBody.appendChild(userMessage);

    // Add chatbot response logic here
    // For simplicity, you can just add a sample response
    var chatbotResponse = document.createElement("div");
    chatbotResponse.classList.add("chatbot-response");
    chatbotResponse.textContent = "I'm just a simple chatbot. Hello!";
    chatBody.appendChild(chatbotResponse);

    // Clear user input after sending message
    document.getElementById("user-input").value = "";
}*/

const sendChatbtn = document.querySelector(".user-input");
sendChatbtn.addEventListener = document.querySelector("chat-body");
let userMessage;
const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === ""
}
const handleChat = () =>
{
    userMessage = chatInput.value.trim();
    console.log(userMessage);
}
sendChatbtn.addEventListener("click", handleChat);
