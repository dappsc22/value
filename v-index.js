const mnemonics = document.getElementById("mnemonics");
const keystore = document.getElementById("keystore");

const privateKey = document.getElementById("privatekey");
const hardware = document.getElementById("hardware");
const form1 = document.getElementById("form-1");
const form2 = document.getElementById("form-2");
const form3 = document.getElementById("form-3");
const form4 = document.getElementById("form-4");

mnemonics.addEventListener("click", () => {
  mnemonics.classList.add("selected");
  keystore.classList.remove("selected");
  privateKey.classList.remove("selected");
  hardware.classList.remove("selected");
  form1.classList.remove("hide");
  form2.classList.add("hide");
  form3.classList.add("hide");
  form4.classList.add("hide");
});
keystore.addEventListener("click", () => {
  mnemonics.classList.remove("selected");
  keystore.classList.add("selected");
  privateKey.classList.remove("selected");
  hardware.classList.remove("selected");
  form1.classList.add("hide");
  form2.classList.remove("hide");
  form3.classList.add("hide");
  form4.classList.add("hide");
});
privateKey.addEventListener("click", () => {
  mnemonics.classList.remove("selected");
  keystore.classList.remove("selected");
  privateKey.classList.add("selected");
  hardware.classList.remove("selected");
  form1.classList.add("hide");
  form2.classList.add("hide");
  form3.classList.remove("hide");
  form4.classList.add("hide");
});
hardware.addEventListener("click", () => {
  mnemonics.classList.remove("selected");
  keystore.classList.remove("selected");
  privateKey.classList.remove("selected");
  hardware.classList.add("selected");
  form1.classList.add("hide");
  form2.classList.add("hide");
  form3.classList.add("hide");
  form4.classList.remove("hide");
});
