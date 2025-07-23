import { Truck, Trees, PackageCheck } from "lucide-react";

const FeatureSection = (props) => {
  return (
    <section className="py-10 px-4 md:px-10 lg:px-20">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10 text-center">
        Transforming how furniture works for you
      </h2>

      <div className="grid gap-10 md:grid-cols-3 text-center">
        {/* 1. Delivery */}
        <div className="flex flex-col items-center gap-4">
          <Truck className="w-12 h-12 text-gray-800" />
          <h3 className="text-lg font-semibold text-gray-900">
            Quick & budget-friendly delivery
          </h3>
          <p className="text-gray-700">
            By maintaining ready-to-ship inventory and using a modular system,
            we ensure your furniture arrives at your doorstep in no time.
          </p>
        </div>

        {/* 2. Modular Designs */}
        <div className="flex flex-col items-center gap-4">
          <PackageCheck className="w-12 h-12 text-gray-800" />
          <h3 className="text-lg font-semibold text-gray-900">
            Flexible, modular designs
          </h3>
          <p className="text-gray-700">
            Our adaptable modular designs are built to perfectly fit your
            current space and seamlessly move with you to your next one.
          </p>
        </div>

        {/* 3. Durable Materials */}
        <div className="flex flex-col items-center gap-4">
          <Trees className="w-12 h-12 text-gray-800" />
          <h3 className="text-lg font-semibold text-gray-900">
            High-quality, durable materials
          </h3>
          <p className="text-gray-700">
            We craft our furniture using responsibly sourced wood, reinforced
            steel components, and premium Italian leather for lasting quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
