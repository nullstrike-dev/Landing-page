// app/forum/page.tsx

export default function ForumPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-[#22c55e]">Community Forum</h1>
      <p className="text-[#a3f7bf]">Discuss topics, share tools, and connect with other members.</p>
      <ul className="list-disc pl-5">
        <li><a href="/forum/general" className="hover:text-[#34d399]">General Discussion</a></li>
        <li><a href="/forum/support" className="hover:text-[#34d399]">Support & Questions</a></li>
        <li><a href="/forum/tools" className="hover:text-[#34d399]">Tools & Scripts</a></li>
      </ul>
    </div>
  );
}
