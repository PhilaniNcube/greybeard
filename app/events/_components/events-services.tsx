import { oswald } from "@/app/fonts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const eventsServices = [
  {
    title: "Promotional Activations",
    description:
      "Thriving in highly competitive markets demands ingenious promotional strategies. We provide a platform for recognizable and powerful promotional activations that drive consumer engagement, and consistently fuel your brand's growth.",
  },
  {
    title: "Brand/Product Launches",
    description:
      "Crafting a memorable first impression is imperative. Our dedicated team specializes in planning and orchestrating impactful brand and product launches to ensure your product is catapulting straight towards success from day one. ",
  },
  {
    title: "Live Shows",
    description:
      "Transform your live shows into extraordinary experiences with our exceptional service. From logistics to innovative concepts, we make sure that your event speaks the language of entertainment and leaves a dazzling impression.",
  },
  {
    title: "Concerts",
    description:
      "Your music deserves a grand symphony, and we offer nothing less. Our expert team takes care of concert arrangements right from set designing to technical setups, ensuring that every beat resonates emotionally with your audience.",
  },
  {
    title: "Intimate Tailored Experiences",
    description:
      "Every meeting is a story waiting to be told, and we are here to weave it into a beautiful narrative through our intimate tailored experiences. Whether you're thinking of a close gathering or a personalized celebration, we handle it all with the care and elegance it deserves.",
  },
  {
    title: "Nightlife Experiences",
    description:
      "Ignite the sparkle of the night with us. Our team of experts plans and executes vibrant nightlife experiences that keep your guests on their feet and your event in their hearts forever.",
  },
  {
    title: "Entertainment Concierge",
    description:
      "Need help with entertainment planning? Don't stress, we have an entertainment concierge at your service. We cater to your needs efficiently and ensure a seamless experience curated just for you.",
  },
  {
    title: "Tours",
    description:
      "Planning tours can be quite a task, so why not leave it to us? We meticulously plan and manage the logistics to ensure your tours unfold just as you visualized.",
  },

];

const EventsServices = () => {
  return (
    <section>
      <div className="container py-10">
        <h2
          className={cn(
            "text-2xl md:text-3xl font-bold mb-4 text-center uppercase",
            oswald.className
          )}
        >
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventsServices.map((service, index) => {
            return (
              <Card
                key={index}
                className="flex bg-transparent text-slate-200 flex-col gap-y-3"
              >
                <CardHeader>
                  <CardTitle
                    className={cn(
                      "text-md font-bold uppercase",
                      oswald.className
                    )}
                  >
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default EventsServices;
