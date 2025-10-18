import { Button } from "@/components/ui/button";
import heroImage from "@/assets/therapy-room.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="חדר טיפול חם ומזמין"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            טיפול רגשי<br />
            ילדים, נוער ומבוגרים
          </h1>
          <div className="text-xl mb-12 text-foreground/70 max-w-2xl mx-auto italic">
            <p className="mb-2">
              ״לראות עולם בגרגר של חול ורקיע בפרח השדה, להחזיק את האינסוף בכף יד,<br />
              ונצח בשעה יחידה״
            </p>
            <p className="text-base">ויליאם בלייק</p>
          </div>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="text-lg px-8 py-6 shadow-soft hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            קבעו פגישה עכשיו
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
