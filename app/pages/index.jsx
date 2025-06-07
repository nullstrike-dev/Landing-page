import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ForumHome() {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/threads')
      .then(res => res.json())
      .then(data => {
        setThreads(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading threads...</div>;

  return (
    <div>
      <h1>Forum Threads</h1>
      <Link href="/new-thread"><button>Create New Thread</button></Link>
      <ul>
        {threads.map(thread => (
          <li key={thread.id}>
            <Link href={`/thread/${thread.id}`}>{thread.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}