function onInit() {
  console.log("ready");
  this.res = false;
  this.showReset = false;
}

const res = false;
const showReset = false;

const buttonsDev = document.querySelector(".myButtons");

function checkInput() {
  const paintWeight = document.querySelector(".paintWeight");
  const hardenerWeight = document.querySelector(".hardenerWeight");
  const hardenerPercent = document.querySelector(".hardenerPercent");
  const thinnerWeight = document.querySelector(".thinnerWeight");
  const thinnerPercent = document.querySelector(".thinnerPercent");

  if (
    paintWeight.value &&
    hardenerWeight.value &&
    hardenerPercent.value &&
    thinnerWeight.value &&
    thinnerPercent.value
  ) {
    if (this.res) this.res = false;
    calc();
  } else {
    if (!this.res) alert("אנא מלא את כל השדות");
    else calc();
  }
}

function changeButton() {
  const myButtons = document.querySelector(".myButtons");
  if (this.res) {
    myButtons.innerHTML = `<button
    type="button"
    class="btn btn-outline-danger col-8 m-3"
    onclick="reset()"
  >
    איפוס
  </button>`;
  } else {
    myButtons.innerHTML = `<button
    type="button"
    class="btn btn-outline-primary col-8 m-3"
    onclick="checkInput()"
  >
    חשב אחוזים
  </button>`;
  }
}

function reset() {
  const paintWeight = document.querySelector(".paintWeight");
  const hardenerWeight = document.querySelector(".hardenerWeight");
  const hardenerPercent = document.querySelector(".hardenerPercent");
  const thinnerWeight = document.querySelector(".thinnerWeight");
  const thinnerPercent = document.querySelector(".thinnerPercent");
  const result = document.querySelector(".result");
  paintWeight.value = "";
  hardenerWeight.value = "";
  hardenerPercent.value = "";
  thinnerWeight.value = "";
  thinnerPercent.value = "";
  result.innerHTML = "";
  this.res = false;
  changeButton();
}

function calc() {
  console.log(this.res);
  const paintWeight = document.querySelector(".paintWeight");
  const hardenerWeight = document.querySelector(".hardenerWeight");
  const hardenerPercent = document.querySelector(".hardenerPercent");
  const thinnerWeight = document.querySelector(".thinnerWeight");
  const thinnerPercent = document.querySelector(".thinnerPercent");
  const result = document.querySelector(".result");
  const calcBtn = document.querySelector(".btn");
  if (!this.res) {
    this.res = true;

    const hardenerResult =
      (((hardenerPercent.value / 100) * hardenerWeight.value) /
        paintWeight.value) *
      100;
    const thinnerResult =
      (((thinnerPercent.value / 100) * thinnerWeight.value) /
        paintWeight.value) *
      100;

    result.innerHTML = `בשביל לשים ${
      hardenerPercent.value
    }% מקשה בנפח, אתה צריך לשים ${hardenerResult.toFixed(1)}% מקשה במשקל
  <br>
  בשביל לשים ${
    thinnerPercent.value
  }% מדלל בנפח, אתה צריך לשים ${thinnerResult.toFixed(1)}% מדלל במשקל`;

    //change button text

    changeButton();
  } else {
    this.res = false;
    paintWeight.value = "";
    hardenerWeight.value = "";
    hardenerPercent.value = "";
    thinnerWeight.value = "";
    thinnerPercent.value = "";
    result.innerHTML = "";
    changeButton();
  }
}
