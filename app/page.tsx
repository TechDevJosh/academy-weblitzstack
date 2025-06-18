/*
 * =================================================================
 * FILE: app/page.js (The Frontend)
 * =================================================================
 * DESCRIPTION: Final polished version of the landing page component.
 * Copy has been sharpened to reflect the "AI-Powered Workflow" USP.
 * Keywords from research have been naturally integrated for SEO.
 */

// 'use client' is necessary for handling state (useState) and animations (Framer Motion).
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import Image from 'next/image'; // NOTE: Commented out to resolve compilation error in this environment. Use standard <img> tag instead.

// --- Reusable Icon Components ---
const CheckIcon = () => <span className="text-sky-400 mr-4 mt-1">✅</span>;
const LightningIcon = () => <span className="text-sky-400 mr-4 mt-1">⚡️</span>;
const GlobeIcon = () => <span className="text-sky-400 mr-4 mt-1">🌍</span>;
const RocketIcon = () => (
  <h3 className="text-xl font-bold mb-2">🚀 Beginners Ready to Build</h3>
);
const CareerIcon = () => (
  <h3 className="text-xl font-bold mb-2">
    🎓 Career Shifters Who Hate Bootcamps
  </h3>
);
const TinkerersIcon = () => (
  <h3 className="text-xl font-bold mb-2">
    💡 Tinkerers Who Love Solving Problems
  </h3>
);
const BelieversIcon = () => (
  <h3 className="text-xl font-bold mb-2">🤝 Believers in Open Education</h3>
);
const ChevronDown = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// --- Animation Variants for Framer Motion ---
import { easeOut } from 'framer-motion';

const sectionFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut, // ✅ This is the correct way
    },
  },
};

// --- Section Components ---

const HeroSection = () => {
  return (
    <header className="text-center max-w-4xl mx-auto mb-24 md:mb-32">
      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Stop Learning Yesterday's Code.
        <span className="gradient-text"> Master the AI-Powered Workflow.</span>
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Become a top 1% developer by learning to build better software, faster.
        This is the only full-stack AI developer course designed from the ground
        up.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
      >
        <a
          href="#waitlist-form"
          id="hero-cta"
          className="cta-button inline-block bg-sky-500 text-white font-bold text-lg rounded-full px-8 py-4 shadow-lg hover:bg-sky-600"
        >
          🚀 Become a Founding Member →
        </a>
      </motion.div>
    </header>
  );
};

const AboutSection = () => (
  <motion.section
    className="max-w-4xl mx-auto mb-24 md:mb-32"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={sectionFadeIn}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      What is WeblitzStack Academy?
    </h2>
    <div className="bg-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700 shadow-xl">
      <p className="text-slate-300 text-lg mb-8 leading-relaxed">
        WeblitzStack Academy is the first of its kind: a{' '}
        <strong>free, donation-powered school</strong> that trains you to become
        an AI-Powered Full-Stack Developer. We don’t just teach you frameworks
        like React and Next.js; we teach you how to master them with an
        AI-augmented workflow, making you more productive and valuable in the
        job market.
      </p>
      <ul className="space-y-4 text-lg">
        <li className="flex items-start transition-transform hover:scale-105">
          <CheckIcon />
          <span>
            <strong>Job-Ready Portfolio:</strong> Build real, complex projects
            that showcase your modern development skills.
          </span>
        </li>
        <li className="flex items-start transition-transform hover:scale-105">
          <LightningIcon />
          <span>
            <strong>The AI-Augmented Workflow:</strong> Learn to code with tools
            like GitHub and Cursor as your co-pilot, from day one.
          </span>
        </li>
        <li className="flex items-start transition-transform hover:scale-105">
          <GlobeIcon />
          <span>
            <strong>100% Online & Free, Forever:</strong> World-class education
            without the $15k bootcamp price tag.
          </span>
        </li>
      </ul>
    </div>
  </motion.section>
);

const TechShowcaseSection = () => {
  const technologies = [
    {
      name: 'Next.js',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg',
      invert: true,
    },
    {
      name: 'React',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    },
    {
      name: 'Node.js',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    },
    {
      name: 'Tailwind CSS',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    },
    {
      name: 'Supabase',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
    },
    {
      name: 'Vercel',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
      invert: true,
    },
    {
      name: 'GitHub',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg',
      invert: true,
    },
    {
      name: 'ChatGPT',
      src: 'https://cdn.worldvectorlogo.com/logos/chatgpt-4.svg',
    },
  ];

  return (
    <motion.section
      className="py-20 bg-slate-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionFadeIn}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-4">
          The Technology You'll Master
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Our curriculum is built on the cutting-edge AI and robust technologies
          used by top companies.
        </p>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-6 md:gap-8">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center justify-center gap-2 text-center"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-slate-800 p-3 rounded-full transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:bg-slate-700">
                <img
                  src={tech.src}
                  alt={`${tech.name} logo`}
                  className={`object-contain h-full w-full ${tech.invert ? 'invert' : ''}`}
                />
              </div>
              <span className="text-sm font-semibold text-gray-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI-Powered SaaS Platform',
      description:
        'Build a full-stack Software-as-a-Service application with user authentication, database integration, and an AI-powered feature at its core.',
      imageUrl: 'https://placehold.co/600x400/1e293b/94a3b8?text=SaaS+Project',
      techStack: ['Next.js', 'React', 'Supabase', 'Stripe', 'Tailwind CSS'],
    },
    {
      title: 'Advanced E-commerce Store',
      description:
        'Create a complete e-commerce solution with product pages, a shopping cart, and a secure checkout process, ready for real transactions.',
      imageUrl: 'https://placehold.co/600x400/1e293b/94a3b8?text=E-commerce',
      techStack: ['Next.js', 'Stripe', 'Zustand', 'GraphQL'],
    },
    {
      title: 'Real-time Collaborative Tool',
      description:
        'Develop an interactive application where multiple users can collaborate in real-time, showcasing your WebSocket and state management skills.',
      imageUrl: 'https://placehold.co/600x400/1e293b/94a3b8?text=Collab+Tool',
      techStack: ['React', 'Node.js', 'Socket.IO', 'Redis'],
    },
  ];

  return (
    <motion.section
      id="work"
      className="py-20 bg-slate-800/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionFadeIn}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Portfolio Projects You'll Build
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          You don't just learn theory. You build a portfolio of complex,
          job-ready projects.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg overflow-hidden group transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-900/40"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 h-24">{project.description}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-700 text-sky-300 text-xs font-semibold px-2.5 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Are there any prerequisites for this course?',
      answer:
        'No formal prerequisites are required. This course is designed for motivated learners, from beginners to those with some coding experience. The most important requirement is a strong desire to build and learn.',
    },
    {
      question: "Is the academy really free? What's the catch?",
      answer:
        "Yes, it's 100% free and always will be. There's no catch. We're building a community-first educational model powered by donations from successful students and supporters who believe in our mission. Our goal is to make high-quality tech education accessible to everyone.",
    },
    {
      question: 'What kind of job can I get after completing the academy?',
      answer:
        "You will be qualified for roles like Full-Stack Developer, Frontend Developer, Backend Developer, or Software Engineer. The curriculum's focus on an AI-augmented workflow will make you a particularly strong candidate for forward-thinking companies.",
    },
    {
      question: 'How is this different from other coding bootcamps?',
      answer:
        "Three key ways: 1) It's free. 2) We teach an AI-first workflow from day one, which is a skill other bootcamps are still catching up on. 3) It's project-based, not theory-based. You build a real portfolio, not just complete exercises.",
    },
  ];

  return (
    <motion.section
      id="faq"
      className="py-20 bg-slate-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionFadeIn}
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center text-left p-6"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-sky-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out grid ${openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-gray-300">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const BenefitsSection = () => (
  <motion.section
    className="max-w-4xl mx-auto mb-24 md:mb-32"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={sectionFadeIn}
  >
    <div className="bg-sky-900/50 rounded-2xl p-8 md:p-12 border border-sky-700 text-center">
      <h2 className="text-3xl font-bold mb-2 text-white">
        The Founding Member Promise
      </h2>
      <p className="text-slate-300 mb-8">
        As a thank you for being an early believer, you get exclusive perks that
        will <strong>never</strong> be offered again.
      </p>
      <ul className="text-left max-w-md mx-auto space-y-3 text-lg">
        <li className="flex items-center">
          <span className="text-xl mr-3">🏆</span>Free lifetime access to all
          future courses.
        </li>
        <li className="flex items-center">
          <span className="text-xl mr-3">👨‍🏫</span>Direct mentorship & code
          reviews with Josiah.
        </li>
        <li className="flex items-center">
          <span className="text-xl mr-3">🏛️</span>A permanent place in our Hall
          of Builders.
        </li>
      </ul>
    </div>
  </motion.section>
);

const FounderMessageSection = () => (
  <motion.section
    className="max-w-3xl mx-auto mb-24 md:mb-32"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={sectionFadeIn}
  >
    <div className="text-center bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
      <div className="mb-4 aspect-video bg-slate-700/50 rounded-lg flex items-center justify-center text-slate-400">
        (Video intro from Josiah coming soon!)
      </div>
      <img
        src="https://placehold.co/100x100/38bdf8/0f172a?text=J"
        className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-sky-400"
        alt="Josiah, Founder"
      />
      <blockquote className="text-xl italic text-slate-300 leading-relaxed border-l-4 border-slate-600 pl-6 py-4">
        “I was rejected from 50+ jobs. So I stopped applying and started
        building. I built everything you see here with AI as my co-pilot,
        learning one project at a time. This academy is the roadmap I wish I
        had. Now I'm passing it on.”
      </blockquote>
      <cite className="block mt-4 text-md font-semibold text-slate-400 not-italic">
        — Josiah, Founder of WeblitzStack
      </cite>
    </div>
  </motion.section>
);

const WaitlistFormSection = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    reason: '',
    honeypot: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong.');
      }

      setStatus('success');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message);
    }
  };

  return (
    <motion.section
      id="waitlist-form"
      className="max-w-xl mx-auto text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionFadeIn}
    >
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 md:p-12 min-h-[36rem]">
        {status !== 'success' && (
          <>
            <h2 className="text-3xl font-bold mb-2 text-white">
              Claim Your Spot. Build the Future.
            </h2>
            <p className="text-slate-400 mb-8">
              The founding cohort is strictly limited to ensure quality. Fill
              out the form to secure your chance to join.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="full_name" className="sr-only">
                  Full Name
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="fullName"
                  placeholder="Full Name"
                  required
                  onChange={handleChange}
                  value={formData.fullName}
                  disabled={status === 'loading'}
                  className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 border border-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 disabled:opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  onChange={handleChange}
                  value={formData.email}
                  disabled={status === 'loading'}
                  className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 border border-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 disabled:opacity-50"
                />
              </div>
              <div>
                <label htmlFor="reason" className="sr-only">
                  Why do you want to join?
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  rows="3"
                  placeholder="Optional: What's the #1 thing you want to build?"
                  onChange={handleChange}
                  value={formData.reason}
                  disabled={status === 'loading'}
                  className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 border border-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 disabled:opacity-50"
                ></textarea>
                <p className="text-xs text-slate-500 text-left mt-2">
                  Your answer helps us build the perfect curriculum for you.
                </p>
              </div>
              <div className="absolute -left-[5000px]" aria-hidden="true">
                <label htmlFor="honeypot">
                  Don't fill this out if you're human:
                </label>
                <input
                  type="text"
                  id="honeypot"
                  name="honeypot"
                  tabIndex="-1"
                  value={formData.honeypot}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="cta-button w-full bg-sky-500 text-white font-bold text-lg rounded-full py-4 shadow-lg hover:bg-sky-600 disabled:bg-slate-600 disabled:cursor-not-allowed flex items-center justify-center"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  '✅ Unlock My Early Access'
                )}
              </button>
              <p className="text-xs text-slate-500 mt-4">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          </>
        )}
        {status === 'success' && (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="font-bold text-2xl mb-2 text-white">
              You're on the list!
            </h3>
            <p className="text-green-300">
              Thank you for joining. Check your email for a confirmation and
              your next steps. Welcome to the community!
            </p>
          </div>
        )}
        {status === 'error' && (
          <div className="mt-4 bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg text-center">
            <p>
              <strong>Error:</strong> {errorMessage}
            </p>
            <p>Please try again or contact support.</p>
          </div>
        )}
      </div>
    </motion.section>
  );
};

const Footer = () => (
  <footer className="text-center py-8 mt-16 text-slate-500">
    <p>
      &copy; {new Date().getFullYear()} WeblitzStack Academy. All rights
      reserved.
    </p>
  </footer>
);

// --- Main Page Component ---
export default function WaitlistPage() {
  return (
    <div
      className="bg-slate-900 text-slate-200 antialiased"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style jsx global>{`
        .gradient-text {
          background: linear-gradient(90deg, #38bdf8, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cta-button {
          transition: all 0.3s ease-in-out;
          box-shadow: 0 4px 14px 0 rgba(0, 118, 255, 0.39);
        }
        .cta-button:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 6px 20px 0 rgba(0, 118, 255, 0.5);
        }
      `}</style>

      <main className="container mx-auto px-6 py-8 md:py-16">
        <HeroSection />
        <AboutSection />
        <TechShowcaseSection />
        <ProjectsSection />
        <BenefitsSection />
        <FaqSection />
        <FounderMessageSection />
        <WaitlistFormSection />
      </main>
      <Footer />
    </div>
  );
}

/*
 * =================================================================
 * FILE: app/layout.js (Root Layout - For SEO)
 * =================================================================
 * DESCRIPTION: In the App Router, metadata is defined in layout.js or page.js.
 * This is where you should put your main SEO tags.
 */

// export const metadata = {
//   title: 'AI-Powered Full Stack Developer Course | WeblitzStack Academy',
//   description: 'Join the first AI-Powered Full Stack Developer course. Learn React, Next.js, and Python with a modern, AI-augmented workflow using GitHub and more. Apply for the founding cohort.',
//   keywords: ['full stack ai developer course', 'learn next js with ai', 'react course with github', 'coding bootcamp with ai', 'ai for software development bootcamp'],
//   canonical: 'https://academy.weblitzstack.com',
//   openGraph: {
//     type: 'website',
//     url: 'https://academy.weblitzstack.com',
//     title: 'AI-Powered Full Stack Developer Course | WeblitzStack Academy',
//     description: 'Become a top 1% developer by mastering the modern, AI-augmented workflow. Free, project-based learning.',
//     images: [
//       {
//         url: 'https://academy.weblitzstack.com/og-image-v1.png', // Replace with branded 1200x630 image
//         width: 1200,
//         height: 630,
//         alt: 'WeblitzStack Academy: AI-Powered Full Stack Development',
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'AI-Powered Full Stack Developer Course | WeblitzStack Academy',
//     description: 'Become a top 1% developer by mastering the modern, AI-augmented workflow. Free, project-based learning.',
//     images: ['https://academy.weblitzstack.com/twitter-image-v1.png'], // Replace with branded Twitter image
//   },
// };

/*
 * =================================================================
 * FILE: app/api/waitlist/route.js (The Backend)
 * =================================================================
 * DESCRIPTION: This API route handles the form submission.
 * It saves data to Supabase and sends emails via Resend.
 */

// import { NextResponse } from 'next/server';
// import { createClient } from '@supabase/supabase-js';
// import { Resend } from 'resend';

// // Initialize Supabase client
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.SUPABASE_SERVICE_ROLE_KEY
// );

// // Initialize Resend client
// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request) {
//   try {
//     const { fullName, email, reason, honeypot } = await request.json();

//     // Honeypot check for bots
//     if (honeypot) {
//       console.log('Honeypot triggered');
//       return NextResponse.json({ message: 'Success!' }, { status: 200 }); // Fail silently
//     }

//     // Basic validation
//     if (!fullName || !email) {
//       return NextResponse.json({ message: 'Full name and email are required.' }, { status: 400 });
//     }

//     // 1. Save to Supabase
//     const { error: supabaseError } = await supabase
//       .from('waitlist_signups')
//       .insert([{ full_name: fullName, email, reason_for_joining: reason }])
//       .select();

//     if (supabaseError) {
//       console.error('Supabase error:', supabaseError);
//       if (supabaseError.code === '23505') {
//         return NextResponse.json({ message: 'This email is already on the waitlist.' }, { status: 409 });
//       }
//       throw new Error('Could not save to the waitlist.');
//     }

//     // 2. Send emails via Resend
//     const adminEmailPromise = resend.emails.send({
//       from: 'Waitlist Notifier <onboarding@resend.dev>',
//       to: ['josiah@weblitzstack.com'], // Production admin email
//       subject: `New Waitlist Signup: ${fullName}`,
//       html: `<p>New signup!</p>
//              <p><strong>Name:</strong> ${fullName}</p>
//              <p><strong>Email:</strong> ${email}</p>
//              <p><strong>Reason:</strong> ${reason || 'Not provided'}</p>`,
//     });

//     const userEmailPromise = resend.emails.send({
//       from: 'Josiah from WeblitzStack <onboarding@resend.dev>',
//       to: [email],
//       subject: 'Welcome to the Founding Cohort Waitlist! 🎉',
//       html: `<h1>Welcome, ${fullName}!</h1>
//              <p>Thank you for joining the waitlist for WeblitzStack Academy. You've secured your spot to be considered for the exclusive founding cohort.</p>
//              <p>We're building something special here, and we're thrilled to have you on this journey with us.</p>
//              <p>Keep an eye on your inbox for updates, behind-the-scenes content, and your official invitation.</p>
//              <p>Best,</p>
//              <p>Josiah & The WeblitzStack Team</p>`,
//     });

//     await Promise.all([adminEmailPromise, userEmailPromise]);

//     const response = NextResponse.json({ message: 'Successfully joined the waitlist!' }, { status: 201 });

//     // API hygiene: set cache-control headers
//     response.headers.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');

//     return response;

//   } catch (error) {
//     console.error('API Error:', error);
//     return NextResponse.json({ message: error.message || 'An unexpected error occurred.' }, { status: 500 });
//   }
// }
