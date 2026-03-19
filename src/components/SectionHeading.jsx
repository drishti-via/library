import clsx from 'clsx';

export default function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div>
      <p className={clsx('text-sm font-semibold uppercase tracking-[0.3em]', light ? 'text-goldleaf-100' : 'text-library-500')}>
        {eyebrow}
      </p>
      <h2 className={clsx('mt-2 text-2xl font-bold tracking-tight md:text-3xl', light ? 'text-white' : 'text-library-900')}>
        {title}
      </h2>
      <p className={clsx('mt-2 text-base leading-relaxed', light ? 'text-library-100' : 'text-library-700')}>
        {description}
      </p>
    </div>
  );
}
