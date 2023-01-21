const formCep = document.getElementById("cep");
const inputCep = document.getElementById("num");
const inputButtom = document.getElementById ("buttom");

const BASE_URL = "https://brasilapi.com.br/api";

const rua = document.getElementById("rua");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");

const buscaCEP = async (cep) => {
    return await fetch(`${BASE_URL}/cep/v1/${cep}`).then((response) => {
        return response.json();
    });
}

const retornoBusca = (buscando = true) => {
    inputCep.disabled = buscando;
    inputButtom.disabled = buscando;
    inputButtom.innerText = buscando ? "Buscando" : "Buscar"
};

formCep.addEventListener("submit", async (form) => {
    form.preventDefault();

    retornoBusca();

    const retorno = await buscaCEP(inputCep.value);

    if (retorno?.message){
        alert(retorno?.message);
    } else {
        rua.value = retorno?.street
        bairro.value = retorno?.neighborhood
        cidade.value = retorno?.city
        estado.value = retorno?.state
    }

    retornoBusca(false);
})