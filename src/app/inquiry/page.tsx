"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiDownload,
  FiSend,
} from "react-icons/fi";

type QuestionType = "text" | "email" | "textarea" | "options" | "multi";

type FormData = {
  businessName: string;
  name: string;
  email: string;
  phone: string;
  businessLocation: string;
  currentWebsite: string;
  socialLinks: string;

  completionMethod: string;
  meetingPreference: string;

  businessDescription: string;
  mainCustomers: string;
  serviceAreas: string;
  difference: string;
  mainServices: string;

  websiteGoal: string[];
  visitorAction: string[];
  projectType: string;
  currentWebsiteProblems: string;

  pagesNeeded: string[];
  featuresNeeded: string[];

  hasLogo: string;
  hasBrandColors: string;
  hasPhotosVideos: string;
  designStyle: string[];
  websitesLiked: string;
  competitorWebsites: string;

  hasWebsiteText: string;
  needsCopywriting: string;
  hasProfessionalPhotos: string;
  needsStockImages: string;
  contentProvider: string;

  ownsDomain: string;
  needsDomainHelp: string;
  hasHosting: string;
  needsBusinessEmail: string;

  launchTimeline: string;
  budgetRange: string;
  monthlyCare: string;

  finalNotes: string;
};

type Question = {
  key: keyof FormData;
  section: string;
  label: string;
  helper: string;
  type: QuestionType;
  required: boolean;
  placeholder?: string;
  options?: string[];
  onlyIfAppointment?: boolean;
};

const initialForm: FormData = {
  businessName: "",
  name: "",
  email: "",
  phone: "",
  businessLocation: "",
  currentWebsite: "",
  socialLinks: "",

  completionMethod: "",
  meetingPreference: "",

  businessDescription: "",
  mainCustomers: "",
  serviceAreas: "",
  difference: "",
  mainServices: "",

  websiteGoal: [],
  visitorAction: [],
  projectType: "",
  currentWebsiteProblems: "",

  pagesNeeded: [],
  featuresNeeded: [],

  hasLogo: "",
  hasBrandColors: "",
  hasPhotosVideos: "",
  designStyle: [],
  websitesLiked: "",
  competitorWebsites: "",

  hasWebsiteText: "",
  needsCopywriting: "",
  hasProfessionalPhotos: "",
  needsStockImages: "",
  contentProvider: "",

  ownsDomain: "",
  needsDomainHelp: "",
  hasHosting: "",
  needsBusinessEmail: "",

  launchTimeline: "",
  budgetRange: "",
  monthlyCare: "",

  finalNotes: "",
};

const questions: Question[] = [
  {
    key: "businessName",
    section: "Business Information",
    label: "What is your business name?",
    helper: "Enter the name of the business or brand this website is for.",
    placeholder: "Example: Bowen Websites",
    type: "text",
    required: true,
  },
  {
    key: "name",
    section: "Business Information",
    label: "What is your name?",
    helper: "Who should I contact about this project?",
    placeholder: "Enter your full name",
    type: "text",
    required: true,
  },
  {
    key: "email",
    section: "Business Information",
    label: "What email should I contact you at?",
    helper: "I’ll use this to send next steps and project updates.",
    placeholder: "you@example.com",
    type: "email",
    required: true,
  },
  {
    key: "phone",
    section: "Business Information",
    label: "What is your phone number?",
    helper: "Helpful for calls, texts, or appointment reminders.",
    placeholder: "(818) 555-1234",
    type: "text",
    required: true,
  },
  {
    key: "completionMethod",
    section: "Next Step",
    label: "How would you like to complete this questionnaire?",
    helper:
      "You can fill it out yourself now, or we can go through it together during a call.",
    type: "options",
    required: true,
    options: [
      "Fill it out myself now",
      "Schedule a call and fill it out together",
    ],
  },
  {
    key: "meetingPreference",
    section: "Appointment",
    label: "How would you prefer to meet?",
    helper: "Choose the best appointment option.",
    type: "options",
    required: false,
    onlyIfAppointment: true,
    options: [
      "Phone call — 15 minutes",
      "Zoom meeting — 20 minutes",
      "In-person meeting — 30 minutes, within 20 miles of Northridge",
    ],
  },
  {
    key: "businessLocation",
    section: "Business Information",
    label: "Where is your business located?",
    helper: "City, neighborhood, or service area is fine.",
    placeholder: "Example: Northridge, CA",
    type: "text",
    required: false,
  },
  {
    key: "currentWebsite",
    section: "Business Information",
    label: "Do you already have a website?",
    helper: "Paste the link if you have one, or type no.",
    placeholder: "https://yourwebsite.com or No",
    type: "text",
    required: false,
  },
  {
    key: "socialLinks",
    section: "Business Information",
    label: "Do you have social media links?",
    helper: "Instagram, Facebook, TikTok, LinkedIn, Yelp, or anything else.",
    placeholder: "Paste your social media links here...",
    type: "textarea",
    required: false,
  },
  {
    key: "businessDescription",
    section: "About Your Business",
    label: "What does your business do?",
    helper: "Briefly explain your business, services, or products.",
    placeholder: "Tell me what your business does...",
    type: "textarea",
    required: false,
  },
  {
    key: "mainCustomers",
    section: "About Your Business",
    label: "Who are your main customers?",
    helper:
      "Think demographics, age range, desired clients, or ideal customers.",
    placeholder:
      "Example: local homeowners, small business owners, luxury clients...",
    type: "textarea",
    required: false,
  },
  {
    key: "serviceAreas",
    section: "About Your Business",
    label: "What areas do you serve?",
    helper: "List the cities, neighborhoods, or regions you work in.",
    placeholder: "Example: Northridge, San Fernando Valley, Los Angeles...",
    type: "textarea",
    required: false,
  },
  {
    key: "difference",
    section: "About Your Business",
    label: "What makes your business different from competitors?",
    helper: "This helps me position your business better on the website.",
    placeholder: "What makes you better, different, trusted, or unique?",
    type: "textarea",
    required: false,
  },
  {
    key: "mainServices",
    section: "About Your Business",
    label: "What are your main services or products?",
    helper: "List the main things you want customers to know about.",
    placeholder: "Service 1, service 2, service 3...",
    type: "textarea",
    required: false,
  },
  {
    key: "websiteGoal",
    section: "Website Goals",
    label: "What are the main goals of your website?",
    helper:
      "Choose all that apply. Examples: get calls, collect leads, book appointments, sell products, or look more professional.",
    type: "multi",
    required: false,
    options: [
      "Get more calls",
      "Collect leads",
      "Book appointments",
      "Sell products",
      "Show services",
      "Look more professional",
      "Advertise online",
      "Not sure yet",
    ],
  },
  {
    key: "visitorAction",
    section: "Website Goals",
    label: "What action do you want visitors to take?",
    helper: "This becomes the main call-to-action on your website.",
    type: "multi",
    required: false,
    options: [
      "Call",
      "Fill out a form",
      "Book online",
      "Buy something",
      "Request a quote",
      "Visit my location",
      "Email me",
      "Not sure yet",
    ],
  },
  {
    key: "projectType",
    section: "Website Goals",
    label: "Do you need a brand-new website or a redesign?",
    helper: "Choose the closest option.",
    type: "options",
    required: false,
    options: [
      "Brand-new website",
      "Redesign existing website",
      "Landing page",
      "Ecommerce website",
      "Not sure yet",
    ],
  },
  {
    key: "currentWebsiteProblems",
    section: "Website Goals",
    label: "What problems are you having with your current website?",
    helper: "Skip this if you do not have a current website.",
    placeholder:
      "Example: outdated design, slow, not mobile-friendly, not getting leads...",
    type: "textarea",
    required: false,
  },
  {
    key: "pagesNeeded",
    section: "Website Pages",
    label: "Which pages do you need?",
    helper: "Choose all that apply.",
    type: "multi",
    required: false,
    options: [
      "Home",
      "About",
      "Services",
      "Contact",
      "Gallery",
      "Reviews",
      "FAQ",
      "Pricing",
      "Blog",
      "Shop",
      "Other",
    ],
  },
  {
    key: "featuresNeeded",
    section: "Website Features",
    label: "What features do you need on your website?",
    helper: "Choose all that apply.",
    type: "multi",
    required: false,
    options: [
      "Book appointments",
      "Request a quote",
      "Contact form",
      "Click-to-call button",
      "Text message button",
      "Online payments",
      "Sell products",
      "Sell services",
      "Newsletter/email signup",
      "Photo gallery or portfolio",
      "Reviews/testimonials",
      "FAQ section",
      "Google Maps/location",
      "Blog/news posts",
      "Customer login/account portal",
      "Admin dashboard",
      "Social media links",
      "Downloadable files, menus, or PDFs",
      "Event registration",
      "Job application form",
      "Other",
    ],
  },
  {
    key: "hasLogo",
    section: "Design Style",
    label: "Do you already have a logo?",
    helper: "Let me know if you have one ready or need help with one.",
    type: "options",
    required: false,
    options: ["Yes", "No", "I need help with a logo"],
  },
  {
    key: "hasBrandColors",
    section: "Design Style",
    label: "Do you already have brand colors?",
    helper: "If not, I can help choose colors that fit your business.",
    type: "options",
    required: false,
    options: ["Yes", "No", "I need help choosing colors"],
  },
  {
    key: "hasPhotosVideos",
    section: "Design Style",
    label: "Do you have photos or videos you want to use?",
    helper:
      "This can include business photos, product photos, team photos, or videos.",
    type: "options",
    required: false,
    options: ["Yes", "No", "Some, but I may need more"],
  },
  {
    key: "designStyle",
    section: "Design Style",
    label: "What style do you want the website to have?",
    helper:
      "Examples: modern, luxury, simple, bold, clean, professional, creative, elegant, or fun.",
    type: "multi",
    required: false,
    options: [
      "Modern",
      "Luxury",
      "Simple",
      "Bold",
      "Clean",
      "Professional",
      "Creative",
      "Elegant",
      "Fun",
      "Not sure yet",
    ],
  },
  {
    key: "websitesLiked",
    section: "Design Style",
    label: "List 2–3 websites you like.",
    helper:
      "These do not have to be competitors. They just help me understand your taste.",
    placeholder: "Paste links to websites you like...",
    type: "textarea",
    required: false,
  },
  {
    key: "competitorWebsites",
    section: "Design Style",
    label: "List 2–3 competitor websites.",
    helper:
      "This helps me understand your market and how your website should stand out.",
    placeholder: "Paste competitor website links here...",
    type: "textarea",
    required: false,
  },
  {
    key: "hasWebsiteText",
    section: "Content",
    label: "Do you already have the text for the website?",
    helper:
      "This includes your about section, services, pricing, and business details.",
    type: "options",
    required: false,
    options: ["Yes", "No", "Some of it"],
  },
  {
    key: "needsCopywriting",
    section: "Content",
    label: "Do you need help writing the website copy?",
    helper: "I can help turn your business info into clean website text.",
    type: "options",
    required: false,
    options: ["Yes", "No", "Not sure yet"],
  },
  {
    key: "hasProfessionalPhotos",
    section: "Content",
    label: "Do you have professional photos?",
    helper: "Professional photos help, but they are not always required.",
    type: "options",
    required: false,
    options: ["Yes", "No", "Some photos"],
  },
  {
    key: "needsStockImages",
    section: "Content",
    label: "Do you need stock images?",
    helper:
      "Stock images can be used if you do not have enough business photos yet.",
    type: "options",
    required: false,
    options: ["Yes", "No", "Not sure yet"],
  },
  {
    key: "contentProvider",
    section: "Content",
    label: "Who will provide the business information, photos, and pricing?",
    helper: "This helps set expectations before the project starts.",
    placeholder:
      "Example: I will provide photos and pricing, but I need help writing the services...",
    type: "textarea",
    required: false,
  },
  {
    key: "ownsDomain",
    section: "Domain, Hosting, and Email",
    label: "Do you already own a domain name?",
    helper: "Example: yourbusiness.com",
    type: "options",
    required: false,
    options: ["Yes", "No", "Not sure"],
  },
  {
    key: "needsDomainHelp",
    section: "Domain, Hosting, and Email",
    label: "Do you need help buying a domain?",
    helper: "I can help guide you through choosing and connecting one.",
    type: "options",
    required: false,
    options: ["Yes", "No", "Not sure"],
  },
  {
    key: "hasHosting",
    section: "Domain, Hosting, and Email",
    label: "Do you already have hosting?",
    helper: "Hosting is where your website lives online.",
    type: "options",
    required: false,
    options: ["Yes", "No", "Not sure"],
  },
  {
    key: "needsBusinessEmail",
    section: "Domain, Hosting, and Email",
    label: "Do you need business email setup?",
    helper: "Example: info@yourbusiness.com",
    type: "options",
    required: false,
    options: ["Yes", "No", "Not sure"],
  },
  {
    key: "launchTimeline",
    section: "Timeline and Budget",
    label: "When would you like the website launched?",
    helper: "A rough timeline is fine.",
    type: "options",
    required: false,
    options: ["ASAP", "2–4 weeks", "1–2 months", "Just researching"],
  },
  {
    key: "budgetRange",
    section: "Timeline and Budget",
    label: "What is your budget range?",
    helper: "This helps me recommend the right website package.",
    type: "textarea",
    required: false,
  },
  {
    key: "monthlyCare",
    section: "Timeline and Budget",
    label: "Are you interested in monthly website care after launch?",
    helper:
      "Examples: hosting, monthly edits, updates, backups, performance checks, and SEO basics.",
    type: "options",
    required: false,
    options: ["Yes", "No", "Maybe, tell me more"],
  },
  {
    key: "finalNotes",
    section: "Final Notes",
    label: "Is there anything else I should know before preparing a quote?",
    helper: "Add any extra details, questions, ideas, or concerns.",
    placeholder: "Tell me anything else that would help...",
    type: "textarea",
    required: false,
  },
];

export default function InquiryPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(initialForm);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const visibleQuestions = useMemo(() => {
    if (form.completionMethod === "Schedule a call and fill it out together") {
      return questions.filter((question) => {
        return (
          question.key === "businessName" ||
          question.key === "name" ||
          question.key === "email" ||
          question.key === "phone" ||
          question.key === "completionMethod" ||
          question.key === "meetingPreference" ||
          question.key === "finalNotes"
        );
      });
    }

    return questions.filter((question) => !question.onlyIfAppointment);
  }, [form.completionMethod]);

  const currentQuestion = visibleQuestions[step];
  const isLastStep = step === visibleQuestions.length - 1;

  const progress = useMemo(() => {
    return Math.round(((step + 1) / visibleQuestions.length) * 100);
  }, [step, visibleQuestions.length]);

  function updateField(key: keyof FormData, value: string) {
    setError("");

    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function toggleArrayValue(key: keyof FormData, value: string) {
    setError("");

    setForm((prev) => {
      const currentValue = prev[key];

      if (!Array.isArray(currentValue)) return prev;

      const exists = currentValue.includes(value);

      return {
        ...prev,
        [key]: exists
          ? currentValue.filter((item) => item !== value)
          : [...currentValue, value],
      };
    });
  }

  function isCurrentStepValid() {
    if (!currentQuestion.required) return true;

    const value = form[currentQuestion.key];

    if (Array.isArray(value)) {
      return value.length > 0;
    }

    return value.trim().length > 0;
  }

  function nextStep() {
    if (!isCurrentStepValid()) {
      setError("Please answer this required question before continuing.");
      return;
    }

    if (isLastStep) {
      handleSubmit();
      return;
    }

    setStep((prev) => prev + 1);
  }

  function previousStep() {
    setError("");
    setStep((prev) => Math.max(prev - 1, 0));
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter" && currentQuestion.type !== "textarea") {
      event.preventDefault();
      nextStep();
    }
  }

  function handleSubmit() {
    console.log("Bowen Websites questionnaire submitted:", form);

    // Later, connect this to an API route and Resend.
    setSubmitted(true);
  }

  if (!currentQuestion) {
    return null;
  }

  if (submitted) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-[#081523] px-4 py-20 text-[#f8f6f1] sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute left-[-15%] top-[-20%] h-[420px] w-[420px] rounded-full bg-[#c89455]/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-20%] right-[-15%] h-[420px] w-[420px] rounded-full bg-[#12345a]/30 blur-3xl" />

        <section className="relative z-10 mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="w-full rounded-[2rem] border border-[#f8f6f1]/10 bg-[#f8f6f1]/[0.07] p-8 text-center shadow-[0_24px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-12"
          >
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c89455] text-2xl text-[#081523]">
              <FiCheck aria-hidden="true" />
            </div>

            <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-[#c89455]">
              Questionnaire Sent
            </p>

            <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-[#f8f6f1] sm:text-5xl">
              Thanks, {form.name.split(" ")[0] || "there"}.
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm font-medium leading-6 text-[#f8f6f1]/55 sm:text-base">
              I received your website questionnaire. I’ll review your answers
              and follow up with the next steps for your project.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setStep(0);
                  setForm(initialForm);
                }}
                className="inline-flex items-center gap-2 rounded-full bg-[#c89455] px-6 py-3 text-xs font-black uppercase tracking-[0.14em] text-[#081523] transition hover:-translate-y-0.5 hover:bg-[#f8f6f1]"
              >
                Submit Another Response
                <FiArrowRight aria-hidden="true" />
              </button>

              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-[#f8f6f1]/10 bg-[#f8f6f1]/[0.06] px-6 py-3 text-xs font-black uppercase tracking-[0.14em] text-[#f8f6f1] transition hover:-translate-y-0.5 hover:border-[#c89455]/40 hover:text-[#c89455]"
              >
                Back Home
                <FiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#081523] px-4 py-16 text-[#f8f6f1] sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-[-15%] top-[-20%] h-[420px] w-[420px] rounded-full bg-[#c89455]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-20%] right-[-15%] h-[420px] w-[420px] rounded-full bg-[#12345a]/30 blur-3xl" />

      <section className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-[#c89455]">
            Bowen Websites Questionnaire
          </p>

          <h1 className="text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-[#f8f6f1] sm:text-4xl md:text-5xl">
            Start Your{" "}
            <span className="rounded-xl bg-[#c89455] px-3 py-1 text-[#081523]">
              Website
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm font-medium leading-6 text-[#f8f6f1]/55 sm:text-base">
            Fill out the questionnaire yourself, or schedule a call and we can
            go through it together.
          </p>

          <a
            href="/bowen-websites-questionnaire.pdf"
            download
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#c89455]/30 bg-[#c89455]/10 px-6 py-3 text-xs font-black uppercase tracking-[0.14em] text-[#c89455] transition hover:-translate-y-0.5 hover:bg-[#c89455] hover:text-[#081523]"
          >
            Download PDF & Fill Out Yourself
            <FiDownload aria-hidden="true" />
          </a>

          <p className="mx-auto mt-4 max-w-lg text-xs font-medium leading-5 text-[#f8f6f1]/45">
            This form will take at least 30 minutes to fill out. If you need
            more time, the PDF is recommended.
          </p>
        </motion.div>

        <div className="mb-5 overflow-hidden rounded-full border border-[#f8f6f1]/10 bg-[#f8f6f1]/[0.06]">
          <div
            className="h-2 rounded-full bg-[#c89455] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mb-5 flex items-center justify-between text-xs font-black uppercase tracking-[0.18em] text-[#f8f6f1]/35">
          <span>
            Question {step + 1} of {visibleQuestions.length}
          </span>
          <span>{progress}% Complete</span>
        </div>

        <motion.div
          key={step}
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.28 }}
          className="rounded-[2rem] border border-[#f8f6f1]/10 bg-[#f8f6f1]/[0.07] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8 lg:p-10"
        >
          <div className="mb-8">
            <div className="mb-5 flex flex-wrap gap-2">
              <span className="inline-flex rounded-full border border-[#c89455]/25 bg-[#c89455]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#c89455]">
                {currentQuestion.section}
              </span>

              <span className="inline-flex rounded-full border border-[#f8f6f1]/10 bg-[#f8f6f1]/[0.06] px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#f8f6f1]/40">
                {currentQuestion.required ? "Required" : "Optional"}
              </span>
            </div>

            <h2 className="max-w-3xl text-3xl font-black tracking-[-0.04em] text-[#f8f6f1] sm:text-4xl">
              {currentQuestion.label}
            </h2>

            <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-[#f8f6f1]/55">
              {currentQuestion.helper}
            </p>
          </div>

          <div onKeyDown={handleKeyDown}>
            {(currentQuestion.type === "text" ||
              currentQuestion.type === "email") && (
              <input
                type={currentQuestion.type}
                value={form[currentQuestion.key] as string}
                onChange={(event) =>
                  updateField(currentQuestion.key, event.target.value)
                }
                placeholder={currentQuestion.placeholder}
                autoFocus
                className="w-full rounded-2xl border border-[#f8f6f1]/10 bg-[#f8f6f1]/[0.06] px-5 py-4 text-base font-bold text-[#f8f6f1] outline-none transition placeholder:text-[#f8f6f1]/25 focus:border-[#c89455]/50 focus:bg-[#f8f6f1]/[0.09] sm:text-lg"
              />
            )}

            {currentQuestion.type === "textarea" && (
              <textarea
                value={form[currentQuestion.key] as string}
                onChange={(event) =>
                  updateField(currentQuestion.key, event.target.value)
                }
                placeholder={currentQuestion.placeholder}
                autoFocus
                rows={6}
                className="w-full resize-none rounded-2xl border border-[#f8f6f1]/10 bg-[#f8f6f1]/[0.06] px-5 py-4 text-base font-bold leading-7 text-[#f8f6f1] outline-none transition placeholder:text-[#f8f6f1]/25 focus:border-[#c89455]/50 focus:bg-[#f8f6f1]/[0.09]"
              />
            )}

            {currentQuestion.type === "options" && currentQuestion.options && (
              <div className="grid gap-3 sm:grid-cols-2">
                {currentQuestion.options.map((option) => {
                  const selected = form[currentQuestion.key] === option;

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => updateField(currentQuestion.key, option)}
                      className={`group flex min-h-[64px] items-center justify-between rounded-2xl border px-5 py-4 text-left text-sm font-black transition duration-300 hover:-translate-y-0.5 sm:text-base ${
                        selected
                          ? "border-[#c89455] bg-[#c89455] text-[#081523]"
                          : "border-[#f8f6f1]/10 bg-[#f8f6f1]/[0.06] text-[#f8f6f1] hover:border-[#c89455]/40 hover:bg-[#f8f6f1]/[0.09]"
                      }`}
                    >
                      <span>{option}</span>

                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition ${
                          selected
                            ? "border-[#081523] bg-[#081523] text-[#c89455]"
                            : "border-[#f8f6f1]/15 text-[#f8f6f1]/25 group-hover:border-[#c89455] group-hover:text-[#c89455]"
                        }`}
                      >
                        {selected && <FiCheck size={13} aria-hidden="true" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {currentQuestion.type === "multi" && currentQuestion.options && (
              <div className="grid gap-3 sm:grid-cols-2">
                {currentQuestion.options.map((option) => {
                  const currentValue = form[currentQuestion.key];
                  const selected =
                    Array.isArray(currentValue) &&
                    currentValue.includes(option);

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        toggleArrayValue(currentQuestion.key, option)
                      }
                      className={`group flex min-h-[64px] items-center justify-between rounded-2xl border px-5 py-4 text-left text-sm font-black transition duration-300 hover:-translate-y-0.5 sm:text-base ${
                        selected
                          ? "border-[#c89455] bg-[#c89455] text-[#081523]"
                          : "border-[#f8f6f1]/10 bg-[#f8f6f1]/[0.06] text-[#f8f6f1] hover:border-[#c89455]/40 hover:bg-[#f8f6f1]/[0.09]"
                      }`}
                    >
                      <span>{option}</span>

                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition ${
                          selected
                            ? "border-[#081523] bg-[#081523] text-[#c89455]"
                            : "border-[#f8f6f1]/15 text-[#f8f6f1]/25 group-hover:border-[#c89455] group-hover:text-[#c89455]"
                        }`}
                      >
                        {selected && <FiCheck size={13} aria-hidden="true" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {error && (
              <p className="mt-5 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm font-bold text-red-100">
                {error}
              </p>
            )}
          </div>

          <div className="mt-10 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={previousStep}
              disabled={step === 0}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f8f6f1]/10 bg-[#f8f6f1]/[0.06] px-6 py-3 text-xs font-black uppercase tracking-[0.14em] text-[#f8f6f1] transition hover:border-[#c89455]/40 hover:text-[#c89455] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <FiArrowLeft aria-hidden="true" />
              Back
            </button>

            <button
              type="button"
              onClick={nextStep}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c89455] px-6 py-3 text-xs font-black uppercase tracking-[0.14em] text-[#081523] transition hover:-translate-y-0.5 hover:bg-[#f8f6f1]"
            >
              {isLastStep ? "Submit Questionnaire" : "Next"}
              {isLastStep ? (
                <FiSend aria-hidden="true" />
              ) : (
                <FiArrowRight aria-hidden="true" />
              )}
            </button>
          </div>
        </motion.div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs font-medium leading-5 text-[#f8f6f1]/35">
          After submitting, I’ll review your answers and follow up with the best
          next step for your website project.
        </p>
      </section>
    </main>
  );
}