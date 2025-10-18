import { Heart, Users, Home, Sparkles, CloudRain, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const forWhom = [
    {
        icon: CloudRain,
        title: "חרדה ודיכאון",
        color: "bg-soft-yellow",
    },
    {
        icon: MessageCircle,
        title: "אוטיזם ולקויות הפתחותיות",
        color: "bg-indigo-100",
    },
    {
        icon: Users,
        title: "קשיים רגשיים או חברתיים",
        color: "bg-soft-mint",
    },

    {
        icon: Sparkles,
        title: "דימוי עצמי נמוך וחוסר ביטחון",
        color: "bg-soft-pink",
    },

    {
        icon: Heart,
        title: "מצבי משבר, טראומה או אובדן",
        color: "bg-soft-green",
    },
    {
        icon: Home,
        title: "קשיים ביחסים המשפחתיים",
        color: "bg-teal-100",
    },
];

const ForWhom = () => {
    return (
        <section id="forWhom" className="py-20 bg-gradient-cool">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold  mb-4">למי זה מתאים?</h2>
                        <p className="text-xl text-muted-foreground">
                            הטיפול מספק מענה למגוון רחב של אתגרים רגשיים ונפשיים
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {forWhom.map((service, index) => (
                            <Card
                                key={index}
                                // className="border-0 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
                                className="p-6 hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:scale-105 bg-card border-none"

                            >
                                {/*<CardHeader>*/}
                                {/*<div className="flex items-start gap-4 justify-center">*/}
                                <div className="flex items-center  gap-4 justify-center">
                                    {/*<div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-4`}>*/}
                                    {/*  <service.icon className="w-8 h-8 text-foreground" />*/}
                                    {/*</div>*/}
                                    <div className={`p-3 bg-primary/10 rounded-xl ${service.color}`}>
                                        <service.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    {/*<CardTitle className="text-2xl">{service.title}</CardTitle>*/}
                                    <h3 className="text-lg font-medium text-foreground flex-1 leading-relaxed">
                                        {service.title}
                                    </h3>
                                </div>
                                {/*</CardHeader>*/}
                                {/* <CardContent>
                  <p className="text-foreground/70 text-lg">{service.description}</p>
                </CardContent> */}
                            </Card>
                        ))}
                    </div>

                    {/*<div className="mt-12 bg-gradient-warm rounded-3xl p-8 shadow-card">*/}
                    {/*  <h3 className="text-2xl font-bold mb-4">שיטות טיפול</h3>*/}
                    {/*  <div className="flex flex-wrap gap-3">*/}
                    {/*    {["טיפול במשחק", "יצירה טיפולית", "שיחות והכוונה", "CBT", "גישות אינטגרטיביות"].map((method) => (*/}
                    {/*      <span*/}
                    {/*        key={method}*/}
                    {/*        className="bg-card px-4 py-2 rounded-full text-foreground shadow-sm"*/}
                    {/*      >*/}
                    {/*        {method}*/}
                    {/*      </span>*/}
                    {/*    ))}*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    );
};

export default ForWhom;
