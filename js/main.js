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
//  DATOS DE LOS TERRENOS
//  Este es el ÚNICO lugar donde se editan los terrenos.
//  Las tarjetas, el formulario, los mapas y la ventana
//  de detalles se generan solos a partir de esta lista.
//
//  - id:        nombre de la carpeta en images/<id>/
//  - categoria: 'propio' (Mis terrenos) u 'otro' (Otros proyectos)
//  - tarjeta:   lo que se ve en la tarjeta de la página
//  - Para quitar un terreno, borra su bloque { ... }
// ===================================================
const WHATSAPP = '524425949691';

const terrenos = [

  // ─── SAN MIGUEL AMAZCALA (propio) ───
  {
    id: 'amazcala',
    categoria: 'propio',
    nombre: 'San Miguel Amazcala',
    ubicacion: 'El Marqués, Querétaro',
    fotos: 2,
    plano: true,
    pdf: 'docs/amazcala.pdf',
    tarjeta: {
      imagen: 'plano',
      etiquetas: ['120 m²', 'Posesión inmediata', 'Alta plusvalía'],
      precio: '$389,000',
      nota: 'crédito disponible',
    },
    desc: 'Terreno en zona en desarrollo con alta plusvalía. Incluye todos los servicios: agua, luz y drenaje. Cuenta con luminaria instalada. Propiedad privada con posesión inmediata.',
    caracteristicas: [
      'Superficie: 120 m²',
      'Precio crédito: $389,000 MXN',
      'Apartado: $2,000 MXN',
      'Enganche: $23,000 MXN',
      'Mensualidad: $5,056 MXN (72 meses)',
      'Posesión inmediata',
      'Propiedad privada',
      'Agua, luz y drenaje incluidos',
      'Luminaria instalada',
      'Alta plusvalía — Zona en desarrollo',
    ],
    videoYT: 'sLT_IOHBCTU',
    mapa: 'https://goo.gl/maps/wcpbvxoWVT62Tooa6?g_st=aw',
  },

  // ─── AMAZCALA — LOS GAVILANES (propio) ───
  {
    id: 'amazcala-gavilanes',
    categoria: 'propio',
    nombre: 'Amazcala — Los Gavilanes',
    ubicacion: 'El Marqués, Querétaro',
    fotos: 1,
    plano: true,
    pdf: null,
    tarjeta: {
      etiqueta: 'Nuevo',
      etiquetas: ['150 m²', '10 × 15 m', 'Título de propiedad'],
      precio: 'Desde $375,000',
      nota: '· $4,000 al mes',
    },
    desc: 'Terrenos de 10×15 m en San Miguel Amazcala, a un lado del Rancho los Gavilanes. Cuentan con título de propiedad, posesión inmediata y construcción libre. El desarrollo tendrá posteado y cableado eléctrico.',
    caracteristicas: [
      'Superficie: 150 m² (10 × 15 m)',
      'Precio desde: $375,000 MXN (algunos lotes cuestan un poco más)',
      'Apartado: $2,000 MXN',
      'Enganche: $20,000 MXN',
      'Mensualidad: $4,000 MXN (aprox. 88 meses)',
      'Posesión inmediata',
      'Título de propiedad',
      'Construcción libre',
      'Tendrá posteado y cableado eléctrico',
    ],
    videoYT: null,
    mapa: 'https://maps.app.goo.gl/fGViT7NrXYebeea29',
  },

  // ─── PIE DE GALLO (propio) ───
  {
    id: 'pie-de-gallo',
    categoria: 'propio',
    nombre: 'Pie de Gallo',
    ubicacion: 'Santa Rosa, Querétaro',
    fotos: 2,
    plano: true,
    pdf: 'docs/pie-de-gallo.pdf',
    tarjeta: {
      imagen: 'plano',
      etiquetas: ['120 m²', '8 × 15 m', 'Trato directo'],
      precio: '$355,000',
      nota: 'crédito a 6 años',
    },
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
    videoYT: 'jc1lIo9OO6o',
    mapa: 'https://maps.app.goo.gl/xA8v5DUSXx7b4MX47',
  },

  // ─── SANTA MARÍA BEGOÑA (propio) ───
  {
    id: 'begona',
    categoria: 'propio',
    nombre: 'Santa María Begoña',
    ubicacion: 'El Marqués, Querétaro',
    fotos: 2,
    plano: true,
    pdf: 'docs/begona.pdf',
    tarjeta: {
      imagen: 'plano',
      etiquetas: ['200 m²', 'Propiedad privada', 'Zona estratégica'],
      precio: '$270,000',
      nota: '· contado $220,000',
    },
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
  },

  // ─── SAN MIGUEL AMAZCALA 200 m² (otro proyecto) ───
  {
    id: 'amazcala-200',
    categoria: 'otro',
    nombre: 'San Miguel Amazcala — 200 m²',
    ubicacion: 'El Marqués, Querétaro',
    fotos: 2,
    plano: false,
    pdf: null,
    tarjeta: {
      titulo: 'San Miguel Amazcala',
      etiqueta: 'Recién disponible',
      etiquetas: ['200 m²', 'Alta plusvalía', 'Zona en desarrollo'],
      precio: '$240,000',
      nota: 'crédito disponible',
    },
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
  },

  // ─── TLACOTE EL BAJO (otro proyecto) ───
  {
    id: 'tlacote',
    categoria: 'otro',
    nombre: 'Tlacote el Bajo',
    ubicacion: 'Tlacote el Bajo, Querétaro',
    fotos: 2,
    plano: false,
    pdf: null,
    tarjeta: {
      etiqueta: 'Inversión',
      etiquetas: ['2 hectáreas', 'Precio a tratar', 'Gran inversión'],
      precio: '$15,500,000',
      nota: '· precio a tratar',
    },
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
  },

];

// Rutas de imágenes a partir del id
const rutaFoto  = (t, n) => `images/${t.id}/foto-${n}.webp`;
const rutaPlano = (t) => `images/${t.id}/plano.webp`;

// ===================================================
//  GENERAR TARJETAS, FORMULARIO Y MAPAS
// ===================================================
function crearTarjeta(t, index, posicion) {
  const card = document.createElement('div');
  const delay = posicion % 3 ? ` reveal-delay-${posicion % 3}` : '';
  card.className = 'terreno-card reveal' + delay;
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.addEventListener('click', () => abrirModal(index));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrirModal(index); }
  });

  const tj = t.tarjeta;
  const imagen = tj.imagen === 'plano' ? rutaPlano(t) : rutaFoto(t, 1);
  const titulo = tj.titulo || t.nombre;
  const etiqueta = tj.etiqueta || 'Disponible';

  card.innerHTML = `
    <div class="terreno-card-img-wrap">
      <img loading="lazy" class="terreno-card-img" src="${imagen}" alt="${titulo}" />
      <span class="terreno-badge">${etiqueta}</span>
    </div>
    <div class="terreno-card-body">
      <h3 class="terreno-nombre">${titulo}</h3>
      <p class="terreno-ubicacion">${t.ubicacion}</p>
      <div class="terreno-features">
        ${tj.etiquetas.map(e => `<span class="feature-tag">${e}</span>`).join('')}
      </div>
      <p class="terreno-sup">${tj.precio} <span>${tj.nota}</span></p>
    </div>`;
  return card;
}

function crearMapa(t) {
  const bloque = document.createElement('div');
  bloque.className = 'mapa-bloque reveal';
  bloque.innerHTML = `
    <h3 class="mapa-titulo">${t.nombre} — ${t.ubicacion.split(',')[0]}</h3>
    <div class="mapa-con-foto">
      <div class="mapa-wrapper mapa-pequeno">
        <div class="mapa-placeholder">
          <span style="font-size:1.8rem;">🗺️</span>
          ${t.nombre}
          <a href="${t.mapa}" target="_blank" rel="noopener" class="btn-mapa-link">Ver en Google Maps →</a>
        </div>
      </div>
      <div class="mapa-foto-lateral">
        <img loading="lazy" src="${rutaFoto(t, 1)}" alt="${t.nombre}" />
      </div>
    </div>`;
  return bloque;
}

const gridPropios = document.getElementById('gridPropios');
const gridOtros   = document.getElementById('gridOtros');
const selectTerreno = document.getElementById('terreno');
const listaMapas  = document.getElementById('listaMapas');
let posPropios = 0, posOtros = 0;

terrenos.forEach((t, i) => {
  if (t.categoria === 'propio') {
    gridPropios.appendChild(crearTarjeta(t, i, posPropios++));
    if (t.mapa) listaMapas.appendChild(crearMapa(t));
  } else {
    gridOtros.appendChild(crearTarjeta(t, i, posOtros++));
  }
  const texto = `${t.nombre} — ${t.tarjeta.precio}`;
  selectTerreno.add(new Option(texto, texto));
});
selectTerreno.add(new Option('Más información general', 'Más información general'));
document.getElementById('statTerrenos').textContent = terrenos.length;

// Si no quedan "otros proyectos", se oculta la sección y su link del menú
if (!gridOtros.children.length) {
  document.getElementById('otros').style.display = 'none';
  document.querySelectorAll('a[href="#otros"]').forEach(a => a.style.display = 'none');
}

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
  for (let n = 1; n <= t.fotos; n++) {
    const img = document.createElement('img');
    img.src = rutaFoto(t, n);
    img.alt = `${t.nombre} — foto ${n}`;
    img.className = 'modal-galeria-img' + (n === 1 ? ' activo' : '');
    img.addEventListener('click', () => {
      modalThumbs.querySelectorAll('.modal-galeria-img').forEach(im => im.classList.remove('activo'));
      img.classList.add('activo');
      abrirVisor(img.src, img.alt);
    });
    modalThumbs.appendChild(img);
  }

  document.getElementById('modalNombre').textContent    = t.nombre;
  document.getElementById('modalUbicacion').textContent = '📍 ' + t.ubicacion;
  document.getElementById('modalDesc').textContent      = t.desc;

  // Plano
  const planoWrap = document.getElementById('modalPlanoWrap');
  if (t.plano) {
    document.getElementById('modalPlano').src = rutaPlano(t);
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
    document.getElementById('btnModalPdf').href = t.pdf;
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
  document.getElementById('btnModalWa').href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

  modalOverlay.classList.add('activo');
  document.body.style.overflow = 'hidden';
  } catch(e) {
    console.error('Error en modal:', e);
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

// Visor de foto ampliada (fotos de la galería y plano)
const visorFoto    = document.getElementById('visorFoto');
const visorFotoImg = document.getElementById('visorFotoImg');

function abrirVisor(src, alt) {
  visorFotoImg.src = src;
  visorFotoImg.alt = alt || '';
  visorFoto.classList.add('activo');
}
function cerrarVisor() {
  visorFoto.classList.remove('activo');
  visorFotoImg.src = '';
}
visorFoto.addEventListener('click', cerrarVisor);
const modalPlano = document.getElementById('modalPlano');
modalPlano.addEventListener('click', () => abrirVisor(modalPlano.src, modalPlano.alt));

// Escape cierra primero la foto ampliada y después el modal
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (visorFoto.classList.contains('activo')) cerrarVisor();
  else cerrarModal();
});

// Año actual en el footer
document.getElementById('anioActual').textContent = new Date().getFullYear();

// Formulario → WhatsApp
document.getElementById('formContacto').addEventListener('submit', (e) => {
  e.preventDefault();
  const form     = e.target;
  const nombre   = form.nombre.value.trim();
  const telefono = form.telefono.value.trim();
  const terreno  = form.terreno.value;
  const mensaje  = form.mensaje.value.trim();
  if (!nombre || !telefono) { alert('Por favor llena los campos obligatorios.'); return; }
  const texto = `Hola, soy *${nombre}* (Tel: ${telefono}).\nMe interesa: *${terreno}*.${mensaje ? '\nMensaje: ' + mensaje : ''}`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, '_blank');
});
