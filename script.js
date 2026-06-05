// MENÚ HAMBURGUESA

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// BOLETÍN

const params =
new URLSearchParams(
window.location.search
);

const mensaje =
document.getElementById(
"mensaje-registro"
);

if(mensaje){

    if(params.get("registro") === "ok"){

        mensaje.innerHTML =
        "✅ Te has suscrito correctamente a las alertas de QNN.";

        mensaje.style.display =
        "block";

        mensaje.classList.add(
        "mensaje-exito"
        );

    }

    if(params.get("registro") === "duplicado"){

        mensaje.innerHTML =
        "⚠️ Este correo ya está registrado.";

        mensaje.style.display =
        "block";

        mensaje.classList.add(
        "mensaje-error"
        );

    }

}

if(params.get("registro") === "error"){

    mensaje.innerHTML =
    "❌ Ocurrió un error al registrar el correo.";

    mensaje.style.display =
    "block";

    mensaje.classList.add(
    "mensaje-error"
    );

}