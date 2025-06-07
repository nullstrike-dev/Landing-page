import { getThreads, addThread } from '../../../data/forum';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const threads = getThreads();
    res.status(200).json(threads);
  } else if (req.method === 'POST') {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });

    const newThread = addThread(title);
    res.status(201).json(newThread);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}