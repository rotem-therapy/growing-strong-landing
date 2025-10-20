import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Stethoscope, Target, Users as UsersIcon } from "lucide-react";

const credentials = [
    {
        icon: GraduationCap,
        title: "תואר ראשון ושני",
        description: "בעבודה סוציאלית קלינית",
        color: "bg-primary-soft",
    },
    {
        icon: Award,
        title: "הכשרה מתקדמת",
        description: "**בפסיכותרפיה דינמית",
        color: "bg-primary-soft",
    },
    {
        icon: Target,
        title: "התמחות",
        description: "בטיפול בילד ובמתבגר",
        color: "bg-primary-soft",
    },
    {
        icon: Stethoscope,
        title: "ניסיון מקצועי",
        description: "בטיפול באוטיזם, טראומה ובמצבי משבר",
        color: "bg-primary-soft",
    },
    // {
    //     icon: UsersIcon,
    //     title: "רכזת תחום רגשי",
    //     description: "במרכז לגיל הרך",
    //     color: "bg-primary-soft",
    // },
];

const Credentials = () => {
    return (
        <section className="py-20 px-4 bg-[var(--gradient-soft)]">
        <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold  mb-4">
            רקע מקצועי והכשרה
    </h2>
    <p className="text-lg text-muted-foreground">
        ניסיון והכשרה מקצועית רחבה בתחום הטיפול בילדים ונוער
    </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {credentials.map((credential, index) => {
                const Icon = credential.icon;
                return (
                    <Card
                        key={index}
                className="p-6 text-center hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:scale-105 bg-card border-none"
                >
                <div className="flex flex-col items-center gap-4">
                <div className={`p-4 bg-primary/10 rounded-2xl ${credential.color}`}>
                    <Icon className="w-10 h-10 text-primary"  />
                </div>
                <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                    {credential.title}
                    </h3>
                    <p className="text-muted-foreground">
                    {credential.description}
                    </p>
                    </div>
                    </div>
                    </Card>
            );
            })}
        </div>

    {/* Trust indicators */}
    <div className="mt-12 text-center">
    <p className="text-lg text-muted-foreground italic">
        ** בתהליך הכשרה בתוכנית התלת שנתית לפסיכותרפיה דינמית ׳אלומות׳- ביה״ח שלוותא
    </p>
    </div>
    </div>
    </section>
);
};

export default Credentials;
