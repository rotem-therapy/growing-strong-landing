import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">טיפול רגשי לילדים ונוער</h3>
              <p className="opacity-90">
                ליווי מקצועי ואישי לילדים, נוער ומשפחות במסע של צמיחה רגשית
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">קישורים מהירים</h3>
              <ul className="space-y-2 opacity-90">
                <li>
                  <a href="#about" className="hover:opacity-70 transition-opacity">
                    אודות
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:opacity-70 transition-opacity">
                    שירותים
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:opacity-70 transition-opacity">
                    יצירת קשר
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">יצירת קשר</h3>
              <ul className="space-y-2 opacity-90">
                <li>טלפון: 050-1234567</li>
                <li>אימייל: contact@childtherapy.com</li>
                <li>כתובת: רחוב הפרחים 12, תל אביב</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8 text-center opacity-90">
            <p className="flex items-center justify-center gap-2">
              <Heart className="w-4 h-4" />
              כל הזכויות שמורות © 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
