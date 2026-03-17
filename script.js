const codes = document.querySelectorAll(".code");

// focus first input
codes[0].focus();

codes.forEach((code, index) => {

  code.addEventListener("input", (e) => {
    const value = e.target.value;

    // allow only numbers
    if (!/^[0-9]$/.test(value)) {
      code.value = "";
      return;
    }

    // move to next input
    if (value && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  code.addEventListener("keydown", (e) => {

    if (e.key === "Backspace") {
      // if empty → go back
      if (!code.value && index > 0) {
        codes[index - 1].focus();
      }
    }
  });

});