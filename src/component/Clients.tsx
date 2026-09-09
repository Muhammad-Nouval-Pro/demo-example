import uob from '../assets/images/UOB-1.png'
import bnp from '../assets/images/BNP-1.png'
import anz from '../assets/images/anz.png'
import danamon from '../assets/images/Danamon.png'
import generali from '../assets/images/Generali_lr.png'
import ite from '../assets/images/ITE.png'
import link from '../assets/images/link.png'
import hourGlass from '../assets/images/THG.png'
import whirlpool from '../assets/images/Whirlpool.png'

const clients = [
  { name: 'UOB', logo: uob },
  { name: 'BNP Paribas', logo: bnp },
  { name: 'ANZ', logo: anz },
  { name: 'Danamon', logo: danamon },
  { name: 'Generali', logo: generali },
  { name: 'ITE', logo: ite },
  { name: 'U Link', logo: link },
  { name: 'The Hour Glass', logo: hourGlass },
  { name: 'Whirlpool', logo: whirlpool },
]

function Clients() {
  const doubleClients = [...clients, ...clients]

  return (
    <section id="clients" aria-labelledby="clients-title" className="reveal-on-scroll border-y border-[#102d4a]/5 bg-white py-8 sm:py-9 lg:py-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 min-[721px]:px-8">
        <h2 id="clients-title" className="text-center text-xs leading-relaxed font-semibold tracking-widest text-[#527089] uppercase sm:text-sm">Trusted by leading organizations</h2>
      </div>

      <div className="mt-7 flex overflow-hidden mask-linear-gradient">
        <ul className="animate-logo-scroll flex items-center gap-12 sm:gap-16 lg:gap-20 pr-12 sm:pr-16 lg:pr-20">
          {doubleClients.map((client, idx) => (
            <li key={`${client.name}-${idx}`} className="flex h-16 shrink-0 items-center justify-center">
              <img
                src={client.logo}
                alt={client.name}
                loading="lazy"
                className="max-h-12 sm:max-h-14 w-auto max-w-36 object-contain opacity-100 transition-transform duration-300 hover:scale-110"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Clients
