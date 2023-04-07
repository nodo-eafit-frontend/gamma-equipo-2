## Leer el readme

- En (navbar-publico) van las páginas con navbar (con el que me puedo mover entre páginas), es decir casi todas las páginas excepto la página de donaciones y las que no tengan el navbar en la página de filantropia

- En (navbar-micrositio) va la página de donacion, el formulario, etc son las que tienen arriba un navbar o header con el logo de filantropia y una frase, con fondo azul y un footer con datos de eafit

- En carpeta components van los componentes, no se si lo vamos a hacer atom design o cómo, pero aqui van esos componentes que pueden ser reutilizados en varias partes de la aplicación

- En data pueden ir los archivos .json para cada parte de la aplicacion (que es donde extraeremos la info, [base de datos dummy]) para no quemar los datos en el HTML

- Para los estilos solo es crear el archivo scss, importarlo en style.scss e importar style.scss

Crean su rama en github ó Crean su rama (dependiendo de la funcionalidad que vayan a desarrollar): git checkout -b nombreRama

Clonan el repositorio: git clone https://github.com/nodo-eafit-frontend/gamma-equipo-2

Entran en la carpeta: cd gamma-equipo-2

Descargan todas las librerias: pnpm install (para que quede en main)

Cambian de rama: git checkout nombreRama

Descargan todas las librerias: pnpm install (para que quede en su rama todos los archivos descargardos)

Ejecutan el proyecto (instalen pnpm es más rápido que npm y para tener un estandar): pnpm next dev

Después

- git add nombreDeArchivos ó desde la ramita de vs code (desde su rama)
- git commit -m "datos del commit"
- git pull
- git push
- git checkout main
- git merge nombreRama
- (si hay que hacer git add y git commit se hace)
- git pull
- git push
