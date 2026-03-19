import { motion } from 'framer-motion';
import { ArrowRight, BookMarked, Coffee, Wifi } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="px-4 pb-8 pt-5 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-gradient-to-br from-library-800 via-library-700 to-cedar-700 px-5 py-8 text-white shadow-glow md:px-8 md:py-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-goldleaf-100">Northlight Library</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-balance md:text-6xl">
              A warm, modern home for stories, study, and community.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-library-100 md:text-lg">
              Discover handpicked books, reserve a quiet corner, and join neighborhood events designed for curious minds of every age.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button className="min-h-[48px] rounded-full bg-goldleaf-500 px-6 py-3 text-base font-semibold text-library-900 transition hover:brightness-110 active:scale-[0.98]">
                Explore the catalog
              </button>
              <button className="min-h-[48px] rounded-full border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20 active:scale-[0.98]">
                Plan your visit
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              { icon: BookMarked, title: 'Curated shelves', text: 'Staff picks, new arrivals, and beloved classics refreshed weekly.' },
              { icon: Wifi, title: 'Study-ready spaces', text: 'Fast Wi‑Fi, reservable rooms, and calm corners for focused work.' },
              { icon: Coffee, title: 'Community comfort', text: 'Reading lounges, family programs, and a café nook by the windows.' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.1 + index * 0.08 }}
                  className="rounded-[28px] bg-white/10 p-5 backdrop-blur"
                >
                  <Icon className="h-8 w-8 text-goldleaf-300" />
                  <h2 className="mt-4 text-xl font-semibold tracking-tight">{item.title}</h2>
                  <p className="mt-2 text-base leading-relaxed text-library-100">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex items-center gap-2 text-sm font-medium text-goldleaf-100">
          <span>Open seven days a week</span>
          <ArrowRight className="h-4 w-4" />
          <span>Late hours on Tuesdays and Thursdays</span>
        </div>
      </motion.div>
    </section>
  );
}
