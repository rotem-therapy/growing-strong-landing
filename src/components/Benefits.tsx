import { CheckCircle } from "lucide-react";

const benefits = [
  "יחס אישי וחם לכל ילד ונער",
  "סביבת טיפול מותאמת ומזמינה",
  "שימוש בכלים יצירתיים ואינטגרטיביים להתמודדות עם רגשות",
  "תמיכה בהורים והדרכה כיצד לתמוך בבית",
  "ניסיון של 15 שנה בתחום",
  "גישה מקצועית ומבוססת מחקר",
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-cool">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">למה לבחור בי?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card p-6 rounded-2xl shadow-card hover:shadow-soft transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground/80">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
