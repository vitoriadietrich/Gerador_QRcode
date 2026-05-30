const box = document.querySelector("#box");
const divQrCode = document.querySelector(".right");

function gerarCodigoQr() {

    let campoQr = document.querySelector("#campo-qr").value;

    box.innerHTML = "";

    if (campoQr.trim() !== "") {

        new QRCode(box, {
            text: campoQr,
            width: 250,
            height: 250
        });

        setTimeout(() => {

            const img = box.querySelector("img");

            if(img){

                document
                    .querySelector("#download")
                    .href = img.src;

                const logo = document.createElement("img");

                box.appendChild(logo);
            }

        }, 300);

    } else {

        alert("Campo vazio!");

    }
}

// https://ephemeral-bubblegum-70cb6e.netlify.app/ - USAR ESSE LINK PARA COLOCAR NA ABA DE PESQUISA