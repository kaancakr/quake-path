"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
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
                <label className="block text-gray-300 mb-2">Full Name</label>
                <input
                  {...register("name", { required: true })}
                  className="w-full p-4 bg-gray-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 focus:border-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full p-4 bg-gray-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 focus:border-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  {...register("message", { required: true })}
                  className="w-full p-4 bg-gray-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 focus:border-blue-500 transition-all h-40"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
              >
                <EnvelopeIcon className="w-6 h-6" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
