// Importar Firebase SDK desde los CDNs oficiales
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Configuración pública de Firebase (segura para el cliente/frontend)
const firebaseConfig = {
    apiKey: "TU_API_KEY_PUBLICA",
    authDomain: "tu-proyecto.firebaseapp.com",
    projectId: "tu-proyecto",
    storageBucket: "tu-proyecto.appspot.com",
    messagingSenderId: "tu-id",
    appId: "tu-id-app"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Referencia al contenedor de cursos en el HTML
const cursosGrid = document.getElementById("cursos-grid");

// Función para cargar los cursos desde Firestore
async function cargarCursos() {
    try {
        cursosGrid.innerHTML = "<p>Cargando cursos disponibles...</p>";

        // Creamos una consulta a la colección 'courses' filtrando solo los publicados
        const q = query(collection(db, "courses"), where("published", "==", true));
        const querySnapshot = await getDocs(q);

        cursosGrid.innerHTML = ""; // Limpiamos el mensaje de carga

        if (querySnapshot.empty) {
            cursosGrid.innerHTML = "<p>No hay cursos disponibles en este momento.</p>";
            return;
        }

        // Recorremos cada documento obtenido de Firestore
        querySnapshot.forEach((doc) => {
            const curso = doc.data();

            // Creamos la tarjeta HTML para cada curso
            const card = document.createElement("div");
            card.classList.add("curso-card");
            card.setAttribute("data-category", curso.category || "general");

            card.innerHTML = `
                <div class="curso-info">
                    <h3>${curso.title}</h3>
                    <p class="curso-price">$${curso.price} COP</p>
                    <button class="btn-comprar" data-title="${curso.title}">Inscribirme</button>
                </div>
            `;

            cursosGrid.appendChild(card);
        });

    } catch (error) {
        console.error("Error al cargar los cursos desde Firestore: ", error);
        cursosGrid.innerHTML = "<p>Hubo un error al cargar el catálogo. Intenta recargar la página.</p>";
    }
}

// Ejecutar la función cuando cargue la página
document.addEventListener("DOMContentLoaded", cargarCursos);
