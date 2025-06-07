import { useState } from 'react';
import { useRouter } from 'next/router';

export default function NewThread() {
  const [title, setTitle] = useState('');
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;

    const res = await fetch('/api/threads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });

    if (res.ok) {
      const newThread = await res.json();
      router.push(`/thread/${newThread.id}`);
    }
  }

  return (
    <div>
      <h1>Create New Thread</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Thread title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button type="submit">Create Thread</button>
      </form>
    </div>
  );
}