const codes = document.querySelectorAll(".code");

// focus first input
codes[0].focus();

codes.forEach((code, index) => {

  code.addEventListener("input", (e) => {
    const value = e.target.value;

    if (!/^[0-9]$/.test(value)) {
      code.value = "";
      return;
    }

    if (value && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  code.addEventListener("keydown", (e) => {

    if (e.key === "Backspace") {
      code.value = ""; // clear current

      if (index > 0) {
        codes[index - 1].focus();
      }
    }

  });

});