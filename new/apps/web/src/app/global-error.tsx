'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Bir hata oluÅŸtu!
            </h2>
            <p className="text-slate-600 mb-4">
              Beklenmeyen bir hata meydana geldi. LÃ¼tfen sayfayÄ± yenileyin.
            </p>
            <button
              onClick={reset}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Tekrar dene
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
