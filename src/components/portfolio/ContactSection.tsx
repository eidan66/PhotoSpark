import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, MessageCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface FormData {
  fullName: string;
  phone: string;
  eventType: string;
  eventDate: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({
      fullName: '',
      phone: '',
      eventType: '',
      eventDate: '',
      message: ''
    });

    setTimeout(() => setShowSuccess(false), 4000);
  };

  const openWhatsApp = (): void => {
    const message = encodeURIComponent("היי אייל, מצאתי אותך דרך האתר שלך. אשמח לשמוע על האפשרויות לצילום האירוע שלי 📸");
    window.open(`https://wa.me/972501234567?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-6">
            בואו נדבר
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            מוזמנים לספר לי על האירוע שלכם ונראה איך אני יכול לעזור לתעד אותו בצורה הכי יפה
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-none">
              {showSuccess && (
                <Alert className="mb-6 bg-green-900/50 border-green-600 text-green-100">
                  <Send className="h-4 w-4" />
                  <AlertDescription>
                    תודה! קיבלתי את ההודעה ואחזור אליכם בהקדם.
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="fullName" className="text-gray-300 font-light">שם מלא</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="bg-transparent border-gray-600 text-white placeholder-gray-400 focus:border-white rounded-none mt-2"
                    placeholder="איך קוראים לכם?"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-300 font-light">טלפון</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="bg-transparent border-gray-600 text-white placeholder-gray-400 focus:border-white rounded-none mt-2"
                    placeholder="050-1234567"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="eventType" className="text-gray-300 font-light">סוג האירוע</Label>
                    <Input
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="bg-transparent border-gray-600 text-white placeholder-gray-400 focus:border-white rounded-none mt-2"
                      placeholder="חתונה, בר מצווה..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="eventDate" className="text-gray-300 font-light">תאריך האירוע</Label>
                    <Input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="bg-transparent border-gray-600 text-white focus:border-white rounded-none mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-300 font-light">הודעה (אופציונלי)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="bg-transparent border-gray-600 text-white placeholder-gray-400 focus:border-white rounded-none mt-2"
                    placeholder="ספרו לי קצת על החזון שלכם לאירוע..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-gray-900 hover:bg-gray-100 font-light py-6 text-lg rounded-none transition-all duration-300"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900 mr-2"></div>
                      שולח...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      שלח הודעה
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* WhatsApp Alternative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light mb-4">מעדיפים משהו יותר מהיר?</h3>
                <p className="text-gray-300 font-light text-lg leading-relaxed">
                  אפשר גם פשוט לכתוב לי בוואטסאפ. 
                  אני בדרך כלל עונה תוך כמה דקות ונוכל לקבוע שיחת היכרות קצרה.
                </p>
              </div>

              <Button
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white font-light py-6 px-8 text-lg rounded-none w-full transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                פתח וואטסאפ
              </Button>

              <div className="text-center text-gray-400 font-light">
                <p>זמין רוב השעות</p>
                <p>תגובה מהירה מובטחת 📱</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}