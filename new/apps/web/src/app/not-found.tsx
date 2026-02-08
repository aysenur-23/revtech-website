export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          404 - Sayfa bulunamadı
        </h2>
        <p className="text-slate-600 mb-4">
          Aradığınız sayfa mevcut değil.
        </p>
        <a
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Ana sayfaya dön
        </a>
      </div>
    </div>
  )
}
