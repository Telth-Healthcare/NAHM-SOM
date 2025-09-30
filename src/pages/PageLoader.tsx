import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Activity } from "lucide-react";
import logo from "../assets/nahamsom logonew.svg";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-red-900"
        >
          <div className="relative flex flex-col items-center gap-8">
            {/* Animated logo container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut"
              }}
              className="relative"
            >
              {/* Outer spinning ring */}
              {/* <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-white/40 border-r-white/40 w-32 h-32"
              /> */}

              {/* Middle pulsing ring */}
              {/* <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-2 rounded-full border-2 border-white/30"
              /> */}

              {/* Center icon container */}
              <div className=" w-40 h-40 flex items-center justify-center">
                <motion.div
                //   animate={{ 
                //     scale: [1, 1.2, 1],
                //   }}
                //   transition={{
                //     duration: 1.5,
                //     repeat: Infinity,
                //     ease: "easeInOut"
                //   }}
                //   className="relative"
                >
                  <img src={logo} alt="logo" className="h-64 w-64 text-white fill-white" />
                  
                  {/* Pulse wave effect */}
                  {/* <motion.div
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.6, 0, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                    className="absolute inset-0 rounded-full border-2 border-white"
                  /> */}
                </motion.div>

                {/* Activity indicator */}
                {/* <motion.div
                  animate={{ 
                    x: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -right-2 -top-2"
                >
                  <Activity className="w-6 h-6 text-white" />
                </motion.div> */}
              </div>
            </motion.div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col items-center gap-4"
            >
              <h2 className="text-2xl font-bold text-white">NAHM-SOM</h2>
              
              {/* Animated dots */}
              <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                    className="w-2 h-2 rounded-full bg-white"
                  />
                ))}
              </div>

              <p className="text-white text-semibold text-lg ">Fostering Spiritual Wellness For A Healthier Life...</p>
            </motion.div>

            {/* Progress bar */}
            <motion.div 
              className="w-64 h-1 bg-white/20 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="h-full bg-white rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;