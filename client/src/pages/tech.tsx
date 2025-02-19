import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { Code, Smartphone, Globe, Cloud, Brain, Cpu } from "lucide-react";

export default function Tech() {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions to meet unique business needs with full-cycle development.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps with user-centric design.",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Responsive and dynamic web applications, e-commerce solutions, and custom portals.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Cloud migration, integration, and management with scalable infrastructure.",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "AI-driven solutions for data analysis, automation, and decision-making.",
    },
    {
      icon: Cpu,
      title: "IoT Development",
      description: "Internet of Things solutions for smart devices and system integration.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/90 to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fidcent Tech Limited
            </h1>
            <p className="text-xl max-w-2xl">
              Empowering businesses through innovative software solutions that enhance
              growth, efficiency, and competitive advantage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Team working"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Expert Team</h2>
              <p className="text-gray-600 mb-6">
                Our team of skilled professionals combines technical expertise with
                industry knowledge to deliver outstanding solutions that drive your
                business forward.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                  Experienced developers and designers
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                  Agile development methodology
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                  Dedicated project managers
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
