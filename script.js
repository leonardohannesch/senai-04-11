let total = 0;
function adicionarGasto(){
  let despesaTexto = document.getElementById('despesaInput').value;
  let despesaValor = Number(document.getElementById('valorInput').value);

  total = total + despesaValor;
  document.getElementById('total').innerText = total;

  document.getElementById('listaDespesas').innerHTML += '<li>' + despesaTexto + '-R$' + despesaValor + '<button onClick="(this)">Excluir</button></li>'

  document.getElementById('despesasInput').value ='';
  document.getElementById('valorInput').value = '';
}

function excluir(botao, valor) {
    total = total - valor;
    document.getElementById('total').innerText = total;
    botao.parentElement.remove();
}