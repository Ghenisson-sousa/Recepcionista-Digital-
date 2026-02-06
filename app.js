/* ===== TYPING EFFECT ===== */
const texto1 = "Olá! Eu sou sua recepcionista virtual 😊 Vou te ajudar a agendar seu atendimento.";
const texto2 = "Toque no serviço desejado e depois clique em agendar.";

function type(el, texto, velocidade=35){
  let i=0;
  el.innerHTML="";
  function escrever(){
    if(i<texto.length){
      el.innerHTML += texto.charAt(i);
      i++;
      setTimeout(escrever, velocidade);
    }
  }
  escrever();
}

type(document.getElementById("fala1"), texto1);

/* ===== NAVEGAÇÃO ===== */
let nomeCliente = "";

function irTela2(){
  const nome = document.getElementById("nome").value.trim();
  if(nome === "") return alert("Digite seu nome 🙂");
  nomeCliente = nome;

  document.getElementById("tela1").classList.remove("active");
  document.getElementById("tela2").classList.add("active");

  type(document.getElementById("fala2"), texto2);
}

/* ===== SERVIÇOS ===== */
const servicos = [
  {
    nome:"Cílios",
    img:"https://via.placeholder.com/300x200",
    desc:"Alongamento e design",
    preco:"R$ 80"
  },
  {
    nome:"Sobrancelha",
    img:"https://via.placeholder.com/300x200",
    desc:"Design e modelagem",
    preco:"R$ 40"
  },
  {
    nome:"Micropigmentação",
    img:"https://via.placeholder.com/300x200",
    desc:"Procedimento estético",
    preco:"R$ 300"
  }
];

const selecionados = [];
const cardsEl = document.getElementById("cards");

servicos.forEach(s=>{
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${s.img}">
    <div class="info">
      <h4>${s.nome}</h4>
      <p>${s.desc}</p>
      <span>${s.preco}</span>
    </div>
  `;
  card.onclick = ()=>{
    if(selecionados.includes(s.nome)){
      selecionados.splice(selecionados.indexOf(s.nome),1);
      card.classList.remove("selected");
    }else{
      selecionados.push(s.nome);
      card.classList.add("selected");
    }
  };
  cardsEl.appendChild(card);
});

/* ===== WHATSAPP ===== */
function enviarWhats(){
  if(selecionados.length === 0){
    alert("Selecione pelo menos um serviço 🙂");
    return;
  }

  const servicosTexto = selecionados.join(" e ");
  const msg = `Olá, me chamo ${nomeCliente} e gostaria de agendar para fazer ${servicosTexto}`;
  
  const numero = "559284366238"; // troque pelo número do cliente
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
  window.open(link, "_blank");
}
