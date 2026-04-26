# Liga Deportiva de Piribebuy — Sitio Oficial

Sitio web institucional e informativo de la Liga Deportiva de Piribebuy.

## Stack técnico

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (bundler)
- [Tailwind CSS](https://tailwindcss.com/) (estilos)
- [shadcn/ui](https://ui.shadcn.com/) (componentes de UI)
- [React Router v6](https://reactrouter.com/) (navegación)
- [Lucide React](https://lucide.dev/) (íconos)

## Cambios realizados

- Corrección de metadatos principales del sitio.
- Eliminación de referencias genéricas de herramientas de generación.
- Actualización de título, descripción, autor, Open Graph y Twitter Cards.
- Configuración de idioma regional `es-PY`.
- Mejora del footer institucional.
- Incorporación de datos institucionales: personería jurídica, RUC, dirección y teléfono.
- Agregado de Aviso Legal.
- Agregado de Política de Privacidad.
- Agregado de aviso institucional sobre resoluciones disciplinarias.
- Mejoras básicas de accesibilidad (ARIA labels, roles, jerarquía de headings).
- Mejoras básicas de SEO.
- Preparación del sitio para entrega formal al cliente.

## Contenido del sitio

El sitio incluye información institucional de la Liga Deportiva de Piribebuy, fixture, resultados, posiciones, clubes, estadísticas, noticias y resoluciones oficiales.

## Instalación y desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Pendientes antes de publicación final

- Confirmar correo oficial de la Liga.
- Confirmar dominio definitivo y actualizar Open Graph/Twitter Cards.
- Agregar imagen OG institucional (`/public/og-image.jpg`, 1200×630 px).
- Confirmar autorización de uso de logos, escudos, imágenes, documentos, datos deportivos y resoluciones.
- Obtener aprobación formal de la Liga antes de publicar.
- Confirmar si se mantiene o se elimina el crédito del desarrollador en el footer (`SHOW_DEVELOPER_CREDIT` en `FooterSection.tsx`).

## Nota legal

La información publicada en este sitio es provista o aprobada por la Liga Deportiva de Piribebuy. El desarrollador actúa como prestador técnico del sitio web y no como responsable editorial del contenido institucional, deportivo o documental publicado.

## Desarrollo

Desarrollado por: Alejandro Villalba
