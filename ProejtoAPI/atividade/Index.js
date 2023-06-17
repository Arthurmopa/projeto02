const profileImage = document.querySelector("#profile-img");


const titulo = document.querySelector("#title");


const nome = document.querySelector("#name");


const informacao = document.querySelector("#info");


const seguidores = document.querySelector("#seguidores");



window.addEventListener("DOMContentLoaded", () => {
    fetchData();
    fetchSeguidores();
});

async function fetchData() {
    await fetch("https://api.github.com/users/Arthurmopa")
        .then((response) => response.json())
        .then((data) => {
            profileImage.setAttribute("src", data.avatar_url);
            titulo.innerHTML = data.company;
            nome.innerHTML = data.name;
            informacao.innerHTML = data.bio;
        });
}

async function fetchSeguidores() {
    await fetch("https://api.github.com/users/Arthurmopa/followers")
        .then((response) => response.json())
        .then((seguidoresData) => {
            seguidoresData.forEach((seguidor) => {
                const caixaSeguidor = document.createElement("div");
                caixaSeguidor.setAttribute("id", "caixa-seguidor");

                const imgSeguidor = document.createElement("img");
                imgSeguidor.setAttribute("src", seguidor.avatar_url);
                imgSeguidor.setAttribute("alt", "");
                imgSeguidor.setAttribute("id", "follow-img");

                const nomeSeguidor = document.createElement("p");
                nomeSeguidor.setAttribute("id", "follow-name");
                nomeSeguidor.innerHTML = seguidor.login;

                const botaoDownload = document.createElement("button");
                botaoDownload.innerHTML = "Download";
                botaoDownload.addEventListener("click", () => {
               
                });

                caixaSeguidor.appendChild(imgSeguidor);
                caixaSeguidor.appendChild(nomeSeguidor);
                caixaSeguidor.appendChild(botaoDownload);
                seguidores.appendChild(caixaSeguidor);
            });
        });

        
}
