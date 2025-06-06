import PayloadGenerator from '@/components/PayloadGenerator';

export default function PayloadPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-[#a3f7bf] py-12 px-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-[#22c55e] mb-6">Payload Generator</h1>
      <p className="text-[#bbf7d0] max-w-xl text-center mb-8">
        Generate reverse shell commands for Linux or Windows. Enter your IP and port, and we’ll give you a one-liner to paste on the target machine.
      </p>

      <PayloadGenerator />
    </main>
  );
}
