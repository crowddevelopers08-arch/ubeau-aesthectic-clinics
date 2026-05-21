import Image from 'next/image'

const row1 = [
  { name: 'Hydrafacial',       img: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=120&q=80&auto=format&fit=crop' },
  { name: 'Celluma',           img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=120&q=80&auto=format&fit=crop' },
  { name: 'Hollywood Spectra', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=120&q=80&auto=format&fit=crop' },
  { name: 'InMode',            img: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=120&q=80&auto=format&fit=crop' },
]

const row2 = [
  { name: 'Dermapen 4',           img: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=120&q=80&auto=format&fit=crop' },
  { name: 'ZO Skin Health',       img: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=120&q=80&auto=format&fit=crop' },
  { name: 'Epicutis',             img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=120&q=80&auto=format&fit=crop' },
  { name: 'Margaret Dabbs London',img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=120&q=80&auto=format&fit=crop' },
]

function TechCard({ name, img }: { name: string; img: string }) {
  return (
    <div className="group flex flex-col items-center justify-center gap-3 px-10 py-8 mx-2 border border-brand-green/25 bg-white hover:border-brand-pink/40 hover:bg-brand-pink/5 transition-all duration-300 cursor-default w-50 shrink-0">
      <div className="relative w-14 h-14">
        <Image
          src={img}
          alt={name}
          fill
          className="object-contain transition-all duration-300"
          sizes="56px"
        />
      </div>
      <span className="font-outfit text-[0.82rem] tracking-[0.06em] text-brand-black group-hover:text-brand-pink transition-colors duration-300 whitespace-nowrap font-normal">
        {name}
      </span>
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
          {[...row1, ...row1, ...row1, ...row1].map((tech, i) => (
            <TechCard key={i} {...tech} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls left to right */}
      <div
        className="w-full overflow-hidden"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}
      >
        <div className="flex flex-nowrap w-max animate-marquee-right">
          {[...row2, ...row2, ...row2, ...row2].map((tech, i) => (
            <TechCard key={i} {...tech} />
          ))}
        </div>
      </div>
    </div>
  )
}
