# Vozcalizador · Acomoda y encuentra por voz

App web para registrar, explorar y ubicar por voz los objetos de cualquier colección: ropa, despensa, herramientas, archivos, materiales.

- **App:** https://lalitoelprofefulanito-dot.github.io/Vozcalizador/
- **Versión con ejemplos** (para probar todas las funciones): https://lalitoelprofefulanito-dot.github.io/Vozcalizador/ejemplo.html

## Cómo usarla en el celular
1. Abra la dirección de la app en **Google Chrome**.
2. Para instalarla: menú ⋮ › **Agregar a la pantalla principal** (o **Instalar app**). Ya instalada, abre sin internet.
3. La primera vez que toque 🎙, Chrome pide permiso para el micrófono: elija **Permitir**. El reconocimiento de voz del navegador necesita internet.

## Respaldos de ejemplo
Diez colecciones completas para probar «Restaurar un respaldo» (Ajustes › Respaldo, o en la bienvenida). Cada una trae de 12 a 14 objetos con folio, 4 imágenes de muestra y 2 búsquedas en el historial. Restaurar reemplaza lo que haya en la app: descargue antes su propio respaldo si quiere conservarlo.

- [Ropa y calzado](https://lalitoelprofefulanito-dot.github.io/Vozcalizador/ejemplos/Vozcalizador-respaldo-ejemplo-01-ropa-y-calzado.json)
- [Despensa](https://lalitoelprofefulanito-dot.github.io/Vozcalizador/ejemplos/Vozcalizador-respaldo-ejemplo-02-despensa.json)
- [Herramientas de la casa](https://lalitoelprofefulanito-dot.github.io/Vozcalizador/ejemplos/Vozcalizador-respaldo-ejemplo-03-herramientas.json)
- [Botiquín](https://lalitoelprofefulanito-dot.github.io/Vozcalizador/ejemplos/Vozcalizador-respaldo-ejemplo-04-botiquin.json)
- [Documentos de la casa](https://lalitoelprofefulanito-dot.github.io/Vozcalizador/ejemplos/Vozcalizador-respaldo-ejemplo-05-documentos.json)
- [Cables, cargadores y aparatos](https://lalitoelprofefulanito-dot.github.io/Vozcalizador/ejemplos/Vozcalizador-respaldo-ejemplo-06-cables-y-aparatos.json)
- [Mudanza](https://lalitoelprofefulanito-dot.github.io/Vozcalizador/ejemplos/Vozcalizador-respaldo-ejemplo-07-mudanza.json)
- [Almacén de empaque](https://lalitoelprofefulanito-dot.github.io/Vozcalizador/ejemplos/Vozcalizador-respaldo-ejemplo-08-almacen.json)
- [Mercancía de la tiendita](https://lalitoelprofefulanito-dot.github.io/Vozcalizador/ejemplos/Vozcalizador-respaldo-ejemplo-09-tiendita.json)
- [Plantas y semillas](https://lalitoelprofefulanito-dot.github.io/Vozcalizador/ejemplos/Vozcalizador-respaldo-ejemplo-10-plantas-y-semillas.json)

En el celular: toque el enlace y elija «Descargar» (si Chrome muestra el texto del archivo, use el menú ⋮ › Descargar). Después, en la app: Ajustes › Restaurar un respaldo › elija el archivo en «Descargas».

## Archivos
- `index.html`: la app (versión sin datos).
- `ejemplo.html`: la misma app con un botón para cargar ejemplos y simular la compra.
- `ejemplos/`: los diez respaldos de ejemplo.
- `sw.js`, `manifest.webmanifest`, `icono-192.png`, `icono-512.png`: lo que permite instalarla y abrirla sin internet.

Los datos se guardan solo en el teléfono de cada persona; la app no los envía a ningún servidor.
