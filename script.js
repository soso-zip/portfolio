
// MODO CLARO E ESCURO

const tema = document.getElementById("theme");

if (localStorage.getItem("tema") === "escuro") {
    document.body.classList.add("escuro");
    tema.textContent = "☀";
}

tema.onclick = function() {
    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        localStorage.setItem("tema", "escuro");
        tema.textContent = "☀";
    } else {
        localStorage.setItem("tema", "claro");
        tema.textContent = "☾";
    }
};

// TEXTO DIGITANDO

const texto = document.getElementById("typing");
const frases = ["Developer.", "Creative mind.", "Always learning."];
let frase = 0;

setInterval(function() {
    frase = (frase + 1) % frases.length;
    texto.textContent = frases[frase];
}, 2000);

// MODAL DOS PROJETOS

const botoes = document.querySelectorAll(".detalhes");
const modal = document.getElementById("modal");
const info = document.getElementById("info");

botoes.forEach(function(botao) {
    botao.onclick = function() {
        info.textContent = botao.dataset.info;
        modal.classList.add("ativo");
    };
});

document.getElementById("fechar").onclick = function() {
    modal.classList.remove("ativo");
};

modal.onclick = function(evento) {
    if (evento.target === modal) {
        modal.classList.remove("ativo");
    }
};

// MASCARA DE TELEFONE

const telefone = document.getElementById("telefone");

telefone.oninput = function() {
    let numero = telefone.value.replace(/\D/g, "").slice(0, 11);

    if (numero.length > 10) {
        numero = numero.replace(
            /^(\d{2})(\d{5})(\d{4})$/,
            "($1) $2-$3"
        );
    } else if (numero.length > 6) {
        numero = numero.replace(
            /^(\d{2})(\d{4})(\d{0,4})$/,
            "($1) $2-$3"
        );
    } else if (numero.length > 2) {
        numero = numero.replace(
            /^(\d{2})(\d+)$/,
            "($1) $2"
        );
    }

    telefone.value = numero;
};

// CONTADOR DA MENSAGEM

const mensagem = document.getElementById("mensagem");
const contador = document.getElementById("contador");

mensagem.oninput = function() {
    contador.textContent = mensagem.value.length + "/500 caracteres";
};

// FORMULARIO

const formulario = document.getElementById("formulario");

formulario.onsubmit = function(evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const numero = telefone.value.replace(/\D/g, "");

    if (nome.length < 3) {
        alert("Digite seu nome completo!");
        return;
    }

    if (numero.length < 10) {
        alert("Digite um telefone válido!");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Digite um e-mail válido!");
        return;
    }

    if (mensagem.value.trim().length < 10) {
        alert("Escreva uma mensagem com pelo menos 10 caracteres!");
        return;
    }

    alert("Formulário validado com sucesso!");

    formulario.reset();
    contador.textContent = "0/500 caracteres";
};
