// index.tsx
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Lord of the Rings App</h1>
      <Link href="/characters">View Characters</Link>
      <Link href="/movies">View Movies</Link>
      <Link href="/quotes">View Quotes</Link>
    </div>
  );
};

export default Home;
