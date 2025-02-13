/* 
  script.js - Funções para alternar tema, calcular viagem, comparar combustíveis,
  converter unidades e calcular consumo médio.
*/

/* Função para alternar entre tema claro e escuro */
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle i');
  
    // Verifica se o tema atual é escuro e alterna
    if (body.getAttribute('data-theme') === 'dark') {
      body.removeAttribute('data-theme');
      themeToggle.classList.replace('fa-sun', 'fa-moon');
      localStorage.setItem('theme', 'light');
    } else {
      body.setAttribute('data-theme', 'dark');
      themeToggle.classList.replace('fa-moon', 'fa-sun');
      localStorage.setItem('theme', 'dark');
    }
  }
  
  // Aplica o tema salvo ao carregar a página
  if (localStorage.getItem('theme') === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    document.querySelector('.theme-toggle i').classList.replace('fa-moon', 'fa-sun');
  }
  
  /* 
    Função: calcularViagem
    Calcula litros necessários, custo total e custo por km da viagem.
  */
  function calcularViagem() {
    const distancia = parseFloat(
      document.getElementById('distancia-viagem').value
    );
    const consumo = parseFloat(
      document.getElementById('consumo-viagem').value
    );
    const preco = parseFloat(
      document.getElementById('preco-combustivel').value
    );
    const volta = document.getElementById('volta-viagem').checked;
  
    // Validação dos campos
    if (!distancia || !consumo || !preco) {
      alert('Preencha todos os campos da Calculadora de Viagem!');
      return;
    }
  
    // Cálculo dos resultados
    const distanciaTotal = volta ? distancia * 2 : distancia;
    const litros = distanciaTotal / consumo;
    const custoTotal = litros * preco;
    const custoPorKm = custoTotal / distanciaTotal;
  
    // Exibe os resultados
    document.getElementById('litros-viagem').textContent =
      `Litros necessários: ${litros.toFixed(1)}L`;
    document.getElementById('custo-viagem').textContent =
      `Custo total: R$ ${custoTotal.toFixed(2)}`;
    document.getElementById('custo-km').textContent =
      `Custo por km: R$ ${custoPorKm.toFixed(2)}`;
  
    document.getElementById('resultado-viagem').style.display = 'block';
  }
  
  /* 
    Função: compararCombustiveis
    Compara preços de álcool e gasolina e indica qual é mais vantajoso.
  */
  function compararCombustiveis() {
    const precoGasolina = parseFloat(
      document.getElementById('preco-gasolina').value
    );
    const precoAlcool = parseFloat(
      document.getElementById('preco-alcool').value
    );
  
    // Validação dos campos
    if (!precoGasolina || !precoAlcool) {
      alert('Preencha os campos de preço para comparar os combustíveis!');
      return;
    }
  
    // Regra prática: Se a razão preço álcool / preço gasolina for menor que 0.7, álcool é vantajoso.
    const relacao = precoAlcool / precoGasolina;
    const mensagem =
      relacao < 0.7
        ? 'Álcool é mais vantajoso!'
        : 'Gasolina é mais vantajosa!';
  
    // Exibe o resultado
    document.getElementById('resultado-combustivel').textContent = mensagem;
    document.getElementById('resultado-comparacao').style.display = 'block';
  }
  
  /* 
    Função: converterUnidades
    Converte o valor informado de acordo com o tipo de conversão selecionado.
  */
  function converterUnidades() {
    const valor = parseFloat(document.getElementById('valor-conversao').value);
    const tipo = document.getElementById('tipo-conversao').value;
  
    // Validação do valor informado
    if (!valor && valor !== 0) {
      alert('Informe um valor para conversão!');
      return;
    }
  
    let resultado = 0;
    // Seleção do tipo de conversão
    switch (tipo) {
      case 'kmToMiles':
        resultado = valor * 0.621371;
        break;
      case 'milesToKm':
        resultado = valor / 0.621371;
        break;
      case 'litrosToGallons':
        resultado = valor * 0.264172;
        break;
      case 'gallonsToLitros':
        resultado = valor / 0.264172;
        break;
      default:
        alert('Tipo de conversão inválido!');
        return;
    }
  
    // Exibe o resultado da conversão
    document.getElementById('resultado-conversao-texto').textContent =
      `Resultado: ${resultado.toFixed(4)}`;
    document.getElementById('resultado-conversao').style.display = 'block';
  }
  
  /* 
    Função: calcularConsumoMedio
    Calcula o consumo médio (km/l) com base na distância percorrida e litros consumidos.
  */
  function calcularConsumoMedio() {
    const distancia = parseFloat(
      document.getElementById('distancia-consumo').value
    );
    const litros = parseFloat(
      document.getElementById('litros-consumo').value
    );
  
    // Validação dos campos
    if (!distancia || !litros) {
      alert('Preencha os campos para o cálculo do consumo médio!');
      return;
    }
  
    // Cálculo do consumo médio
    const consumoMedio = distancia / litros;
    // Exibe o resultado
    document.getElementById('consumo-medio-texto').textContent =
      `Consumo médio: ${consumoMedio.toFixed(2)} km/l`;
    document.getElementById('resultado-consumo').style.display = 'block';
  }
  