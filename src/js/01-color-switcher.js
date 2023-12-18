
  function getRandomHexColor(){
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  const startBtn = document.querySelector('[data-start]');
  const stopBtn = document.querySelector('[data-stop]');

  stopBtn.disabled = true;
  let colorChangeInterval = null;

  const startColorChange = () => {
    colorChangeInterval = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);

    startBtn.disabled = true;
    stopBtn.disabled = false;
  };

  const stopColorChange = () => {
    clearInterval(colorChangeInterval);

    startBtn.disabled = false;
    stopBtn.disabled = true;
  }

  startBtn.addEventListener('click', startColorChange);
  stopBtn.addEventListener('click', stopColorChange);
