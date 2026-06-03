// ==========================================
// FEATURE 1: LIGHT / DARK THEME SYSTEM
// ==========================================
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
      themeToggleBtn.textContent = '🌙';
    } else {
      themeToggleBtn.textContent = '☀️';
    }
  });
}

// ==========================================
// FEATURE 2: NATIVE SCROLL REVEAL ENGINE
// ==========================================
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

revealElements.forEach(element => {
  revealOnScroll.observe(element);
});

// ==========================================
// FEATURE 3: MODAL EMAIL POP-UP ENGINE
// ==========================================
const emailPopBtn = document.getElementById('email-pop-btn');
const emailModal = document.getElementById('email-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const copyEmailBtn = document.getElementById('copy-email-btn');

// Safely verify elements exist before attaching listeners to prevent runtime blocks
if (emailPopBtn && emailModal && modalCloseBtn && copyEmailBtn) {
  
  // Open Pop-up Window
  emailPopBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevents form submission behavior if nested
    emailModal.classList.add('active');
  });

  // Close Pop-up Window using 'X'
  modalCloseBtn.addEventListener('click', () => {
    emailModal.classList.remove('active');
    copyEmailBtn.textContent = 'Copy Email Address';
  });

  // Close if user clicks outside the modal card box area
  emailModal.addEventListener('click', (e) => {
    if (e.target === emailModal) {
      emailModal.classList.remove('active');
      copyEmailBtn.textContent = 'Copy Email Address';
    }
  });

  // Copy Clipboard Helper
  copyEmailBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('sonalimahato.ds@gmail.com').then(() => {
      copyEmailBtn.textContent = 'Copied Securely!';
      setTimeout(() => {
        copyEmailBtn.textContent = 'Copy Email Address';
      }, 2000);
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  });
}