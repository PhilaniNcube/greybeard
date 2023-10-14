import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image'

const artists = [
  {
    name: "DJ Sliqe",
    image: "/images/dj-sliqe.jpg",
    description:
      "Award winning DJ and producer, Sliqe has proved to be oneof the most important personnel of the current crop in theHip Hop genre. Since his breakthrough single Do Like I Dowhich earned him a South African Music Award (SAMA),Sliqe has a track record that has made him one of the mostsought-after DJs in the country, spear-heading the Hip Hopgenre with a fresh breath that appeals to all. Sliqe hasdiffused himself across the South African entertainmentscene.",
  },
  {
    name: "Ntosh Madlingozi",
    image: "/images/ntosh.webp",
    description:
      "Ntosh Madlingozi is acomedian and actor with an 18-year career across stand-up comedy, television,radio, cinema and corporate MC work. From a memorable openmic stand up debut at what was 88 Club in Norwood, in 2004, he has carved out a sustainable career based on versatility and an obsessive interest in the human condition.",
  },
  {
    name: "Kele",
    image: "/images/kele.jpg",
    description:
      "A qualified chef by profession, a DJ out of passion,and an influencer by people’s choice. Kele is not just skilled in the kitchen but on thedecks, cooking and serving flavour not only ondinner tables but the dance floor as well. This 24-year-old bubbly and full of life personality creditsher great ear and love for music to her parents.Making her a versatile DJ.",
  },
  {
    name: "Just 6",
    image: "/images/just_6.jpg",
    description:
      "Just 6 is a six-member vocal band from Johannesburg, SouthAfrica established in 2011. Over the years the band has beengreatly appreciated for their clean crisp vocals, distinctharmonies, and unforgettable melodies. By fusing Contemporary Jazz, Pop, R&B, Gospel and Soulmusic they have always been able to leave a lastingimpression to all their audiences both locally andinternationally; with a fresh style they call AFRO-VOCAL PLAY.",
  },
  {
    name: "Uncle Bae",
    image: "/images/uncle_bae.jpg",
    description:
      "Uncle Bae is a music producer and DJ from Pretoria. His production is mainly focused on house music and its subgenres, with a constantly evolving sound. Uncle Bae loves to experiment with and cross over into various musical genres. With support from Amapiano greats such as Musa Keys, Team Mosha, Cyfred, Richard Kay, Mellow Soul, Terenzo, and more; he has released music that is fast making him a household name in the Amapiano circles. All is his music is available on streaming platforms such as Apple Music, Spotify, YouTube Music and Deezer",
  },
  {
    name: "Jack Devero",
    image: "/images/jack.jpg",
    description:
      "Being in love with music his whole life, Jack Devero joined the entertainment scene back in 2004 when he became part of the Vow FM team at Wits University. He later founded Pink Diamond Productions and Lexhosanostraand started Deejaying at these events. He has since Deejayed and made scores of people across the country dance. Whether it is Hip Hop, R&B or Old Skool Kwaito and House, he will have yourguests dancing. It is a passion of his and something he is good at. Let him curate a feel-good environment at your next event.",
  },
  {
    name: "Si Jones",
    image: "/images/si_jones.jpg",
    description:
      "Born in Mthatha Eastern Cape, South Africa; Si Jones’s career began in 2012 at Rhodes University. Her undeniable passion for entertainment along with her eclectic and vibrant personality led her into joining Rhodes Music Radio (RMR), where she learnt the skills of being a DJ and an On-Air radio presenter. Si Jones's music has been featured and playlisted on various commercial radio stations such as Metro FM, Ligwalagwala FM, 947, Radio 2000, Ukhozi FM, Tru FM, YFM, Cliff Central, Massive Metro to name a few. She has MC'd and DJ'd across South Africa,and sharing stages with the likes of Black Motion, Heavy K, Oskido, Shimza, DJ Zinhle and many more other “heavyweights” in theindustry.",
  },
  {
    name: "Benjamin The Faff",
    image: "/images/benjamin.jpg",
    description:
      "Part of an elite customisation movementin the city of Joburg, Benjahmin The Faff produces the freshest and hottest designs. From shoes to denim, anythinghe puts his brush to conveys uniqueness and flair. His artwork is one of, making them rare pieces of art that aren’t mass produced but rather curated for an individual’s unique style and personality. Benjahmin The Faff uses his art to illustrate Africa through his eyes. He believes that a career as an artist is possible in Africa and strives to showcase this through his work and dedication to his craft. Born in Kenya and raised in South Africa, his exposure to culture on both ends has allowed him to hone in on his skill. Hi swork spans from Converse, Jameson, J&B, Shesha, Nike and Nandos to name a few.",
  },
];

const Artists = () => {
  return <section className="bg-black text-white">
    <div className="container py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center uppercase">
        Artists
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artists.map((artist, index) => {
          return <Card key={index} className="flex bg-transparent border-none text-slate-200 flex-col gap-y-3">
              <CardHeader>
                  <Image src={artist.image} alt={artist.name} width={1456} height={816} className="w-full object-cover aspect-square" />
                <CardTitle className="text-md font-bold uppercase">
                  {artist.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                <p className="text-sm text-white">{artist.description}</p>
                </CardDescription>
              </CardContent>
              <CardFooter>
              </CardFooter>
            </Card>;
        })}
      </div>
    </div>
  </section>;
};
export default Artists;
