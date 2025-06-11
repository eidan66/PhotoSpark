import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "ליטל ואור",
    text: "אייל פשוט קסם. לא רק שיצאו תמונות מדהימות, גם הרגשתי איתו הכי נוח בעולם.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    name: "משפחת כהן",
    text: "הבר מצווה של הבן שלנו נראה כמו מתוך סרט. אייל תפס כל רגע חשוב ועוד כמה שלא שמנו לב אליהם.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    name: "רונית ודני",
    text: "התמונות מהחתונה שלנו מושלמות. אייל הצליח לתפוס את כל הרגשות שחווינו ביום הזה.",
    image: "https://images.unsplash.com/photo-1597045017092-b145ab7f9468?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3.0"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-6">
            מה אומרים עליי
          </h2>
          <div className="w-24 h-px bg-gray-900 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-50 p-8 relative">
                <Quote className="w-8 h-8 text-gray-300 mb-6" />
                
                <blockquote className="text-lg text-gray-700 leading-relaxed font-light mb-8 italic">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex items-center space-x-4 space-x-reverse">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-normal text-gray-900">{testimonial.name}</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}