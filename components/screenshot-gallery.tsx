import Image from 'next/image'

const shots = [
  { src: '/screenshot-home.png', alt: 'Hagah daily scripture home screen' },
  { src: '/screenshot-meditate.png', alt: 'Hagah meditation timer screen' },
  { src: '/screenshot-declarations.png', alt: 'Hagah faith declarations list screen' },
]

export function ScreenshotGallery() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
      {shots.map((shot, i) => (
        <div
          key={shot.src}
          className={
            'overflow-hidden rounded-2xl border border-border bg-card shadow-lg ' +
            (i === 2 ? 'col-span-2 sm:col-span-1' : '')
          }
        >
          <Image
            src={shot.src || '/placeholder.svg'}
            alt={shot.alt}
            width={400}
            height={800}
            className="h-auto w-full"
          />
        </div>
      ))}
    </div>
  )
}
