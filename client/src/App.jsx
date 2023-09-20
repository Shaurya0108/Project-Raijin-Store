export default function App() {
  return (
    <html data-theme="black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-orange-700 sm:text-8xl">
          Project Raijin
        </h1>
        <div className="relative isolate pt-8">
          <h4 className="text-4xl font-bold tracking-tight text-white sm:text-3xl">
            A Rust based game engine.
          </h4>
        </div>
        <button
          className="absolute btn btn-ghost top-14 right-14 transform -rotate-90 text-white text-4xl tracking-tight"
          style={{ transformOrigin: "top right" }}
        >
          Store
        </button>
      </div>
    </html>
  )
}
