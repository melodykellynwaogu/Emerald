// Load property info from localStorage
const property = JSON.parse(localStorage.getItem("buyItem"));
const paymentForm = document.getElementById("payment-form");
const successMessage = document.getElementById("success-message");

if(property){
  document.getElementById("property-title").textContent = property.title;
  document.getElementById("property-price").textContent = `$${property.price}`;
}

// Handle manual card form submission
paymentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  paymentForm.style.display = "none";
  successMessage.style.display = "block";
  localStorage.removeItem("buyItem");
});

// PayPal Buttons integration
paypal.Buttons({
  createOrder: function(data, actions){
    return actions.order.create({
      purchase_units: [{
        amount: { value: property.price.toString() },
        description: property.title
      }]
    });
  },
  onApprove: function(data, actions){
    return actions.order.capture().then(function(details){
      alert(`✅ Payment Successful! Thank you, ${details.payer.name.given_name}`);
      paymentForm.style.display = "none";
      successMessage.style.display = "block";
      localStorage.removeItem("buyItem");
    });
  },
  onCancel: function(data){
    alert("⚠️ Payment was cancelled.");
  },
  onError: function(err){
    console.error(err);
    alert("⚠️ Something went wrong with the payment.");
  }
}).render('#paypal-button-container');
