# Administración de Contratistas

Proyecto de práctica Angular basado en el proyecto original de [@LucasFernandez11](https://github.com/LucasFernandez11).

## Cambios realizados
- Migración de `db.json` local a MockAPI como backend simulado
- Refactorización del `DataService` con `HttpClient` y requests HTTP reales
- Tipado completo del servicio con `keyof Database` y generics
- Creación de interfaz `ItemBase` en `shared/models` para optimizar requests
- Corrección de bugs: interpolación de objetos anidados, `.subscribe()` faltante, `.map()` roto
- Aplanamiento del objeto anidado `contacto` en `Contratista` para compatibilidad con MockAPI
- Unificación de tipos de `id` a `string` para consistencia con MockAPI

## Tecnologías
- Angular 17
- TypeScript
- MockAPI
- RxJS