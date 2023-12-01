import { useState } from "react";
import { motion } from "framer-motion";

const slider = {
  left: {
    x: 0,
    borderRadius: "0.5rem 0 0 0.5rem",
    backgroundColor: "rgba(17, 57, 70, 1)",
  },

  right: {
    x: "100%",
    borderRadius: "1.5rem 0.5rem 0.5rem 1.5rem",
  },
};

const vibration = {
  still: {
    x: 0,
  },

  vibrate: {
    x: [0, -4, 3, -3, 2, -2, 1, -1, 0],
    transition: {
      duration: 0.3,
      delay: 0.4,
    },
  },
};

const SignInCover = () => {
  const [member, setMember] = useState(true);
  return (
    <motion.div
      variants={slider}
      initial={false}
      animate={member === true ? "right" : "left"}
      // transition={{ type: "just" }}
      className="absolute bg w-1/2 left-0 top-0 bottom-0 rounded-r-lg flex flex-col justify-center items-center rounded-l-3xl bg-rambow-300"
    >
      <motion.h2
        variants={vibration}
        initial={false}
        animate="vibrate"
        key={member}
        className="font-bold mb-2 text-white text-5xl text-center"
      >
        {member === true ? "Register" : "Login"}
      </motion.h2>
      <p className="text-white">
        {member === true
          ? "Don't have an account? Register one!"
          : "Already has an account. Please Login."}
      </p>
      <motion.button
        variants={vibration}
        initial={false}
        animate="vibrate"
        key={member + "button"}
        onClick={() => setMember((prev) => !prev)}
        className="bg-white text-rambow-400 mt-2 font-bold py-2 px-10 rounded-full"
      >
        {member === true ? "Register an Account" : "Sign In to Your Account"}
      </motion.button>
    </motion.div>
  );
};

export default SignInCover;
