// index.tsx
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Lord of the Rings App</h1>
      <ul>
        <li><Link href="/characters">View Characters</Link></li>
        <li><Link href="/movies">View Movies</Link></li>
        <li><Link href="/quotes">View Quotes</Link></li>
      </ul>
    </div>
  );
};

export default Home;
