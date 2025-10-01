import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "הטיפול עזר לבן שלי להתמודד עם חרדות הלימודים – תודה על היחס האישי והמקצועי!",
    author: "מ. כהן",
  },
  {
    text: "הבת שלי כל כך מחכה לפגישות – הרגשנו שצעדנו בכיוון הנכון.",
    author: "י. לוי",
  },
  {
    text: "אחרי כמה חודשי טיפול ראינו שינוי משמעותי ביכולת של הבן שלנו לבטא רגשות ולתקשר איתנו.",
    author: "ד. ברק",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">מה אומרים ההורים</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-card hover:shadow-soft transition-all duration-300 bg-gradient-warm"
              >
                <CardContent className="pt-6">
                  <Quote className="w-10 h-10 text-primary mb-4 opacity-50" />
                  <p className="text-lg mb-6 text-foreground/80 leading-relaxed">
                    {testimonial.text}
                  </p>
                  <p className="font-semibold text-foreground">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
