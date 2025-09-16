// Handle Add to Chat and Buy Now
document.querySelectorAll(".property-card").forEach(card => {
  const chatBtn = card.querySelector(".chat-btn");
  const buyBtn = card.querySelector(".buy-btn");

  const id = card.dataset.id;
  const title = card.dataset.title;
  const price = card.dataset.price;

  chatBtn.addEventListener("click", () => {
    let chatItems = JSON.parse(localStorage.getItem("chatItems")) || [];
    chatItems.push({ id, title, price });
    localStorage.setItem("chatItems", JSON.stringify(chatItems));
    alert(`${title} added to chat!`);
    window.location.href = "Chat.html";
  });

  buyBtn.addEventListener("click", () => {
    localStorage.setItem("buyItem", JSON.stringify({ id, title, price }));
    window.location.href = "Payment.html";
  });
});
