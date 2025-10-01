import { Heart, Users, Home, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Heart,
    title: "טיפול פרטני לילדים",
    description: "ליווי רגשי אישי לילדים בגילאי 4-12, באמצעות משחק, יצירה ושיחה",
    color: "bg-soft-pink",
  },
  {
    icon: Sparkles,
    title: "טיפול פרטני לנוער",
    description: "תמיכה והכוונה לנוער בגילאי 13-18, התמודדות עם אתגרים רגשיים וחברתיים",
    color: "bg-primary-soft",
  },
  {
    icon: Users,
    title: "טיפול משפחתי",
    description: "ליווי משפחות בתהליכים של שיפור תקשורת וחיזוק הקשר המשפחתי",
    color: "bg-soft-mint",
  },
  {
    icon: Home,
    title: "הדרכת הורים",
    description: "כלים והכוונה להורים כיצד לתמוך בילדים בבית ולהתמודד עם אתגרים",
    color: "bg-soft-yellow",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">תחומי התמחות ושירותים</h2>
            <p className="text-xl text-muted-foreground">
              ליווי מקצועי ואישי בתחומים מגוונים
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
                <CardContent>
                  <p className="text-foreground/70 text-lg">{service.description}</p>
                </CardContent>
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
