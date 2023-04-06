const zodiac = document.getElementById("zodiac");
const body = document.body;
const changeBackground = () => {
  switch (zodiac.value) {
    case "aries":
      body.style.backgroundColor = "#FFD966";
      break;

    case "tarus":
      body.style.backgroundColor = "#FFB4B4";
      break;
    case "gemini":
      body.style.backgroundColor = "#E11299";
      break;
    case "cancer":
      body.style.backgroundColor = "#FEFF86";
      break;
    case "leo":
      body.style.backgroundColor = "#FF6000";
      break;
    case "virgo":
      body.style.backgroundColor = "#F0EB8D";
      break;
    case "libra":
      body.style.backgroundColor = "#FC2947";
      break;
    case "scorpio":
      body.style.backgroundColor = "#C0DBEA";
      break;
    case "sagittarius":
      body.style.backgroundColor = "#4F200D";
      break;
    case "aquarius":
      body.style.backgroundColor = "aqua";
      break;
    case "capricorn":
      body.style.backgroundColor = "#C7E9B0";
      break;
    case "pisces":
      body.style.backgroundColor = "#A4907C";
      break;

    default:
      body.style.backgroundColor = "white";
      break;
  }
};
