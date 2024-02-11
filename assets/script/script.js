//Validacion de formulario con el script de Bootstrap
// Example starter JavaScript for disabling form submissions if there are invalid fields
/*
  (() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  */


  
  let myForm = document.querySelector('form');
  let emailInput = document.getElementById('email');
  let subjectInput = document.getElementById('subject');
  let messageInput = document.getElementById('message');
  
  
  
  
  // Manejo del evento
  myForm.addEventListener ('submit', function(event){
    event.preventDefault();

  let emailValue = emailInput.value.trim();
  let subjectValue = subjectInput.value.trim();
  let messageValue = messageInput.value.trim();
  //Para verificar que todos los campos no esten vacios
  if ( emailValue ===""|| subjectValue ==="" || messageValue ===""){
    alert('Es necesario que rellenes todos los campos');
    return;
  }
  
  //para verificar que el email este correcto
  
  let regexMail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  
    if (!regexMail.test(emailValue)) { 
      alert('El email ingresado no es valido');
      return;
  }
  
  //Para controlar el area de texto 
  if (messageValue.length > 300) {
    alert('El mensaje debe ser máximo 10 caracteres'); 
  }
  alert('Form submitted successfully');
  });
  
  myForm.addEventListener ('reset', function(event){
              form.reset();
    });
  
  






