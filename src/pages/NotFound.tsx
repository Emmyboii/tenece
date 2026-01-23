import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F7F8] px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg text-center"
      >
        {/* Big 404 */}
        <h1 className="text-[120px] leading-none font-bold text-[#1F262B]">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1F262B] mt-2">
          Page not found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-4">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 rounded-full border border-gray-300 text-[#1F262B] hover:bg-gray-100 transition"
          >
            Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-full bg-[#1F262B] text-white hover:bg-black transition"
          >
            Back to Home
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
