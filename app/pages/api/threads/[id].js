import { getThread, addComment } from '../../../data/forum';

export default function handler(req, res) {
  const threadId = parseInt(req.query.id);

  if (req.method === 'GET') {
    const thread = getThread(threadId);
    if (!thread) return res.status(404).json({ error: 'Thread not found' });
    res.status(200).json(thread);
  } else if (req.method === 'POST') {
    const { content } = req.body;
    if (!content) return res.status(400).json({ error: 'Content is required' });

    const comment = addComment(threadId, content);
    if (!comment) return res.status(404).json({ error: 'Thread not found' });

    res.status(201).json(comment);
  } else {
    res.status(405).end();
  }
}