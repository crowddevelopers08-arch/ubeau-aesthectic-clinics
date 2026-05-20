import Image from 'next/image'
import Link from 'next/link'
import FadeUp from './FadeUp'

const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=90&auto=format&fit=crop&crop=faces,top',
    alt: 'Skin clarity result',
  },
  {
    src: 'https://images.unsplash.com/photo-1506795660198-e253cf353c34?w=600&q=90&auto=format&fit=crop&crop=faces,top',
    alt: 'Skin glow transformation',
  },
  {
    src: 'https://images.unsplash.com/photo-1614859324669-927e9f9b2b4e?w=600&q=90&auto=format&fit=crop&crop=faces,top',
    alt: 'Acne reduction result',
  },
  {
    src: 'https://images.unsplash.com/photo-1559181567-c3190bfbf00e?w=600&q=90&auto=format&fit=crop&crop=faces,top',
    alt: 'Skin radiance result',
  },
]

export default function Results() {
  return (
    <section className="bg-white px-20 py-32 max-lg:px-6 max-lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 items-center max-lg:gap-14">
        {/* Text */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-[26px] h-px bg-brand-pink shrink-0" />
            <span className="font-outfit text-[0.65rem] tracking-[0.34em] uppercase text-brand-pink font-medium">
              Results &amp; Transformations
            </span>
          </div>
          <h2 className="font-cormorant text-[clamp(2.2rem,3.5vw,3.6rem)] font-light leading-[1.15] text-brand-black mb-6">
            Real Skin{' '}
            <em className="italic text-brand-pink">Transformations</em>
          </h2>
          <p className="font-outfit text-[0.95rem] font-light leading-[1.95] text-brand-black/60">
            Visible improvements in skin clarity, acne reduction, texture
            refinement, hydration, and radiance through customised UBÊAU
            protocols.
          </p>
          <p className="font-outfit text-[0.75rem] font-light italic text-brand-black/38 mt-7 border-l-2 border-brand-pink pl-4 leading-[1.75]">
            Before &amp; after photos, patient stories and testimonials reflect
            real client experiences with UBÊAU protocols. Individual results may
            vary based on skin condition and protocol.
          </p>
          <Link
            href="tel:7340020073"
            className="inline-block mt-10 bg-brand-pink text-white font-outfit text-[0.75rem] tracking-[0.14em] uppercase px-[2.6rem] py-4 border-2 border-brand-pink no-underline font-medium transition-all duration-300 hover:bg-brand-pink-dark hover:border-brand-pink-dark"
          >
            Begin Your Transformation
          </Link>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 gap-[6px]">
          {gallery.map((img, i) => (
            <FadeUp key={i} delay={i * 120}>
              <div className="group overflow-hidden h-[220px] relative bg-gray-100">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-[center_top] brightness-[0.92] transition-all duration-500 ease-in-out group-hover:scale-[1.07] group-hover:brightness-100"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
