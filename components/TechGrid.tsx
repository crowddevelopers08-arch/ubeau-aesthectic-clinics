import Image from 'next/image'

const logos = [
  { src: '/one.png',   alt: 'Celluma Light Therapy' },
  { src: '/two.png',   alt: 'PhiBrows' },
  { src: '/three.png', alt: 'Dermapen 4' },
  { src: '/four.png',  alt: 'Hydrinity' },
  { src: '/five.png',  alt: 'DiolazXL' },
]

function LogoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex items-center justify-center px-10 py-7 mx-2 bg-white border border-brand-green/20 w-52 shrink-0">
      <div className="relative w-36 h-16">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain mix-blend-multiply"
          sizes="144px"
        />
      </div>
    </div>
  )
}

export default function TechGrid() {
  return (
    <div className="bg-[#faf7f2] py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="text-center px-4 sm:px-8 lg:px-20">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="w-6 sm:w-[26px] h-px bg-brand-pink shrink-0" />
          <span className="font-outfit text-[0.65rem] tracking-[0.28em] uppercase text-brand-pink font-medium">
            Treatment Technologies &amp; Brands
          </span>
          <span className="w-6 sm:w-[26px] h-px bg-brand-pink shrink-0" />
        </div>
        <h2 className="font-outfit text-[clamp(1.8rem,3.5vw,3.6rem)] font-light leading-[1.15] text-brand-black mb-10 sm:mb-14">
          Powered by Globally Recognised Technologies
        </h2>
      </div>

      {/* Row 1 — scrolls right to left */}
      <div
        className="w-full overflow-hidden mb-4"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}
      >
        <div className="flex flex-nowrap w-max animate-marquee-left">
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <LogoCard key={i} {...logo} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls left to right */}
      <div
        className="w-full overflow-hidden"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}
      >
        <div className="flex flex-nowrap w-max animate-marquee-right">
          {[...[...logos].reverse(), ...[...logos].reverse(), ...[...logos].reverse(), ...[...logos].reverse()].map((logo, i) => (
            <LogoCard key={i} {...logo} />
          ))}
        </div>
      </div>
    </div>
  )
}
