import Image from 'next/image'
import FadeUp from './FadeUp'

const doctors = [
  {
    name: 'Dr. Sampada',
    title: 'Founder & Medical Director',
    qualification: 'MBBS',
    bio: 'Practicing Aesthetician with over 10 years of experience.',
    image: 'https://static.wixstatic.com/media/67c604_3d38d616e1de405087dc36bee50ebcaf~mv2.jpeg/v1/fill/w_433,h_567,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1657096053591.jpeg',
  },
  {
    name: 'Dr. Khushnuma',
    title: 'Aesthetician',
    qualification: '',
    bio: 'Practicing Aesthetician with over 10 years of experience.',
    image: 'https://static.wixstatic.com/media/3b7dd9_3d319584dd4f49c9b4741a6465fcaaf4~mv2.jpg/v1/fill/w_433,h_567,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-12-02%20at%201_23_edited.jpg',
  },
  {
    name: 'Dr. Rosalin',
    title: 'Aesthetician',
    qualification: '',
    bio: 'Practicing Aesthetician with over 05 years of experience.',
    image: 'https://static.wixstatic.com/media/3b7dd9_62540d8af27b405886efceab283c132f~mv2.jpg/v1/fill/w_433,h_567,fp_0.50_0.25,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_7041_JPG.jpg',
  },
]

export default function WhyChoose() {
  return (
    <section id="doctors" className="bg-brand-off-white px-4 sm:px-8 lg:px-20 py-10 sm:py-14 lg:py-20">

      {/* ── Header ── */}
      <div className="flex items-center gap-3 mb-4">
        <span className="w-6 sm:w-6.5 h-px bg-brand-pink shrink-0" />
        <span className="font-outfit text-[0.65rem] tracking-[0.28em] uppercase text-brand-pink font-medium">
          Our Medical Team
        </span>
      </div>
      <h2 className="font-outfit text-[clamp(1.8rem,3.5vw,3.6rem)] font-normal leading-[1.15] text-brand-black mb-10 sm:mb-14">
        Expert Care by <em className="italic text-brand-pink">Qualified Doctors</em>
      </h2>

      {/* ── Doctor Cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
        {doctors.map((doc, i) => (
          <FadeUp key={i} delay={i * 150}>
            <div className="group bg-white overflow-hidden flex flex-col border border-brand-green/30 hover:border-brand-pink/30 transition-colors duration-300 h-full">

              {/* Photo */}
              <div className="relative w-full h-80 sm:h-72 lg:h-96 overflow-hidden shrink-0">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  className="object-cover object-[center_top] transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-pink/15 to-transparent" />
              </div>

              {/* Info */}
              <div className="flex flex-col p-6 flex-1">
                <span className="w-8 h-px bg-brand-pink block mb-4" />

                <h3 className="font-outfit text-[1.1rem] sm:text-[1.2rem] font-semibold text-brand-black leading-[1.2] mb-1">
                  {doc.name}
                </h3>
                <p className="font-outfit text-[0.62rem] tracking-[0.18em] uppercase text-brand-pink font-medium mb-1">
                  {doc.title}
                </p>
                {doc.qualification && (
                  <p className="font-outfit text-[0.72rem] text-brand-black font-normal mb-3">
                    {doc.qualification}
                  </p>
                )}
                <p className="font-outfit text-[0.8rem] font-normal leading-[1.85] text-brand-black mt-2">
                  {doc.bio}
                </p>
              </div>

            </div>
          </FadeUp>
        ))}
      </div>

    </section>
  )
}
