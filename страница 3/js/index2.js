const languageSelect = document.querySelector('.lang');

const translations = {
    en: {
        heroTitle: "Qayumov’s agency",
        heroText: "Our travel agency specializes in providing exceptional travel experiences across Tajikistan.",
        btn4: "Book a Tour",
        menu: ["Home", "Transfers", "Tours", "Contacts"],

        aboutTitle: "About Us",
        aboutSub: "Who We Are?",
        aboutText: "Our travel agency specializes in providing exceptional travel experiences across Tajikistan. From customized tours to seamless transfers, we take care of every detail to ensure your journey is memorable and enjoyable.",
        aboutBtn: "Learn More",

        projectsTitle: "Our Projects",
        projectsSub: "What We Do?",
        projectsText: `Since our establishment, our agency has organized numerous successful tours and travel experiences,
                       earning the trust and appreciation of our clients. We continuously strive for excellence and 
                       innovation, offering tailor-made travel solutions that meet the unique needs of every traveler.  
                       Our services include:
                       • Customized Tours: Creating personalized itineraries for individuals, families, and groups.
                       • Scheduled Tours: Organizing regular tours to popular destinations across Tajikistan.
                       • Transfers: Providing safe and comfortable transportation to airports, hotels, and attractions.
                       • Travel Assistance: Offering support, guidance, and expert advice for a seamless travel experience.`,
        projectsBtn: "More Projects",
        
        footerH3: ["Quick Links", "Contacts", "Social Media"],
        footerQuickLinks: ["Home", "About Us", "Projects", "Blog", "Contacts"],
        footerContacts: [
            "+7 (981) 105 74 44 – Protection (7444)",
            "+7 (981) 233 74 44 – Conservation (0777)",
            "info@wildlifeguards.org",
            "29 k 1 Udarnik, Saint Petersburg, Russia"
        ],
        footerSocial: ["Facebook", "YouTube", "Instagram", "Twitter"],
    },

    ru: {
        heroTitle: "Агентство Qayумов",
        heroText: "Наше туристическое агентство специализируется на предоставлении уникальных впечатлений по Таджикистану.",
        btn4: "Забронировать тур",
        menu: ["Главная", "Трансферы", "Туры", "Контакты"],

        aboutTitle: "О нас",
        aboutSub: "Кто мы?",
        aboutText: "Наше туристическое агентство специализируется на предоставлении уникальных впечатлений по Таджикистану. От индивидуальных туров до трансферов — мы заботимся о каждой детали, чтобы ваше путешествие было незабываемым.",
        aboutBtn: "Узнать больше",

        projectsTitle: "Наши проекты",
        projectsSub: "Что мы делаем?",
        projectsText: `С момента основания наше агентство организовало множество успешных туров и путешествий, 
завоевав доверие и признание клиентов. Мы постоянно стремимся к совершенству и инновациям, 
предлагая индивидуальные решения для путешествий, соответствующие уникальным потребностям каждого клиента.  
Наши услуги включают:
• Индивидуальные туры: Создание персональных маршрутов для частных лиц, семей и групп.
• Расписанные туры: Организация регулярных туров по популярным направлениям Таджикистана.
• Трансферы: Обеспечение безопасного и комфортного транспорта до аэропортов, отелей и достопримечательностей.
• Сопровождение путешествий: Предоставление поддержки, рекомендаций и профессиональных советов для комфортного путешествия.`,
        projectsBtn: "Больше проектов",

        footerH3: ["Быстрые ссылки", "Контакты", "Социальные сети"],
        footerQuickLinks: ["Главная", "О нас", "Проекты", "Блог", "Контакты"],
        footerContacts: [
            "+7 (981) 105 74 44 – Защита (7444)",
            "+7 (981) 233 74 44 – Сохранение (0777)",
            "info@wildlifeguards.org",
            "29 k 1 Ударник, Санкт-Петербург, Россия"
        ],
        footerSocial: ["Facebook", "YouTube", "Instagram", "Twitter"],
    },

    tj: {
        heroTitle: "Агентии Қаюмов",
        heroText: "Агентии мо барои пешниҳод кардани таҷрибаҳои истисноӣ дар Тоҷикистон тахассус дорад.",
        btn4: "Брон кардани тур",
        menu: ["Саҳифаи хона", "Интиқолҳо", "Турҳо", "Тамос"],

        aboutTitle: "Дар бораи мо",
        aboutSub: "Ки ҳастем мо?",
        aboutText: "Агентии мо барои пешниҳод кардани таҷрибаҳои истисноӣ дар Тоҷикистон тахассус дорад. Аз саёҳатҳои инфиродӣ то интиқолҳо — мо ҳама чизро назорат мекунем, то саёҳати шумо фаромӯшнашаванда бошад.",
        aboutBtn: "Бештар",

        projectsTitle: "Лоиҳаҳои мо",
        projectsSub: "Чӣ кор мекунем?",
        projectsText: `Аз таъсисёбӣ, агентии мо якчанд саёҳатҳои муваффақро ташкил кард ва эътимоди муштариёнро ба даст овард. 
Мо ҳамеша барои такомули хизмат ва навоварӣ кӯшиш мекунем, пешниҳод кардани ҳалли инфиродӣ барои саёҳат, ки 
барои ниёзҳои ҳар як муштарӣ мувофиқ аст.  
Хизматҳои мо дохил мешаванд:
• Саёҳатҳои инфиродӣ: Таъйин кардани маршрутҳои шахсӣ барои фардҳо, оилаҳо ва гурӯҳҳо.
• Саёҳатҳои муқарраршуда: Ташкил намудани саёҳатҳои мунтазам ба маконҳои маъруфи Тоҷикистон.
• Интиқолҳо: Пешниҳод намудани нақлиёти бехатар ва бароҳат ба фурудгоҳҳо, меҳмонхонаҳо ва ҷойҳои диданӣ.
• Ҳамкории саёҳат: Пешниҳод кардани дастгирӣ, роҳнамоӣ ва маслиҳатҳои коршиносон барои таҷрибаи саёҳати ҳамвор.`,
        projectsBtn: "Бештар",
        
        footerH3: ["Саҳифаҳои зуд", "Тамос", "Шабакаҳои иҷтимоӣ"],
        footerQuickLinks: ["Саҳифаи хона", "Дар бораи мо", "Лоиҳаҳо", "Блог", "Тамос"],
        footerContacts: [
            "+7 (981) 105 74 44 – Ҳифз (7444)",
            "+7 (981) 233 74 44 – Муҳофизат (0777)",
            "info@wildlifeguards.org",
            "29 k 1 Ударник, Душанбе, Тоҷикистон"
        ],
        footerSocial: ["Facebook", "YouTube", "Instagram", "Twitter"],
    },

    ar: {
        heroTitle: "وكالة قايوموف",
        heroText: "تتخصص وكالتنا في تقديم تجارب سفر استثنائية في طاجيكستان.",
        btn4: "حجز جولة",
        menu: ["الصفحة الرئيسية", "النقل", "الجولات", "الاتصال"],

        aboutTitle: "معلومات عنا",
        aboutSub: "من نحن؟",
        aboutText: "تتخصص وكالتنا في تقديم تجارب سفر استثنائية في طاجيكستان. من الجولات المخصصة إلى النقل السلس — نحن نعتني بكل التفاصيل لضمان رحلة لا تُنسى.",
        aboutBtn: "المزيد",

        projectsTitle: "مشاريعنا",
        projectsSub: "ماذا نفعل؟",
        projectsText: `منذ تأسيسنا، نظمت وكالتنا العديد من الجولات الناجحة وتجارب السفر، وحازت على ثقة وتقدير عملائنا. 
نسعى باستمرار للتميز والابتكار، وتقديم حلول سفر مخصصة تلبي الاحتياجات الفريدة لكل مسافر.  
تشمل خدماتنا:
• الجولات الخاصة: إنشاء مسارات شخصية للأفراد والعائلات والمجموعات.
• الجولات المجدولة: تنظيم جولات منتظمة إلى الوجهات الشهيرة في طاجيكستان.
• النقل: توفير وسائل نقل آمنة ومريحة إلى المطارات والفنادق والمعالم السياحية.
• المساعدة أثناء السفر: تقديم الدعم والإرشادات والنصائح الاحترافية لضمان تجربة سفر سلسة.`,
        projectsBtn: "المزيد",
        
        footerH3: ["روابط سريعة", "جهات الاتصال", "وسائل التواصل الاجتماعي"],
        footerQuickLinks: ["الصفحة الرئيسية", "من نحن", "المشاريع", "المدونة", "الاتصال"],
        footerContacts: [
            "+7 (981) 105 74 44 – الحماية (7444)",
            "+7 (981) 233 74 44 – الحفظ (0777)",
            "info@wildlifeguards.org",
            "29 k 1 أودارنيك، دوشنبه، طاجيكستان"
        ],
        footerSocial: ["Facebook", "YouTube", "Instagram", "Twitter"],
    }
};

languageSelect.addEventListener('change', function() {
    const lang = this.value;
    const t = translations[lang];

    // Header
    document.querySelector('.hero-title').textContent = t.heroTitle;
    // For hero-text if exists
    const heroText = document.querySelector('.hero-text');
    if(heroText) heroText.textContent = t.heroText;

    document.querySelector('.btn4').textContent = t.btn4;

    document.querySelectorAll('.menu li a').forEach((el, i) => el.textContent = t.menu[i]);

    // About section
    document.querySelectorAll('#about .section-sub')[0].textContent = t.aboutTitle;
    document.querySelectorAll('#about .section-sub')[1].textContent = t.aboutSub;
    document.querySelector('#about p').textContent = t.aboutText;
    document.querySelector('#about .btn').textContent = t.aboutBtn;

    // Projects section
    document.querySelectorAll('#projects .section-sub')[0].textContent = t.projectsTitle;
    document.querySelectorAll('#projects .section-title')[0].textContent = t.projectsSub;
    document.querySelector('#projects p').textContent = t.projectsText;
    document.querySelector('#projects .btn1').textContent = t.projectsBtn;

    // Footer
const footerH3 = document.querySelectorAll('#footer h3');
footerH3[0].textContent = t.footerH3[0]; // Quick Links
footerH3[1].textContent = t.footerH3[1]; // Contacts
footerH3[2].textContent = t.footerH3[2]; // Social Media

document.querySelectorAll('.footer-grid div:nth-child(1) a').forEach((el, i) => el.textContent = t.footerQuickLinks[i]);
document.querySelectorAll('.footer-grid div:nth-child(2) a').forEach((el, i) => el.textContent = t.footerContacts[i]);
document.querySelectorAll('.footer-grid div:nth-child(3) a').forEach((el, i) => el.textContent = t.footerSocial[i]);

});
