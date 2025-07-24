import { FaLeaf, FaRulerCombined, FaMedal, FaSmile } from "react-icons/fa";
import logoImg from "../assets/logo.png";

export default function About() {
  return (
    <div className="bg-[#fffaf5] text-[#59341c] mt-25">
      <section className="bg-[#f5e8dd] py-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Vinod Furniture Mart
          </h1>
          <p className="text-lg md:text-xl text-[#8b4729]">
            Crafting Quality, Comfort & Style Since 2010
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img
              src={logoImg}
              alt="Vinod Furniture Mart logo"
              className="w-64 mx-auto rounded-lg shadow-md"
            />
          </div>

          <div className="md:w-1/2 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
              <p>
                Founded with the vision of blending aesthetics with
                functionality,
                <strong> Vinod Furniture Mart Rehti</strong> has grown into a
                trusted name in furniture manufacturing. Our journey began with
                a simple goal: to create furniture that combines durability,
                comfort, and timeless design.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Our Craftsmanship</h2>
              <p>
                Every piece of furniture we create is a masterpiece, handcrafted
                by skilled artisans and enhanced with modern technology. We use
                the finest materials, from solid wood and premium upholstery to
                high-quality metals and finishes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Our Commitment to Sustainability
              </h2>
              <p>
                At <strong>Vinod Furniture Mart Rehti</strong>, we care about
                the environment as much as we care about our customers. We use
                responsibly sourced materials, eco-friendly manufacturing
                practices, and sustainable production methods.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: <FaMedal className="text-3xl text-[#a65a32]" />,
                title: "Superior Craftsmanship",
                desc: "Expertly designed furniture with attention to detail",
              },
              {
                icon: <FaRulerCombined className="text-3xl text-[#a65a32]" />,
                title: "Custom Creations",
                desc: "Bespoke solutions tailored to your needs",
              },
              {
                icon: <FaLeaf className="text-3xl text-[#a65a32]" />,
                title: "Eco-Friendly Approach",
                desc: "Sustainability at the core of our process",
              },
              {
                icon: <FaSmile className="text-3xl text-[#a65a32]" />,
                title: "Customer Satisfaction",
                desc: "A seamless experience from design to delivery",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
              >
                <div className="mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-[#fdf4ec] text-center rounded-lg p-10 shadow-inner">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-gray-700 mb-6">
            Join us in creating beautiful, functional spaces with furniture that
            stands the test of time.
          </p>
          <button className="bg-[#a65a32] hover:bg-[#8b4729] text-white px-6 py-2 rounded-lg shadow-md transition">
            Get in Touch Today
          </button>
        </div>
      </div>
    </div>
  );
}
