function validateForm() {
    let formMessage = document.getElementById("formMessage");
    formMessage.innerHTML = ""; // Üzenet törlése
  
    // Név validálás (minimum 10 karakter)
    let name = document.getElementById("name").value;
    if (name.length < 10) {
      formMessage.innerHTML = "A névnek legalább 10 karakternek kell lennie!";
      return false;
    }
  
    // E-mail validálás
    let email = document.getElementById("email").value;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      formMessage.innerHTML = "Kérlek, érvényes e-mail címet adj meg!";
      return false;
    }
  
    // Üzenet validálás (minimum 10 karakter)
    let message = document.getElementById("message").value;
    if (message.length < 10) {
      formMessage.innerHTML = "Az üzenetnek legalább 10 karakternek kell lennie!";
      return false;
    }
  
    // Telefonszám validálás
    let phone = document.getElementById("phone").value;
    if (phone.trim() === "") {
      formMessage.innerHTML = "A telefonszám megadása kötelező!";
      return false;
    }
  
    // Cím validálás
    let address = document.getElementById("address").value;
    if (address.trim() === "") {
      formMessage.innerHTML = "A cím megadása kötelező!";
      return false;
    }
  
    // Ha minden rendben van, a formot elküldjük
    alert("Az üzenet sikeresen elküldve!");
    return true;
  }
  