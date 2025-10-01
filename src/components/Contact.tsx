import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  parentName: z.string().trim().min(2, { message: "נא להזין שם תקין" }).max(100),
  childAge: z.string().trim().min(1, { message: "נא להזין גיל" }).max(20),
  reason: z.string().trim().min(10, { message: "נא לתאר את סיבת הפנייה (לפחות 10 תווים)" }).max(1000),
  contact: z.string().trim().min(5, { message: "נא להזין פרטי התקשרות תקינים" }).max(255),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    childAge: "",
    reason: "",
    contact: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      
      const message = `שלום, אני ${formData.parentName}. הילד/ה שלי בגיל ${formData.childAge}. ${formData.reason}`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/9720501234567?text=${encodedMessage}`;
      
      window.open(whatsappUrl, "_blank");
      
      toast.success("פותח וואטסאפ...");
      setFormData({ parentName: "", childAge: "", reason: "", contact: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.errors[0];
        toast.error(firstError.message);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">יצירת קשר</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="shadow-soft border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">קבעו פגישה</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="parentName">שם ההורה</Label>
                      <Input
                        id="parentName"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="שם מלא"
                        required
                        maxLength={100}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="childAge">גיל הילד/ה</Label>
                      <Input
                        id="childAge"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleChange}
                        placeholder="למשל: 8"
                        required
                        maxLength={20}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="reason">סיבת הפנייה</Label>
                      <Textarea
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        placeholder="ספרו לנו במה אתם מעוניינים לקבל עזרה..."
                        rows={4}
                        required
                        maxLength={1000}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="contact">טלפון / אימייל</Label>
                      <Input
                        id="contact"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        placeholder="050-1234567 או email@example.com"
                        required
                        maxLength={255}
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      שלח פנייה בווטסאפ
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-2">טלפון</h4>
                      <p className="text-foreground/70">050-1234567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-2">אימייל</h4>
                      <p className="text-foreground/70">contact@childtherapy.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-2">כתובת</h4>
                      <p className="text-foreground/70">רחוב הפרחים 12, תל אביב</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-2">שעות פעילות</h4>
                      <p className="text-foreground/70">בוקר/צהריים לפי תיאום מראש</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
