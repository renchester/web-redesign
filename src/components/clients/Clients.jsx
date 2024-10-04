import { clients } from '../../data/clients';
import ClientLogo from './ClientLogo';

function Clients() {
  return (
    <section id="clients" aria-labelledby="clients-label" className="snap-y snap-mandatory pb-12 pt-[120px] md:pb-20">
      <h2
        id="clients-label"
        className="font-onest mx-auto mb-2 flex w-full justify-center gap-2 text-center text-5xl md:text-6xl"
      >
        <div className="font-light">Our</div> <div className="font-semibold first-letter:text-orange-500">Clients</div>
      </h2>

      <ul className="xl:w-xl mx-auto flex flex-wrap justify-center gap-4 gap-y-8 p-2 lg:w-4/5">
        {clients.map((client) => (
          <ClientLogo key={client.name} client={client} />
        ))}
      </ul>
    </section>
  );
}

export default Clients;
