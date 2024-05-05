import ClientLogos from "./_components/client-logos";
import ClientsGrid from "./_components/clients-grid";
import ClientsHero from "./_components/clients-hero";

const page = () => {
  return <main>
    <ClientsHero />
    <ClientsGrid />
    <ClientLogos />
  </main>;
};
export default page;
