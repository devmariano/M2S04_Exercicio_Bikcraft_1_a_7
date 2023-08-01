function theme() {
    const body = document.body;
    const isWhiteTheme = body.classList.contains('white-theme');
    body.classList.toggle('white-theme', !isWhiteTheme ); 
}
    

const bicicletas = [
    { id: 1, name: 'Nimbus Stark', price: 4999 },
    { id: 2, name: 'Magic Might', price: 2499 },
    { id: 3, name: 'Nebula Cosmic', price: 3999 },
    ]

function info(id) {
    const bicicleta = bicicletas.find(b => b.id === id);
    if (bicicleta) {
    console.log(`Ir para a página da bicicleta ${bicicleta.name}`);
    }
}

let coresAlternadas = false;

document.getElementById("alterarCores").addEventListener("click", function() {
  const novaCorP1 = coresAlternadas ? "#ffbf00" : "#27bd01";
  const novaCorP2 = coresAlternadas ? "#f2a50c" : "#239e04";

  document.documentElement.style.setProperty('--cor-p1', novaCorP1);
  document.documentElement.style.setProperty('--cor-p2', novaCorP2);

  coresAlternadas = !coresAlternadas;
});
