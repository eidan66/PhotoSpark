import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1603207757545-de4fffdb404c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGh1bWFuJTIwcGhvdG9ncmFwZXJ8ZW58MHx8MHx8fDA%3D"
                alt="אייל חיון - צלם אירועים"
                className="w-full h-[600px] object-cover shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                היי, אני <span className="font-normal">אייל</span>
              </h2>
              
              <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                <p>
                  צלם אירועים עם ניסיון של 8+ שנים. מתעד רגעים מהעיניים ומהלב, 
                  ויודע מתי לא ללחוץ על המצלמה.
                </p>
                
                <p>
                  האמונה שלי היא שהתמונות הכי יפות נוצרות כשאנשים שוכחים מהמצלמה 
                  ופשוט חיים את הרגע. זו המקום הזה שאני מחפש לתפוס.
                </p>
                
                <p>
                  בכל אירוע, אני שואף לספר את הסיפור שלכם בצורה הכי אמיתית ורגשית. 
                  ללא פוזות מאולצות, רק רגעים טבעיים שיישארו איתכם לתמיד.
                </p>
              </div>
            </div>

            {/* Signature */}
            <div className="pt-8">
              <div className="text-2xl font-light text-gray-400 italic">
                אייל חיון
              </div>
              <div className="w-16 h-px bg-gray-300 mt-2"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}