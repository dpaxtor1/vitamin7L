import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

function Home() {
  const pathname = usePathname();

  return (
    <div
      className={clsx('min-h-screen flex flex-col items-center justify-center', {
        'dark-mode': pathname === '/dark-mode',
        'light-mode': pathname === '/light-mode',
      })}
    >
      <h1 className="text-3xl font-bold mb-4">Choose a Mode</h1>
      <div className="space-x-4">
        <Link href="/dark-mode">
          <a className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
            Dark Mode
          </a>
        </Link>
        <Link href="/light-mode">
          <a className="px-4 py-2 bg-white text-black border rounded hover:bg-gray-200">
            Light Mode
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Home;
