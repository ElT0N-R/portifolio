(function() {
    emailjs.init("chag70urjQghHqd9H");
  })();
  
  function sendEmail() {
    let parms = {
      nome: document.getElementById('nome').value,
      email: document.getElementById('email').value,
      mensagem: document.getElementById('mensagem').value
    }

    emailjs.send("service_fzjcp6g", "template_gszh0om", parms)
      .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
          console.log('FAILED...', error);
      });
  };

