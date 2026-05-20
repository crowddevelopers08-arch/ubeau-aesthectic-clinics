import Image from 'next/image'

const techs = [
  {
    name: 'Hydrafacial',
    img: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=120&q=80&auto=format&fit=crop',
  },
  {
    name: 'Celluma',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=120&q=80&auto=format&fit=crop',
  },
  {
    name: 'Hollywood Spectra',
    img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=120&q=80&auto=format&fit=crop',
  },
  {
    name: 'InMode',
    img: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=120&q=80&auto=format&fit=crop',
  },
  {
    name: 'Dermapen 4',
    img: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=120&q=80&auto=format&fit=crop',
  },
  {
    name: 'ZO Skin Health',
    img: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=120&q=80&auto=format&fit=crop',
  },
  {
    name: 'Epicutis',
    img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=120&q=80&auto=format&fit=crop',
  },
  {
    name: 'Margaret Dabbs London',
    img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=120&q=80&auto=format&fit=crop',
  },
]

export default function TechGrid() {
  return (
    <div className="bg-[#f8faf7] px-20 py-24 max-lg:px-6 max-lg:py-16">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-[0.8rem]">
          <span className="w-[26px] h-px bg-brand-pink shrink-0" />
          <span className="font-outfit text-[0.65rem] tracking-[0.32em] uppercase text-brand-pink font-medium">
            Treatment Technologies &amp; Brands
          </span>
          <span className="w-[26px] h-px bg-brand-pink shrink-0" />
        </div>
        <h2 className="font-cormorant text-[2.2rem] font-light text-brand-black mb-14">
          Powered by Globally Recognised Technologies
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 border border-brand-green/38">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center justify-center gap-3 p-10 border border-brand-green/22 transition-all duration-350 hover:bg-brand-pink/4 hover:border-brand-pink/20 cursor-default max-lg:p-6"
            >
              <div className="relative w-[60px] h-[60px]">
                <Image
                  src={tech.img}
                  alt={tech.name}
                  fill
                  className="object-contain grayscale opacity-50 transition-all duration-350 group-hover:grayscale-0 group-hover:opacity-100"
                  sizes="60px"
                />
              </div>
              <span className="font-cormorant text-[1.05rem] tracking-[0.06em] text-brand-black/42 transition-colors duration-350 group-hover:text-brand-pink">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
