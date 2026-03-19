import { motion } from 'framer-motion';
import { BookOpenText, Heart, UserRound } from 'lucide-react';

export default function BookCard({ book, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, delay: index * 0.04 }}
      className="rounded-[28px] bg-library-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-library-500">{book.genre}</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-library-900">{book.title}</h3>
        </div>
        <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-cedar-700">{book.format}</span>
      </div>

      <div className="mt-4 space-y-3 text-base text-library-700">
        <div className="flex items-center gap-2">
          <UserRound className="h-4 w-4 text-library-400" />
          <span>{book.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <BookOpenText className="h-4 w-4 text-library-400" />
          <span>{book.pages} pages</span>
        </div>
      </div>

      <p className="mt-4 text-base leading-relaxed text-library-700">{book.description}</p>

      <div className="mt-5 flex items-center justify-between rounded-2xl bg-white px-4 py-3">
        <div>
          <p className="text-sm text-library-500">Shelf location</p>
          <p className="text-base font-semibold text-library-900">{book.shelf}</p>
        </div>
        <div className="flex items-center gap-2 text-cedar-700">
          <Heart className="h-4 w-4 fill-current" />
          <span className="text-sm font-semibold">{book.popularity}% loved it</span>
        </div>
      </div>
    </motion.article>
  );
}
