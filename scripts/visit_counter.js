let contarVisitante = localStorage.getItem('page_view_count');

if (contarVisitante === null) {
        contarVisitante = 0;
}

    contarVisitante ++;

localStorage.setItem('page_view_count', contarVisitante);

document.getElementById('visitas').textContent= contarVisitante;