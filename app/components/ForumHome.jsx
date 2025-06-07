// components/ForumHome.jsx
import Link from 'next/link';

const mockThreads = [
  { id: 1, title: "Welcome to the forum!", premium: false },
  { id: 2, title: "Premium Content Thread", premium: true },
];

export default function ForumHome({ isPremiumUser }) {
  return (
    <div>
      <h1>Forum Threads</h1>
      <ul>
        {mockThreads.map(thread => {
          if (thread.premium && !isPremiumUser) {
            return (
              <li key={thread.id} style={{ color: 'gray' }}>
                {thread.title} (Premium - Subscribe to access)
              </li>
            );
          }
          return (
            <li key={thread.id}>
              <Link href={`/thread/${thread.id}`}>{thread.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}