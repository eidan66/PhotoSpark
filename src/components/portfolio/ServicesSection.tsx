import { motion } from "framer-motion";
import { Heart, Star, Users, Briefcase, Camera } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: Heart,
    title: "חתונות",
    description: "תיעוד מלא של יום החתונה מההכנות ועד הרגע האחרון"
  },
  {
    id: 2,
    icon: Star,
    title: "בר / בת מצווה",
    description: "רגעי גאווה ושמחה משפחתית בעין רגישה ומקצועית"
  },
  {
    id: 3,
    icon: Users,
    title: "צילומי זוגיות",
    description: "סשנים אינטימיים ואמיתיים שמתעדים את האהבה שלכם"
  },
  {
    id: 4,
    icon: Briefcase,
    title: "אירועים עסקיים",
    description: "כנסים, השקות ואירועי חברה ברמה מקצועית גבוהה"
  },
  {
    id: 5,
    icon: Camera,
    title: "הפקות תוכן",
    description: "צילומים מותאמים לרשתות חברתיות ושיווק דיגיטלי"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-6">
            סוגי אירועים
          </h2>
          <div className="w-24 h-px bg-gray-900 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="p-4 bg-gray-50 group-hover:bg-gray-900 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-2xl font-light text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed font-light text-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}