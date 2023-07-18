document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher la soumission normale du formulaire
    sendEmail(); // Appeler la fonction d'envoi de l'e-mail
  });

  function sendEmail() {
    // Récupérer les valeurs du formulaire
    var to = document.getElementById("to").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
  
    // Envoyer l'e-mail en utilisant EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      to: to,
      subject: subject,
      message: message
    }).then(function(response) {
       console.log("E-mail envoyé!", response.status, response.text);
    }, function(error) {
       console.log("Erreur lors de l'envoi de l'e-mail", error);
    });
  }