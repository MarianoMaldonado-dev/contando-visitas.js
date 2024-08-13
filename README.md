[English Version](README.en.md)
---

# Contador de Visitas y Actualización Automática de Fechas

Este repositorio ofrece un ejemplo práctico de cómo implementar un contador de visitas en una página web y cómo actualizar automáticamente la fecha o el año en curso utilizando JavaScript.

## Descripción del Proyecto

El propósito de este proyecto es mostrar cómo se puede agregar un contador de visitas sencillo utilizando `localStorage`, junto con un script para actualizar automáticamente el año actual en el footer de la página. Esto puede ser útil para pequeños proyectos o sitios web que necesitan mostrar cuántas veces ha sido visitada una página, sin necesidad de recurrir a servidores externos.

## Implementación del Contador de Visitas

### ¿Cómo funciona?

El contador de visitas se implementa utilizando la API `localStorage` de JavaScript, que permite almacenar datos de forma persistente en el navegador del usuario. Cada vez que un usuario visita la página, el contador se incrementa en uno.

### Código Básico del Contador

```javascript
// Obtener el número de visitas desde el localStorage
let visitas = localStorage.getItem('visitas') || 0;

// Incrementar el contador
visitas++;

// Guardar el número de visitas actualizado en el localStorage
localStorage.setItem('visitas', visitas);

// Mostrar el número de visitas en la página
document.getElementById('visitas').innerText = visitas;
```

### Limitaciones

Este método almacena los datos en el navegador del usuario, por lo que no es adecuado para proyectos que requieren un seguimiento preciso de visitas en diferentes dispositivos o sesiones de usuario. Para un contador de visitas persistente y compartido entre todos los usuarios, es necesario integrar una API externa.

## Actualización Automática de Fechas

### ¿Cómo funciona?

El script de actualización automática de fechas permite mostrar el año actual en cualquier parte de la página, sin necesidad de modificar el código manualmente cada año. Esto es especialmente útil para el footer, donde se suele indicar el año de copyright.

### Código Básico para Actualizar el Año

```javascript
// Obtener el año actual
let year = new Date().getFullYear();

// Mostrar el año en el elemento con id 'current-year'
document.getElementById('current-year').innerText = year;
```

## Integración con APIs Externas

Para crear un contador de visitas más robusto y persistente, puedes integrar tu proyecto con APIs externas que permitan almacenar y recuperar el número de visitas en un servidor. Algunas de las APIs que puedes explorar incluyen:

- **Google Analytics**: Puedes usar Google Analytics para hacer un seguimiento de las visitas de la página, aunque no es tan simple como mostrar un contador en la página misma.
- **APIs de Contadores de Visitas**: Existen servicios como [Free Visitor Counter](https://www.freevisitorcounters.com/) que te permiten integrar un contador de visitas en tu página. Estos servicios suelen ofrecer un script que puedes incrustar directamente en tu HTML.

### Ejemplo de Implementación con un API Externa

```html
<!-- Código para integrar un contador externo -->
<script type="text/javascript" src="https://www.freevisitorcounters.com/auth.php?id=YOUR_ID"></script>
<script type="text/javascript" src="https://www.freevisitorcounters.com/en/home/counter/YOUR_ID/t/13"></script>
```

## Contribuciones

Las contribuciones son bienvenidas. Si tienes alguna sugerencia o mejora, no dudes en abrir un issue o enviar un pull request.

## Licencia

Este proyecto está bajo la Licencia GPL-3.0 license. Puedes ver más detalles en el archivo LICENSE.

---