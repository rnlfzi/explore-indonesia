import Articles from "@/components/articles";
import Explore from "@/components/explore";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Map from "@/components/map";
import Navbar from "@/components/navbar";
import Video from "@/components/video";

export default function Home() {
  console.log("Hello World");
  return (
    <div className="bg-white">
      <Navbar />
      <div
        style={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/f828/967d/b4501dd915be6870fc3b72db6f9f382a?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JbbZ3c2jrBZjMyqeFqItV~3flURfIUld~fH5woVEg4uFUTARjh-ySDYxlr84m1iGHLSpWDSU-DuM~INQVddU2qtCSL0mIm9QXrh7U~Sw8406QZvSaZsvH4DcjNYDNyE20LOsL9RE7yBtppaFDTiYDJxODFSTTHWDblUHF0ZTZoo9-lsUXo73ZiAtNBfLT~osZmkt5XnUM-o8DiRegqv7F3mrsXgMKnIPI5qvg36Tc4dq4pEqogz-ASPXSQeRD6~QrItQ4nRSJt-0QMbb1BL5PBgB1WDyXnAypn96gHada4SCyHIZX~~bcMUnlFnsTiMYv0eEPEbANxpVMJlNbPp1cg__')",
        }}
        className="bg-cover bg-no-repeat h-full"
      >
        <div className="bg-gradient-to-bl from-black/40 to-black/40 min-h-[100vh] w-full h-full">
          <Hero />
        </div>
      </div>
      <Articles />
      <Explore />
      <Map />
      <Video />
      <Footer />
    </div>
  );
}
