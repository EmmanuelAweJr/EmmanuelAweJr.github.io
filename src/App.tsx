import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Briefcase,
  Building2,
  Cpu,
  GraduationCap,
  Leaf,
  Sparkles,
} from "lucide-react";

type CompetencyGroup = {
  title: string;
  icon: ComponentType<{ className?: string }>;
  items: string[];
};

type TimelineRole = {
  org: string;
  title: string;
  year: string;
};

type TimelineItem = {
  label: string;
  period: string;
  title: string;
  description: string;
  roles: TimelineRole[];
  photoSrc?: string;
  photoAlt?: string;
  photoCaption?: string;
};

type FeaturedWork = {
  title: string;
  description: string;
  tags: string[];
};

export default function EmmanuelPortfolio() {
  const imageAssets = {
    headshot: "/images/headshot.jpeg",
    solar: "/images/solar.jpeg",
    electrical: "/images/electrical.jpeg",
    storytelling: "/images/IMG_1790.JPG",
  };

  const profile = {
    name: "Emmanuel Awe",
    shortTitle: "Impact Ambassador • Polymath",
    email: "emanawejr@gmail.com",
    github: "https://github.com/EmmanuelAweJr",
    linkedin: "https://linkedin.com/in/emmanuelawe",
  };

  const heroContent = {
    badge: "Welcome to my story",
    title: "A quiet, visual introduction to a multidisciplinary career.",
    description:
      "I build across operations, data science, real estate, clean energy, education, and technical systems. This portfolio is designed to feel less like a résumé and more like a film about how the pieces connect.",
    primaryCta: "Enter the story",
    secondaryCta: "View selected work",
  };

  const sections = {
    openingEyebrow: "Opening frame",
    openingTitle: "The site is designed to let the story breathe before the details arrive.",
    openingText:
      "Instead of presenting your experience like disconnected industries, the portfolio frames your path as a connected body of work. The typography is quieter, the color palette is warmer, and the lighter reading surfaces make the story easier to scan.",
    journeyEyebrow: "Journey",
    journeyTitle: "A timeline shaped like chapters, not bullet points.",
    journeyText:
      "The goal here is to make range feel cohesive. Each milestone introduces a different world, but the progression still reads like one story.",
    currentMomentumEyebrow: "Current momentum",
    currentMomentumTitle:
      "The present chapter is about going deeper into systems that power the built world.",
    currentMomentumText:
      "Cloud, electrical systems, clean energy, data centers, and infrastructure intelligence now sit at the center of the next chapter.",
    disciplinesEyebrow: "Disciplines",
    disciplinesTitle: "Core competencies, organized with restraint.",
    disciplinesText:
      "This section stays structured and quiet. It gives the reader clarity without competing with the larger narrative moments above and below it.",
    workEyebrow: "Selected work",
    workTitle: "Editorial presentation, not a wall of projects.",
    workText:
      "Fewer items, more breathing room, clearer positioning. Each project is framed as evidence of how the story translates into actual work.",
    contactEyebrow: "Final frame",
    contactTitle: "The story ends with a simple next step.",
    contactText:
      "I’m interested in opportunities across cloud, clean energy, data centers, operations, infrastructure, and systems-focused work.",
  };

  const chapters = [
    { id: "story", name: "Story" },
    { id: "journey", name: "Journey" },
    { id: "disciplines", name: "Disciplines" },
    { id: "work", name: "Work" },
    { id: "contact", name: "Contact" },
  ];

  const competencyGroups: CompetencyGroup[] = [
    {
      title: "Real Estate & Construction",
      icon: Building2,
      items: [
        "Renovation planning and scope development",
        "Subcontractor coordination and field execution",
        "Building systems thinking and retrofit strategy",
        "Budgeting, procurement, and sequencing",
      ],
    },
    {
      title: "Clean Energy",
      icon: Leaf,
      items: [
        "Building electrification strategy",
        "Energy efficiency and retrofit thinking",
        "Climate-tech product exploration",
        "Sustainability-focused systems design",
      ],
    },
    {
      title: "Project Management",
      icon: Briefcase,
      items: [
        "Cross-functional coordination",
        "Workflow design and operational improvement",
        "Stakeholder communication and execution tracking",
        "Training systems and SOP development",
      ],
    },
    {
      title: "Information Technology",
      icon: Cpu,
      items: [
        "Python, SQL, and data analysis",
        "Machine learning and experimentation",
        "Technical systems troubleshooting",
        "Platform and workflow tooling",
      ],
    },
    {
      title: "Education",
      icon: GraduationCap,
      items: [
        "Curriculum development",
        "Career advisement and mentorship",
        "Teaching data analysis concepts",
        "Workshop facilitation and coaching",
      ],
    },
  ];

  const timeline: TimelineItem[] = [
    {
      label: "01",
      period: "Storytelling & Media",
      title: "Creative formation through film, story, and visual language",
      description:
        "My foundation began in storytelling and visual thinking. Film taught me how to frame moments, capture context, and make people feel what matters before they even process every word.",
      photoSrc: imageAssets.storytelling,
      photoAlt: "Emmanuel Awe holding a film slate",
      photoCaption:
        "Storytelling started in film — learning how to frame ideas, emotion, and narrative from the very beginning.",
      roles: [
        {
          org: "Brooklyn College",
          title: "B.A. Film Production",
          year: "Year to confirm",
        },
      ],
    },
    {
      label: "02",
      period: "Operations, Information Technology & Education",
      title:
        "Technical systems, leadership, workforce development, and data instruction",
      description:
        "I grew into operations by building workflows, training systems, hardware processes, and support infrastructure that helped real teams execute with more clarity and consistency.",
      roles: [
        {
          org: "Year Up",
          title: "Information Technology & Network Systems Training",
          year: "2016",
        },
        {
          org: "NYC Department of Education",
          title: "Information Technology Coordinator & Assistant Dean",
          year: "2017–2019",
        },
        {
          org: "NYC Administration for Children's Services",
          title: "Planning and Business Management Intern",
          year: "2019",
        },
        {
          org: "OnsiteIQ, a construction intelligence platform",
          title: "Field Operations / Technical Support and Hardware Manager",
          year: "2021–2023",
        },
        {
          org: "COOP Careers",
          title: "Sr. Data Analytics Instructor",
          year: "2022–2026",
        },
      ],
    },
    {
      label: "03",
      period: "Clean Energy & Building Science",
      title: "Electrification, sustainability, and infrastructure curiosity",
      description:
        "My work increasingly moved toward clean energy, building science, and resilient infrastructure, with a focus on systems that are efficient, human-centered, and built for long-term value.",
      roles: [
        {
          org: "Con Edison Clean Energy Academy",
          title: "Clean Energy Academy Participant",
          year: "2024",
        },
        {
          org: "GPRO",
          title: "Green Building Certified",
          year: "2024",
        },
        {
          org: "Climate Change AI Summer School",
          title: "Participant",
          year: "2024",
        },
        {
          org: "Noitavonne",
          title: "Understudy",
          year: "2025",
        },
      ],
    },
    {
      label: "04",
      period: "Real Estate & Construction",
      title: "Hands-on building, renovation, and real-world execution",
      description:
        "Real estate and renovation work sharpened my understanding of materials, budgets, sequencing, contractors, and the practical realities of transforming physical spaces.",
      roles: [
        {
          org: "HESED Group LLC",
          title: "Owner / General Contractor",
          year: "2023–2025",
        },
        {
          org: "Independent Development Projects",
          title: "Renovation Planning, Budgeting & Contractor Coordination",
          year: "2023–2025",
        },
      ],
    },
    {
      label: "05",
      period: "Founder & Innovation",
      title: "Building ventures, concepts, and mission-driven systems",
      description:
        "Across fellowships, startup concepts, and founder-led problem solving, I have worked to turn big ideas into practical systems that can create lasting value for people and communities.",
      roles: [
        {
          org: "Blue Ridge Labs / Robin Hood Foundation",
          title: "Entrepreneur in Residence",
          year: "2024",
        },
        {
          org: "PermiGuide, a permitting and planning intelligence platform",
          title: "Data Science Advisor",
          year: "2025",
        },
        {
          org: "Independent Venture Building",
          title: "Founder / Product Builder",
          year: "2024–Present",
        },
      ],
    },
    {
      label: "06",
      period: "Today",
      title:
        "The next chapter is focused on cloud, clean energy, electrical systems, and data centers",
      description:
        "Today I am sharpening my edge through independent work, upskilling, and research-driven exploration. The direction is clear: more technical depth, more systems thinking, and more work at the intersection of infrastructure and innovation.",
      roles: [
        {
          org: "Current Direction",
          title:
            "Impact Ambassador • Polymath • Operations • Data Science • Real Estate • Data Centers • Clean Energy",
          year: "Present",
        },
        {
          org: "Current Focus",
          title: "Upskilling in AWS and Cloud",
          year: "Present",
        },
        {
          org: "Independent Contracting",
          title: "Electrical Systems Work",
          year: "Present",
        },
        {
          org: "Independent Research & Development",
          title: "Clean Energy Solutions and Data Center Solutions",
          year: "Present",
        },
        {
          org: "Career Direction",
          title:
            "Seeking a role within cloud, clean energy, electrical systems, and data center spaces",
          year: "Present",
        },
      ],
    },
  ];

  const featuredWork: FeaturedWork[] = [
    {
      title: "Affordable Housing & Voucher Navigation MVP",
      description:
        "An AI-driven concept designed to simplify housing navigation, documentation, and support workflows for voucher holders and underserved communities.",
      tags: ["Housing Systems", "AI", "Product Strategy"],
    },
    {
      title: "NYCHA Energy Consumption Analysis",
      description:
        "Exploratory analysis focused on uncovering energy patterns and practical opportunities for smarter, more equitable building operations.",
      tags: ["Python", "Energy", "Data Analysis"],
    },
    {
      title: "Field Operations & Technical Support Infrastructure",
      description:
        "Built practical systems for onboarding, troubleshooting, training, and field execution across distributed technical teams and workflows.",
      tags: ["Operations", "Systems Design", "Enablement"],
    },
    {
      title: "Public Safety / GIS Product Support",
      description:
        "Supported product thinking around AI, GIS, and aerial intelligence tools that improve situational awareness and emergency coordination.",
      tags: ["GIS", "Product", "Civic Tech"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f1e8] text-stone-900 selection:bg-emerald-300 selection:text-stone-950">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.85),transparent_38%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.06),transparent_28%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-stone-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src={imageAssets.headshot}
              alt="Emmanuel Awe headshot"
              className="h-11 w-11 rounded-full border border-white/20 object-cover object-center"
            />
            <div>
              <div className="font-serif text-xl tracking-[0.08em] text-white">
                Emmanuel Awe
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.28em] text-stone-400">
                Impact Ambassador • Polymath
              </div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-stone-300 md:flex">
            {chapters.map((chapter) => (
              <a
                key={chapter.id}
                href={`#${chapter.id}`}
                className="transition hover:text-white"
              >
                {chapter.name}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <section id="story" className="relative isolate overflow-hidden bg-stone-950">
          <img
            src={imageAssets.headshot}
            alt="Headshot of Emmanuel Awe"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,16,14,0.92)_0%,rgba(18,16,14,0.76)_36%,rgba(18,16,14,0.28)_68%,rgba(18,16,14,0.68)_100%)]" />
          <div className="relative mx-auto flex min-h-[96vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-28">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-stone-100 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" />
                {heroContent.badge}
              </div>
              <h1 className="mt-7 max-w-5xl font-serif text-5xl leading-[0.95] text-white md:text-7xl xl:text-[5.8rem]">
                {heroContent.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-200/85 md:text-xl">
                {heroContent.description}
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#journey"
                  className="rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-950 transition hover:scale-[1.02]"
                >
                  {heroContent.primaryCta}
                </a>
                <a
                  href="#work"
                  className="rounded-full border border-white/20 bg-black/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  {heroContent.secondaryCta}
                </a>
              </div>
            </motion.div>

            <div className="mt-16 grid max-w-4xl gap-4 md:grid-cols-3">
              <div className="rounded-[1.75rem] border border-white/10 bg-black/30 p-5 backdrop-blur-md">
                <div className="text-xs uppercase tracking-[0.28em] text-stone-400">
                  Focus
                </div>
                <p className="mt-3 text-sm leading-7 text-stone-200/80">
                  Clear hierarchy, restrained copy, and strong imagery to make
                  the first impression immediate.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-black/30 p-5 backdrop-blur-md">
                <div className="text-xs uppercase tracking-[0.28em] text-stone-400">
                  Feel
                </div>
                <p className="mt-3 text-sm leading-7 text-stone-200/80">
                  Minimal, cinematic, and deliberate — closer to an editorial
                  profile than a crowded portfolio.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-black/30 p-5 backdrop-blur-md">
                <div className="text-xs uppercase tracking-[0.28em] text-stone-400">
                  Direction
                </div>
                <p className="mt-3 text-sm leading-7 text-stone-200/80">
                  A narrative structure that helps recruiters understand range
                  without feeling overwhelmed.
                </p>
              </div>
            </div>

            <a
              href="#journey"
              className="mt-12 inline-flex items-center gap-2 self-start text-xs uppercase tracking-[0.28em] text-stone-300 transition hover:text-white"
            >
              Scroll to continue
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-xs uppercase tracking-[0.3em] text-stone-500">
                {sections.openingEyebrow}
              </div>
              <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
                {sections.openingTitle}
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="max-w-xl"
            >
              <p className="text-lg leading-8 text-stone-600">
                {sections.openingText}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-[92rem] px-6">
          <div className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.06)]">
            <img
              src={imageAssets.solar}
              alt="Emmanuel Awe standing beside a solar installation setup"
              className="h-[34rem] w-full object-cover object-center md:h-[44rem]"
            />
          </div>
        </section>

        <section id="journey" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="lg:sticky lg:top-28 lg:h-fit">
              <div className="text-xs uppercase tracking-[0.3em] text-stone-500">
                {sections.journeyEyebrow}
              </div>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
                {sections.journeyTitle}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
                {sections.journeyText}
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute bottom-0 left-2.5 top-0 w-px bg-stone-300" />
              <div className="space-y-10">
                {timeline.map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: index * 0.04 }}
                    className="relative rounded-[2rem] border border-stone-200 bg-white/85 p-7 shadow-[0_12px_50px_rgba(0,0,0,0.04)] backdrop-blur-sm md:p-9"
                  >
                    <div className="absolute -left-[1.02rem] top-10 h-4 w-4 rounded-full border border-emerald-300/50 bg-emerald-400" />
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-stone-600">
                        {item.label}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.28em] text-stone-500">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="mt-5 font-serif text-3xl leading-tight text-stone-900">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-3xl text-base leading-8 text-stone-600">
                      {item.description}
                    </p>
                    {item.photoSrc ? (
                      <div className="mt-7 overflow-hidden rounded-[1.75rem] border border-stone-200 bg-stone-50">
                        <img
                          src={item.photoSrc}
                          alt={item.photoAlt || item.title}
                          className="h-72 w-full object-cover object-center md:h-[24rem]"
                        />
                        {item.photoCaption ? (
                          <div className="border-t border-stone-200 px-5 py-4 text-sm leading-7 text-stone-500">
                            {item.photoCaption}
                          </div>
                        ) : null}
                      </div>
                    ) : null}
                    <div className="mt-7 grid gap-3">
                      {item.roles.map((role) => (
                        <div
                          key={`${role.org}-${role.title}`}
                          className="rounded-[1.5rem] border border-stone-200 bg-stone-50/80 px-4 py-4"
                        >
                          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                            <div>
                              <div className="text-sm font-medium text-stone-900">
                                {role.title}
                              </div>
                              <div className="mt-1 text-sm text-stone-500">
                                {role.org}
                              </div>
                            </div>
                            <div className="text-xs uppercase tracking-[0.28em] text-emerald-700">
                              {role.year}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[92rem] px-6">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
            <div className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.06)]">
              <img
                src={imageAssets.electrical}
                alt="Emmanuel Awe working on electrical wiring"
                className="h-[32rem] w-full object-cover object-center md:h-[42rem]"
              />
            </div>
            <div className="flex items-center rounded-[2.5rem] border border-stone-200 bg-white px-10 py-12 shadow-[0_20px_80px_rgba(0,0,0,0.05)] md:p-14">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-stone-500">
                  {sections.currentMomentumEyebrow}
                </div>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-stone-900 md:text-5xl">
                  {sections.currentMomentumTitle}
                </h2>
                <p className="mt-6 text-lg leading-8 text-stone-600">
                  {sections.currentMomentumText}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="disciplines" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-stone-500">
              {sections.disciplinesEyebrow}
            </div>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
              {sections.disciplinesTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-600">
              {sections.disciplinesText}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {competencyGroups.map((group) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-[0_12px_50px_rgba(0,0,0,0.04)]"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-2xl border border-stone-200 bg-stone-50 p-3">
                      <Icon className="h-5 w-5 text-stone-700" />
                    </div>
                    <h3 className="text-xl font-medium text-stone-900">
                      {group.title}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm leading-6 text-stone-600"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="work" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-stone-500">
                {sections.workEyebrow}
              </div>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
                {sections.workTitle}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
                {sections.workText}
              </p>
            </div>
            <div className="grid gap-6">
              {featuredWork.map((project) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="group rounded-[2rem] border border-stone-200 bg-white p-7 shadow-[0_12px_50px_rgba(0,0,0,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_60px_rgba(0,0,0,0.06)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-2xl text-stone-900">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="mt-1 h-5 w-5 text-stone-400 transition group-hover:text-stone-900" />
                  </div>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-stone-600">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-stone-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
          <div className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.05)] md:p-14">
            <div className="grid gap-10 md:grid-cols-[1fr_.8fr] md:items-end">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-stone-500">
                  {sections.contactEyebrow}
                </div>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
                  {sections.contactTitle}
                </h2>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
                  {sections.contactText}
                </p>
              </div>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02]"
                >
                  Email me
                </a>
                <a
                  href={profile.github}
                  className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-800 transition hover:bg-stone-100"
                >
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-800 transition hover:bg-stone-100"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}