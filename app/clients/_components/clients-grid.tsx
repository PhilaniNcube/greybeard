import Image from "next/image";


const clients = [
  {
    name: "Philip Morris International - IQOS",
    event: "IQOS Boutique Activations",
    description:
      "We have worked with PHILIP MORRIS INTERNATIONAL (PMI) to deliver creative instore activations for their Iqos Friends&apos; Community and Trade Partners geared at delivering a tailored experience filled with music, food, and drinks! This all took place while guests got acquainted with the Iqos brand, products and the science behind the innovation of heated tobacco",
  },
  {
    name: "VIB Mobile",
    description:
      "ViB mobile provides a platform for our talent to submit their music to make use of the caller RingBack Tone (RBT) revenue in Sub Saharan Africa. The likes of DJ Sliqe have taken up this opportunity and has his catalogue distributed for RBT tunes by ViB Mobile.",
  },
  {
    name: "PEERMONT’S EMPERORS PALACE",
    description:
      "We provide weekly talent and entertainment to one of Emperor’s Palace restaurants called Reign. Si Jones, a versatile AfroHouse DJ has a weekend residency that sets an ambience for their patrons on Saturday and Sunday",
  },
  {
    name: "KWA AFRIKA",
    description:
      "Kwa Afrika, as the custodians of the Sengqu Municipality events calendar, have mandated Greybeard Productions to project manage all events the municipality undertakes during the tenure oftheir contract. An example of such events is the annual Sengqu Municipality Mayors Youth Day Cup",
  },
];

const ClientsGrid = () => {
  return <section className="relative">
    <Image
        src="/images/hands.webp"
        width={1920}
        height={1080}
        alt="Background"
        className="absolute inset-0 h-screen lg:aspect-video w-full object-cover"
      />
      <div className="min-h-screen backdrop-blur-lg relative flex items-center bg-slate-400/30">
        <div className="h-full container grid grid-cols-1 lg:grid-cols-2 lg:py-36 gap-8 lg:gap-16">
          {clients.map((client, index) => (
            <div key={index} className="w-full text-white pr-8 md:pr-12 lg:pr-24">
              <h4 className="font-bold text-lg">{client.name}</h4>
              {client?.event && <i className="text-md">{client.event}</i>}
              <p className="text-md my-2">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
  </section>;
};
export default ClientsGrid;
