// ===================================================
//  TERRENOS QRO — main.js
// ===================================================

// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Menú hamburguesa
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('abierto'));
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('abierto'));
});

// Animaciones reveal
const revelar = () => {
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight + 100)
      el.classList.add('visible');
  });
};
window.addEventListener('scroll', revelar);
window.addEventListener('load', () => {
  // Pequeño delay para asegurar que el DOM está listo
  setTimeout(revelar, 50);
  setTimeout(revelar, 300);
});

// ===================================================
//  DATOS DE LOS 6 TERRENOS
// ===================================================
const terrenos = [

  // ─── 1: SAN MIGUEL AMAZCALA (propio) ───
  {
    nombre: 'San Miguel Amazcala',
    ubicacion: 'El Marqués, Querétaro',
    imagenes: ['images/1.1.jpg', 'images/1.2.jpg'],
    plano: 'images/p1.png',
    pdf: 'docs/amazcala.pdf',
    desc: 'Terreno en zona en desarrollo con alta plusvalía. Incluye todos los servicios: agua, luz y drenaje. Cuenta con luminaria instalada. Propiedad privada con posesión inmediata.',
    caracteristicas: [
      'Superficie: 120 m²',
      'Precio crédito: $370,000 MXN',
      'Apartado: $2,000 MXN',
      'Enganche: $23,000 MXN',
      'Mensualidad: $4,792 MXN',
      'Posesión inmediata',
      'Propiedad privada',
      'Agua, luz y drenaje incluidos',
      'Luminaria instalada',
      'Alta plusvalía — Zona en desarrollo',
    ],
    // //cambiar — reemplaza el ID del video de YouTube de Amazcala cuando lo subas
    videoYT: 'sLT_IOHBCTU',
    mapa: 'https://goo.gl/maps/wcpbvxoWVT62Tooa6?g_st=aw',
    wa: '524425949691',
  },

  // ─── 2: PIE DE GALLO (propio) ───
  {
    nombre: 'Pie de Gallo',
    ubicacion: 'Santa Rosa, Querétaro',
    imagenes: ['images/2.1.jpg', 'images/2.2.jpg'],
    plano: 'images/p2.jpg',
    pdf: 'docs/gallo.pdf',
    desc: 'Oportunidad única en Pie de Gallo, Santa Rosa. Medidas 8×15 m. Todos los servicios disponibles. Trato directo con el dueño, sin intermediarios. Crédito a 6 años.',
    caracteristicas: [
      'Superficie: 120 m² (8 × 15 m)',
      'Precio: $355,000 MXN',
      'Apartado: $2,000 MXN',
      'Enganche: $25,000 MXN',
      'Mensualidad: $4,584 MXN',
      'Crédito a 6 años',
      'Posesión inmediata',
      'Luz, agua y drenaje',
      'Trato directo con dueño',
    ],
    // //cambiar — reemplaza el ID del video de YouTube de Pie de Gallo cuando lo subas
    videoYT: 'jc1lIo9OO6o',
    mapa: 'https://maps.app.goo.gl/xA8v5DUSXx7b4MX47',
    wa: '524425949691',
  },

  // ─── 3: SANTA MARÍA BEGOÑA (propio) ───
  {
    nombre: 'Santa María Begoña',
    ubicacion: 'El Marqués, Querétaro',
    imagenes: ['images/3.1.jpg', 'images/3.2.jpg'],
    plano: 'images/p3.png',
    pdf: 'docs/begona.pdf',
    desc: 'Tu oportunidad de ser dueño de un terreno estratégico en Santa María Begoña. Superficie ideal para tu proyecto de vida. Precio especial al contado.',
    caracteristicas: [
      'Superficie: 200 m²',
      'Precio crédito: $270,000 MXN',
      'Precio contado: $220,000 MXN',
      'Apartado: $2,000 MXN',
      'Enganche: $25,000 MXN',
      'Mensualidad: $5,104 MXN',
      'Posesión inmediata',
      'Propiedad privada',
      'Zona estratégica en desarrollo',
    ],
    videoYT: null,
    mapa: 'https://maps.app.goo.gl/Ka6xn3qmEria6B579',
    wa: '524425949691',
  },

  // ─── 4: SAN MIGUEL AMAZCALA 200m² (otro proyecto) ───
  {
    nombre: 'San Miguel Amazcala — 200 m²',
    ubicacion: 'El Marqués, Querétaro',
    imagenes: ['images/4.1.jpg', 'images/4.2.jpg'],
    plano: null,
    pdf: null,
    desc: 'Lote de 200 m² en zona de alta plusvalía en San Miguel Amazcala, El Marqués. Propiedad privada con posesión inmediata. Zona en desarrollo con gran potencial de valorización.',
    caracteristicas: [
      'Superficie: 200 m²',
      'Precio: $240,000 MXN',
      'Apartado: $5,000 MXN',
      'Enganche: $30,000 MXN',
      'Mensualidad: $3,000 MXN',
      'Posesión inmediata',
      'Propiedad privada',
      'Alta plusvalía — Zona en desarrollo',
    ],
    videoYT: null,
    mapa: 'https://goo.gl/maps/wcpbvxoWVT62Tooa6?g_st=aw',
    wa: '524425949691',
  },

  // ─── 5: LA SOLANA (otro proyecto — completo) ───
  {
    nombre: 'La Solana',
    ubicacion: 'Santa Rosa Jáuregui, Querétaro',
    imagenes: ['images/5.1.jpg', 'images/5.2.jpg'],
    plano: 'images/p4.png',
    pdf: 'docs/solana.pdf',
    desc: 'Gran desarrollo en Santa Rosa Jáuregui. Lotes de 150 m² (10×15 m) en un proyecto de alta calidad. El precio incrementa según metros cuadrados del lote y su ubicación dentro del fraccionamiento — los lotes superiores tienen mayor vista y plusvalía.',
    caracteristicas: [
      'Superficie: 150 m² (10 × 15 m)',
      'Precio desde: $90,000 MXN',
      'Precio incrementa según m² del lote',
      'Lotes superiores: hasta $110,000 MXN',
      'Apartado: $5,000 MXN',
      'Enganche: 50% del precio del terreno',
      '⚠️ Precio incrementa según la media de m²',
    ],
    // //cambiar — reemplaza con el ID del video de La Solana cuando lo subas a YouTube
    videoYT: 'fiVjaLLImHw',
    mapa: null,
    wa: '524425949691',
  },

  // ─── 6: TLACOTE EL BAJO (otro proyecto) ───
  {
    nombre: 'Tlacote el Bajo',
    ubicacion: 'Tlacote el Bajo, Querétaro',
    imagenes: ['images/6.1.jpg', 'images/6.2.jpg'],
    plano: null,
    pdf: null,
    desc: 'Dos hectáreas en Tlacote el Bajo. Excelente zona para inversión. Precio a tratar directamente con el dueño. Muy buen lugar para desarrollo o inversión a largo plazo.',
    caracteristicas: [
      'Superficie: 2 hectáreas (20,000 m²)',
      'Precio: $15,500,000 MXN',
      'Precio es a tratar',
      'Trato directo con el dueño',
      'Excelente zona para inversión',
      'Sin compromiso — visita disponible',
    ],
    videoYT: null,
    mapa: null,
    wa: '524425949691',
  },

];

// ===================================================
//  MODAL
// ===================================================
const modalOverlay = document.getElementById('modalOverlay');
const modalCerrar  = document.getElementById('modalCerrar');

function abrirModal(index) {
  try {
  const t = terrenos[index];

  // Galería de imágenes — muestra todas como cards clicables
  const modalThumbs = document.getElementById('modalThumbs');
  modalThumbs.innerHTML = '';
  t.imagenes.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'modal-galeria-img' + (i === 0 ? ' activo' : '');
    img.addEventListener('click', () => {
      modalThumbs.querySelectorAll('.modal-galeria-img').forEach(im => im.classList.remove('activo'));
      img.classList.add('activo');
    });
    modalThumbs.appendChild(img);
  });

  document.getElementById('modalNombre').textContent    = t.nombre;
  document.getElementById('modalUbicacion').textContent = '📍 ' + t.ubicacion;
  document.getElementById('modalDesc').textContent      = t.desc;

  // Plano
  const planoWrap = document.getElementById('modalPlanoWrap');
  if (t.plano) {
    document.getElementById('modalPlano').src = t.plano;
    planoWrap.style.display = 'block';
  } else {
    planoWrap.style.display = 'none';
  }

  // Características
  const lista = document.getElementById('modalCaracteristicas');
  lista.innerHTML = '';
  t.caracteristicas.forEach(c => {
    const li = document.createElement('li');
    li.textContent = c;
    lista.appendChild(li);
  });

  // Video
  const modalVideoWrap = document.getElementById('modalVideoWrap');
  const modalVideo = document.getElementById('modalVideo');
  if (t.videoYT) {
    modalVideo.src = `https://www.youtube.com/embed/${t.videoYT}`;
    modalVideoWrap.style.display = 'block';
  } else {
    modalVideo.src = '';
    modalVideoWrap.style.display = 'none';
  }

  // Visor PDF
  const modalPdfWrap  = document.getElementById('modalPdfWrap');
  const modalPdfVisor = document.getElementById('modalPdfVisor');
  if (t.pdf) {
    modalPdfVisor.src = t.pdf;
    modalPdfWrap.style.display = 'block';
  } else {
    modalPdfVisor.src = '';
    modalPdfWrap.style.display = 'none';
  }

  // Botón mapa
  const btnMapa = document.getElementById('btnModalMapa');
  if (t.mapa) {
    btnMapa.href = t.mapa;
    btnMapa.style.display = 'inline-block';
  } else {
    btnMapa.style.display = 'none';
  }

  // WhatsApp
  const msg = `Hola, me interesa el terreno *${t.nombre}* (${t.ubicacion}). ¿Podría darme más información?`;
  document.getElementById('btnModalWa').href = `https://wa.me/${t.wa}?text=${encodeURIComponent(msg)}`;

  modalOverlay.classList.add('activo');
  document.body.style.overflow = 'hidden';
  } catch(e) {
    console.error('Error en modal:', e);
    alert('Error: ' + e.message);
  }
}

function cerrarModal() {
  document.getElementById('modalVideo').src = '';
  document.getElementById('modalPdfVisor').src = '';
  modalOverlay.classList.remove('activo');
  document.body.style.overflow = '';
}

modalCerrar.addEventListener('click', cerrarModal);
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) cerrarModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') cerrarModal(); });

// Formulario → WhatsApp
document.getElementById('formContacto').addEventListener('submit', (e) => {
  e.preventDefault();
  const form     = e.target;
  const nombre   = form.nombre.value.trim();
  const telefono = form.telefono.value.trim();
  const terreno  = form.terreno.value;
  const mensaje  = form.mensaje.value.trim();
  if (!nombre || !telefono) { alert('Por favor llena los campos obligatorios.'); return; }
  const texto = `Hola, soy *${nombre}* (Tel: ${telefono}).%0AMe interesa: *${terreno}*.${mensaje ? '%0AMensaje: ' + encodeURIComponent(mensaje) : ''}`;
  window.open(`https://wa.me/524425949691?text=${texto}`, '_blank');
});
