import { Card } from "@/components/ui/card";
import { Lightbulb, HeartHandshake, Sprout } from "lucide-react";

const Methods = () => {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold  mb-4">
                        אופן העבודה שלי
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        גישה טיפולית מותאמת אישית לכל מטופל
                    </p>
                </div>

                <Card className="p-8 md:p-12 bg-card shadow-[var(--shadow-soft)] border-none">
                    <div className="space-y-8">
                        <div className="flex items-start gap-6">
                            <div className="p-4 bg-secondary/20 rounded-2xl flex-shrink-0">
                                <Lightbulb className="w-8 h-8 text-secondary" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-foreground mb-3">
                                    גישה דינמית משולבת
                                </h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    אני משלבת גישה דינמית עם כלים טיפוליים נוספים בהתאם לצורכי המטופל.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="p-4 bg-accent/20 rounded-2xl flex-shrink-0">
                                <HeartHandshake className="w-8 h-8 text-accent" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-foreground mb-3">
                                    התאמה אישית
                                </h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    בילדים אני משתמשת בטיפול באמצעות משחק, ובמבוגרים בשיחה מעמיקה, הקשבה וחשיבה משותפת.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="p-4 bg-primary/20 rounded-2xl flex-shrink-0">
                                <Sprout className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-foreground mb-3">
                                    מרחב בטוח לצמיחה
                                </h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    יחד ניצור מרחב בטוח שבו אפשר להבין, להרגיש ולצמוח.
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Methods;
