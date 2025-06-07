import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function ThreadPage() {
  const router = useRouter();
  const { id } = router.query;

  const [thread, setThread] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (!id) return;
    fetch(`/api/threads/${id}`)
      .then(res => res.json())
      .then(data => {
        setThread(data);
        setLoading(false);
      });
  }, [id]);

  async function handleAddComment(e) {
    e.preventDefault();
    if (!comment.trim()) return;

    const res = await fetch(`/api/threads/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: comment }),
    });

    if (res.ok) {
      const newComment = await res.json();
      setThread(prev => ({
        ...prev,
        comments: [...prev.comments, newComment],
      }));
      setComment('');
    }
  }

  if (loading) return <div>Loading thread...</div>;
  if (!thread) return <div>Thread not found</div>;

  return (
    <div>
      <h1>{thread.title}</h1>

      <h2>Comments</h2>
      <ul>
        {thread.comments.map(c => (
          <li key={c.id}>
            {c.content} <small>({new Date(c.createdAt).toLocaleString()})</small>
          </li>
        ))}
      </ul>

      <form onSubmit={handleAddComment}>
        <textarea
          placeholder="Write a comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}