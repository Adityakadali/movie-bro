import { genres } from "./genres.json";

function App() {
  return (
    <main className="container mx-auto max-w-xl">
      <div className="flex flex-wrap gap-4 justify-between">
        {genres.map((genre) => (
          <div className="relative" key={genre.id}>
            <img className="w-40" src={genre.image} alt={genre.name} />
            <div className="absolute grid place-content-center inset-0 bg-slate-900/60">
              <p className="text-xl text-white font-bold font-mono text-center">
                {genre.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
