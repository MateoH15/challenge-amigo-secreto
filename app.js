// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const inputText = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

let amigos = [];

function agregarAmigo() {
  if (inputText.value === "") {
    alert("Ingrese un nombre válido");
    return;
  }

  // forma corta utilizando createElement() y appendChild()

  /* const li = document.createElement("li");
     listaAmigos.appendChild(li);
     li.textContent = inputText.value;
     amigos.push(inputText.value);
     inputText.value = ""; */

  listaAmigos.innerHTML = "";
  amigos.push(inputText.value);
  for (let i = 0; i < amigos.length; i++) {
    listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    inputText.value = "";
  }
}

function sortearAmigo() {
  const numeroRandom = Math.floor(Math.random() * amigos.length + 1) - 1;
  resultado.innerHTML = `<li>${amigos[numeroRandom]}</li>`;
}
