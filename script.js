/* =============================================
   GUÍA DE NEGOCIACIÓN COLABORATIVA — script
   ============================================= */

function toggle(header) {
  const body = header.nextElementSibling;
  const chevron = header.querySelector('.chevron');
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  chevron.classList.toggle('open', !isOpen);
}
