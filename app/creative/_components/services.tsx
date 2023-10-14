import { oswald } from "@/app/fonts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const creativeServices = [
  {
    title: "App Development Services",
    description:
      "Harness the power of digital technology with our bespoke app development service. Our team of skilled app developers utilize advanced methodologies to create custom, user-friendly apps that can propel your business forward. ",
  },
  {
    title: "Website Development",
    description:
      "Whether you’re a startup or an established business, our brilliant website developers are ready to create a well-designed, SEO friendly digital platform which beautifully profiles your brand and resonates with your target audience.",
  },
  {
    title: "Graphic Design",
    description:
      "Our graphic design team consists of creative professionals who can transform ideas into innovative, engaging, and compelling visuals. From logo to layouts, we promise designs that effectively communicate your brand’s story.",
  },
  {
    title: "Brand/Corporate Identity Development",
    description:
      "Your brand’s identity is intrinsically tied to the success of your business. We can help to meticulously develop and position your corporate identity in a way that elicits trust and communicates value to your customers.",
  },
  {
    title: "Photography/Videography",
    description:
      "Enhance your brand’s visual appeal with our high-quality photography and videography services. Our professionals capture crisp, vivid images and videos which can accentuate your marketing strategies and enrich your digital presence.",
  },
  {
    title: "Copywriting",
    description:
      "Words have power and we know how to wield it. Our seasoned copywriters create compelling, SEO-optimised copy that illuminates your services, amplifies your message, and motivates audiences to engage with your brand.",
  },
  {
    title: "Proposal Development & Quality Assurance",
    description:
      "Need help in structuring persuasive business proposals? Our experts are here to assist with proposal development, fine-tuning your pitch, and ensuring top-shelf proposal quality that can promptly secure your potential deals.",
  },
  {
    title: "Art Customization",
    description:
      "Stand out with our unique art customization services. We merge creativity with brand objectives to generate one-of-a-kind art elements that not only aesthetically impress but also create a deeper connection with your audience.",
  },
  {
    title: "Corporate Gifting",
    description:
      "Elevate your corporate gifting strategy with our wide range of customizable gifts. We fuse your brand’s message with appealing design to create exclusive corporate gifts that build strong and lasting connections.",
  },
];

const CreativeCornerServices = () => {
  return (
    <section>
      <div className="container py-10">
        <h2 className={cn("text-2xl md:text-3xl font-bold mb-4 text-center uppercase", oswald.className)}>Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creativeServices.map((service, index) => {
            return (
              <Card key={index} className="flex bg-transparent text-slate-200 flex-col gap-y-3">
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
export default CreativeCornerServices;
