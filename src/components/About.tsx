import therapistImage from "@/assets/therapist-portrait.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-cool">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src={therapistImage}
                alt="מטפלת רגשית מקצועית"
                className="rounded-3xl shadow-soft w-full max-w-md mx-auto"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6">מי אני</h2>
              <div className="space-y-4 text-lg text-foreground/80">
                <p>
                  אני מטפלת בעלת ניסיון של <strong>15 שנה</strong> בתחום הטיפול הרגשי לילדים ונוער.
                </p>
                <p>
                  עוסקת בליווי אישי, תמיכה במשפחות, והכוונה רגשית במצבים שונים של חרדה, כעס, קשיי תקשורת והתמודדות עם שינויים בחיים.
                </p>
                
                <div className="bg-card rounded-2xl p-6 shadow-card my-6">
                  <h3 className="font-bold text-xl mb-3">תעודות והסמכות</h3>
                  <p>
                    בוגרת תואר ראשון ושני בפסיכולוגיה, מוסמכת בטיפול CBT וגישות אינטגרטיביות.
                  </p>
                </div>
                
                <div className="bg-card rounded-2xl p-6 shadow-card">
                  <h3 className="font-bold text-xl mb-3">סגנון טיפול</h3>
                  <p>
                    אישי, חם, מותאם לילד ולנוער, תוך יצירת קשר אמיתי ובטוח.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
