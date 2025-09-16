const chatHeader = document.getElementById("chat-header");
const chatBody = document.getElementById("chat-body");
const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");
const chatSend = document.getElementById("chat-send");

// Toggle chat visibility
chatHeader.addEventListener("click", () => {
  chatBody.classList.toggle("hidden");
});

// Simple AI responses (you can expand this)
const responses = {
  "hello": "Hi there! Welcome to Emerald Estate. How can I assist you today?",
  "hi": "Hi there! Welcome to Emerald Estate. How can I assist you today?",
  "about": "Emerald Estate LTD helps you invest in real estate from starter plans to millionaire investment clubs.",
  "services": "We offer property listings, buying guidance, and investment plans for all budgets.",
  "contact": "You can reach us via our Contact page or login to chat directly with our agents.",
  "location": "We have properties in Lagos, Abuja, and other prime locations across Nigeria.",
  "payment": "We accept bank transfers, credit cards, and offer flexible installment plans.",
  "agent": "Our certified agents are ready to help you. Would you like to speak with one?",
  "appointment": "You can book a property viewing appointment online or by phone.",
  "investment": "We offer investment opportunities for both beginners and experienced investors.",
  "price": "Our properties start at $50,000. Prices vary by location and property type.",
  "office": "Visit our office at 123 Emerald Avenue, Lagos.",
  "bye": "Goodbye! Wishing you a wonderful day ahead!"
};

function getBotResponse(msg) {
  msg = msg.toLowerCase();
  for (let key in responses) {
    if(msg.includes(key)) return responses[key];
  }
  return "Sorry, I didn't understand. Try asking about 'services', 'about', or 'contact'.";
}

chatSend.addEventListener("click", () => {
  const text = chatInput.value.trim();
  if(!text) return;

  // Add user message
  const userMsg = document.createElement("div");
  userMsg.classList.add("message", "user");
  userMsg.textContent = text;
  chatMessages.appendChild(userMsg);

  // Add bot response
  const botMsg = document.createElement("div");
  botMsg.classList.add("message", "bot");
  botMsg.textContent = getBotResponse(text);
  chatMessages.appendChild(botMsg);

  chatInput.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;
});
