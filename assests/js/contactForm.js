//<!-- js contact form -->
//<!-- EmailJS Script -->
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>


  // ✅ Initialize EmailJS
  (function(){
    emailjs.init("VEleHEvNxASP5mJdW"); // apni Public Key yahan daal
  })();

  // ✅ Wait for page load
  document.addEventListener("DOMContentLoaded", function(){

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event){
      event.preventDefault();

      // ✅ Form values
      const name = form.name.value;
      const email = form.email.value;
      const phone = form.phone.value;
      const subject = form.subject.value;
      const message = form.message.value;

      // ✅ Send Email
      emailjs.send("service_z1357mp", "template_pp3xbvl", {
        from_name: name,
        reply_to: email,
        phone: phone,
        subject: subject,
        message: message
      })
      .then(function(response){
        console.log("SUCCESS", response);
        alert("✅ Message Sent Successfully!");
        form.reset();
      })
      .catch(function(error){
        console.log("ERROR", error);
        alert("❌ Failed to send message");
      });

    });

  });

