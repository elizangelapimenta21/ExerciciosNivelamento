function exercicio1() {
    const largura = larguraTerreno.value;
    const comprimento = comprimentoTerreno.value;
    const valorMetro = valorMetroQuadrado.value;

    const areaTerreno = largura * comprimento;
    const precoTerreno = areaTerreno * valorMetro;

    document.getElementById('areaTerreno').innerText = `Área do Terreno = ${areaTerreno.toFixed(2)}`;
    document.getElementById('precoTerreno').innerText = `Preço do Terreno = ${precoTerreno.toFixed(2)}`;
}

function exercicio2() {
    const base = baseRetangulo.value;
    const altura = alturaRetangulo.value;

    const area = base * altura;
    const perimetro = 2*base + 2*altura;
    const diagonal = Math.sqrt((base * base) + (altura * altura));

    document.getElementById('areaRetangulo').innerText = `ÁREA = ${area.toFixed(4)}`;
    document.getElementById('perimetroRetangulo').innerText = `PERÍMETRO = ${perimetro.toFixed(4)}`;
    document.getElementById('diagonalRetangulo').innerText = `DIAGONAL = ${diagonal.toFixed(4)}`;
}

function exercicio3() {
    const media = (parseFloat(idade1.value) + parseFloat(idade2.value)) / 2;

    document.getElementById('idadeMedia').innerText = `A idade média de ${nome1.value} e ${nome2.value} é de ${media.toFixed(1)} anos`;
}

function exercicio4() {
    const preco = precoUnitario.value;
    const qtd = qtdComprada.value;
    const dinheiro = dinheiroRecebido.value;
    
    const trocoRecebido = dinheiro - (preco * qtd);

    document.getElementById('troco').innerText = `TROCO = ${trocoRecebido.toFixed(2)}`;
}

function exercicio5() {
    const raio = raioCirculo.value;
    
    const area = Math.PI * (raio * raio);

    document.getElementById('area').innerText = `ÁREA = ${area.toFixed(3)}`;
}

function exercicio6() {
    const valorHora = valorPorHora.value;
    const hrsTrabalhadas = horasTrabalhadas.value;

    const valorFinal = hrsTrabalhadas * valorHora;

    document.getElementById('valorPagamento').innerText = `O pagamento para ${nomeFuncionario.value} deve ser ${valorFinal.toFixed(2)}`;
}

function exercicio7() {
    const distancia = distanciaPercorrida.value;
    const combustivel = combustivelGasto.value;

    const consumo = distancia / combustivel;

    document.getElementById('consumoMedio').innerText = `Consumo médio: ${consumo.toFixed(3)}`;
}

function exercicio8() {
    const A = parseFloat(medidaA.value);
    const B = parseFloat(medidaB.value);
    const C = parseFloat(medidaC.value);

    const areaQuad = A * A;
    const areaTri = (A * B) / 2.0;
    const areaTrap = (A + B) * C / 2.0;

    document.getElementById('areaQuadrado').innerText = `ÁREA DO QUADRADO = ${areaQuad.toFixed(4)}`;
    document.getElementById('areaTriangulo').innerText = `ÁREA DO TRIÂNGULO = ${areaTri.toFixed(4)}`;
    document.getElementById('areaTrapezio').innerText = `ÁREA DO TRAPÉZIO = ${areaTrap.toFixed(4)}`;
}

function exercicio9() {
    let segundos = duracaoSeg.value;

    const horas = parseInt(segundos / 3600); 
    segundos -= horas * 3600;
    const minutos = parseInt(segundos / 60);
    segundos -= minutos * 60;

    document.getElementById('duracaoFormat').innerText = `${horas}:${minutos}:${segundos}`;
}

function exercicio10() {
    const v1 = parseInt(primValor.value);
    const v2 = parseInt(segValor.value);
    const v3 = parseInt(terValor.value);
    let menor;

    if (v1 < v2 && v1 < v3) {
        menor = v1;
    } else if (v2 < v1 && v2 < v3) {
        menor = v2;
    } else {
        menor = v3;
    }

    document.getElementById('menorValor').innerText = `MENOR = ${menor}`;
}

function exercicio11() {
    const nota1 = parseFloat(primNota.value);
    const nota2 = parseFloat(segNota.value);
    let conceito;

    const mediaFinal = nota1 + nota2;

    if (mediaFinal < 60.0) {
        conceito = "REPROVADO";
    } else {
        conceito = "APROVADO";
    }

    document.getElementById('notaFinal').innerText = `NOTA FINAL = ${mediaFinal.toFixed(1)}`;
    document.getElementById('conceito').innerText = `${conceito}`;
}

function exercicio12() {
    const a = parseFloat(coeficienteA.value);
    const b = parseFloat(coeficienteB.value);
    const c = parseFloat(coeficienteC.value);

    const delta = (b*b) - 4 * a * c;

    if (delta < 0) {
        document.getElementById('valorX1').innerText = 'Esta equação não possui raízes reais';
        return
    }

    const x1 = (-b + Math.sqrt(delta)) / (2*a);
    const x2 = (-b - Math.sqrt(delta)) / (2*a);

    document.getElementById('valorX1').innerText = `X1 = ${x1.toFixed(4)}`;
    document.getElementById('valorX2').innerText = `X2 = ${x2.toFixed(4)}`;
}

function exercicio13() {
    const minutos = parseFloat(qtdMinutos.value);
    const minLimFranquia = 100;
    let valorPagar = 50.0;

    if (minutos > minLimFranquia) {
        valorPagar += (minutos - minLimFranquia) * 2.0;
    }

    document.getElementById('valorPagar').innerText = `Valor a pagar: R$ ${valorPagar.toFixed(2)}`;
}

function exercicio14() {
    const preco = parseFloat(precoProduto.value);
    const qtd = parseInt(qtdCompradaProduto.value);
    const dinheiroRecebido = parseInt(dinheiro.value);

    const valorTotal = preco * qtd;
    let resultado;
    let mensagem;

    if (valorTotal <= dinheiroRecebido) {
        resultado = dinheiroRecebido - valorTotal;
        mensagem = `TROCO = ${resultado}`;
    } else {
        resultado = valorTotal - dinheiroRecebido;
        mensagem = `DINHEIRO INSUFICIENTE. FALTAM ${resultado} REAIS`;
    }

    document.getElementById('trocoCliente').innerText = mensagem;
}

function exercicio15() {
    const glicose = parseFloat(medGlicose.value);
    let classificacao;

    if (glicose <= 100) {
        classificacao = 'Normal';
    } else if (glicose > 100 && glicose <= 140) {
        classificacao = 'Elevado';
    } else {
        classificacao = 'Diabetes'
    }

    document.getElementById('classificacao').innerText = `Classificação: ${classificacao}`;
}

function exercicio16() {
    const dist1 = parseFloat(distancia1.value);
    const dist2 = parseFloat(distancia2.value);
    const dist3 = parseFloat(distancia3.value);
    let maior;

    if (dist1 > dist2 && dist1 > dist3) {
        maior = dist1;
    } else if (dist2 > dist1 && dist2 > dist3) {
        maior = dist2;
    } else {
        maior = dist3;
    }

    document.getElementById('maiorDistancia').innerText = `MAIOR DISTÂNCIA: ${maior.toFixed(2)}`;
}

function exercicio17() {
    const num1 = parseFloat(numero1.value);
    const num2 = parseFloat(numero2.value);
    let multiplos;

    if (num1 % num2 === 0 || num2 % num1 === 0) {
        multiplos = true;
    } else {
        multiplos = false;
    }

    document.getElementById('multiplos').innerText = `${multiplos ? 'São' : 'Não são'} múltiplos`;
}

function exercicio18() {
    const escalaEscolhida = String(escala.value).toUpperCase();

    if (escalaEscolhida !== 'C' && escalaEscolhida !== 'F') {
        document.getElementById('tempConvert').innerText = 'Você deve escolher (F - Fahrenheit) ou (C - Celsius). '
        return;
    }

    const temp = parseFloat(temperatura.value);
    let tempConvert;
    
    if (escalaEscolhida === 'C') {
        tempConvert = 1.8 * temp + 32;
    } else {
        tempConvert = (temp - 32) / 1.8;
    }

    document.getElementById('tempConvert').innerText = `Temperatura equivalente em ${escalaEscolhida === 'C' ? 'Fahrenheit' : 'Celsius'}: ${tempConvert.toFixed(2)} `;
}

function exercicio19() {
    const salario = parseFloat(salarioFuncionario.value);
    let novoSalario;
    let porcentagem;
    let aumento;

    if (salario <= 999.00) {
        porcentagem = 20;
    } else if (salario >= 1000.00 && salario <= 2999.00) {
        porcentagem = 15;
    } else if (salario >= 3000.00 && salario <= 7999.00) {
        porcentagem = 10;
    } else {
        porcentagem = 5;
    }

    aumento = salario * (porcentagem / 100.0);
    novoSalario = salario + aumento;

    document.getElementById('novoSalario').innerText = `Novo salário = R$ ${novoSalario.toFixed(2)}`;
    document.getElementById('aumento').innerText = `Aumento = R$ ${aumento.toFixed(2)}`;
    document.getElementById('porcentagem').innerText = `Porcentagem = ${porcentagem} %`;
}

function exercicio20() {
    const numInicial = parseInt(numeroInicial.value);
    const numFinal = parseInt(numeroFinal.value);

    let resultado = 0;

    for (let i=numInicial; i <= numFinal; i++) {
        resultado += i;
    }
    
    document.getElementById('resultadoFinal').innerText = `Resultado = ${resultado}`;
}

function exercicio21() {
    const x = parseInt(valorX.value);
    const pares = [];

    for (let i=1; i <= x; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }

    document.getElementById('pares').innerHTML = pares.map(par => `${par}<br/>`).join('').replace(',', '');
}

function exercicio22() {
    const n = parseInt(valorN.value);
    const tabuada = [];

    for (let i=1; i <= 10; i++) {
        tabuada.push(`${n} x ${i} = ${n * i}`)
    }

    document.getElementById('tabuada').innerHTML = tabuada.map(par => `${par}<br/>`).join('').replace(',', '');
}

function exercicio23() {
    const x = parseInt(intX.value);
    const y = parseInt(intY.value);

    let soma = 0;

    for (let i=x+1; i < y; i++) {
        if (i % 2 !== 0) {
            soma += i;
        }
    }

    document.getElementById('somaImpares').innerText = `SOMA DOS ÍMPARES = ${soma}`;
}

function exercicio24() {
    const n1 = parseInt(num1.value);
    const n2 = parseInt(num2.value);
    const n3 = parseInt(num3.value);
    const n4 = parseInt(num4.value);
    const n5 = parseInt(num5.value);

    const ord = [n1, n2, n3, n4, n5].sort((a,b)  => a - b).join();

    document.getElementById('ordenados').innerText = `Ordenados = ${ord}`;
}

function exercicio25() {
    const dia = parseInt(diaNas.value);
    const mes = parseInt(mesNas.value);
    let signo;

    if (dia >= 21 && mes === 3 || dia <= 20 && mes === 4 ) {
        signo = 'Áries';
    } else if (dia >= 21 && mes === 4 || dia <= 20 && mes === 5 ) {
        signo = 'Touro';
    } else if (dia >= 21 && mes === 5 || dia <= 20 && mes === 6 ) {
        signo = 'Gêmeos';
    } else if (dia >= 21 && mes === 6 || dia <= 22 && mes === 7 ) {
        signo = 'Câncer';
    } else if (dia >= 23 && mes === 7 || dia <= 22 && mes === 8 ) {
        signo = 'Leão';
    } else if (dia >= 23 && mes === 8 || dia <= 22 && mes === 9 ) {
        signo = 'Virgem';
    } else if (dia >= 23 && mes === 9 || dia <= 22 && mes === 10 ) {
        signo = 'Libra';
    } else if (dia >= 23 && mes === 10 || dia <= 21 && mes === 11 ) {
        signo = 'Escorpião';
    } else if (dia >= 22 && mes === 11 || dia <= 21 && mes === 12 ) {
        signo = 'Sagitário';
    } else if (dia >= 22 && mes === 12 || dia <= 20 && mes === 1 ) {
        signo = 'Capricórnio';
    } else if (dia >= 21 && mes === 1 || dia <= 18 && mes === 2 ) {
        signo = 'Aquário';
    } else if (dia >= 19 && mes === 2 || dia <= 20 && mes === 3 ) {
        signo = 'Peixes';
    } else {
        signo = 'Valores incorretos'
    }


    document.getElementById('signo').innerText = `Signo: ${signo}`;
}

function exercicio26() {
    const string = palavra.value.toUpperCase();
    let nVogais = 0;
    let nConsoantes = 0;
    const vogais = ['A', 'E', 'I', 'O', 'U'];

    for (let i=0; i < string.length; i++) {
        if (vogais.includes(string[i])){
            nVogais++;
        } else {
            nConsoantes++;
        }
    }

    document.getElementById('vogais').innerText = `Vogais: ${nVogais}`;
    document.getElementById('consoantes').innerText = `Consoantes: ${nConsoantes}`;
}

function exercicio27() {
    const string = numOrPalavra.value.toUpperCase();
    const reverse = string.split('').reverse().join('');
    let palindromo = true;

    for (let i=0; i < string.length; i++) {
        if (string[i] !== reverse[i]){
            palindromo = false;
            break;
        }
    }

    document.getElementById('palindromo').innerText = `Saída: ${palindromo ? 'É' : 'Não é'} palíndroma`;
}

function exercicio28() {
    const v1 = parseInt(valor1.value);
    const v2 = parseInt(valor2.value);
    const v3 = parseInt(valor3.value);
    const v4 = parseInt(valor4.value);
    const v5 = parseInt(valor5.value);
    
    const valores = [v1, v2, v3, v4, v5].sort((a, b) => a - b);
    const maior = valores[valores.length - 1]
    const menor = valores[0];

    document.getElementById('maiorMenorValor').innerText = `Saída: ${menor} e ${maior}`;
}

function validarCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g,'');
 
    if(cnpj == '') return false;
     
    if (cnpj.length != 14)
        return false;
 
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999")
        return false;
         
    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;
         
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
          return false;
           
    return true;
    
}

function exercicio29() {
    const cnpjValue = cnpj.value;
    const isValid = validarCNPJ(cnpjValue);

    document.getElementById('cnpjValido').innerText = `Saída: ${isValid ? 'Válido' : 'Inválido'}`;
}

function exercicio30() {
    const n = numerico.value;
    let extenso;

    var unidades=["Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove"];
    var especiais=["Dez","Onze", "Doze", "Treze", "Catorze", "Quinze", "Dezeseis", "Dezsete", "Dezoito", "Deznove"]; 
    var dezenas=["Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"];

    if(n.length === 1) {
        extenso = unidades[parseInt(n[0])];
     } else if(n.length === 2) {
        if((n[0] =='1') && (n[1]=='0'||n[1]=='1'||n[1]=='2'||n[1]=='3'||n[1]=='4'||n[1]=='5'||n[1]=='6'||n[1]=='7'||n[1]=='8'||n[1]=='9')) {
            extenso = especiais[parseInt(n[1])];
        }
        
        else if((n[0]=='2'||n[0]=='3'||n[0]=='4'||n[0]=='5'||n[0]=='6'||n[0]=='7'||n[0]=='8'||n[0]=='9') && n[1]=='0') {
            extenso = dezenas[parseInt(n[0]-2)];
        }

        else {
            extenso = dezenas[parseInt(n[0]-2)]+" e "+unidades[parseInt(n[1])];
        }
    }

    document.getElementById('valorPorExtenso').innerText = `Saída: ${extenso}`;
}