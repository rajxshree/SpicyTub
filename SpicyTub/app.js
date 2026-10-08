/**
 * SPICYTUB - CORE JAVASCRIPT ENGINE
 * Handles:
 * - Dynamic data population from config.js
 * - Interactive spice particle canvas animation
 * - Menu filtering and live search
 * - Signature dishes & Offers rendering
 * - Reservation form validation & WhatsApp deep linking
 * - Testimonial slider / carousel with touch & dot controls
 * - Lightbox gallery with previous/next transitions
 * - Instagram grid integration
 * - Sticky navbar & mobile navigation drawer
 * - Animated statistics counter with intersection observer
 * - Scroll reveal animations
 */

document.addEventListener("DOMContentLoaded", () => {
  const cfg = window.SPICYTUB_CONFIG;
  if (!cfg) {
    console.error("SpicyTub config not loaded!");
    return;
  }

  // 1. Initialize Preloader
  initPreloader();

  // 2. Initialize Canvas Spice Particle Animation
  initSpiceParticles();

  // 3. Populate Static & Dynamic Data from Config
  populateRestaurantInfo(cfg);
  populateStats(cfg.stats);
  populateSpecialities(cfg.specialities);
  populateSignatureDishes(cfg.signatureDishes);
  populateOffers(cfg.offers);
  populateGallery(cfg.gallery);
  populateReviews(cfg.reviews);
  populateInstagram(cfg.instagramPosts);

  // 4. Menu Filtering & Live Search Setup
  initMenuSystem(cfg.menu);

  // 5. Setup Sticky Navbar & Active Nav Links
  initNavigation();

  // 6. Setup Table Reservation Form & WhatsApp Generator
  initReservationForm(cfg);

  // 7. Setup Reviews Carousel
  initReviewsCarousel();

  // 8. Setup Gallery Lightbox
  initGalleryLightbox(cfg.gallery);

  // 9. Setup Scroll Reveal & Number Counter
  initScrollAnimations();

  // 10. Back to top button
  initBackToTop();
});

/* ===================================================================
   1. PRELOADER
=================================================================== */
function initPreloader() {
  const preloader = document.getElementById("preloader");
  if (!preloader) return;
  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.classList.add("hidden");
    }, 400);
  });
  // Fallback timeout
  setTimeout(() => {
    if (!preloader.classList.contains("hidden")) {
      preloader.classList.add("hidden");
    }
  }, 1800);
}

/* ===================================================================
   2. SPICE PARTICLES CANVAS (Golden saffron & red ember sparks)
=================================================================== */
function initSpiceParticles() {
  const canvas = document.getElementById("particles-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particlesCount = window.innerWidth < 768 ? 28 : 55;
  const particles = [];
  const colors = [
    "rgba(229, 169, 60, 0.7)",   // Gold
    "rgba(243, 125, 29, 0.7)",   // Saffron
    "rgba(230, 57, 42, 0.65)",   // Chilli red
    "rgba(247, 213, 138, 0.55)"  // Warm light gold
  ];

  for (let i = 0; i < particlesCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.5 + 0.8,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 0.4,
      vy: -Math.random() * 0.7 - 0.2, // Drift upwards like ember/spice dust
      alpha: Math.random() * 0.7 + 0.3,
      alphaChange: (Math.random() - 0.5) * 0.015
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.alpha += p.alphaChange;

      if (p.alpha <= 0.2 || p.alpha >= 0.85) {
        p.alphaChange = -p.alphaChange;
      }

      // Recycle particles
      if (p.y < 0) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;
      ctx.fill();
      ctx.restore();
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* ===================================================================
   3. POPULATE RESTAURANT DATA
=================================================================== */
function populateRestaurantInfo(cfg) {
  // Floating WA & Header links
  const floatingWa = document.getElementById("floating-wa-btn");
  if (floatingWa) {
    const greeting = encodeURIComponent("Hello SpicyTub! I would like to inquire about dining at your restaurant.");
    floatingWa.href = `https://wa.me/${cfg.whatsappNumber}?text=${greeting}`;
  }

  // Hero WhatsApp button
  const heroWa = document.getElementById("hero-wa-btn");
  if (heroWa) {
    const heroMsg = encodeURIComponent("Hello SpicyTub! I would like to ask about today's menu and table availability.");
    heroWa.href = `https://wa.me/${cfg.whatsappNumber}?text=${heroMsg}`;
  }

  // Mobile Bottom bar links
  const mobileCall = document.getElementById("mobile-bottom-call");
  if (mobileCall) mobileCall.href = `tel:${cfg.phoneRaw}`;
  const mobileWa = document.getElementById("mobile-bottom-wa");
  if (mobileWa) mobileWa.href = `https://wa.me/${cfg.whatsappNumber}`;

  // Contact section elements
  const contactPhone = document.getElementById("contact-phone");
  if (contactPhone) {
    contactPhone.textContent = cfg.phone;
    contactPhone.href = `tel:${cfg.phoneRaw}`;
  }
  const contactWa = document.getElementById("contact-wa");
  if (contactWa) {
    contactWa.textContent = `+${cfg.whatsappNumber}`;
    contactWa.href = `https://wa.me/${cfg.whatsappNumber}`;
  }
  const contactEmail = document.getElementById("contact-email");
  if (contactEmail) {
    contactEmail.textContent = cfg.email;
    contactEmail.href = `mailto:${cfg.email}`;
  }
  const contactAddress = document.getElementById("contact-address");
  if (contactAddress) {
    contactAddress.innerHTML = `${cfg.address.line1}<br>${cfg.address.line2}`;
  }
  const contactHours = document.getElementById("contact-hours");
  if (contactHours) {
    contactHours.innerHTML = `<strong>Lunch:</strong> ${cfg.timings.lunch}<br><strong>Dinner:</strong> ${cfg.timings.dinner}<br><small style="color:var(--color-gold);">${cfg.timings.days}</small>`;
  }

  // Google Maps Embed & Directions link
  const mapsEmbed = document.getElementById("maps-iframe");
  if (mapsEmbed) mapsEmbed.src = cfg.googleMapsEmbed;
  const directionsBtn = document.getElementById("directions-btn");
  if (directionsBtn) directionsBtn.href = cfg.socialLinks.maps;

  // Social Links
  const instaLinks = document.querySelectorAll(".link-instagram");
  instaLinks.forEach(el => (el.href = cfg.socialLinks.instagram));
  const fbLinks = document.querySelectorAll(".link-facebook");
  fbLinks.forEach(el => (el.href = cfg.socialLinks.facebook));
}

/* Populate Stats */
function populateStats(stats) {
  const container = document.getElementById("about-stats-grid");
  if (!container || !stats) return;

  container.innerHTML = stats
    .map(
      (s, idx) => `
    <div class="stat-card reveal reveal-delay-${(idx % 3) + 1}">
      <div class="stat-number" data-target="${s.number}" data-suffix="${s.suffix}" data-decimal="${s.isDecimal ? "true" : "false"}">
        0${s.suffix}
      </div>
      <div class="stat-label">${s.label}</div>
    </div>
  `
    )
    .join("");
}

/* Populate Specialities */
function populateSpecialities(specialities) {
  const container = document.getElementById("specialities-grid");
  if (!container || !specialities) return;

  container.innerHTML = specialities
    .map(
      (item) => `
    <div class="speciality-card reveal">
      <div class="speciality-img">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <span class="speciality-badge">${item.badge}</span>
      </div>
      <div class="speciality-info">
        <h3 class="speciality-name">${item.name}</h3>
        <p class="speciality-desc">${item.desc}</p>
        <a href="#menu" class="speciality-link" onclick="filterMenuCategory('${item.id}')">
          Explore Items <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  `
    )
    .join("");
}

/* Populate Signature Dishes */
function populateSignatureDishes(dishes) {
  const container = document.getElementById("signature-dishes-grid");
  if (!container || !dishes) return;

  const cfg = window.SPICYTUB_CONFIG;

  container.innerHTML = dishes
    .map((dish) => {
      const waMsg = encodeURIComponent(
        `Hello SpicyTub! I would like to order the signature dish: *${dish.name}* (${dish.price}). Please share delivery/pickup details.`
      );
      const waUrl = `https://wa.me/${cfg.whatsappNumber}?text=${waMsg}`;

      return `
      <div class="signature-card reveal">
        <div class="signature-img-box">
          <img src="${dish.image}" alt="${dish.name}" loading="lazy">
          <span class="chefs-badge"><i class="fas fa-crown"></i> ${dish.tag}</span>
          <span class="veg-badge-indicator ${dish.isVeg ? "veg" : "non-veg"}"></span>
        </div>
        <div class="signature-body">
          <div class="signature-header">
            <h3 class="signature-title">${dish.name}</h3>
            <span class="signature-price">${dish.price}</span>
          </div>
          <p class="signature-desc">${dish.desc}</p>
          <div class="signature-footer">
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-order-wa">
              <i class="fab fa-whatsapp"></i> Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    `;
    })
    .join("");
}

/* Populate Offers (Today's Special) */
function populateOffers(offers) {
  const container = document.getElementById("offers-grid");
  if (!container || !offers) return;

  const cfg = window.SPICYTUB_CONFIG;

  container.innerHTML = offers
    .map((offer) => {
      const waMsg = encodeURIComponent(
        `Hello SpicyTub! I would like to claim the special offer: *${offer.title}* (${offer.price}). Please let me know how to proceed!`
      );
      const waUrl = `https://wa.me/${cfg.whatsappNumber}?text=${waMsg}`;

      return `
      <div class="offer-card reveal">
        <div class="offer-img-box">
          <img src="${offer.image}" alt="${offer.title}" loading="lazy">
          <span class="offer-badge"><i class="fas fa-bolt"></i> ${offer.discount}</span>
        </div>
        <div class="offer-body">
          <div class="offer-subtitle">${offer.subtitle}</div>
          <h3 class="offer-title">${offer.title}</h3>
          <p class="offer-desc">${offer.desc}</p>
          <div class="offer-price-row">
            <span class="offer-price">${offer.price}</span>
            <span class="offer-original-price">${offer.originalPrice}</span>
          </div>
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-gold" style="width:100%; text-align:center;">
            <i class="fab fa-whatsapp"></i> Order This Offer
          </a>
        </div>
      </div>
    `;
    })
    .join("");
}

/* ===================================================================
   4. INTERACTIVE MENU SYSTEM
=================================================================== */
let allMenuItems = [];
let currentCategory = "all";
let currentVegFilter = "all";
let currentSearchQuery = "";

function initMenuSystem(menuData) {
  allMenuItems = menuData;
  const grid = document.getElementById("menu-items-grid");
  const filterBtns = document.querySelectorAll(".menu-filter-btn");
  const vegFilterBtns = document.querySelectorAll(".type-filter-btn");
  const searchInput = document.getElementById("menu-search-input");

  renderFilteredMenu();

  // Category Tabs
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      renderFilteredMenu();
    });
  });

  // Veg / Non-Veg Tabs
  vegFilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      vegFilterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentVegFilter = btn.getAttribute("data-type");
      renderFilteredMenu();
    });
  });

  // Search input live filtering
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value.toLowerCase().trim();
      renderFilteredMenu();
    });
  }
}

function filterMenuCategory(category) {
  currentCategory = category;
  const filterBtns = document.querySelectorAll(".menu-filter-btn");
  filterBtns.forEach((btn) => {
    if (btn.getAttribute("data-category") === category) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  renderFilteredMenu();
}
window.filterMenuCategory = filterMenuCategory;

function renderFilteredMenu() {
  const grid = document.getElementById("menu-items-grid");
  if (!grid) return;

  const cfg = window.SPICYTUB_CONFIG;

  const filtered = allMenuItems.filter((item) => {
    // Category match
    const catMatch =
      currentCategory === "all" || item.category === currentCategory;

    // Type match
    let typeMatch = true;
    if (currentVegFilter === "veg") typeMatch = item.isVeg === true;
    if (currentVegFilter === "nonveg") typeMatch = item.isVeg === false;

    // Search query match
    let searchMatch = true;
    if (currentSearchQuery) {
      searchMatch =
        item.name.toLowerCase().includes(currentSearchQuery) ||
        item.desc.toLowerCase().includes(currentSearchQuery);
    }

    return catMatch && typeMatch && searchMatch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align:center; padding: 60px 20px;">
        <i class="fas fa-utensils" style="font-size: 3rem; color: var(--color-gold); opacity: 0.5; margin-bottom: 16px;"></i>
        <h4 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 8px;">No dishes matched your criteria</h4>
        <p style="color: var(--text-muted);">Try selecting a different category or clearing your search term.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map((item) => {
      const waMsg = encodeURIComponent(
        `Hello SpicyTub! I would like to order: *${item.name}* (${item.price}). Please confirm availability.`
      );
      const waUrl = `https://wa.me/${cfg.whatsappNumber}?text=${waMsg}`;

      return `
      <div class="menu-item-card">
        <div class="menu-item-thumb">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div class="menu-item-details">
          <div class="menu-item-head">
            <div class="menu-item-title-box">
              <span class="${item.isVeg ? "veg-icon" : "nonveg-icon"}"></span>
              <h4 class="menu-item-name">${item.name}</h4>
            </div>
            <span class="menu-item-price">${item.price}</span>
          </div>
          <p class="menu-item-desc">${item.desc}</p>
          <div class="menu-item-foot">
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-menu-order">
              <i class="fab fa-whatsapp"></i> Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    `;
    })
    .join("");
}

/* ===================================================================
   5. NAVIGATION & HAMBURGER DRAWER
=================================================================== */
function initNavigation() {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.getElementById("hamburger-btn");
  const mobileNav = document.getElementById("mobile-nav-drawer");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");
  const navLinks = document.querySelectorAll(".nav-link");

  // Sticky navbar shadow on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      mobileNav.classList.toggle("open");
      document.body.style.overflow = mobileNav.classList.contains("open") ? "hidden" : "";
    });

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        mobileNav.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  // Active link highlighter based on scroll position
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((l) => {
          l.classList.remove("active");
          if (l.getAttribute("href") === `#${id}`) {
            l.classList.add("active");
          }
        });
      }
    });
  });
}

/* ===================================================================
   6. TABLE RESERVATION FORM & WHATSAPP GENERATION
=================================================================== */
function initReservationForm(cfg) {
  const form = document.getElementById("reservation-form");
  const feedback = document.getElementById("reservation-feedback");
  const directWaBtn = document.getElementById("direct-reserve-wa");

  // Direct WhatsApp Button link
  if (directWaBtn) {
    const defaultMsg = encodeURIComponent("Hello SpicyTub! I would like to inquire about reserving a table.");
    directWaBtn.href = `https://wa.me/${cfg.whatsappNumber}?text=${defaultMsg}`;
  }

  // Set default date in date input to today
  const dateInput = document.getElementById("res-date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
    dateInput.value = today;
  }

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("res-name").value.trim();
    const phone = document.getElementById("res-phone").value.trim();
    const email = document.getElementById("res-email").value.trim();
    const date = document.getElementById("res-date").value;
    const time = document.getElementById("res-time").value;
    const guests = document.getElementById("res-guests").value;
    const seating = document.getElementById("res-seating").value;
    const special = document.getElementById("res-special").value.trim() || "None";

    if (!name || !phone || !date || !time || !guests) {
      showFeedback("Please fill in all required fields.", "error");
      return;
    }

    // Compose formatted WhatsApp message requested in prompt
    const message = 
`Hello SpicyTub, I would like to reserve a table.

Name: ${name}
Phone: ${phone}
${email ? `Email: ${email}\n` : ""}Date: ${date}
Time: ${time}
Guests: ${guests}
Seating Preference: ${seating}
Special Request: ${special}`;

    const waUrl = `https://wa.me/${cfg.whatsappNumber}?text=${encodeURIComponent(message)}`;

    showFeedback(
      `Table request recorded! Redirecting your reservation details to SpicyTub WhatsApp for instant confirmation...`,
      "success"
    );

    // Redirect to WhatsApp after 1 second
    setTimeout(() => {
      window.open(waUrl, "_blank");
      form.reset();
      if (dateInput) {
        const today = new Date().toISOString().split("T")[0];
        dateInput.value = today;
      }
    }, 1200);
  });

  function showFeedback(text, type) {
    feedback.textContent = text;
    feedback.className = `form-feedback ${type}`;
    feedback.style.display = "block";
    setTimeout(() => {
      if (type === "success") {
        feedback.style.display = "none";
      }
    }, 8000);
  }
}

/* ===================================================================
   7. CUSTOMER REVIEWS CAROUSEL
=================================================================== */
function populateReviews(reviews) {
  const slider = document.getElementById("reviews-slider");
  const dotsContainer = document.getElementById("carousel-dots");
  if (!slider || !reviews) return;

  slider.innerHTML = reviews
    .map((r) => {
      const starsHtml = Array.from({ length: r.rating })
        .map(() => '<i class="fas fa-star"></i>')
        .join("");

      return `
      <div class="review-slide">
        <div class="review-card">
          <div class="review-stars">${starsHtml}</div>
          <p class="review-text">“${r.comment}”</p>
          <div class="review-author">
            <div class="review-avatar">
              <img src="${r.avatar}" alt="${r.name}" loading="lazy">
            </div>
            <div class="review-author-info">
              <strong>${r.name}</strong>
              <small>${r.role} • ${r.date}</small>
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  if (dotsContainer) {
    dotsContainer.innerHTML = reviews
      .map(
        (_, idx) => `
      <div class="carousel-dot ${idx === 0 ? "active" : ""}" data-index="${idx}"></div>
    `
      )
      .join("");
  }
}

function initReviewsCarousel() {
  const slider = document.getElementById("reviews-slider");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");
  const dots = document.querySelectorAll(".carousel-dot");
  if (!slider) return;

  let currentIndex = 0;
  const totalSlides = slider.children.length;

  function updateSlider() {
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth <= 992 && window.innerWidth > 768;

    let slidePercentage = 33.333; // Desktop: 3 visible
    if (isMobile) slidePercentage = 100;
    else if (isTablet) slidePercentage = 50;

    const maxIndex = isMobile ? totalSlides - 1 : isTablet ? totalSlides - 2 : totalSlides - 3;
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    if (currentIndex < 0) currentIndex = 0;

    slider.style.transform = `translateX(-${currentIndex * slidePercentage}%)`;

    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === currentIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentIndex++;
      const isMobile = window.innerWidth <= 768;
      const isTablet = window.innerWidth <= 992 && window.innerWidth > 768;
      const maxIndex = isMobile ? totalSlides - 1 : isTablet ? totalSlides - 2 : totalSlides - 3;
      if (currentIndex > maxIndex) currentIndex = 0;
      updateSlider();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex--;
      const isMobile = window.innerWidth <= 768;
      const isTablet = window.innerWidth <= 992 && window.innerWidth > 768;
      const maxIndex = isMobile ? totalSlides - 1 : isTablet ? totalSlides - 2 : totalSlides - 3;
      if (currentIndex < 0) currentIndex = maxIndex;
      updateSlider();
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      currentIndex = parseInt(dot.getAttribute("data-index"), 10);
      updateSlider();
    });
  });

  window.addEventListener("resize", updateSlider);
}

/* ===================================================================
   8. GALLERY & LIGHTBOX
=================================================================== */
let galleryItems = [];
let activeLightboxIndex = 0;

function populateGallery(gallery) {
  galleryItems = gallery;
  const grid = document.getElementById("gallery-grid");
  if (!grid || !gallery) return;

  grid.innerHTML = gallery
    .map(
      (item, idx) => `
    <div class="gallery-item reveal" data-index="${idx}">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="gallery-overlay">
        <h4 class="gallery-item-title">${item.title}</h4>
        <span class="gallery-item-cat">${item.category}</span>
      </div>
    </div>
  `
    )
    .join("");
}

function initGalleryLightbox(gallery) {
  const modal = document.getElementById("lightbox-modal");
  const img = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  if (!modal) return;

  const grid = document.getElementById("gallery-grid");
  if (grid) {
    grid.addEventListener("click", (e) => {
      const itemEl = e.target.closest(".gallery-item");
      if (!itemEl) return;
      activeLightboxIndex = parseInt(itemEl.getAttribute("data-index"), 10);
      openLightbox();
    });
  }

  function openLightbox() {
    const item = galleryItems[activeLightboxIndex];
    if (!item) return;
    img.src = item.image;
    caption.textContent = `${item.title} — ${item.category}`;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  function showNext() {
    activeLightboxIndex = (activeLightboxIndex + 1) % galleryItems.length;
    openLightbox();
  }

  function showPrev() {
    activeLightboxIndex = (activeLightboxIndex - 1 + galleryItems.length) % galleryItems.length;
    openLightbox();
  }

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (nextBtn) nextBtn.addEventListener("click", showNext);
  if (prevBtn) prevBtn.addEventListener("click", showPrev);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  });
}

/* ===================================================================
   9. INSTAGRAM SECTION
=================================================================== */
function populateInstagram(posts) {
  const grid = document.getElementById("instagram-grid");
  if (!grid || !posts) return;

  const cfg = window.SPICYTUB_CONFIG;

  grid.innerHTML = posts
    .map(
      (p) => `
    <a href="${cfg.socialLinks.instagram}" target="_blank" rel="noopener noreferrer" class="insta-card">
      <img src="${p.image}" alt="SpicyTub Instagram" loading="lazy">
      <div class="insta-overlay">
        <i class="fab fa-instagram"></i>
        <span class="insta-likes"><i class="fas fa-heart"></i> ${p.likes}</span>
      </div>
    </a>
  `
    )
    .join("");
}

/* ===================================================================
   10. SCROLL REVEAL & NUMERICAL COUNTER
=================================================================== */
function initScrollAnimations() {
  const reveals = document.querySelectorAll(".reveal");

  function checkReveal() {
    const triggerBottom = window.innerHeight * 0.88;
    reveals.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerBottom) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", checkReveal);
  checkReveal();

  // Animated Statistics Counter with Intersection Observer
  const statElements = document.querySelectorAll(".stat-number");
  if (statElements.length > 0) {
    const statsObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateNumber(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    statElements.forEach((el) => statsObserver.observe(el));
  }

  function animateNumber(element) {
    const target = parseFloat(element.getAttribute("data-target"));
    const suffix = element.getAttribute("data-suffix") || "";
    const isDecimal = element.getAttribute("data-decimal") === "true";
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;
    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = `${isDecimal ? current.toFixed(1) : Math.floor(current)}${suffix}`;
    }, stepTime);
  }
}

/* ===================================================================
   11. BACK TO TOP BUTTON
=================================================================== */
function initBackToTop() {
  const btn = document.getElementById("back-to-top-btn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
