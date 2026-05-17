/* ═══════════════════════════════════════════
   WESTERN AIRTECH — main.js
═══════════════════════════════════════════ */

/* ── Mobile menu ── */
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}

/* ── Active nav on scroll ── */
(function () {
  const sections = document.querySelectorAll('[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(a => {
      a.style.color = (a.getAttribute('href') === '#' + current) ? 'var(--white)' : '';
    });
  });
})();

/* ── Pricing tab switcher ── */
function switchTab(tab) {
  document.querySelectorAll('.ptab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.pricing-panel').forEach(p => p.classList.add('hidden'));
  document.querySelector('[onclick="switchTab(\'' + tab + '\')"]').classList.add('active');
  document.getElementById('tab-' + tab).classList.remove('hidden');
}

/* ── FAQ accordion ── */
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

/* ── WhatsApp quote form ── */
function sendWhatsApp() {
  const fname   = document.getElementById('fname').value.trim();
  const lname   = document.getElementById('lname').value.trim();
  const phone   = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();

  if (!fname || !phone || !service) {
    alert('Please fill in your name, phone number, and select a service.');
    return;
  }

  const lines = [
    'Hi Western AirTech! 👋',
    '',
    `Name: ${fname} ${lname}`,
    `Phone: ${phone}`,
    `Service: ${service}`,
  ];
  if (message) lines.push(`Details: ${message}`);
  lines.push('', "I'd like to get a free quote.");

  const url = 'https://wa.me/260762344488?text=' + encodeURIComponent(lines.join('\n'));
  window.open(url, '_blank');
}
