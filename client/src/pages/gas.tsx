import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { Flame, Truck, Factory, BarChart3 } from "lucide-react";

export default function Gas() {
  const services = [
    {
      icon: Flame,
      title: "Gas Distribution",
      description: "Reliable gas distribution services for residential and commercial needs.",
    },
    {
      icon: Truck,
      title: "Transportation",
      description: "Safe and efficient gas transportation across Nigeria.",
    },
    {
      icon: Factory,
      title: "Industrial Supply",
      description: "Bulk gas supply solutions for industrial applications.",
    },
    {
      icon: BarChart3,
      title: "Consulting",
      description: "Expert consulting services for gas-related projects.",
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
              Fidcent Gas
            </h1>
            <p className="text-xl max-w-2xl">
              Delivering reliable and sustainable energy solutions to power your business
              and home needs.
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
              Comprehensive gas solutions for all your energy needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
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

      {/* Infrastructure Section */}
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
              <h2 className="text-3xl font-bold mb-6">Modern Infrastructure</h2>
              <p className="text-gray-600 mb-6">
                Our state-of-the-art facilities and equipment ensure safe, efficient,
                and reliable gas distribution across Nigeria.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                  Advanced storage facilities
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                  Modern transportation fleet
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                  Safety-first approach
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1622801185864-874be8248594"
                alt="Gas facility"
                className="rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
