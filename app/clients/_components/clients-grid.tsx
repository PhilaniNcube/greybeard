import Image from "next/image";
import ClientLogos from "./client-logos";


const clients = [
	{
		name: "Philip Morris International - IQOS",
		event: "IQOS Boutique Activations",
		description:
			"We have worked with PHILIP MORRIS INTERNATIONAL (PMI) to deliver creative instore activations for their IQOS Friends' Community and Trade Partners geared at delivering a tailored experience filled with music, food, and drinks! This all took place while guests got acquainted with the IQOS brand, products and the science behind the innovation of heated tobacco.",
	},
	{
		name: "VIB Mobile",
		description:
			"ViB mobile provides a platform for our talent to submit their music to make use of the Caller RingBack Tone (CRBT) revenue in Sub Saharan Africa. The likes of DJ Sliqe have taken up this opportunity and has his catalogue distributed for CRBT tunes by ViB Mobile.",
	},
	{
		name: "PEERMONT HOTELS, CASINOS & RESORTS",
		description:
			"We are a trusted supplier for talent, entertainment, and event support to the Peermont’s group of resorts and restaurants in South Africa and Botswana. We book some of the most trendiest celebrities as well as local talent to perform at the various outlets within Peermont’s Resorts on a weekly, monthly and annual basis. Reign at Emperor’s Palace is one of the flagship outlets where we set an ambiance for their patrons while dining and socializing with their loved ones.",
	},
	{
		name: "KWA AFRIKA",
		description:
			"Kwa Afrika, as the custodians of the Sengqu Municipality events calendar, have mandated Greybeard Productions to project manage all events the municipality undertakes during the tenure of their contract. An example of such events is the annual Sengqu Municipality Mayors Youth Day Cup.",
	},
];

const ClientsGrid = () => {
  return <section className="relative" id="clients">
    <Image
        src="/images/hands.webp"
        width={1920}
        height={1080}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-screen lg:aspect-video"
      />
      <div className="relative flex flex-col items-center min-h-screen py-12 backdrop-blur-lg bg-slate-400/30">
        <div className="container grid h-full grid-cols-1 gap-8 lg:grid-cols-2 lg:py-36 lg:gap-16">
          {clients.map((client, index) => (
            <div key={client.name} className="w-full pr-8 text-white md:pr-12 lg:pr-24">
              <h4 className="text-lg font-bold">{client.name}</h4>
              {client?.event && <i className="text-md">{client.event}</i>}
              <p className="my-2 text-md">{client.description}</p>
            </div>
          ))}
        </div>
       <div className="absolute bottom-0 left-0 right-0">
        <ClientLogos />
        </div>
      </div>
  </section>;
};
export default ClientsGrid;
