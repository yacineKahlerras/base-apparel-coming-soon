const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = form.elements["email"].value.trim();
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegex.test(email)) {
    form.classList.add("input-error");
    form.classList.remove("input-success");
  } else {
    form.classList.remove("input-error");
    form.classList.add("input-success");
  }
});
