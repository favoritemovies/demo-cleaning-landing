const $ = (sel) => document.querySelector(sel);

const dict = {
  en: {
    navServices: "Services",
    navPricing: "Pricing",
    navFaq: "FAQ",
    navContact: "Contact",
    heroBadge: "Trusted local cleaning team",
    heroTitle: "Sparkling clean spaces — without the stress",
    heroText: "Residential & office cleaning in NYC. Transparent pricing, quick booking, and consistent quality.",
    ctaBook: "Request a quote",
    ctaExplore: "Explore services",
    tick1: "Background-checked team",
    tick2: "Eco-friendly products available",
    tick3: "Same-day slots (when available)",

    miniTitle: "Popular",
    miniBig: "Apartment Deep Clean",
    miniSmall: "2–3 hours • Supplies included",
    stat1: "Average rating",
    stat2: "Fast scheduling",
    stat3: "Local team",
    calloutTitle: "Quick request",
    calloutText: "Leave your email and we’ll reply with availability and a quote.",
    calloutBtn: "Send",

    trust1Title: "Reliable",
    trust1Text: "On-time arrivals, clear communication, and a checklist-driven process.",
    trust2Title: "Professional",
    trust2Text: "Trained team, quality control, and respectful care for your space.",
    trust3Title: "Flexible",
    trust3Text: "Weekly, bi-weekly, monthly, move-in/out, or one-time deep clean.",

    servicesTitle: "Services",
    servicesSubtitle: "Choose the level you need — we’ll tailor the checklist.",
    svc1Title: "Standard clean",
    svc1Text: "Kitchen, bathrooms, floors, dusting, tidying. Great for maintenance.",
    svc1b1: "Apartments & homes",
    svc1b2: "Weekly / monthly",
    svc1b3: "Add-ons available",

    svc2Title: "Deep clean",
    svc2Text: "A detailed reset: edges, inside appliances (optional), buildup removal.",
    svc2b1: "Spring cleaning",
    svc2b2: "Post-renovation",
    svc2b3: "High-traffic spaces",

    svc3Title: "Move in/out",
    svc3Text: "Perfect for landlords and tenants: empty-space deep clean.",
    svc3b1: "Fast turnaround",
    svc3b2: "Inside cabinets (optional)",
    svc3b3: "Photo checklist",

    svc4Title: "Office clean",
    svc4Text: "Desks, meeting rooms, kitchens, restrooms, trash removal.",
    svc4b1: "After-hours options",
    svc4b2: "Recurring plans",
    svc4b3: "Supply restocking (optional)",

    pricingTitle: "Pricing",
    pricingSubtitle: "Starting from — final quote depends on size and scope.",
    price1Title: "One-time clean",
    price1Text: "Best for small apartments and quick refresh.",
    price2Title: "Deep clean",
    price2Text: "Detailed checklist — perfect for reset.",
    price3Title: "Recurring",
    price3Text: "Weekly / bi-weekly plans with priority slots.",
    pricingFine: "* Demo prices for portfolio purposes. Real business should adjust based on market and scope.",
    priceBtn: "Get a quote",
    priceBtn2: "Request availability",
    priceBtn3: "Start plan",

    testTitle: "Testimonials",
    testSubtitle: "What clients say about the experience.",
    q1: "“Super easy to book and the team was professional. The apartment looked brand new.”",
    q1n: "Alex, Manhattan",
    q2: "“Great communication and attention to details. I’ll definitely book again.”",
    q2n: "Maya, Brooklyn",
    q3: "“Move-out cleaning was perfect. Landlord approved immediately.”",
    q3n: "Chris, Queens",

    faqTitle: "FAQ",
    faqSubtitle: "Common questions before booking.",
    faq1q: "Do you bring supplies?",
    faq1a: "Yes. We can also use your preferred products on request.",
    faq2q: "How do you estimate the price?",
    faq2a: "Based on space size, level of cleaning, and add-ons.",
    faq3q: "Can I book recurring cleaning?",
    faq3a: "Yes. Weekly or bi-weekly plans get priority scheduling.",

    contactTitle: "Contact",
    contactSubtitle: "Tell us what you need — we’ll reply soon.",
    contactCardTitle: "Request",
    contactAltTitle: "Direct",
    fName: "Name",
    fEmail: "Email",
    fType: "Service type",
    fMsg: "Message",
    optStandard: "Standard clean",
    optDeep: "Deep clean",
    optMove: "Move in/out",
    optOffice: "Office clean",
    sendBtn: "Send",
    contactNote: "This is a demo form (no server). It opens your email client with the message.",
    emailLabel: "Email:",
    phoneLabel: "Phone:",
    areaLabel: "Service area:",
    areaText: "Manhattan, Brooklyn, Queens",
    credit: "Demo landing built by Natalia Azarevich. Add it to your portfolio with a link.",
    creditBtn: "Work with the developer",
    footerDemo: "Demo project for portfolio.",
  },

  ru: {
    navServices: "Услуги",
    navPricing: "Цены",
    navFaq: "FAQ",
    navContact: "Контакты",
    heroBadge: "Надёжная команда клининга",
    heroTitle: "Чистота без стресса — быстро и аккуратно",
    heroText: "Клининг квартир и офисов в Нью-Йорке. Прозрачные цены, удобная запись, стабильное качество.",
    ctaBook: "Запросить расчёт",
    ctaExplore: "Посмотреть услуги",
    tick1: "Проверенная команда",
    tick2: "Эко-средства по запросу",
    tick3: "Возможен слот сегодня (если есть)",

    miniTitle: "Популярно",
    miniBig: "Глубокая уборка квартиры",
    miniSmall: "2–3 часа • Инвентарь включён",
    stat1: "Средняя оценка",
    stat2: "Быстрая запись",
    stat3: "Команда NYC",
    calloutTitle: "Быстрый запрос",
    calloutText: "Оставьте email — ответим по доступности и стоимости.",
    calloutBtn: "Отправить",

    trust1Title: "Надёжно",
    trust1Text: "Пунктуально, на связи, работаем по чек-листу.",
    trust2Title: "Профессионально",
    trust2Text: "Обученная команда и контроль качества.",
    trust3Title: "Гибко",
    trust3Text: "Разово, регулярно, переезд, генеральная уборка.",

    servicesTitle: "Услуги",
    servicesSubtitle: "Выберите формат — мы подстроим чек-лист.",
    svc1Title: "Стандартная уборка",
    svc1Text: "Кухня, санузлы, полы, пыль, лёгкая организация.",
    svc1b1: "Квартиры и дома",
    svc1b2: "Разово / регулярно",
    svc1b3: "Доп. опции",

    svc2Title: "Генеральная уборка",
    svc2Text: "Детальная уборка: углы, налёт, сложные зоны.",
    svc2b1: "Весенняя уборка",
    svc2b2: "После ремонта",
    svc2b3: "Сильная нагрузка",

    svc3Title: "Въезд/выезд",
    svc3Text: "Для арендаторов и владельцев: уборка пустого помещения.",
    svc3b1: "Быстрые сроки",
    svc3b2: "Шкафы (опция)",
    svc3b3: "Фото-чеклист",

    svc4Title: "Офисная уборка",
    svc4Text: "Рабочие места, кухня, санузлы, мусор, общие зоны.",
    svc4b1: "После рабочего дня",
    svc4b2: "Регулярные планы",
    svc4b3: "Пополнение расходников (опция)",

    pricingTitle: "Цены",
    pricingSubtitle: "Стоимость “от” — итог зависит от объёма и состояния.",
    price1Title: "Разовая уборка",
    price1Text: "Подходит для небольшой квартиры и быстрого освежения.",
    price2Title: "Генеральная уборка",
    price2Text: "Детальный чек-лист — идеальный “ресет”.",
    price3Title: "Регулярно",
    price3Text: "Планы раз в неделю/две с приоритетной записью.",
    pricingFine: "* Цены указаны для demo-проекта (портфолио). Реальный бизнес выставляет по рынку и объёму.",
    priceBtn: "Рассчитать",
    priceBtn2: "Узнать слоты",
    priceBtn3: "Начать",

    testTitle: "Отзывы",
    testSubtitle: "Что говорят клиенты.",
    q1: "“Очень удобно: быстро записались, команда профессиональная. Квартира как новая.”",
    q1n: "Алекс, Manhattan",
    q2: "“Отличная коммуникация и внимание к деталям. Буду обращаться ещё.”",
    q2n: "Майя, Brooklyn",
    q3: "“Уборка при выезде — идеально. Лендлорд сразу принял.”",
    q3n: "Крис, Queens",

    faqTitle: "FAQ",
    faqSubtitle: "Частые вопросы перед записью.",
    faq1q: "Вы привозите средства?",
    faq1a: "Да. По запросу можем использовать ваши средства.",
    faq2q: "Как вы считаете цену?",
    faq2a: "По размеру, типу уборки и доп. опциям.",
    faq3q: "Можно ли регулярную уборку?",
    faq3a: "Да. Регулярные клиенты получают приоритетные слоты.",

    contactTitle: "Контакты",
    contactSubtitle: "Опишите задачу — мы ответим.",
    contactCardTitle: "Запрос",
    contactAltTitle: "Напрямую",
    fName: "Имя",
    fEmail: "Email",
    fType: "Тип услуги",
    fMsg: "Сообщение",
    optStandard: "Стандартная",
    optDeep: "Генеральная",
    optMove: "Въезд/выезд",
    optOffice: "Офис",
    sendBtn: "Отправить",
    contactNote: "Это demo-форма (без сервера). Откроется почта с готовым сообщением.",
    emailLabel: "Email:",
    phoneLabel: "Телефон:",
    areaLabel: "Районы:",
    areaText: "Manhattan, Brooklyn, Queens",
    credit: "Demo-лендинг сделан Натальей Азаревич. Можно добавить в портфолио ссылкой.",
    creditBtn: "Заказать сайт у разработчика",
    footerDemo: "Demo-проект для портфолио.",
  },
};

function applyLang(lang) {
  document.documentElement.lang = lang === "ru" ? "ru" : "en";
  $("#langPill").textContent = lang.toUpperCase();

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && dict[lang][key]) el.textContent = dict[lang][key];
  });

  localStorage.setItem("lang", lang);
}

function toggleLang() {
  const current = localStorage.getItem("lang") || "en";
  applyLang(current === "en" ? "ru" : "en");
}

function mailtoFromForm(form) {
  const data = new FormData(form);
  const name = (data.get("name") || "").toString();
  const email = (data.get("email") || "").toString();
  const type = (data.get("type") || "").toString();
  const message = (data.get("message") || "").toString();

  const subject = encodeURIComponent(`Cleaning quote request: ${type}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nService: ${type}\n\nMessage:\n${message}`
  );

  window.location.href = `mailto:hello@skylineclean.co?subject=${subject}&body=${body}`;
}

document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = String(new Date().getFullYear());

  const saved = localStorage.getItem("lang") || "en";
  applyLang(saved);

  $("#langBtn").addEventListener("click", toggleLang);

  $("#quickForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const lang = localStorage.getItem("lang") || "en";
$("#quickMsg").textContent = lang === "ru" ? "Спасибо! Мы напишем вам." : "Thanks! We’ll email you.";

    setTimeout(() => ($("#quickMsg").textContent = ""), 2200);
    e.target.reset();
  });

  $("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    mailtoFromForm(e.target);
    $("#formMsg").textContent = (localStorage.getItem("lang") || "en") === "ru"
      ? "Открываю почту с сообщением…"
      : "Opening your email client…";
  });
 
// ===== Active nav highlight while scrolling =====
const navLinks = document.querySelectorAll('.nav a[href^="#"]');
const sections = ["services", "pricing", "faq", "contact"]
  .map(id => document.getElementById(id))
  .filter(Boolean);

function setActive(id) {
  navLinks.forEach(a => {
    const href = a.getAttribute("href");
    if (href === `#${id}`) a.classList.add("is-active");
    else a.classList.remove("is-active");
  });
}

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) setActive(e.target.id);
  });
}, { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 });

sections.forEach(s => io.observe(s));
});
