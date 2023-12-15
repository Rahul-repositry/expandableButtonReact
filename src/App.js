import "./App.css";
import { FcSportsMode } from "react-icons/fc";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [isOpen, setOpen] = useState(false);

  const handleExpandability = () => {
    setOpen(!isOpen);
  };

  const transition = { type: "spring", duration: 0.8 };
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
  const fadeAnimation = {
    initial: {
      opacity: 0,
      transition: { ...transition, delay: 0 },
    },
    animate: {
      opacity: 1,

      transition: { ...transition, delay: 0.2 },
    },
    exit: {
      opacity: 0,
      transition: { ...transition, delay: 0 },
    },
  };
  return (
    <>
      <div className="wrapperContainer ">
        <motion.div
          className="expandableContainer "
          onClick={handleExpandability}
          data-isOpen={isOpen}
          layout
          transition={spring}
        >
          <div className="buttonContainer">
            <div className="title flex gap-2">
              <motion.p layout="position">Framer-motion</motion.p>
              <span className="text-2xl">
                <FcSportsMode />
              </span>
            </div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                layout="position"
                className="contentContainer py-2"
                {...fadeAnimation}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veniam nesciunt iure suscipit a quae consequatur mollitia
                  harum maiores consectetur, quis velit dolorum ipsam laboriosam
                  deserunt nostrum tempore minus, natus asperiores.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}

export default App;
