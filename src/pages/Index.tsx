import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/3bd5f42e-7ce1-4492-a8af-54cd22128435/files/922047dd-866e-4921-8529-4bf72ec483fb.jpg";
const TEAM_IMG = "https://cdn.poehali.dev/projects/3bd5f42e-7ce1-4492-a8af-54cd22128435/files/9009078c-2d1b-4d5b-8e43-169fc03a8de1.jpg";
const DASHBOARD_IMG = "https://cdn.poehali.dev/projects/3bd5f42e-7ce1-4492-a8af-54cd22128435/files/1cd78eac-9516-4936-aa0e-3df8dd638ae6.jpg";

// Animated counter hook
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// Intersection observer hook
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const services = [
  {
    icon: "Target",
    title: "Таргетированная реклама",
    desc: "Запускаем рекламу в социальных сетях, привлекаем целевую аудиторию и увеличиваем поток заявок.",
    color: "#FF7A00",
  },
  {
    icon: "Search",
    title: "Контекстная реклама",
    desc: "Настраиваем рекламные кампании в поисковых системах и приводим горячих клиентов.",
    color: "#00D8FF",
  },
  {
    icon: "Users",
    title: "SMM продвижение",
    desc: "Развиваем социальные сети, повышаем узнаваемость бренда и вовлеченность аудитории.",
    color: "#FF7A00",
  },
  {
    icon: "Monitor",
    title: "Создание сайтов",
    desc: "Разрабатываем современные сайты, лендинги и корпоративные платформы, которые конвертируют посетителей в клиентов.",
    color: "#00D8FF",
  },
  {
    icon: "TrendingUp",
    title: "SEO продвижение",
    desc: "Повышаем позиции сайта в поиске и привлекаем стабильный органический трафик.",
    color: "#FF7A00",
  },
  {
    icon: "Palette",
    title: "Branding & Design",
    desc: "Создаем фирменный стиль, визуальные концепции и дизайн, который усиливает бренд.",
    color: "#00D8FF",
  },
];

const cases = [
  {
    tag: "Таргетинг",
    title: "Интернет-магазин одежды",
    result: "+340% продаж за 3 месяца",
    roas: "ROAS 8.2x",
    budget: "Бюджет: 150 000 ₽/мес",
    img: DASHBOARD_IMG,
  },
  {
    tag: "Контекст",
    title: "Строительная компания",
    result: "125 заявок по 890 ₽",
    roas: "CPL −62%",
    budget: "Бюджет: 200 000 ₽/мес",
    img: TEAM_IMG,
  },
  {
    tag: "SEO + SMM",
    title: "Медицинская клиника",
    result: "x3 органического трафика",
    roas: "ТОП-3 по 40 запросам",
    budget: "За 6 месяцев",
    img: HERO_IMG,
  },
];

const articles = [
  {
    tag: "Таргетинг",
    date: "15 мая 2026",
    title: "Как снизить CPL в 3 раза: кейс рекламы на ВКонтакте",
    excerpt: "Разбираем детально стратегию, которую мы применили для интернет-магазина и получили результат х3 к окупаемости.",
    readTime: "8 мин",
  },
  {
    tag: "Стратегия",
    date: "10 мая 2026",
    title: "Digital-воронка 2026: от первого касания до повторной покупки",
    excerpt: "Полная схема построения маркетинговой воронки для малого и среднего бизнеса с примерами и метриками.",
    readTime: "12 мин",
  },
  {
    tag: "SEO",
    date: "3 мая 2026",
    title: "SEO в 2026 году: что реально работает, а что — нет",
    excerpt: "Актуальный разбор факторов ранжирования, E-E-A-T и контентных стратегий, которые дают результат сегодня.",
    readTime: "10 мин",
  },
  {
    tag: "Аналитика",
    date: "25 апреля 2026",
    title: "Сквозная аналитика: как понять, какой канал реально приносит деньги",
    excerpt: "Пошаговая настройка сквозной аналитики и разбор главных метрик, которые нужно отслеживать каждому бизнесу.",
    readTime: "9 мин",
  },
  {
    tag: "Контекст",
    date: "18 апреля 2026",
    title: "Яндекс Директ: структура кампаний для максимального ROAS",
    excerpt: "Как правильно разделить кампании, настроить ставки и написать объявления, которые конвертируют лучше конкурентов.",
    readTime: "11 мин",
  },
  {
    tag: "SMM",
    date: "10 апреля 2026",
    title: "Контент-план для бизнес-аккаунта: шаблон и принципы",
    excerpt: "Готовый фреймворк контент-плана для Instagram и ВКонтакте, который мы используем для клиентов агентства.",
    readTime: "7 мин",
  },
];

const testimonials = [
  {
    name: "Алексей Морозов",
    role: "Владелец, «СтройМастер»",
    text: "За 4 месяца работы с агентством мы получили 200+ заявок в месяц при снижении стоимости лида вдвое. Команда работает чётко, отчёты прозрачные.",
    stars: 5,
  },
  {
    name: "Ирина Ковалёва",
    role: "Директор по маркетингу, MedClinic",
    text: "Передали агентству контекст и SEO. Через полгода сайт в топ-3 по ключевым запросам, органика выросла в 3 раза. Впечатлена результатом.",
    stars: 5,
  },
  {
    name: "Дмитрий Захаров",
    role: "Основатель, FashionStore",
    text: "Запустили таргет на ВКонтакте с ROAS 8x. Это лучший результат за всё время, что работаем с рекламой. Рекомендую без оговорок.",
    stars: 5,
  },
];

const navLinks = ["О нас", "Услуги", "Кейсы", "Тарифы", "Статьи", "Контакты"];
const navIds = ["about", "services", "cases", "pricing", "articles", "contact"];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { ref: statsRef, inView: statsInView } = useInView();

  const years = useCounter(5, 1500, statsInView);
  const projects = useCounter(120, 1800, statsInView);
  const growth = useCounter(35, 1600, statsInView);
  const leads = useCounter(3, 1200, statsInView);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-white)" }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(5,11,24,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border-color)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #FF7A00, #FF4D00)" }}
            >
              <Icon name="Zap" size={16} className="text-white" />
            </div>
            <span className="font-display font-black text-xl tracking-tight">
              APEX<span style={{ color: "var(--accent-orange)" }}>.</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <button key={link} onClick={() => scrollTo(navIds[i])} className="nav-link text-sm font-medium">
                {link}
              </button>
            ))}
          </div>

          <button
            className="hidden md:block btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold"
            style={{ background: "linear-gradient(135deg, #FF7A00, #FF5500)" }}
          >
            Получить консультацию
          </button>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div
            className="md:hidden px-6 pb-6 flex flex-col gap-4"
            style={{ background: "rgba(5,11,24,0.98)", borderBottom: "1px solid var(--border-color)" }}
          >
            {navLinks.map((link, i) => (
              <button key={link} onClick={() => scrollTo(navIds[i])} className="text-left text-sm font-medium py-2" style={{ color: "var(--text-gray)" }}>
                {link}
              </button>
            ))}
            <button className="btn-primary px-5 py-3 rounded-lg text-sm font-semibold text-center">
              Получить консультацию
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden grid-bg">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMG} alt="Hero" className="w-full h-full object-cover opacity-20" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(5,11,24,0.95) 40%, rgba(11,18,36,0.7) 100%)" }}
          />
        </div>

        {/* Glow effects */}
        <div
          className="hero-glow w-96 h-96 -top-20 -left-20 opacity-20"
          style={{ background: "radial-gradient(circle, #FF7A00, transparent)" }}
        />
        <div
          className="hero-glow w-80 h-80 top-1/2 right-0 opacity-15"
          style={{ background: "radial-gradient(circle, #00D8FF, transparent)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 animate-fade-in-up"
              style={{ background: "rgba(255,122,0,0.1)", border: "1px solid rgba(255,122,0,0.3)", color: "var(--accent-orange)" }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--accent-orange)" }} />
              Digital-маркетинг полного цикла
            </div>

            <h1
              className="font-display font-black leading-[1.05] mb-6 animate-fade-in-up delay-100 opacity-0-init"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", animationFillMode: "forwards" }}
            >
              Приводим клиентов<br />
              и&nbsp;увеличиваем&nbsp;
              <span className="text-gradient-orange">продажи</span>
              <br />через рекламу
            </h1>

            <p
              className="text-lg mb-10 max-w-xl leading-relaxed animate-fade-in-up delay-200 opacity-0-init"
              style={{ color: "var(--text-gray)", animationFillMode: "forwards" }}
            >
              Комплексный digital-маркетинг для бизнеса любого масштаба
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300 opacity-0-init" style={{ animationFillMode: "forwards" }}>
              <button
                className="btn-primary px-8 py-4 rounded-xl font-bold text-base"
                style={{ background: "linear-gradient(135deg, #FF7A00, #FF5500)" }}
              >
                Получить консультацию
              </button>
              <button
                className="btn-secondary px-8 py-4 rounded-xl font-bold text-base"
                onClick={() => scrollTo("cases")}
              >
                Смотреть кейсы
              </button>
            </div>

            {/* Mini stats */}
            <div
              className="mt-16 flex flex-wrap gap-8 pt-8 animate-fade-in-up delay-400 opacity-0-init"
              style={{ borderTop: "1px solid var(--border-color)", animationFillMode: "forwards" }}
            >
              {[
                { val: "5+", label: "лет опыта" },
                { val: "120+", label: "проектов" },
                { val: "35%", label: "рост продаж" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display font-black text-3xl" style={{ color: "var(--accent-orange)" }}>{s.val}</div>
                  <div className="text-sm mt-0.5" style={{ color: "var(--text-gray)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-gray)" }}>Scroll</span>
          <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, var(--text-gray), transparent)" }} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5"
                style={{ background: "rgba(0,216,255,0.1)", border: "1px solid rgba(0,216,255,0.2)", color: "var(--accent-blue)" }}
              >
                О нас
              </div>
              <h2 className="font-display font-black text-4xl md:text-5xl leading-tight mb-6">
                Создаём digital-системы,<br />которые{" "}
                <span className="text-gradient-blue">приносят заявки</span>
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-gray)" }}>
                Мы — digital-агентство полного цикла. Помогаем бизнесу привлекать клиентов, увеличивать продажи и масштабировать рекламу за счёт точной аналитики, сильных креативов и комплексной маркетинговой стратегии.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "TrendingUp", title: "Увеличение продаж", desc: "Стратегии, направленные на рост выручки" },
                  { icon: "Target", title: "Настройка рекламы", desc: "Точный таргетинг и контекст" },
                  { icon: "BarChart3", title: "Аналитика", desc: "Контроль эффективности каждой кампании" },
                  { icon: "Lightbulb", title: "Креативные решения", desc: "Визуалы, офферы, рекламные связки" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl"
                    style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                      style={{ background: "rgba(255,122,0,0.1)" }}
                    >
                      <Icon name={item.icon} fallback="CircleAlert" size={18} style={{ color: "var(--accent-orange)" }} />
                    </div>
                    <div className="font-semibold text-sm mb-1">{item.title}</div>
                    <div className="text-xs" style={{ color: "var(--text-gray)" }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={TEAM_IMG}
                alt="Команда"
                className="rounded-2xl w-full object-cover animate-float"
                style={{ height: 420, border: "1px solid var(--border-color)" }}
              />
              {/* Badge overlay */}
              <div
                className="absolute -bottom-6 -left-6 px-5 py-4 rounded-xl"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", backdropFilter: "blur(10px)" }}
              >
                <div className="font-display font-black text-3xl" style={{ color: "var(--accent-orange)" }}>8.2x</div>
                <div className="text-xs mt-0.5" style={{ color: "var(--text-gray)" }}>средний ROAS клиентов</div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: years, suffix: "+", label: "лет на рынке" },
              { val: projects, suffix: "+", label: "реализованных проектов" },
              { val: growth, suffix: "%", label: "средний рост продаж" },
              { val: leads, suffix: "x", label: "рост количества лидов" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl text-center"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}
              >
                <div className="stats-number text-5xl mb-2" style={{ color: "var(--accent-orange)" }}>
                  {stat.val}{stat.suffix}
                </div>
                <div className="text-sm" style={{ color: "var(--text-gray)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-24"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5"
              style={{ background: "rgba(255,122,0,0.1)", border: "1px solid rgba(255,122,0,0.2)", color: "var(--accent-orange)" }}
            >
              Услуги
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl">
              Комплексные digital-услуги<br />для роста вашего{" "}
              <span className="text-gradient-orange">бизнеса</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="service-card p-6 rounded-2xl"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${s.color}18` }}
                >
                  <Icon name={s.icon} fallback="CircleAlert" size={22} style={{ color: s.color }} />
                </div>
                <h3 className="font-display font-bold text-lg mb-3">{s.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-gray)" }}>{s.desc}</p>
                <button
                  className="flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
                  style={{ color: s.color }}
                >
                  Подробнее <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5"
                style={{ background: "rgba(0,216,255,0.1)", border: "1px solid rgba(0,216,255,0.2)", color: "var(--accent-blue)" }}
              >
                Кейсы
              </div>
              <h2 className="font-display font-black text-4xl md:text-5xl">
                Результаты,<br />которые говорят{" "}
                <span className="text-gradient-blue">сами за себя</span>
              </h2>
            </div>
            <button className="btn-secondary px-6 py-3 rounded-xl font-semibold text-sm self-start md:self-auto">
              Все кейсы
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((c) => (
              <div
                key={c.title}
                className="case-card rounded-2xl overflow-hidden relative"
                style={{ border: "1px solid var(--border-color)" }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                  <div
                    className="absolute inset-0 case-overlay flex items-center justify-center"
                    style={{ background: "rgba(255,122,0,0.85)" }}
                  >
                    <span className="font-bold text-white text-lg">Смотреть кейс →</span>
                  </div>
                  <div
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "rgba(5,11,24,0.85)", color: "var(--accent-orange)" }}
                  >
                    {c.tag}
                  </div>
                </div>
                <div className="p-6" style={{ background: "var(--bg-card)" }}>
                  <h3 className="font-bold text-lg mb-3">{c.title}</h3>
                  <div
                    className="text-xl font-display font-black mb-3"
                    style={{ color: "var(--accent-orange)" }}
                  >
                    {c.result}
                  </div>
                  <div className="flex items-center justify-between text-xs" style={{ color: "var(--text-gray)" }}>
                    <span
                      className="px-2 py-1 rounded-md font-semibold"
                      style={{ background: "rgba(0,216,255,0.1)", color: "var(--accent-blue)" }}
                    >
                      {c.roas}
                    </span>
                    <span>{c.budget}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING (placeholder) */}
      <section
        id="pricing"
        className="py-24"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5"
              style={{ background: "rgba(255,122,0,0.1)", border: "1px solid rgba(255,122,0,0.2)", color: "var(--accent-orange)" }}
            >
              Тарифы
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl">
              Прозрачные цены,<br />
              <span className="text-gradient-orange">понятный результат</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Старт",
                price: "от 30 000",
                desc: "Для малого бизнеса и новых проектов",
                features: ["1 рекламный канал", "Настройка и запуск кампаний", "Ежемесячная отчётность", "Поддержка в мессенджерах"],
                highlighted: false,
              },
              {
                name: "Рост",
                price: "от 70 000",
                desc: "Для масштабирования и системного роста",
                features: ["До 3 рекламных каналов", "Комплексная стратегия", "Еженедельная аналитика", "A/B тестирование", "Выделенный менеджер"],
                highlighted: true,
              },
              {
                name: "Про",
                price: "от 150 000",
                desc: "Для крупных проектов и e-commerce",
                features: ["Неограниченные каналы", "Полная digital-воронка", "Сквозная аналитика", "SEO + SMM включено", "Приоритетная поддержка 24/7"],
                highlighted: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className="p-8 rounded-2xl relative"
                style={{
                  background: plan.highlighted ? "linear-gradient(135deg, rgba(255,122,0,0.12), rgba(255,85,0,0.06))" : "var(--bg-card)",
                  border: plan.highlighted ? "1px solid rgba(255,122,0,0.4)" : "1px solid var(--border-color)",
                }}
              >
                {plan.highlighted && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
                    style={{ background: "var(--accent-orange)", color: "white" }}
                  >
                    Популярный
                  </div>
                )}
                <div className="font-display font-bold text-lg mb-1">{plan.name}</div>
                <div
                  className="font-display font-black text-4xl mb-2"
                  style={{ color: plan.highlighted ? "var(--accent-orange)" : "var(--text-white)" }}
                >
                  {plan.price} <span className="text-base font-normal" style={{ color: "var(--text-gray)" }}>₽/мес</span>
                </div>
                <p className="text-sm mb-6" style={{ color: "var(--text-gray)" }}>{plan.desc}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <Icon name="Check" size={14} style={{ color: "var(--accent-orange)", flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-3 rounded-xl font-bold text-sm"
                  style={
                    plan.highlighted
                      ? { background: "linear-gradient(135deg, #FF7A00, #FF5500)", color: "white" }
                      : { border: "1px solid rgba(255,255,255,0.15)", color: "white", background: "transparent" }
                  }
                >
                  Выбрать тариф
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section id="articles" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5"
                style={{ background: "rgba(0,216,255,0.1)", border: "1px solid rgba(0,216,255,0.2)", color: "var(--accent-blue)" }}
              >
                Статьи и экспертиза
              </div>
              <h2 className="font-display font-black text-4xl md:text-5xl">
                Знания, которые<br />
                <span className="text-gradient-blue">реально работают</span>
              </h2>
            </div>
            <button className="btn-secondary px-6 py-3 rounded-xl font-semibold text-sm self-start md:self-auto">
              Все статьи
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <article
                key={i}
                className="service-card p-6 rounded-2xl cursor-pointer"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "rgba(255,122,0,0.1)", color: "var(--accent-orange)" }}
                  >
                    {a.tag}
                  </span>
                  <div className="flex items-center gap-1 text-xs" style={{ color: "var(--text-gray)" }}>
                    <Icon name="Clock" size={11} />
                    {a.readTime}
                  </div>
                </div>
                <h3 className="font-bold text-base leading-snug mb-3 line-clamp-2">{a.title}</h3>
                <p className="text-sm leading-relaxed mb-5 line-clamp-3" style={{ color: "var(--text-gray)" }}>{a.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: "var(--text-gray)" }}>{a.date}</span>
                  <button
                    className="flex items-center gap-1 text-xs font-semibold transition-all duration-200 hover:gap-2"
                    style={{ color: "var(--accent-blue)" }}
                  >
                    Читать <Icon name="ArrowRight" size={12} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="reviews"
        className="py-24"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5"
              style={{ background: "rgba(255,122,0,0.1)", border: "1px solid rgba(255,122,0,0.2)", color: "var(--accent-orange)" }}
            >
              Отзывы
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl">
              Что говорят<br />
              <span className="text-gradient-orange">наши клиенты</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-6 rounded-2xl"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Icon key={i} name="Star" size={14} style={{ color: "var(--accent-orange)", fill: "var(--accent-orange)" }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-gray)" }}>«{t.text}»</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                    style={{ background: "rgba(255,122,0,0.15)", color: "var(--accent-orange)" }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs" style={{ color: "var(--text-gray)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(255,122,0,0.08), rgba(0,216,255,0.05))" }}
        />
        <div
          className="hero-glow w-96 h-96 -top-20 left-1/2 -translate-x-1/2 opacity-10"
          style={{ background: "radial-gradient(circle, #FF7A00, transparent)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-black text-4xl md:text-5xl mb-6">
            Готовы увеличить<br />
            <span className="text-gradient-orange">продажи?</span>
          </h2>
          <p className="text-base mb-10" style={{ color: "var(--text-gray)" }}>
            Оставьте заявку — проведём бесплатный аудит текущей рекламы и покажем точки роста
          </p>
          <button
            className="btn-primary px-10 py-4 rounded-xl font-bold text-lg"
            style={{ background: "linear-gradient(135deg, #FF7A00, #FF5500)" }}
          >
            Получить бесплатный аудит
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5"
                style={{ background: "rgba(0,216,255,0.1)", border: "1px solid rgba(0,216,255,0.2)", color: "var(--accent-blue)" }}
              >
                Контакты
              </div>
              <h2 className="font-display font-black text-4xl mb-6">
                Обсудим ваш<br />
                <span className="text-gradient-blue">проект?</span>
              </h2>
              <p className="text-base mb-10 leading-relaxed" style={{ color: "var(--text-gray)" }}>
                Расскажите о задаче — предложим решение и покажем, как вырасти в вашей нише.
              </p>

              <div className="space-y-4">
                {[
                  { icon: "Mail", text: "hello@apexdigital.ru" },
                  { icon: "Phone", text: "+7 (999) 000-00-00" },
                  { icon: "MapPin", text: "Москва, Россия" },
                ].map((c) => (
                  <div key={c.text} className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(0,216,255,0.1)" }}
                    >
                      <Icon name={c.icon} fallback="CircleAlert" size={16} style={{ color: "var(--accent-blue)" }} />
                    </div>
                    <span className="text-sm">{c.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="p-8 rounded-2xl"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}
            >
              <h3 className="font-bold text-xl mb-6">Оставить заявку</h3>
              <div className="space-y-4">
                {[
                  { placeholder: "Ваше имя", type: "text" },
                  { placeholder: "Телефон или email", type: "text" },
                  { placeholder: "Название компании", type: "text" },
                ].map((field) => (
                  <input
                    key={field.placeholder}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid var(--border-color)",
                      color: "var(--text-white)",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,122,0,0.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border-color)")}
                  />
                ))}
                <textarea
                  placeholder="Расскажите о задаче..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-white)",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,122,0,0.5)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border-color)")}
                />
                <button
                  className="btn-primary w-full py-4 rounded-xl font-bold text-base"
                  style={{ background: "linear-gradient(135deg, #FF7A00, #FF5500)" }}
                >
                  Отправить заявку
                </button>
                <p className="text-xs text-center" style={{ color: "var(--text-gray)" }}>
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-10"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #FF7A00, #FF4D00)" }}
            >
              <Icon name="Zap" size={14} className="text-white" />
            </div>
            <span className="font-display font-black text-lg">APEX<span style={{ color: "var(--accent-orange)" }}>.</span></span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link, i) => (
              <button
                key={link}
                onClick={() => scrollTo(navIds[i])}
                className="text-xs transition-colors hover:text-white"
                style={{ color: "var(--text-gray)" }}
              >
                {link}
              </button>
            ))}
          </div>

          <p className="text-xs" style={{ color: "var(--text-gray)" }}>
            © 2026 APEX Digital. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}