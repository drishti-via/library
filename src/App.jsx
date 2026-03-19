import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, CalendarDays, Clock3, Library, MapPin, Search, Sparkles, Star, Users } from 'lucide-react';
import clsx from 'clsx';
import { format } from 'date-fns';
import HeroSection from './components/HeroSection';
import SectionHeading from './components/SectionHeading';
import BookCard from './components/BookCard';
import EventCard from './components/EventCard';
import StatCard from './components/StatCard';

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

export default function App() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [status, setStatus] = useState('loading');

  const loadLibrary = async () => {
    try {
      setStatus('loading');
      const response = await axios.get('/api/library');
      setData(response.data);
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  useEffect(() => {
    loadLibrary();
  }, []);

  const genres = useMemo(() => {
    if (!data?.books) return ['All'];
    return ['All', ...new Set(data.books.map((book) => book.genre))];
  }, [data]);

  const filteredBooks = useMemo(() => {
    if (!data?.books) return [];
    return data.books.filter((book) => {
      const matchesGenre = selectedGenre === 'All' || book.genre === selectedGenre;
      const matchesQuery = [book.title, book.author, book.description, book.genre]
        .join(' ')
        .toLowerCase()
        .includes(query.toLowerCase());
      return matchesGenre && matchesQuery;
    });
  }, [data, query, selectedGenre]);

  return (
    <main className="min-h-screen bg-library-radial">
      <HeroSection />

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-12 md:px-6 lg:px-8">
        {status === 'loading' && (
          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-32 animate-pulse rounded-3xl bg-white/70 shadow-glow" />
            ))}
          </section>
        )}

        {status === 'error' && (
          <section className="rounded-[28px] bg-white/90 p-6 shadow-glow">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-library-500">Connection issue</p>
                <h2 className="mt-2 text-2xl font-bold text-library-900">We couldn&apos;t load the library shelves.</h2>
                <p className="mt-2 text-base leading-relaxed text-library-700">Try again to restore today&apos;s recommendations, events, and reading stats.</p>
              </div>
              <button
                type="button"
                onClick={loadLibrary}
                className="min-h-[44px] rounded-full bg-library-700 px-6 py-3 text-base font-semibold text-white transition hover:brightness-110 active:scale-[0.98]"
              >
                Retry
              </button>
            </div>
          </section>
        )}

        {status === 'success' && data && (
          <>
            <motion.section
              {...fadeUp}
              transition={{ duration: 0.35 }}
              className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
            >
              <StatCard icon={Library} label="Collection size" value={data.stats.collectionSize} detail="curated titles across print and digital" />
              <StatCard icon={Users} label="Active members" value={data.stats.activeMembers} detail="neighbors reading with us this month" />
              <StatCard icon={CalendarDays} label="Events this week" value={data.stats.eventsThisWeek} detail="storytimes, clubs, and workshops" />
              <StatCard icon={Clock3} label="Open today" value={data.stats.openToday} detail="with quiet study rooms until close" />
            </motion.section>

            <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="rounded-[32px] bg-white/90 p-5 shadow-glow md:p-6"
              >
                <SectionHeading
                  eyebrow="Browse the stacks"
                  title="Find your next favorite read"
                  description="Search by title, author, or theme, then narrow the shelves by genre."
                />

                <div className="mt-5 flex flex-col gap-4">
                  <label className="relative block">
                    <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-library-400" />
                    <input
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Search books, authors, and topics"
                      className="min-h-[52px] w-full rounded-2xl border border-library-100 bg-library-50/70 pl-12 pr-4 text-base text-library-900 outline-none transition placeholder:text-library-400 focus:border-library-300 focus:bg-white"
                    />
                  </label>

                  <div className="flex flex-wrap gap-3">
                    {genres.map((genre) => (
                      <button
                        key={genre}
                        type="button"
                        onClick={() => setSelectedGenre(genre)}
                        className={clsx(
                          'min-h-[44px] rounded-full px-4 py-2 text-base font-medium transition',
                          selectedGenre === genre
                            ? 'bg-library-700 text-white shadow-md'
                            : 'bg-library-100 text-library-700 hover:bg-library-200'
                        )}
                      >
                        {genre}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <AnimatePresence>
                    {filteredBooks.map((book, index) => (
                      <BookCard key={book.id} book={book} index={index} />
                    ))}
                  </AnimatePresence>
                </div>

                {filteredBooks.length === 0 && (
                  <div className="mt-6 rounded-3xl bg-library-50 p-6 text-center">
                    <BookOpen className="mx-auto h-10 w-10 text-library-400" />
                    <h3 className="mt-3 text-xl font-semibold text-library-900">No books match that search yet.</h3>
                    <p className="mt-2 text-base text-library-700">Try another genre or search term to uncover more recommendations.</p>
                  </div>
                )}
              </motion.div>

              <div className="flex flex-col gap-6">
                <motion.section
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="rounded-[32px] bg-library-900 p-6 text-white shadow-glow"
                >
                  <SectionHeading
                    eyebrow="Today at the library"
                    title={data.featuredSpace.name}
                    description={data.featuredSpace.description}
                    light
                  />
                  <div className="mt-5 space-y-4 text-base text-library-100">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 h-5 w-5 text-goldleaf-300" />
                      <span>{data.featuredSpace.location}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Sparkles className="mt-1 h-5 w-5 text-goldleaf-300" />
                      <span>{data.featuredSpace.highlight}</span>
                    </div>
                  </div>
                </motion.section>

                <motion.section
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="rounded-[32px] bg-white/90 p-5 shadow-glow md:p-6"
                >
                  <SectionHeading
                    eyebrow="Upcoming events"
                    title="Gather, learn, and explore"
                    description={`Updated ${format(new Date(data.generatedAt), 'MMMM d, yyyy')}`}
                  />
                  <div className="mt-5 space-y-4">
                    {data.events.map((event, index) => (
                      <EventCard key={event.id} event={event} index={index} />
                    ))}
                  </div>
                </motion.section>

                <motion.section
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="rounded-[32px] bg-cedar-700 p-6 text-white shadow-glow"
                >
                  <div className="flex items-center gap-3">
                    <Star className="h-6 w-6 text-goldleaf-300" />
                    <h3 className="text-xl font-semibold tracking-tight">Reader spotlight</h3>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-cedar-100">“{data.readerSpotlight.quote}”</p>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-goldleaf-100">{data.readerSpotlight.name}</p>
                </motion.section>
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
}
