import { oswald } from "@/app/fonts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const marketingServices = [
  {
    title: "Social Media",
    description:
      " Immerge your business in the bustling landscape of Social Media with our bespoke strategies. Expertise in channeling the right messages to the right people, on the right platform, at the right time enables us to transform your social media presence and drive unparalleled engagement.",
  },
  {
    title: "Account/Page Management",
    description:
      "We extend beyond the ordinary account management to provide dynamic Page Management. Regular auditing and optimizing your web pages ensure you never miss an opportunity to engage your audience, build a stronger brand loyalty, and maximize conversions.",
  },
  {
    title: "Sales Driven Campaigns",
    description:
      "Our expertise in creating Sales Driven Campaigns escalates your business to new heights in sales figures. We utilize top-of-the-line marketing tools and data-driven strategies to drive customer-centric campaigns, prompting sales acceleration and revenue growth.",
  },
  {
    title: "Advertising",
    description:
      "Invest in our advertising solutions that communicate directly to your target audience and inspire them to act. We offer innovative, cross-platform digital advertising solutions that spotlight your brand and enable you to outshine your competitors in your market niche.",
  },
  {
    title: "Influencer Marketing",
    description:
      "Leveraging Influencer Marketing, one of the strongest strategies in today’s digital sphere, we help you build substantial brand awareness and drive conversions. By pairing your brand with popular influencers that share your values, demographic reach, we not only amplify your brand visibility but prompt audiences towards making purchasing decisions.",
  },

];

const MarketingServices = () => {
  return (
    <section>
      <div className="container py-10">
        <h2
          className={cn(
            "text-2xl md:text-3xl font-bold mb-4 text-center uppercase text-blue-600",
            oswald.className
          )}
        >
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketingServices.map((service, index) => {
            return (
              <Card
                key={index}
                className="flex bg-blue-600 text-slate-200 flex-col gap-y-3"
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
export default MarketingServices;
