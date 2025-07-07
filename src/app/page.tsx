import QuoteForm from "../components/ui/QuoteForm"

export default function Home() {
  return (
    <>
      <nav className="w-full bg-black text-white shadow mb-8">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center">
          <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-poppins)' }}>
            Quote Generator
          </span>
        </div>
      </nav>
      <main className="min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Motivational Quote Generator
        </h1>
        <QuoteForm />
      </main>
    </>
  )
}
