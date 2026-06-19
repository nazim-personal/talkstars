'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
          <h2>Something went wrong!</h2>
          <pre style={{ color: 'red', marginTop: '1rem', whiteSpace: 'pre-wrap' }}>
            {error.message || 'An unexpected error occurred'}
          </pre>
          <button 
            onClick={() => reset()}
            style={{ marginTop: '1rem', padding: '0.5rem 1rem', cursor: 'pointer' }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
