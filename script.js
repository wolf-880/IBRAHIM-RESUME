/* ---- Custom cursor (desktop only) ---- */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');
if (cursor && window.matchMedia('(pointer:fine)').matches) {
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove', e => {
    mx=e.clientX; my=e.clientY;
    cursor.style.left=mx+'px'; cursor.style.top=my+'px';
  });
  (function animRing(){
    rx+=(mx-rx)*0.12; ry+=(my-ry)*0.12;
    ring.style.left=rx+'px'; ring.style.top=ry+'px';
    requestAnimationFrame(animRing);
  })();
  document.querySelectorAll('a,button').forEach(el=>{
    el.addEventListener('mouseenter',()=>{
      cursor.style.transform='translate(-50%,-50%) scale(2)';
      ring.style.width='56px'; ring.style.height='56px'; ring.style.opacity='0.3';
    });
    el.addEventListener('mouseleave',()=>{
      cursor.style.transform='translate(-50%,-50%) scale(1)';
      ring.style.width='38px'; ring.style.height='38px'; ring.style.opacity='0.5';
    });
  });
}

/* ---- Mobile hamburger ---- */
const burger = document.getElementById('burger');
const drawer = document.getElementById('drawer');
burger.addEventListener('click', () => {
  const open = drawer.classList.toggle('open');
  burger.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
document.querySelectorAll('.drawer-link').forEach(a => {
  a.addEventListener('click', () => {
    drawer.classList.remove('open');
    burger.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ---- Scroll reveal ---- */
const obs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
