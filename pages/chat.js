// Get elements
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const chatBox = document.getElementById("chat-box");

// Function to add a message
function addMessage(text, sender = "user") {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
  return msg; // return element in case we want to remove/replace it
}

// Replies database (multiple per keyword)
const replies = {
  hello: [
    "Hi there 👋 How can I help you today?",
    "Hello! Welcome to Emerald Estate LTD 🌟",
    "Hey! Ready to explore some properties?",
    "Greetings! How may I assist you with your real estate needs?"
  ],
  price: [
    "Our properties start at $50,000 💰.",
    "Prices vary by location, but starter homes begin at $50,000.",
    "Good question! Most of our listings start around $50,000.",
    "We offer flexible payment plans for all budgets."
  ],
  location: [
    "We have properties in Lagos, Abuja, and more!",
    "Are you interested in a specific city or region?",
    "Our listings cover several prime locations across Nigeria."
  ],
  payment: [
    "We accept bank transfers, credit cards, and installment plans.",
    "Flexible payment options are available for all clients.",
    "Would you like details on our payment plans?"
  ],
  appointment: [
    "You can book a viewing appointment online or by phone.",
    "Let us know your preferred date and time for a property tour.",
    "We'd be happy to schedule a visit for you!"
  ],
  agent: [
    "Our agents are certified and ready to help you.",
    "Would you like to speak with a property consultant?",
    "We can connect you with an agent for personalized assistance."
  ],
  contact: [
    "You can call us at 📞 0904 922 7046.",
    "Reach us anytime at  emeraldemepireengltd@gmail.com ✉️",
    "We’re here for you! Try our hotline: +234 08148582331.",
    "Visit our office at 123 Emerald Avenue, Lagos."
  ],
  about: [
    "Emerald Estate LTD is dedicated to helping you find your dream home.",
    "We have over 10 years of experience in real estate.",
    "Our mission is to make property ownership easy and accessible."
  ],
  services: [
    "We offer property sales, rentals, and investment advice.",
    "Our services include property management and consultancy.",
    "Looking for land, homes, or commercial spaces? We can help!"
  ],
  emerald: [
    "Emerald Empire Engineering is committed to carrying the weight of     your property journey. We hold the vision of making real estate opportunities open to all — whether you're a first-time buyer, seasoned investor, or simply exploring.",
    "In short emerald is a Real estate seasoned investor",
  ],
  bye: [
    "Goodbye! 👋 Take care!",
    "See you soon! 🌟",
    "Bye! Wishing you a wonderful day ahead!",
    "Thank you for chatting with us!"
  ]
};

// Helper: pick random reply
function randomReply(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Handle form submit
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = chatInput.value.trim().toLowerCase();
  if (text !== "") {
    addMessage(text, "user");
    chatInput.value = "";

    // Find a matching keyword
    let reply = null;
    for (const keyword in replies) {
      if (text.includes(keyword)) {
        reply = randomReply(replies[keyword]);
        break;
      }
    }

    // Default fallback if nothing matches
    if (!reply) {
      reply = "Thanks for your message! Our team will respond shortly.";
    }

    // Add "typing..." indicator first
    const typingMsg = addMessage("Typing...", "system");

    // Replace it after delay with actual reply
    setTimeout(() => {
      typingMsg.remove(); // remove "Typing..."
      addMessage(reply, "system");
    }, 1200); // typing delay
  }
});

// Load property message if passed from gallery
const params = new URLSearchParams(window.location.search);
if (params.has("property")) {
  const property = params.get("property");
  addMessage(`📌 Added to chat: ${property}`, "system");
}
