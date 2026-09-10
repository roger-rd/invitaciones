## Reparto con Codex

Este proyecto se trabaja en colaboración entre Claude y Codex, siguiendo este flujo:

- Claude analiza el proyecto, hace las preguntas necesarias, prepara el plan y decide la arquitectura.
- Antes de modificar código de producción, Claude presenta el plan al usuario y espera su aprobación.
- Después de aprobarlo, Claude delega a Codex la implementación mediante `codex-rescue`.
- Codex modifica los archivos y ejecuta las comprobaciones necesarias.
- Claude revisa el resultado antes de presentárselo al usuario.
- Claude informa al usuario qué tarea delegó, qué archivos cambió Codex y qué pruebas se ejecutaron.
- Claude y Codex no deben trabajar simultáneamente sobre los mismos archivos.
- Si Codex falla dos veces en una misma tarea, Claude retoma el diagnóstico directamente.
- Las revisiones con Codex se ejecutan manualmente cuando sean necesarias; el review gate permanece desactivado.

### Precisiones

- Se considera cambio de producción cualquier modificación en `src`, `public`, configuración, dependencias, rutas, componentes, estilos o comportamiento visible de la aplicación.
- Antes de esos cambios, Claude debe presentar un plan y esperar la aprobación explícita del usuario.
- Después de la aprobación, Claude debe delegar a Codex una tarea concreta, indicando objetivo, archivos o áreas permitidas, restricciones y criterios de aceptación.
- Codex debe ejecutar como mínimo `npm run build` y, si existen en el proyecto, lint, pruebas automatizadas y comprobación de TypeScript.
- Se considera un intento fallido cuando Codex no puede completar la tarea, produce errores de compilación o no cumple los criterios de aceptación.
- Dos correcciones fallidas de la misma tarea cuentan como dos fallos; en ese caso Claude retoma el diagnóstico y lo informa al usuario.
- Claude y Codex no deben editar simultáneamente: Claude delega, espera la respuesta de Codex y después revisa los archivos.
- Si `codex-rescue` no está disponible, Claude debe detener la implementación e informar al usuario, sin modificar el código por su cuenta salvo autorización explícita.
- El review gate permanece desactivado y las revisiones de Codex se solicitan manualmente cuando Claude o el usuario lo consideren necesario.
- Al finalizar, Claude debe informar qué delegó, qué archivos fueron modificados, qué comprobaciones se ejecutaron y cuál fue el resultado.
