import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const avengers = [
  {
    name: "Iron Man",
    img: "/images/iron1.png",
    description:
      "Genius billionaire Tony Stark fights as Iron Man, using advanced technology and a powered armor suit. " +
      "His intelligence and resourcefulness make him one of the most vital Avengers. " +
      "With his arc reactor powering his suit, he can fly, fire energy blasts, and withstand heavy damage. " +
      "Despite his arrogance, Stark’s heart drives him to protect humanity at any cost.",
    background: "linear-gradient(135deg, #200505, #b30000)",
  },
  {
    name: "Captain America",
    img: "/images/capt-amr1.png",
    description:
      "Steve Rogers, enhanced by the Super Soldier Serum, stands as a symbol of courage and leadership. " +
      "With his indestructible vibranium shield, Captain America embodies honor and selflessness. " +
      "He fights not just with strength, but with unwavering moral conviction and strategic brilliance.",
    background: "linear-gradient(135deg, #0a0f2c, #003366)",
  },
  {
    name: "Black Widow",
    img: "/images/natasha.png",
    description:
      "Natasha Romanoff, a former spy and assassin, combines elite combat training with sharp intellect. " +
      "Her mastery in espionage, agility, and weaponry makes her a deadly operative. " +
      "Though haunted by her past, she redeems herself through loyalty and sacrifice for her team.",
    background: "linear-gradient(135deg, #1a0f1a, #8b0000)",
  },
  {
    name: "Hulk",
    img: "/images/hulk.png",
    description:
      "When scientist Bruce Banner loses control, he transforms into the Hulk — a being of immense power and rage. " +
      "The stronger his anger, the more unstoppable he becomes. " +
      "Despite his destructive nature, Hulk often channels his power to protect his allies and fight evil.",
    background: "linear-gradient(135deg, #0a2c0a, #005c1f)",
  },
  {
    name: "Spider-Man",
    img: "/images/spiderman.png",
    description:
      "Peter Parker, the friendly neighborhood Spider-Man, combines agility, web-shooting, and spider-sense to fight crime. " +
      "Balancing his normal life with hero duties, he represents youthful courage, wit, and responsibility. " +
      "His compassion and humor make him one of the most beloved Avengers.",
    background: "linear-gradient(135deg, #200505, #660000)",
  },
  {
    name: "Thor",
    img: "/images/thor.png",
    description:
      "The God of Thunder, Thor wields Mjolnir, a magical hammer that grants him flight and control over lightning. " +
      "A noble warrior from Asgard, he protects both Earth and the realms beyond. " +
      "His strength, bravery, and divine power make him a true celestial force of justice.",
    background: "linear-gradient(135deg, #0a0f2c, #4040ff)",
  },
  {
    name: "Doctor Strange",
    img: "/images/dr-strange.png",
    description:
      "Once a brilliant surgeon, Stephen Strange became the Sorcerer Supreme after mastering the mystic arts. " +
      "He defends reality from interdimensional threats using powerful spells, time manipulation, and astral projection. " +
      "His wisdom and calm presence make him the mystical guardian of the Avengers.",
    background: "linear-gradient(135deg, #1a0f2c, #6f00ff)",
  },
  {
    name: "Hawkeye",
    img: "/images/clint-arrow.png",
    description:
      "Clint Barton, known as Hawkeye, is the world’s greatest marksman. " +
      "Armed with a bow and an arsenal of trick arrows, he combines precision, strategy, and humor in battle. " +
      "Despite having no superpowers, his courage and loyalty earn him equal respect among the Avengers.",
    background: "linear-gradient(135deg, #0a0f0f, #333333)",
  },
];

export default function AvengersSlider() {
  const [index, setIndex] = useState(0);
  const length = avengers.length;

  const nextSlide = () => setIndex((prev) => (prev + 1) % length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + length) % length);

  const prevIndex = (index - 1 + length) % length;
  const nextIndex = (index + 1) % length;

  const positions = {
    left: { x: -120, y: 10, scale: 0.75, opacity: 0.5, zIndex: 1 },
    center: { x: 0, y: 0, scale: 1, opacity: 1, zIndex: 3 },
    right: { x: 120, y: 10, scale: 0.75, opacity: 0.5, zIndex: 1 },
    offLeft: { x: -400, y: 0, scale: 0.6, opacity: 0, zIndex: 0 },
    offRight: { x: 400, y: 0, scale: 0.6, opacity: 0, zIndex: 0 },
  };

  return (
    <div
      className="w-full h-screen relative flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: avengers[index].background,
        transition: "background 1s ease-in-out",
        
      }}
    >
      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="sm:left-50 md:left-100 sm:bottom-1 md:bottom:2 absolute bottom-50 left-5 -translate-y-1/2 z-20 hover:scale-110 transition-transform"
      >
        <ChevronLeft size={50} />
      </button>
      <button
        onClick={nextSlide}
        className="sm:right-50 md:right-100 sm:bottom-1 md:bottom:2 absolute bottom-50 right-5 -translate-y-1/2 z-20 hover:scale-110 transition-transform"
      >
        <ChevronRight size={50} />
      </button>

      {/* Image Carousel */}
      <div className="relative w-full flex justify-center items-end h-[60%]">
        {avengers.map((avenger, i) => {
          let pos;
          if (i === index) pos = "center";
          else if (i === prevIndex) pos = "left";
          else if (i === nextIndex) pos = "right";
          else if (i < index || (index === 0 && i === length - 1))
            pos = "offLeft";
          else pos = "offRight";

          return (
            <motion.img
              key={avenger.name}
              src={avenger.img}
              alt={avenger.name}
              initial={false}
              animate={{
                x: positions[pos].x,
                y: positions[pos].y,
                scale: positions[pos].scale,
                opacity: positions[pos].opacity,
                zIndex: positions[pos].zIndex,
                filter: pos !== "center" ? "blur(3px)" : "blur(0px)", // smooth blur
              }}
              transition={{
                x: { duration: 0.8, ease: "easeInOut" },
                y: { duration: 0.8, ease: "easeInOut" },
                scale: { duration: 0.8, ease: "easeInOut" },
                opacity: { duration: 0.8, ease: "easeInOut" },
                filter: { duration: 0.8, ease: "easeInOut" }, // <-- blur transition
              }}
              className="absolute w-[280px] md:w-[320px] h-[340px] md:h-[400px] object-contain rounded-2xl drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]"
            />
          );
        })}
      </div>

      <motion.div 
      key={index}
      initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
      >
      <h1 className="text-4xl md:text-4xl font-serif mt-4 text-yellow-400">{avengers[index].name}</h1>
      </motion.div>
      

      {/* Text below images */}
      <div className="text-2xl absolute top-16 w-full max-w-5xl px-6 text-neutral-300 font-sans flex flex-col md:flex-row items-center justify-center gap-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full"
          >
            {/* Left Text */}
            <div className="md:w-1/3 text-left">
              {avengers[index].description
                .split(". ")
                .slice(
                  0,
                  Math.ceil(avengers[index].description.split(". ").length / 3)
                )
                .map((line, i) => (
                  <p key={i} className="mb-2">
                    {line}.
                  </p>
                ))}
            </div>

            {/* Placeholder for the image */}
            <div className="w-60 md:w-72 h-60 md:h-72"></div>

            

            {/* Right Text */}
            <div className="md:w-1/3 text-left">
              {avengers[index].description
                .split(". ")
                .slice(
                  Math.ceil(avengers[index].description.split(". ").length / 2)
                )
                .map((line, i) => (
                  <p key={i} className="mb-2">
                    {line}.
                  </p>
                ))}
            </div>
            
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// export default function AvengersSlider() {
//   const [index, setIndex] = useState(0);
//   const [direction, setDirection] = useState("next");

//   const nextSlide = () => {
//     setDirection("next");
//     setIndex((prev) => (prev + 1) % avengers.length);
//   };

//   const prevSlide = () => {
//     setDirection("prev");
//     setIndex((prev) => (prev - 1 + avengers.length) % avengers.length);
//   };

//   const imageVariants = {
//     initial: (direction) => ({
//       x: direction === "next" ? 300 : -300,
//       opacity: 0,
//       rotateY: direction === "next" ? 20 : -20,
//       scale: 0.9,
//     }),
//     animate: {
//       x: 0,
//       opacity: 1,
//       rotateY: 0,
//       scale: 1,
//       transition: { duration: 0.8, ease: "easeInOut" },
//     },
//     exit: (direction) => ({
//       x: direction === "next" ? -300 : 300,
//       opacity: 0,
//       rotateY: direction === "next" ? -15 : 15,
//       scale: 0.9,
//       transition: { duration: 0.6, ease: "easeInOut" },
//     }),
//   };

//   const textVariants = {
//     initial: (direction) => ({
//       y: direction === "next" ? 80 : -80,
//       opacity: 0,
//     }),
//     animate: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.7, ease: "easeInOut" },
//     },
//     exit: (direction) => ({
//       y: direction === "next" ? -80 : 80,
//       opacity: 0,
//       transition: { duration: 0.6, ease: "easeInOut" },
//     }),
//   };

//   const prevIndex = (index - 1 + avengers.length) % avengers.length;
//   const nextIndex = (index + 1) % avengers.length;

//   if (!avengers[index]) return null;

//   return (
//     <div
//       className="w-full h-screen relative flex items-center justify-center overflow-hidden"
//       style={{
//         background: avengers[index].background,
//         transition: "background 1s ease-in-out",
//       }}
//     >
//       {/* Previous blurred image */}
//       <AnimatePresence>
//         <motion.img
//           key={prevIndex}
//           src={avengers[prevIndex].img}
//           alt={avengers[prevIndex].name}
//           className="absolute w-[340px] h-[420px] object-contain rounded-2xl top-1/2 left-12 -translate-y-1/2 z-0"
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 0.6, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.95 }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           style={{ filter: "blur(5px)" }}
//         />
//       </AnimatePresence>

//       {/* Next blurred image */}
//       <AnimatePresence>
//         <motion.img
//           key={nextIndex}
//           src={avengers[nextIndex].img}
//           alt={avengers[nextIndex].name}
//           className="absolute w-[340px] h-[420px] object-contain rounded-2xl top-1/2 right-12 -translate-y-1/2 z-0"
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 0.6, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.95 }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           style={{ filter: "blur(5px)" }}
//         />
//       </AnimatePresence>

//       {/* Navigation */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-8 -translate-y-1/2 z-20 hover:scale-110 transition-transform"
//       >
//         <ChevronLeft size={50} />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-8 -translate-y-1/2 z-20 hover:scale-110 transition-transform"
//       >
//         <ChevronRight size={50} />
//       </button>

//       {/* Main Content */}
//       <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 text-center md:text-left max-w-5xl z-10">
//         <AnimatePresence custom={direction} mode="wait">
//           {/* Current Image */}
//           <motion.img
//             key={index}
//             src={avengers[index].img}
//             alt={avengers[index].name}
//             custom={direction}
//             variants={imageVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             className="w-[360px] h-[440px] object-contain rounded-2xl drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]"
//           />
//         </AnimatePresence>

//         <AnimatePresence custom={direction} mode="wait">
//           {/* Current Text */}
//           <motion.div
//             key={index + "-text"}
//             custom={direction}
//             variants={textVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             className="max-w-lg"
//           >
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">
//               {avengers[index].name}
//             </h1>
//             <p className="text-lg text-gray-200 leading-relaxed">
//               {avengers[index].description}
//             </p>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }
