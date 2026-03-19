import { motion } from 'framer-motion';
import { Calendar, Clock4, Users2 } from 'lucide-react';

export default function EventCard({ event, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      className="rounded-[28px] bg-library-50 p-5"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cedar-600">{event.category}</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-library-900">{event.title}</h3>
        </div>
        <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-library-700">{event.ageGroup}</span>
      </div>
      <p className="mt-3 text-base leading-relaxed text-library-700">{event.description}</p>
      <div className="mt-4 grid gap-3 text-sm text-library-700 sm:grid-cols-3">
        <div className="flex items-center gap-2 rounded-2xl bg-white px-3 py-2">
          <Calendar className="h-4 w-4 text-library-400" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center gap-2 rounded-2xl bg-white px-3 py-2">
          <Clock4 className="h-4 w-4 text-library-400" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center gap-2 rounded-2xl bg-white px-3 py-2">
          <Users2 className="h-4 w-4 text-library-400" />
          <span>{event.capacity} seats</span>
        </div>
      </div>
    </motion.article>
  );
}
