const APIKEY = "682bf9a71958616095f5aed51408576e";

// Appel Api openweathermat avec ville en parametre

let apiCall = function (city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;

  fetch(url).then((response) =>
    response.json().then((data) => {
      console.log(data);
      document.querySelector("#city").innerHTML = data.name;
      document.querySelector("#temp").innerHTML =
        Math.round(data.main.temp) + "°C";
      document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
      document.querySelector("#wind").innerHTML = data.wind.speed + "km/h";
      coldOrHot(data);
    })
  );
  // .catch((err) => console.log("Erreur : " + err));
};

// Ecouteur d'événement sur la soumission du formulaire
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let ville = document.querySelector("#inputCity").value;
  apiCall(ville);
});

// appel par defaut au chargement de la page
apiCall("Paris");

const coldOrHot = function (data) {
  let temp2 = Math.round(data.main.temp);
  let city = data.name;
  if (temp2 >= 20 && city == "Paris") {
    document.getElementById("coldOrHot").innerHTML =
      "Prenez un expresso tonic chez Motors café à chatelet ;)";
  } else if (temp2 < 20) {
    document.getElementById("coldOrHot").innerHTML =
      "Prenez un double expresso";
  } else {
    document.getElementById("coldOrHot").innerHTML = "Prenez un coldbrew ;)";
  }
};

// Trouver sur internet mais n'utilise pas Fetch
// let ville = "Paris";
// recevoirTemperature(ville);

// let button = document.querySelector("#btn");
// button.addEventListener("click", () => {
//   ville = document.getElementById("city").value;
//   recevoirTemperature(ville);
// });

// function recevoirTemperature(ville) {
//   const url =
//     "https://api.openweathermap.org/data/2.5/weather?q=" +
//     ville +
//     "&appid=eb3e55ca0093756f2541d5ad27c5021c&units=metric";

//   let requete = new XMLHttpRequest();
//   requete.open("GET", url);
//   requete.responseType = "json";
//   requete.send();

//   requete.onload = function () {
//     if (requete.readyState === XMLHttpRequest.DONE) {
//       if (requete.status === 200) {
//         let reponse = requete.response;
//         let ville = reponse.name;
//         let temperature = Math.round(reponse.main.temp);
//         document.querySelector("#ville").textContent = ville;
//         document.querySelector("#temperature_label").textContent = temperature;
//       } else {
//         alert("Un problème est intervenu, merci de revenir plus tard.");
//       }
//     }
//   };
// }
