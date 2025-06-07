// data/forum.js

let threads = [
  {
    id: 1,
    title: 'Welcome to the forum!',
    comments: [
      { id: 1, content: 'This is the first comment!', createdAt: new Date().toISOString() },
    ],
  },
];

let nextThreadId = 2;
let nextCommentId = 2;

export function getThreads() {
  return threads;
}

export function getThread(id) {
  return threads.find(t => t.id === id);
}

export function addThread(title) {
  const newThread = { id: nextThreadId++, title, comments: [] };
  threads.push(newThread);
  return newThread;
}

export function addComment(threadId, content) {
  const thread = getThread(threadId);
  if (!thread) return null;

  const newComment = { id: nextCommentId++, content, createdAt: new Date().toISOString() };
  thread.comments.push(newComment);
  return newComment;
}