const stats = [
  { num: '1st', label: "Odisha's 1st Luxury Skincare & Wellness Clinic" },
  { num: '3000+', label: 'Happy Transformations' },
  { num: '60+', label: 'Global Award-Winning Treatments' },
  { num: '98%', label: 'Client Satisfaction' },
]

export default function TrustStrip() {
  return (
    <div className="bg-brand-black grid grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <div
          key={i}
          className={[
            'text-center px-6 py-8',
            i === 0 ? 'border-r border-white/[0.07]' : '',
            i === 1 ? 'lg:border-r lg:border-white/[0.07]' : '',
            i === 2 ? 'border-r border-white/[0.07]' : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <div className="font-cormorant text-[2.2rem] font-normal text-brand-pink leading-none mb-[0.45rem]">
            {stat.num}
          </div>
          <div className="font-outfit text-[0.68rem] tracking-[0.12em] uppercase text-white/45 leading-[1.55] font-normal">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}
