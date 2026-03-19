import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const libraryData = {
  generatedAt: '2026-03-19T09:00:00.000Z',
  stats: {
    collectionSize: '48,000+',
    activeMembers: '6,240',
    eventsThisWeek: '14',
    openToday: '9 AM – 8 PM',
  },
  featuredSpace: {
    name: 'Sunroom Reading Loft',
    description: 'A light-filled upstairs retreat with oversized chairs, charging tables, and a rotating display of local authors.',
    location: 'Second floor, east wing overlooking the community garden',
    highlight: 'This week: a tactile exhibit of restored first editions and handmade bookmarks from local artists.',
  },
  readerSpotlight: {
    name: 'Maya, neighborhood member since 2018',
    quote: 'I come for one novel and leave with three new ideas every single time.',
  },
  books: [
    {
      id: 1,
      title: 'The Night Circus',
      author: 'Erin Morgenstern',
      genre: 'Fantasy',
      format: 'Print',
      pages: 512,
      shelf: 'FAN MOR',
      popularity: 96,
      description: 'A lush, atmospheric duel of illusionists set inside a magical circus that only opens after dark.',
    },
    {
      id: 2,
      title: 'Braiding Sweetgrass',
      author: 'Robin Wall Kimmerer',
      genre: 'Nature',
      format: 'Audiobook',
      pages: 408,
      shelf: 'NAT KIM',
      popularity: 98,
      description: 'Science, story, and Indigenous wisdom intertwine in a generous meditation on reciprocity with the natural world.',
    },
    {
      id: 3,
      title: 'Tomorrow, and Tomorrow, and Tomorrow',
      author: 'Gabrielle Zevin',
      genre: 'Fiction',
      format: 'eBook',
      pages: 416,
      shelf: 'FIC ZEV',
      popularity: 94,
      description: 'A sweeping portrait of friendship, creativity, and ambition through the lives of two game designers.',
    },
    {
      id: 4,
      title: 'The Creative Act',
      author: 'Rick Rubin',
      genre: 'Creativity',
      format: 'Print',
      pages: 432,
      shelf: 'CRE RUB',
      popularity: 91,
      description: 'A reflective guide to making meaningful work, filled with prompts for artists, thinkers, and curious beginners.',
    },
    {
      id: 5,
      title: 'Remarkably Bright Creatures',
      author: 'Shelby Van Pelt',
      genre: 'Fiction',
      format: 'Print',
      pages: 368,
      shelf: 'FIC VAN',
      popularity: 93,
      description: 'A tender, witty story of grief, friendship, and an unusually perceptive octopus in a Pacific Northwest aquarium.',
    },
    {
      id: 6,
      title: 'Atomic Habits',
      author: 'James Clear',
      genre: 'Self Growth',
      format: 'Audiobook',
      pages: 320,
      shelf: 'SEL CLE',
      popularity: 95,
      description: 'Practical strategies for building better routines through small, repeatable changes that compound over time.',
    },
  ],
  events: [
    {
      id: 1,
      title: 'Pajama Storytime Under the Lanterns',
      category: 'Families',
      ageGroup: 'Ages 3–7',
      date: 'March 20',
      time: '6:30 PM',
      capacity: 24,
      description: 'Bring your coziest blanket for songs, picture books, and a gentle wind-down in the children’s room.',
    },
    {
      id: 2,
      title: 'Quiet Writing Club',
      category: 'Adults',
      ageGroup: '16+',
      date: 'March 21',
      time: '10:00 AM',
      capacity: 18,
      description: 'A focused two-hour session with prompts, tea, and optional sharing for poets, journalers, and novelists.',
    },
    {
      id: 3,
      title: 'Intro to Family History Research',
      category: 'Workshop',
      ageGroup: 'All ages',
      date: 'March 22',
      time: '1:00 PM',
      capacity: 30,
      description: 'Learn how to use census archives, oral histories, and digital tools to begin tracing your family story.',
    },
  ],
};

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/library', (req, res) => {
  res.json(libraryData);
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(process.env.PORT || 3001, () => {
  console.log('Library server listening');
});
