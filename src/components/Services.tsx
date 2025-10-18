import { Heart, Users, Home, Sparkles, CloudRain, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: CloudRain,
    title: "חרדה, דיכאון או מצבי משבר",
    color: "bg-soft-yellow",
  },
  {
    icon: Users,
    title: "קשיים רגשיים או חברתיים",
    color: "bg-soft-mint",
  },
  {
    icon: Sparkles,
    title: "דימוי עצמי נמוך וחוסר ביטחון",
    color: "bg-primary-soft",
  },
  {
    icon: MessageCircle,
    title: "קשיי תקשורת או קשב וריכוז",
    color: "bg-soft-pink",
  },
  {
    icon: Heart,
    title: "טראומה, אובדן, או אבל",
    color: "bg-soft-pink",
  },
  {
    icon: Home,
    title: "קשיים ביחסים משפחתיים",
    color: "bg-soft-pink",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">למי זה מתאים?</h2>
            <p className="text-xl text-muted-foreground">
              הטיפול מספק מענה למגוון רחב של אתגרים רגשיים ונפשיים
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <service.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                {/* <CardContent>
                  <p className="text-foreground/70 text-lg">{service.description}</p>
                </CardContent> */}
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-gradient-warm rounded-3xl p-8 shadow-card">
            <h3 className="text-2xl font-bold mb-4">שיטות טיפול</h3>
            <div className="flex flex-wrap gap-3">
              {["טיפול במשחק", "יצירה טיפולית", "שיחות והכוונה", "CBT", "גישות אינטגרטיביות"].map((method) => (
                <span
                  key={method}
                  className="bg-card px-4 py-2 rounded-full text-foreground shadow-sm"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
