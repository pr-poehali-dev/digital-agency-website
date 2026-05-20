import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/3bd5f42e-7ce1-4492-a8af-54cd22128435/files/922047dd-866e-4921-8529-4bf72ec483fb.jpg";
const TEAM_IMG = "https://cdn.poehali.dev/projects/3bd5f42e-7ce1-4492-a8af-54cd22128435/files/9009078c-2d1b-4d5b-8e43-169fc03a8de1.jpg";
const DASHBOARD_IMG = "https://cdn.poehali.dev/projects/3bd5f42e-7ce1-4492-a8af-54cd22128435/files/1cd78eac-9516-4936-aa0e-3df8dd638ae6.jpg";
const CASE_IMG1 = "https://cdn.poehali.dev/projects/3bd5f42e-7ce1-4492-a8af-54cd22128435/files/552acde6-a239-4324-a76e-eb5454d1b18e.jpg";
const CASE_IMG2 = "https://cdn.poehali.dev/projects/3bd5f42e-7ce1-4492-a8af-54cd22128435/files/fcffd2cd-762d-4328-833a-6ab8f7d31edd.jpg";

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
  { icon: "Target", title: "Таргетированная реклама", desc: "Запускаем рекламу в социальных сетях, привлекаем целевую аудиторию и увеличиваем поток заявок.", color: "#FF7A00" },
  { icon: "Search", title: "Контекстная реклама", desc: "Настраиваем рекламные кампании в поисковых системах и приводим горячих клиентов.", color: "#00D8FF" },
  { icon: "Users", title: "SMM продвижение", desc: "Развиваем социальные сети, повышаем узнаваемость бренда и вовлеченность аудитории.", color: "#FF7A00" },
  { icon: "Monitor", title: "Создание сайтов", desc: "Разрабатываем современные сайты, лендинги и корпоративные платформы, которые конвертируют посетителей в клиентов.", color: "#00D8FF" },
  { icon: "TrendingUp", title: "SEO продвижение", desc: "Повышаем позиции сайта в поиске и привлекаем стабильный органический трафик.", color: "#FF7A00" },
  { icon: "Palette", title: "Branding & Design", desc: "Создаем фирменный стиль, визуальные концепции и дизайн, который усиливает бренд.", color: "#00D8FF" },
];

const cases = [
  {
    tag: "Таргетинг",
    niche: "Онлайн-образование",
    title: "Онлайн-школа",
    task: "Увеличить количество заявок на флагманский курс, снизить CPL и масштабировать бюджет",
    img: CASE_IMG1,
    metrics: [
      { label: "Лиды ДО", val: "320", unit: "/мес" },
      { label: "Лиды ПОСЛЕ", val: "940", unit: "/мес", accent: true },
    ],
    kpis: [
      { icon: "TrendingUp", label: "ROI", val: "280%" },
      { icon: "BarChart3", label: "Рост продаж", val: "+67%" },
      { icon: "Target", label: "CPL", val: "−54%" },
      { icon: "Percent", label: "CR", val: "4.8%" },
    ],
  },
  {
    tag: "Контекст",
    niche: "Строительство и ремонт",
    title: "Строительная компания",
    task: "Получить целевые заявки на ремонт квартир в высококонкурентной нише Яндекс.Директ",
    img: CASE_IMG2,
    metrics: [
      { label: "Заявок ДО", val: "41", unit: "/мес" },
      { label: "Заявок ПОСЛЕ", val: "125", unit: "/мес", accent: true },
    ],
    kpis: [
      { icon: "TrendingUp", label: "ROAS", val: "6.4x" },
      { icon: "BarChart3", label: "Рост лидов", val: "+205%" },
      { icon: "Target", label: "Цена заявки", val: "890 ₽" },
      { icon: "Percent", label: "CTR", val: "8.2%" },
    ],
  },
  {
    tag: "SEO + SMM",
    niche: "Медицина",
    title: "Медицинская клиника",
    task: "Вывести сайт в топ по ключевым запросам и увеличить органический трафик без роста рекламного бюджета",
    img: DASHBOARD_IMG,
    metrics: [
      { label: "Трафик ДО", val: "2 100", unit: "/мес" },
      { label: "Трафик ПОСЛЕ", val: "6 400", unit: "/мес", accent: true },
    ],
    kpis: [
      { icon: "TrendingUp", label: "Рост трафика", val: "×3" },
      { icon: "BarChart3", label: "ТОП-3 запросов", val: "40+" },
      { icon: "Target", label: "Конверсия", val: "+38%" },
      { icon: "Percent", label: "Bounce Rate", val: "−22%" },
    ],
  },
];

const articles = [
  { tag: "Таргетинг", date: "15 мая 2026", title: "Как снизить CPL в 3 раза: кейс рекламы на ВКонтакте", excerpt: "Разбираем детально стратегию, которую мы применили для интернет-магазина и получили результат х3 к окупаемости.", readTime: "8 мин" },
  { tag: "Стратегия", date: "10 мая 2026", title: "Digital-воронка 2026: от первого касания до повторной покупки", excerpt: "Полная схема построения маркетинговой воронки для малого и среднего бизнеса с примерами и метриками.", readTime: "12 мин" },
  { tag: "SEO", date: "3 мая 2026", title: "SEO в 2026 году: что реально работает, а что — нет", excerpt: "Актуальный разбор факторов ранжирования, E-E-A-T и контентных стратегий, которые дают результат сегодня.", readTime: "10 мин" },
  { tag: "Аналитика", date: "25 апреля 2026", title: "Сквозная аналитика: как понять, какой канал реально приносит деньги", excerpt: "Пошаговая настройка сквозной аналитики и разбор главных метрик, которые нужно отслеживать каждому бизнесу.", readTime: "9 мин" },
  { tag: "Контекст", date: "18 апреля 2026", title: "Яндекс Директ: структура кампаний для максимального ROAS", excerpt: "Как правильно разделить кампании, настроить ставки и написать объявления, которые конвертируют лучше конкурентов.", readTime: "11 мин" },
  { tag: "SMM", date: "10 апреля 2026", title: "Контент-план для бизнес-аккаунта: шаблон и принципы", excerpt: "Готовый фреймворк контент-плана для Instagram и ВКонтакте, который мы используем для клиентов агентства.", readTime: "7 мин" },
];

const testimonials = [
  {
    name: "Алексей Морозов",
    role: "Владелец",
    company: "«СтройМастер»",
    avatar: "АМ",
    text: "Благодаря агентству мы увеличили количество заявок почти в 3 раза уже за первые два месяца. Команда глубоко погрузилась в наш бизнес и предложила решения, которые действительно сработали.",
    stars: 5,
  },
  {
    name: "Ирина Ковалёва",
    role: "Директор по маркетингу",
    company: "MedClinic",
    avatar: "ИК",
    text: "Передали агентству контекст и SEO. Через полгода сайт в топ-3 по ключевым запросам, органика выросла в 3 раза. Впечатлена результатом и прозрачностью работы.",
    stars: 5,
  },
  {
    name: "Дмитрий Захаров",
    role: "Основатель",
    company: "FashionStore",
    avatar: "ДЗ",
    text: "Запустили таргет на ВКонтакте с ROAS 8x. Это лучший результат за всё время, что работаем с рекламой. Рекомендую без оговорок — команда знает своё дело.",
    stars: 5,
  },
  {
    name: "Наталья Смирнова",
    role: "CEO",
    company: "EduPlatform",
    avatar: "НС",
    text: "За 3 месяца таргетированная реклама дала нам 940 заявок вместо 320. ROI вырос на 280%. Мы масштабировали бюджет вдвое и продолжаем расти.",
    stars: 5,
  },
  {
    name: "Андрей Петров",
    role: "Маркетинг-директор",
    company: "TechSolutions",
    avatar: "АП",
    text: "Агентство выстроило сквозную аналитику и мы наконец увидели, какие каналы реально приносят деньги. CPL снизился на 40% без потери качества лидов.",
    stars: 5,
  },
];

const navLinks = ["О нас", "Услуги", "Кейсы", "Тарифы", "Статьи", "Контакты"];
const navIds = ["about", "services", "cases", "pricing", "articles", "contact"];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-white)" }}>

      {/* ─── NAV ─── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(5,11,24,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border-color)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FF7A00, #FF4D00)" }}>
              <Icon name="Zap" size={16} className="text-white" />
            </div>
            <span className="font-display font-black text-xl tracking-tight">APEX<span style={{ color: "var(--accent-orange)" }}>.</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <button key={link} onClick={() => scrollTo(navIds[i])} className="nav-link text-sm font-medium">{link}</button>
            ))}
          </div>

          <button className="hidden md:block btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold" style={{ background: "linear-gradient(135deg, #FF7A00, #FF5500)" }}>
            Получить консультацию
          </button>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: "rgba(5,11,24,0.98)", borderBottom: "1px solid var(--border-color)" }}>
            {navLinks.map((link, i) => (
              <button key={link} onClick={() => scrollTo(navIds[i])} className="text-left text-sm font-medium py-2" style={{ color: "var(--text-gray)" }}>{link}</button>
            ))}
            <button className="btn-primary px-5 py-3 rounded-lg text-sm font-semibold text-center" style={{ background: "linear-gradient(135deg, #FF7A00, #FF5500)" }}>
              Получить консультацию
            </button>
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden grid-bg">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMG} alt="Hero" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(5,11,24,0.95) 40%, rgba(11,18,36,0.7) 100%)" }} />
        </div>
        <div className="hero-glow w-96 h-96 -top-20 -left-20 opacity-20" style={{ background: "radial-gradient(circle, #FF7A00, transparent)" }} />
        <div className="hero-glow w-80 h-80 top-1/2 right-0 opacity-15" style={{ background: "radial-gradient(circle, #00D8FF, transparent)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 animate-fade-in-up" style={{ background: "rgba(255,122,0,0.1)", border: "1px solid rgba(255,122,0,0.3)", color: "var(--accent-orange)" }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--accent-orange)" }} />
              Digital-маркетинг полного цикла
            </div>
            <h1 className="font-display font-black leading-[1.05] mb-6 animate-fade-in-up delay-100 opacity-0-init" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", animationFillMode: "forwards" }}>
              Приводим клиентов<br />и&nbsp;увеличиваем&nbsp;<span className="text-gradient-orange">продажи</span><br />через рекламу
            </h1>
            <p className="text-lg mb-10 max-w-xl leading-relaxed animate-fade-in-up delay-200 opacity-0-init" style={{ color: "var(--text-gray)", animationFillMode: "forwards" }}>
              Комплексный digital-маркетинг для бизнеса любого масштаба
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300 opacity-0-init" style={{ animationFillMode: "forwards" }}>
              <button className="btn-primary px-8 py-4 rounded-xl font-bold text-base" style={{ background: "linear-gradient(135deg, #FF7A00, #FF5500)" }}>
                Получить консультацию
              </button>
              <button className="btn-secondary px-8 py-4 rounded-xl font-bold text-base" onClick={() => scrollTo("cases")}>
                Смотреть кейсы
              </button>
            </div>
            <div className="mt-16 flex flex-wrap gap-8 pt-8 animate-fade-in-up delay-400 opacity-0-init" style={{ borderTop: "1px solid var(--border-color)", animationFillMode: "forwards" }}>
              {[{ val: "5+", label: "лет опыта" }, { val: "120+", label: "проектов" }, { val: "35%", label: "рост продаж" }].map((s) => (
                <div key={s.label}>
                  <div className="font-display font-black text-3xl" style={{ color: "var(--accent-orange)" }}>{s.val}</div>
                  <div className="text-sm mt-0.5" style={{ color: "var(--text-gray)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-gray)" }}>Scroll</span>
          <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, var(--text-gray), transparent)" }} />
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5" style={{ background: "rgba(0,216,255,0.1)", border: "1px solid rgba(0,216,255,0.2)", color: "var(--accent-blue)" }}>О нас</div>
              <h2 className="font-display font-black text-4xl md:text-5xl leading-tight mb-6">
                Создаём digital-системы,<br />которые{" "}<span className="text-gradient-blue">приносят заявки</span>
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
                  <div key={item.title} className="p-4 rounded-xl" style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ background: "rgba(255,122,0,0.1)" }}>
                      <Icon name={item.icon} fallback="CircleAlert" size={18} style={{ color: "var(--accent-orange)" }} />
                    </div>
                    <div className="font-semibold text-sm mb-1">{item.title}</div>
                    <div className="text-xs" style={{ color: "var(--text-gray)" }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={TEAM_IMG} alt="Команда" className="rounded-2xl w-full object-cover animate-float" style={{ height: 420, border: "1px solid var(--border-color)" }} />
              <div className="absolute -bottom-6 -left-6 px-5 py-4 rounded-xl" style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", backdropFilter: "blur(10px)" }}>
                <div className="font-display font-black text-3xl" style={{ color: "var(--accent-orange)" }}>8.2x</div>
                <div className="text-xs mt-0.5" style={{ color: "var(--text-gray)" }}>средний ROAS клиентов</div>
              </div>
            </div>
          </div>

          <div ref={statsRef} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: years, suffix: "+", label: "лет на рынке" },
              { val: projects, suffix: "+", label: "реализованных проектов" },
              { val: growth, suffix: "%", label: "средний рост продаж" },
              { val: leads, suffix: "x", label: "рост количества лидов" },
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-2xl text-center" style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}>
                <div className="stats-number text-5xl mb-2" style={{ color: "var(--accent-orange)" }}>{stat.val}{stat.suffix}</div>
                <div className="text-sm" style={{ color: "var(--text-gray)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-24" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5" style={{ background: "rgba(255,122,0,0.1)", border: "1px solid rgba(255,122,0,0.2)", color: "var(--accent-orange)" }}>Услуги</div>
            <h2 className="font-display font-black text-4xl md:text-5xl">
              Комплексные digital-услуги<br />для роста вашего{" "}<span className="text-gradient-orange">бизнеса</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="service-card p-6 rounded-2xl" style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${s.color}18` }}>
                  <Icon name={s.icon} fallback="CircleAlert" size={22} style={{ color: s.color }} />
                </div>
                <h3 className="font-display font-bold text-lg mb-3">{s.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-gray)" }}>{s.desc}</p>
                <button className="flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3" style={{ color: s.color }}>
                  Подробнее <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CASES ─── */}
      <section id="cases" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5" style={{ background: "rgba(0,216,255,0.1)", border: "1px solid rgba(0,216,255,0.2)", color: "var(--accent-blue)" }}>Кейсы</div>
              <h2 className="font-display font-black text-4xl md:text-5xl">
                Результаты, которые<br /><span className="text-gradient-blue">говорят сами за себя</span>
              </h2>
            </div>
            <button className="btn-secondary px-6 py-3 rounded-xl font-semibold text-sm self-start md:self-auto">
              Смотреть все кейсы
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {cases.map((c) => (
              <div key={c.title} className="rounded-2xl overflow-hidden flex flex-col" style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}>
                {/* Dashboard screenshot */}
                <div className="relative h-44 overflow-hidden">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(16,26,51,0.95) 100%)" }} />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(5,11,24,0.85)", color: "var(--accent-orange)" }}>{c.tag}</span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(5,11,24,0.85)", color: "var(--text-gray)" }}>{c.niche}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-xl mb-2">{c.title}</h3>
                  <p className="text-xs leading-relaxed mb-5" style={{ color: "var(--text-gray)" }}>
                    <span className="font-semibold" style={{ color: "var(--text-white)" }}>Задача:</span> {c.task}
                  </p>

                  {/* Before / After */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="p-3 rounded-xl text-center" style={{ background: m.accent ? "rgba(255,122,0,0.1)" : "rgba(255,255,255,0.04)", border: m.accent ? "1px solid rgba(255,122,0,0.3)" : "1px solid var(--border-color)" }}>
                        <div className="text-xs mb-1" style={{ color: "var(--text-gray)" }}>{m.label}</div>
                        <div className="font-display font-black text-2xl" style={{ color: m.accent ? "var(--accent-orange)" : "var(--text-white)" }}>
                          {m.val}<span className="text-sm font-normal" style={{ color: "var(--text-gray)" }}>{m.unit}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* KPI grid */}
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {c.kpis.map((k) => (
                      <div key={k.label} className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-color)" }}>
                        <Icon name={k.icon} fallback="CircleAlert" size={13} style={{ color: "var(--accent-blue)", flexShrink: 0 }} />
                        <div>
                          <div className="text-xs" style={{ color: "var(--text-gray)" }}>{k.label}</div>
                          <div className="font-display font-black text-sm" style={{ color: "var(--accent-blue)" }}>{k.val}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="mt-auto flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:gap-3" style={{ border: "1px solid rgba(255,122,0,0.3)", color: "var(--accent-orange)" }}>
                    Смотреть кейс <Icon name="ArrowRight" size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="py-24" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5" style={{ background: "rgba(255,122,0,0.1)", border: "1px solid rgba(255,122,0,0.2)", color: "var(--accent-orange)" }}>Тарифы</div>
            <h2 className="font-display font-black text-4xl md:text-5xl">
              Выберите формат работы<br /><span className="text-gradient-orange">под ваши задачи</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Start",
                badge: null,
                price: "от 30 000",
                desc: "Подходит для малого бизнеса и тестового запуска рекламы.",
                features: ["Анализ ниши", "Настройка рекламного кабинета", "Запуск одной рекламной кампании", "Базовая аналитика", "Ежемесячный отчёт"],
                highlighted: false,
              },
              {
                name: "Business",
                badge: "Популярный выбор",
                price: "от 70 000",
                desc: "Для системного роста и масштабирования рекламы.",
                features: ["Маркетинговая стратегия", "Запуск нескольких рекламных каналов", "A/B тестирование креативов", "Сквозная аналитика", "Еженедельная оптимизация", "Подробный отчёт по KPI"],
                highlighted: true,
              },
              {
                name: "Premium",
                badge: null,
                price: "от 150 000",
                desc: "Для комплексного продвижения и масштабирования бизнеса.",
                features: ["Комплексная digital-стратегия", "Таргетированная реклама", "Контекстная реклама", "SMM", "SEO", "Дизайн и креативы", "Персональный менеджер", "Расширенная аналитика", "Регулярные стратегические сессии"],
                highlighted: false,
              },
            ].map((plan) => (
              <div key={plan.name} className="p-8 rounded-2xl relative flex flex-col" style={{
                background: plan.highlighted ? "linear-gradient(135deg, rgba(255,122,0,0.1), rgba(255,85,0,0.05))" : "var(--bg-card)",
                border: plan.highlighted ? "1px solid rgba(255,122,0,0.45)" : "1px solid var(--border-color)",
              }}>
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap" style={{ background: "var(--accent-orange)", color: "white" }}>
                    {plan.badge}
                  </div>
                )}
                <div className="font-display font-black text-2xl mb-1">{plan.name}</div>
                <div className="font-display font-black text-4xl mb-1" style={{ color: plan.highlighted ? "var(--accent-orange)" : "var(--text-white)" }}>
                  {plan.price} <span className="text-base font-normal" style={{ color: "var(--text-gray)" }}>₽/мес</span>
                </div>
                <p className="text-sm mb-6" style={{ color: "var(--text-gray)" }}>{plan.desc}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Icon name="Check" size={14} style={{ color: "var(--accent-orange)", flexShrink: 0, marginTop: 2 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3.5 rounded-xl font-bold text-sm" style={
                  plan.highlighted
                    ? { background: "linear-gradient(135deg, #FF7A00, #FF5500)", color: "white" }
                    : { border: "1px solid rgba(255,255,255,0.15)", color: "white", background: "transparent" }
                }>
                  Оставить заявку
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ARTICLES ─── */}
      <section id="articles" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5" style={{ background: "rgba(0,216,255,0.1)", border: "1px solid rgba(0,216,255,0.2)", color: "var(--accent-blue)" }}>Статьи и экспертиза</div>
              <h2 className="font-display font-black text-4xl md:text-5xl">
                Знания, которые<br /><span className="text-gradient-blue">реально работают</span>
              </h2>
            </div>
            <button className="btn-secondary px-6 py-3 rounded-xl font-semibold text-sm self-start md:self-auto">Все статьи</button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <article key={i} className="service-card p-6 rounded-2xl cursor-pointer" style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(255,122,0,0.1)", color: "var(--accent-orange)" }}>{a.tag}</span>
                  <div className="flex items-center gap-1 text-xs" style={{ color: "var(--text-gray)" }}>
                    <Icon name="Clock" size={11} />{a.readTime}
                  </div>
                </div>
                <h3 className="font-bold text-base leading-snug mb-3 line-clamp-2">{a.title}</h3>
                <p className="text-sm leading-relaxed mb-5 line-clamp-3" style={{ color: "var(--text-gray)" }}>{a.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: "var(--text-gray)" }}>{a.date}</span>
                  <button className="flex items-center gap-1 text-xs font-semibold transition-all duration-200 hover:gap-2" style={{ color: "var(--accent-blue)" }}>
                    Читать <Icon name="ArrowRight" size={12} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section id="reviews" className="py-24" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5" style={{ background: "rgba(255,122,0,0.1)", border: "1px solid rgba(255,122,0,0.2)", color: "var(--accent-orange)" }}>Отзывы</div>
            <h2 className="font-display font-black text-4xl md:text-5xl">
              Что говорят<br /><span className="text-gradient-orange">наши клиенты</span>
            </h2>
          </div>

          {/* Slider */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 transition-transform duration-700 ease-in-out" style={{ transform: `translateX(calc(-${activeTestimonial * (100 / 3)}% - ${activeTestimonial * 8}px))` }}>
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 p-7 rounded-2xl transition-all duration-500"
                  style={{
                    width: "calc(33.333% - 16px)",
                    minWidth: 280,
                    background: "var(--bg-card)",
                    border: i === activeTestimonial ? "1px solid rgba(255,122,0,0.4)" : "1px solid var(--border-color)",
                    opacity: i === activeTestimonial ? 1 : 0.65,
                    transform: i === activeTestimonial ? "scale(1.02)" : "scale(1)",
                  }}
                >
                  <div className="flex gap-1 mb-5">
                    {[...Array(t.stars)].map((_, si) => (
                      <Icon key={si} name="Star" size={14} style={{ color: "var(--accent-orange)" }} />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-gray)" }}>«{t.text}»</p>
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0" style={{ background: "rgba(255,122,0,0.15)", color: "var(--accent-orange)" }}>
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t.name}</div>
                      <div className="text-xs" style={{ color: "var(--text-gray)" }}>{t.role}, {t.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeTestimonial ? 24 : 8,
                  height: 8,
                  background: i === activeTestimonial ? "var(--accent-orange)" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setActiveTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}
            >
              <Icon name="ChevronLeft" size={18} />
            </button>
            <button
              onClick={() => setActiveTestimonial((p) => (p + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}
            >
              <Icon name="ChevronRight" size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ─── CTA BAND ─── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(255,122,0,0.08), rgba(0,216,255,0.05))" }} />
        <div className="hero-glow w-96 h-96 -top-20 left-1/2 -translate-x-1/2 opacity-10" style={{ background: "radial-gradient(circle, #FF7A00, transparent)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-black text-4xl md:text-5xl mb-6">
            Готовы увеличить<br /><span className="text-gradient-orange">продажи?</span>
          </h2>
          <p className="text-base mb-10" style={{ color: "var(--text-gray)" }}>
            Оставьте заявку — проведём бесплатный аудит текущей рекламы и покажем точки роста
          </p>
          <button className="btn-primary px-10 py-4 rounded-xl font-bold text-lg" style={{ background: "linear-gradient(135deg, #FF7A00, #FF5500)" }}>
            Получить аудит рекламы
          </button>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-24" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5" style={{ background: "rgba(0,216,255,0.1)", border: "1px solid rgba(0,216,255,0.2)", color: "var(--accent-blue)" }}>Контакты</div>
              <h2 className="font-display font-black text-4xl mb-4">
                Готовы увеличить<br /><span className="text-gradient-blue">продажи?</span>
              </h2>
              <p className="text-base mb-10 leading-relaxed" style={{ color: "var(--text-gray)" }}>
                Оставьте заявку, и мы бесплатно проанализируем ваш бизнес и предложим точки роста.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: "Phone", text: "+7 (999) 000-00-00", href: "tel:+79990000000" },
                  { icon: "Mail", text: "info@agency.ru", href: "mailto:info@agency.ru" },
                  { icon: "Send", text: "@agency", href: "#" },
                  { icon: "MessageCircle", text: "+7 (999) 000-00-00 (WhatsApp)", href: "#" },
                ].map((c) => (
                  <a key={c.text} href={c.href} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200" style={{ background: "rgba(0,216,255,0.1)" }}>
                      <Icon name={c.icon} fallback="CircleAlert" size={16} style={{ color: "var(--accent-blue)" }} />
                    </div>
                    <span className="text-sm group-hover:text-white transition-colors" style={{ color: "var(--text-gray)" }}>{c.text}</span>
                  </a>
                ))}
              </div>

              {/* Messenger buttons */}
              <div className="flex gap-3 mb-10">
                <button className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105" style={{ background: "rgba(0,216,255,0.12)", border: "1px solid rgba(0,216,255,0.25)", color: "var(--accent-blue)" }}>
                  <Icon name="Send" size={16} /> Telegram
                </button>
                <button className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105" style={{ background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.25)", color: "#25D366" }}>
                  <Icon name="MessageCircle" size={16} /> WhatsApp
                </button>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden flex items-center justify-center" style={{ height: 180, background: "var(--bg-card)", border: "1px solid var(--border-color)" }}>
                <div className="text-center">
                  <Icon name="MapPin" size={28} style={{ color: "var(--accent-orange)", margin: "0 auto 8px" }} />
                  <div className="text-sm font-semibold">Москва, Россия</div>
                  <div className="text-xs mt-1" style={{ color: "var(--text-gray)" }}>Работаем с клиентами по всей России</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 rounded-2xl" style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}>
              <h3 className="font-bold text-xl mb-6">Оставить заявку</h3>
              <div className="space-y-4">
                {[
                  { placeholder: "Ваше имя *", type: "text" },
                  { placeholder: "Телефон *", type: "tel" },
                  { placeholder: "Email", type: "email" },
                ].map((field) => (
                  <input
                    key={field.placeholder}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--border-color)", color: "var(--text-white)" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,122,0,0.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border-color)")}
                  />
                ))}
                <textarea
                  placeholder="Комментарий / расскажите о задаче..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--border-color)", color: "var(--text-white)" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,122,0,0.5)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border-color)")}
                />
                <button className="btn-primary w-full py-4 rounded-xl font-bold text-base" style={{ background: "linear-gradient(135deg, #FF7A00, #FF5500)" }}>
                  Получить консультацию
                </button>
                <p className="text-xs text-center" style={{ color: "var(--text-gray)" }}>
                  Нажимая кнопку, вы соглашаетесь с <span className="underline cursor-pointer">политикой конфиденциальности</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border-color)" }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Logo + desc */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FF7A00, #FF4D00)" }}>
                  <Icon name="Zap" size={15} className="text-white" />
                </div>
                <span className="font-display font-black text-xl">APEX<span style={{ color: "var(--accent-orange)" }}>.</span></span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-gray)" }}>
                Digital-агентство полного цикла. Помогаем бизнесу расти через рекламу, аналитику и системный маркетинг.
              </p>
            </div>

            {/* Menu */}
            <div>
              <div className="font-semibold text-sm mb-5">Навигация</div>
              <ul className="space-y-3">
                {navLinks.map((link, i) => (
                  <li key={link}>
                    <button onClick={() => scrollTo(navIds[i])} className="text-sm transition-colors hover:text-white" style={{ color: "var(--text-gray)" }}>{link}</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <div className="font-semibold text-sm mb-5">Контакты</div>
              <ul className="space-y-3">
                {[
                  { icon: "Phone", text: "+7 (999) 000-00-00" },
                  { icon: "Mail", text: "info@agency.ru" },
                  { icon: "Send", text: "@agency (Telegram)" },
                  { icon: "MessageCircle", text: "@agency (WhatsApp)" },
                ].map((c) => (
                  <li key={c.text} className="flex items-center gap-2">
                    <Icon name={c.icon} fallback="CircleAlert" size={13} style={{ color: "var(--accent-orange)", flexShrink: 0 }} />
                    <span className="text-sm" style={{ color: "var(--text-gray)" }}>{c.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Legal */}
          <div className="py-6" style={{ borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs" style={{ color: "var(--text-gray)" }}>
              <div><span className="font-semibold text-white">Юр. лицо:</span> ООО «Агентство»</div>
              <div><span className="font-semibold text-white">ИНН:</span> 0000000000</div>
              <div><span className="font-semibold text-white">ОГРН:</span> 0000000000000</div>
              <div><span className="font-semibold text-white">Адрес:</span> г. Москва, ул. Примерная, 1</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-xs" style={{ color: "var(--text-gray)" }}>
            <p>© 2026 Digital Agency. Все права защищены.</p>
            <div className="flex gap-6">
              <button className="hover:text-white transition-colors">Политика конфиденциальности</button>
              <button className="hover:text-white transition-colors">Пользовательское соглашение</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
