document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("root");


  let noCount = 0;
  let yesPressed = false;

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const handleNoClick = () => {
    noCount++;
    render();
  };

  const setYesPressed = (value) => {
    alert("Congratulations You are in love")
    yesPressed = value;
    render();
  };

  const render = () => {
    const yesButtonSize = noCount * 20 + 16;

    root.innerHTML = `
      <div class="flex flex-col items-center justify-center h-screen -mt-16">
        ${
          yesPressed
            ? `
            <img src="done.gif" />
            <div class="text-4xl font-bold my-4">Ok yay!!!</div>
          `
            : `
            <img class="h-[200px]" src="image.gif" width=250rem height=250rem>
            <h1 class="text-4xl my-4">Will you be my Valentine?</h1>
            <div id="row">
              <button id="yesButton" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4" style="font-size: ${yesButtonSize}px">
                Yes
              </button>
              <button id="noButton" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                ${noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          `
        }
      </div>
    `;
    const row=document.getElementById("row")
    row.style.display="flex";
    row.style.flexDirection="column";
    row.style.justifyContent="center";
    row.style.alignItems="center"
    document.getElementById("yesButton").addEventListener("click", () => setYesPressed(true));
    document.getElementById("noButton").addEventListener("click", handleNoClick);
  };

  render();
});
