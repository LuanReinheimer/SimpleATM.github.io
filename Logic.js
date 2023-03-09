let saldo = 0;
let extrato = [];
let extratoSaque = [];
let dataDeposito = [];
const saldoElement = document.getElementById("saldo");
const mensagemElement = document.getElementById("mensagem");
const extatomensagemElement = document.getElementById("extatomensagem");
const extatosaquemensagemElement = document.getElementById("extatosaquemensagem");

function verSaldo() {
    saldoElement.innerHTML = saldo.toFixed(2);
    mensagemElement.innerHTML = "";
    extatomensagemElement.innerHTML = "";
    extatosaquemensagemElement.innerHTML = ""
    limpar_texto_label()
}

function verExtrato() {
    extatomensagemElement.innerHTML = "O extrato de Depósito:\n" + extrato;
    extatosaquemensagemElement.innerHTML = "O extrato de Saque:\n" + extratoSaque;
    mensagemElement.innerHTML = "";
}

function depositar() {
    const valor = parseFloat(document.getElementById("valor").value);
    const date = new Date().toLocaleDateString();
    if (valor > 0) {
        saldo += valor;
        extrato.push("\n R$:" + valor + " | ");
        extrato.push("Dia " + date);
        saldoElement.innerHTML = saldo.toFixed(2);
        mensagemElement.innerHTML = "Depósito de R$" + valor.toFixed(2) + " realizado com sucesso.";
        extatomensagemElement.innerHTML = "";
        extatosaquemensagemElement.innerHTML = "";
    } else {
        mensagemElement.innerHTML = "O valor do depósito deve ser maior que zero.";
        extatomensagemElement.innerHTML = "";
        extatosaquemensagemElement.innerHTML = "";
    }
    limpar_texto_label()
}


function limpar_texto_label() {
    let cnt = document.getElementById('valor').value = ''
    cnt.valueOf = "";
    return false;
}


function sacar() {
    const valor = parseFloat(document.getElementById("valor").value);
    const date = new Date().toLocaleDateString();
    if (valor > 0) {
        if (valor <= saldo) {
            saldo -= valor;
            extratoSaque.push("\n R$:" + valor + " | ");
            extratoSaque.push("Dia " + date);
            saldoElement.innerHTML = saldo.toFixed(2);
            mensagemElement.innerHTML = "Saque de R$" + valor.toFixed(2) + " realizado com sucesso.";
            extatomensagemElement.innerHTML = "";
            extatosaquemensagemElement.innerHTML = "";
        } else {
            mensagemElement.innerHTML = "Saldo insuficiente para realizar o saque.";
            extatomensagemElement.innerHTML = "";
            extatosaquemensagemElement.innerHTML = "";
        }
    } else {
        mensagemElement.innerHTML = "O valor do saque deve ser maior que zero.";
        extatomensagemElement.innerHTML = "";
        extatosaquemensagemElement.innerHTML = "";
    }
    limpar_texto_label()
}

function desbloquearTelaCaixa() {
    let pinDigitado = document.getElementById('number').value;
    let pinAcesso = 111;
    if (pinDigitado == pinAcesso) {
        document.getElementById("textoseguranca").innerHTML = "";
        document.getElementById('backgroud').style.display = 'block';
        document.getElementById('telaseguranca').style.display = 'none';
    } else {
        document.getElementById("textoseguranca").innerHTML = "Pin Invalido";
    }
}