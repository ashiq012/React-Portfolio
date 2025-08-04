import React from "react";
import Typewriter from "typewriter-effect";

function TypewriterText() {
  return (
    <span className="text-[#465687] font-semibold">
      <Typewriter
        options={{
          strings: [
            "Frontend Developer",
            "Backend Developer",
            "MERN Stack Developer",
          ],
          autoStart: true,
          loop: true,
          delay: 40,
          deleteSpeed: 100,
        }}
      />
    </span>
  );
}

export default TypewriterText;
