const languageSelect = document.querySelector('.lang');

const translations = {
    en: {
        heroTitle: "Qayumov’s agency",
        heroText: "The most popular and trusted travel agency in Tajikistan",
        exploreLink: "Explore destinations →",
        aboutTitle: "The Highest Level of Comfort, Convenience and Service",
        aboutText: "At Qayumov’s agency, we combine premium service with attention to detail. Whether it is a private journey tailored just for you, a shared group experience, or a seamless transfer — we take care of everything.",
        aboutLink: "More about us →",
        servicesTitle: "What we offer?",
        servicesSub: "From private tours and scheduled routes to accessible travel — we’ve got the perfect option for you.",
        serviceInfoTitle: "Tailored Private Tours in Dushanbe city",
        serviceInfoText: "Enjoy a personalized journey in our Dushanbe city — perfect for 6–8 clients. These tours offer the opportunity to visit as many locations as you want, at your own pace.",
        serviceInfoLink: "Explore tours →",
        chooseItems: [
            { title: "Professional team", text: "Years of experience in tourism, making sure you enjoy every moment." },
            { title: "Flexibility", text: "From historic landmarks to airports — we take you where you need to go." }
        ],
        serviceMenu: ["Private Tours", "Scheduled Tours", "Transfers", "Wheelchair Accessibility"],
        menu: ["Home", "About us", "Transfers", "Tours", "Contacts"],
        btn: "Book a Tour"
    },
    ru: {
        heroTitle: "Агентство Qayумов",
        heroText: "Самое популярное и надежное туристическое агентство в Таджикистане",
        exploreLink: "Исследовать направления →",
        aboutTitle: "Высший уровень комфорта, удобства и сервиса",
        aboutText: "В агентстве Qayumov мы объединяем премиальный сервис с вниманием к деталям. Будь то индивидуальное путешествие, групповое или трансфер — мы позаботимся обо всём.",
        aboutLink: "Подробнее о нас →",
        servicesTitle: "Что мы предлагаем?",
        servicesSub: "От частных туров и расписанных маршрутов до доступных путешествий — у нас есть идеальный вариант для вас.",
        serviceInfoTitle: "Индивидуальные туры в городе Душанбе",
        serviceInfoText: "Наслаждайтесь персонализированным путешествием в нашем городе Душанбе — идеально для 6–8 человек. Эти туры дают возможность посетить столько мест, сколько хотите, в своем темпе.",
        serviceInfoLink: "Исследовать туры →",
        chooseItems: [
            { title: "Профессиональная команда", text: "Годы опыта в туризме, чтобы вы наслаждались каждым моментом." },
            { title: "Гибкость", text: "От исторических достопримечательностей до аэропортов — мы доставим вас туда, куда нужно." }
        ],
        serviceMenu: ["Частные туры", "Расписанные туры", "Трансферы", "Доступность для инвалидов"],
        menu: ["Главная", "О нас", "Трансферы", "Туры", "Контакты"],
        btn: "Забронировать тур"
    },
    tj: {
        heroTitle: "Агентии Қаюмов",
        heroText: "Маълумтарин ва боэътимодтарин агентиҳои саёҳатӣ дар Тоҷикистон",
        exploreLink: "Кашф кардани маконҳо →",
        aboutTitle: "Сатҳи баландтарини бароҳатӣ, қулайӣ ва хизматрасонӣ",
        aboutText: "Дар Агентии Қаюмов мо хидмати премиумро бо диққат ба тафсилот муттаҳид мекунем. Новобаста аз саёҳати шахсӣ, гурӯҳӣ ё интиқол — мо ҳама чизро ба хубӣ назорат мекунем.",
        aboutLink: "Бештар дар бораи мо →",
        servicesTitle: "Чӣ пешниҳод мекунем?",
        servicesSub: "Аз саёҳатҳои хусусӣ то роҳҳои муқарраршуда ва саёҳати дастрас — мо беҳтарин варианти шуморо дорем.",
        serviceInfoTitle: "Саёҳатҳои инфиродӣ дар шаҳри Душанбе",
        serviceInfoText: "Аз саёҳати шахсӣ дар шаҳри Душанбе лаззат баред — барои 6–8 нафар беҳтарин аст. Ин турҳо имконият медиҳанд, ки ҳама ҷойҳоро ба хоҳиши худ боздид кунед.",
        serviceInfoLink: "Кашф кардани турҳо →",
        chooseItems: [
            { title: "Дастаи касбӣ", text: "Солҳо таҷрибаи сайёҳӣ, то ки шумо аз ҳар лаҳза лаззат баред." },
            { title: "Флексибилити", text: "Аз ёдгориҳои таърихӣ то фурудгоҳҳо — мо шуморо ба ҷое мебарем, ки лозим аст." }
        ],
        serviceMenu: ["Саёҳатҳои хусусӣ", "Турҳои муқарраршуда", "Интиқолҳо", "Дастрасии маъюбон"],
        menu: ["Саҳифаи хона", "Дар бораи мо", "Интиқолҳо", "Турҳо", "Тамос"],
        btn: "Брон кардани тур"
    },
    ar: {
        heroTitle: "وكالة قايوموف",
        heroText: "أشهر وأوثق وكالة سفر في طاجيكستان",
        exploreLink: "استكشاف الوجهات →",
        aboutTitle: "أعلى مستوى من الراحة والراحة والخدمة",
        aboutText: "في وكالة Qayumov، نجمع بين الخدمة الممتازة والانتباه إلى التفاصيل. سواء كانت رحلة خاصة مخصصة لك، أو تجربة جماعية مشتركة، أو نقل سلس — نحن نهتم بكل شيء.",
        aboutLink: "المزيد عنا →",
        servicesTitle: "ماذا نقدم؟",
        servicesSub: "من الجولات الخاصة والمسارات المجدولة إلى السفر الميسر — لدينا الخيار المثالي لك.",
        serviceInfoTitle: "جولات خاصة مصممة حسب الطلب في مدينة دوشنبه",
        serviceInfoText: "استمتع برحلة شخصية في مدينة دوشنبه — مثالية لـ 6–8 عملاء. توفر هذه الجولات فرصة زيارة أكبر عدد ممكن من الأماكن وفقًا لسرعتك الخاصة.",
        serviceInfoLink: "استكشاف الجولات →",
        chooseItems: [
            { title: "فريق محترف", text: "سنوات من الخبرة في السياحة، لضمان الاستمتاع بكل لحظة." },
            { title: "مرونة", text: "من المعالم التاريخية إلى المطارات — نأخذك إلى حيث تحتاج." }
        ],
        serviceMenu: ["الجولات الخاصة", "الجولات المجدولة", "النقل", "الوصول لذوي الاحتياجات الخاصة"],
        menu: ["الصفحة الرئيسية", "من نحن", "النقل", "الجولات", "الاتصال"],
        btn: "حجز جولة"
    }
};

languageSelect.addEventListener('change', function() {
    const lang = this.value;
    const t = translations[lang];

    document.querySelector('.hero-title').innerHTML = t.heroTitle;
    document.querySelector('.hero-text').innerHTML = t.heroText;
    document.querySelector('.explore-link').innerHTML = t.exploreLink;
    document.querySelector('.about-text h2').innerHTML = t.aboutTitle;
    document.querySelector('.about-text p').innerHTML = t.aboutText;
    document.querySelector('.about-text .more-link').innerHTML = t.aboutLink;
    document.querySelector('.services-title').innerHTML = t.servicesTitle;
    document.querySelector('.services-sub').innerHTML = t.servicesSub;
    document.querySelector('.service-info h4').innerHTML = t.serviceInfoTitle;
    document.querySelector('.service-info p').innerHTML = t.serviceInfoText;
    document.querySelector('.service-info .more-link').innerHTML = t.serviceInfoLink;

   
    const chooseItems = document.querySelectorAll('.choose-item');
    chooseItems.forEach((item, index) => {
        item.querySelector('h4').innerHTML = t.chooseItems[index].title;
        item.querySelector('p').innerHTML = t.chooseItems[index].text;
    });

   
    const serviceMenuItems = document.querySelectorAll('.service-menu li');
    serviceMenuItems.forEach((li, index) => {
        li.innerHTML = t.serviceMenu[index];
    });

    const menuItems = document.querySelectorAll('.menu li');
    menuItems.forEach((li, index) => {
        li.innerHTML = t.menu[index];
    });

    document.querySelector('.btn').innerHTML = t.btn;
});