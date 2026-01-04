"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { db, firebaseInitialized } from "@/lib/firebase";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      if (!firebaseInitialized || !db) {
        throw new Error("Firebase is not initialized. Please install Firebase and configure it.");
      }

      // Dynamic import of Firestore functions
      const firestoreModule = await import("firebase/firestore");
      const { collection, addDoc, serverTimestamp } = firestoreModule;
      
      // Save contact form data to Firebase Firestore
      // Type assertion needed because db is typed as unknown when Firebase is not installed
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await addDoc(collection(db as any, "contacts"), {
        name: data.name,
        email: data.email,
        message: data.message,
        timestamp: serverTimestamp(),
        status: "new",
        createdAt: new Date().toISOString(),
      });
      
      setSubmitStatus("success");
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-40 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="space-y-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Get in Touch
            </h1>

            <div className="space-y-6">
              <div className="flex items-start gap-6 p-6 bg-gray-800/30 rounded-2xl backdrop-blur-lg">
                <MapPinIcon className="w-8 h-8 text-purple-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Headquarters
                  </h3>
                  <p className="text-gray-400">
                    Ön Cebeci, Ziya Gökalp Cd. 48/A, 06420 Çankaya/Ankara
                    <br />
                    Ankara, Turkey
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-gray-800/30 rounded-2xl backdrop-blur-lg">
                <PhoneIcon className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    24/7 Support
                  </h3>
                  <p className="text-gray-400">
                    +90 555 123 4567
                    <br />
                    eren.cakir@tedu.edu.tr
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="bg-gray-800/30 backdrop-blur-lg rounded-3xl p-8 shadow-2xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  {...register("name", { 
                    required: "Name is required",
                    minLength: { value: 2, message: "Name must be at least 2 characters" }
                  })}
                  className={`w-full p-4 bg-gray-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border transition-all ${
                    errors.name ? "border-red-500" : "border-gray-600 focus:border-blue-500"
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                    <ExclamationCircleIcon className="w-4 h-4" />
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className={`w-full p-4 bg-gray-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border transition-all ${
                    errors.email ? "border-red-500" : "border-gray-600 focus:border-blue-500"
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                    <ExclamationCircleIcon className="w-4 h-4" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  {...register("message", { 
                    required: "Message is required",
                    minLength: { value: 10, message: "Message must be at least 10 characters" }
                  })}
                  className={`w-full p-4 bg-gray-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border transition-all h-40 resize-none ${
                    errors.message ? "border-red-500" : "border-gray-600 focus:border-blue-500"
                  }`}
                  placeholder="Enter your message here..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                    <ExclamationCircleIcon className="w-4 h-4" />
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-900/30 border border-green-500/50 rounded-xl flex items-center gap-3"
                >
                  <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <p className="text-green-400">Message sent successfully! We&apos;ll get back to you soon.</p>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-900/30 border border-red-500/50 rounded-xl flex items-center gap-3"
                >
                  <ExclamationCircleIcon className="w-6 h-6 text-red-400 flex-shrink-0" />
                  <p className="text-red-400">Failed to send message. Please try again later.</p>
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <EnvelopeIcon className="w-6 h-6" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
