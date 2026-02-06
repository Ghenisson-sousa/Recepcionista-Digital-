let servicosSelecionados = [];

function typeText(el, text, speed=40){
  el.innerHTML='';
  let i=0;
  let timer=setInterval(()=>{
    el.innerHTML += text.charAt(i);
    i++;
    if(i>=text.length) clearInterval(timer);
  }, speed);
}

typeText(document.getElementById('txt1'), 'Olá, eu sou sua recepcionista digital 😊 Qual é o seu nome?');

function irTela2(){
  const nome=document.getElementById('nome').value.trim();
  if(!nome) return alert('Digite seu nome');
  document.getElementById('tela1').classList.remove('active');
  document.getElementById('tela2').classList.add('active');
  typeText(document.getElementById('txt2'), `Prazer, ${nome}! Toque no serviço desejado e clique em agendar.`);
}

function select(el, nome){
  if(el.classList.contains('active')){
    el.classList.remove('active');
    servicosSelecionados = servicosSelecionados.filter(s=>s!==nome);
  }else{
    el.classList.add('active');
    servicosSelecionados.push(nome);
  }
}

function whatsapp(){
  const nome=document.getElementById('nome').value.trim();
  if(servicosSelecionados.length===0) return alert('Selecione ao menos um serviço');
  const lista = servicosSelecionados.join(', ');
  const msg = `Olá, me chamo ${nome} e gostaria de agendar os seguintes serviços: ${lista}.`;
  const url = `https://wa.me/5599999999999?text=${encodeURIComponent(msg)}`;
  window.open(url,'_blank');
}
