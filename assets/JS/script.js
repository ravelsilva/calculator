function insert(num) {
  // Obtém o elemento de resultado
  let number = document.querySelector(".result_right");

  // Obtém o conteúdo atual do elemento de resultado
  let currentContent = number.innerHTML;

  // Atualiza o conteúdo do elemento de resultado concatenando o número
  number.innerHTML = currentContent + num;
}

function clean() {
  document.querySelector(".result_right").innerHTML = "";
}

function eraseBack() {
  let number = document.querySelector(".result_right").innerHTML;

  document.querySelector(".result_right").innerHTML = number.substring(
    0,
    number.length - 1
  );
}

function submit() {
  let number = document.querySelector(".result_right").innerHTML;
if(number){
    document.querySelector(".result_right").innerHTML = eval(number)
}
}
