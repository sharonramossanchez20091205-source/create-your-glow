// Información detallada de los Cursos de CREATE YOUR GLOW
const cursosData = {
    "1": {
        title: "Marca Personal para Artistas",
        price: "$50.000 COP",
        tag: "ESTRATEGIA & POSICIONAMIENTO",
        description: "Aprenderás a construir un perfil profesional que transmita confianza y exclusividad. Descubrirás cómo definir tu paleta visual, la voz de tu marca y cómo comunicarte con clientes para que valoren tu trabajo sin pedir descuentos.",
        includes: [
            "Definición de propuesta de valor única",
            "Optimización de perfil e biografía de Instagram",
            "Plantilla para cotizaciones profesionales",
            "Acceso de por vida a las lecciones"
        ]
    },
    "2": {
        title: "Contenido que Vende",
        price: "$70.000 COP",
        tag: "CREACIÓN DE CONTENIDO",
        description: "Domina la creación de videos e imágenes de impacto. Aprenderás iluminación básica con celular, ángulos para resaltar el maquillaje, hooks para captar atención en los primeros 3 segundos y llamados a la acción para convertir vistas en citas.",
        includes: [
            "Guía de iluminación económica para maquillaje",
            "10 Estructuras de guiones para Reels virales",
            "Técnicas de edición rápida desde CapCut",
            "Estrategia de Reels vs. Historias"
        ]
    },
    "3": {
        title: "Marketing para Maquillistas",
        price: "$60.000 COP",
        tag: "VENTAS & FIDELIZACIÓN",
        description: "El sistema probado para estructurar tus servicios de maquillaje social y novias. Aprenderás a automatizar respuestas, manejarobjeciones de precio y crear alianzas con fotógrafos y planificadores de eventos.",
        includes: [
            "Estrategia de respuestas efectivas por WhatsApp",
            "Cómo armar paquetes irresistibles para Novias",
            "Plantilla de contrato para servicios de maquillaje",
            "Métodos de fidelización para clientes recurrentes"
        ]
    }
};

// Captura de elementos del DOM
const modal = document.getElementById("courseModal");
const closeModalBtn = document.getElementById("closeModal");
const openModalBtns = document.querySelectorAll(".btn-open-modal");

const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalTag = document.getElementById("modalTag");
const modalDescription = document.getElementById("modalDescription");
const modalIncludes = document.getElementById("modalIncludes");

// Función para abrir el modal con los datos del curso seleccionado
openModalBtns.forEach(button => {
    button.addEventListener("click", () => {
        const courseId = button.getAttribute("data-course");
        const course = cursosData[courseId];

        if (course) {
            modalTitle.textContent = course.title;
            modalPrice.textContent = course.price;
            modalTag.textContent = course.tag;
            modalDescription.textContent = course.description;

            // Limpiar e insertar elementos de la lista
            modalIncludes.innerHTML = "";
            course.includes.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item;
                modalIncludes.appendChild(li);
            });

            // Mostrar Modal
            modal.classList.add("active");
        }
    });
});

// Cerrar Modal
closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

// Cerrar haciendo clic fuera del cuadro blanco
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});
