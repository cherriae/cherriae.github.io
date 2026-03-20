import React, { useState } from "react";
import { Timeline } from "./utils/timeline";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const ImageModal = ({
  src,
  alt,
  isOpen,
  onClose,
}: {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 rounded-xl"
      >
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.5 }}
          className="relative max-w-4xl w-full aspect-video"
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ProjectImage = ({ src, alt }: { src: string; alt: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        className="relative overflow-hidden rounded-xl cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
      >
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={src}
            alt={alt}
            width={1000}
            height={600}
            className="rounded-xl object-cover w-full"
          />
        </motion.div>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/40 flex items-center justify-center"
          >
            <p className="text-white text-lg font-medium">Click to enlarge</p>
          </motion.div>
        )}
      </motion.div>
      <ImageModal
        src={src}
        alt={alt}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

const TimelineSection: React.FC = () => {
  const [hoveredButtons, setHoveredButtons] = useState<{
    [key: string]: boolean;
  }>({});

  const handleButtonHover = (id: string, isHovered: boolean) => {
    setHoveredButtons((prev) => ({ ...prev, [id]: isHovered }));
  };

  const data = [
    {
      title: "Team 334 2024 Robot",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <h3 className="text-3xl font-bold main mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Team 334 2024 Robot
          </h3>
          <p className="font-medium my-4 main text-neutral-800 text-lg leading-relaxed">
            Ascent, Our robot for the 2024 season competing in the 2024 season,
            excelled at scoring and climbing. We were rank #25 in 2024 NYC
            Regionals.
          </p>
          <div className="mt-8">
            <ProjectImage src="/robot.png" alt="2024 Robot" />
          </div>
        </motion.div>
      ),
    },
    {
      title: "Team 334 Website",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <p className="text-xl font-bold secondary mb-2 bg-gradient-to-r from-white-200 to-gray-500 bg-clip-text text-transparent italic">
            2024-2026
          </p>
          <h3 className="text-3xl font-bold main mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Team 334 Website
          </h3>
          <p className="font-medium my-4 main text-neutral-800 text-lg leading-relaxed">
            This website is everything about our robotics team. You can learn
            about our team's mission, events, and how we design and build robots
            for global competitions.
          </p>
          <div className="my-6">
            <Link href="https://bthsrobotics.com">
              <Button
                color="primary"
                className="font-bold main text-center px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
                onMouseEnter={() => handleButtonHover("website-btn", true)}
                onMouseLeave={() => handleButtonHover("website-btn", false)}
              >
                Visit Website
                <motion.div
                  animate={{ x: hoveredButtons["website-btn"] ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiArrowRight size={20} />
                </motion.div>
              </Button>
            </Link>
          </div>
          <ProjectImage src="/334.png" alt="Team 334 Website" />
        </motion.div>
      ),
    },
    {
      title: "Castle: Team 334 Scouting App",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <p className="text-xl font-bold secondary mb-2 bg-gradient-to-r from-white-200 to-gray-500 bg-clip-text text-transparent italic">
            2025-2026
          </p>
          <h3 className="text-3xl font-bold main mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Castle
          </h3>
          <p className="font-medium my-4 main text-neutral-800 text-lg leading-relaxed">
            This is a scouting app that allows us to scout other teams and see
            their performance in the game. This app has grown to over 500 users,
            50 teams, and 3,000 matches scouted across the global. We have also
            expanded to FRC and FTC, with separate websites for each
            competition.
          </p>
          <div className="grid grid-cols-1 md:grid-row-3 gap-4 my-6">
            <Link href="https://github.com/team334/castle">
              <Button
                color="primary"
                className="font-bold main text-center px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
                onMouseEnter={() => handleButtonHover("scouting-app-btn", true)}
                onMouseLeave={() =>
                  handleButtonHover("scouting-app-btn", false)
                }
              >
                Link to Github
                <motion.div
                  animate={{ x: hoveredButtons["scouting-app-btn"] ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiArrowRight size={20} />
                </motion.div>
              </Button>
            </Link>
            <Link href="https://castlescouting.com">
              <Button
                color="primary"
                className="font-bold main text-center px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
                onMouseEnter={() =>
                  handleButtonHover("scouting-app-frc-btn", true)
                }
                onMouseLeave={() =>
                  handleButtonHover("scouting-app-frc-btn", false)
                }
              >
                FRC Website
                <motion.div
                  animate={{
                    x: hoveredButtons["scouting-app-frc-btn"] ? 5 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <FiArrowRight size={20} />
                </motion.div>
              </Button>
            </Link>
            <Link href="https://ftc.castlescouting.com">
              <Button
                color="primary"
                className="font-bold main text-center px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
                onMouseEnter={() =>
                  handleButtonHover("scouting-app-ftc-btn", true)
                }
                onMouseLeave={() =>
                  handleButtonHover("scouting-app-ftc-btn", false)
                }
              >
                FTC Website
                <motion.div
                  animate={{
                    x: hoveredButtons["scouting-app-ftc-btn"] ? 5 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <FiArrowRight size={20} />
                </motion.div>
              </Button>
            </Link>
          </div>
          <ProjectImage src="/scouting-app.png" alt="Scouting App Screenshot" />
        </motion.div>
      ),
    },
    {
      title: "Chief Delphi Bot",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <p className="text-xl font-bold secondary mb-2 bg-gradient-to-r from-white-200 to-gray-500 bg-clip-text text-transparent italic">
            2025
          </p>
          <h3 className="text-3xl font-bold main mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Chief Delphi Bot
          </h3>
          <p className="font-medium my-4 main text-neutral-800 text-lg leading-relaxed">
            A Discord bot that allows us to get the latest news and updates from
            Chief Delphi.
          </p>
          <div className="my-6">
            <Link href="https://github.com/team334/cd-discord-bot">
              <Button
                color="primary"
                className="font-bold main text-center px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
                onMouseEnter={() => handleButtonHover("delphi-btn", true)}
                onMouseLeave={() => handleButtonHover("delphi-btn", false)}
              >
                Link to Github
                <motion.div
                  animate={{ x: hoveredButtons["delphi-btn"] ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiArrowRight size={20} />
                </motion.div>
              </Button>
            </Link>
          </div>
          <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative aspect-video w-full">
              <ProjectImage
                src="/bot.png"
                alt="Chief Delphi Bot Screenshot 1"
              />
            </div>
            <div className="relative aspect-video w-full">
              <ProjectImage
                src="/bot2.png"
                alt="Chief Delphi Bot Screenshot 2"
              />
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      title: "Team 334 2025 Robot",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <p className="text-xl font-bold secondary mb-2 bg-gradient-to-r from-white-200 to-gray-500 bg-clip-text text-transparent italic">
            2025
          </p>
          <h3 className="text-3xl font-bold main mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Team 334 2025 Robot
          </h3>
          <p className="font-medium my-4 main text-neutral-800 text-lg leading-relaxed">
            A robot for the 2025 season competing in the FIRST Robotics
            Competition 2025 Reefscape, designed to score all levels in the
            game. We were rank #12 with a record of 7-4-0, and winning the 2025
            NYC Regional Judges Award. I helped program one of the robot's
            subsystem: serializer. Serializer is responsible for allowing for a
            smooth pass off to our end effector.
          </p>
          <div className="my-6">
            <Link href="https://github.com/team334/R2025">
              <Button
                color="primary"
                className="font-bold main text-center px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
                onMouseEnter={() => handleButtonHover("r2025-btn", true)}
                onMouseLeave={() => handleButtonHover("r2025-btn", false)}
              >
                Link to Github
                <motion.div
                  animate={{ x: hoveredButtons["r2025-btn"] ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiArrowRight size={20} />
                </motion.div>
              </Button>
            </Link>
          </div>

          <ProjectImage
            src="/r2025.png"
            alt="R2025 Robot Screenshot"
          />

        </motion.div>
      ),
    },
    {
      title: "StockView",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <p className="text-xl font-bold secondary mb-2 bg-gradient-to-r from-white-200 to-gray-500 bg-clip-text text-transparent italic">
            2025
          </p>
          <h3 className="text-3xl font-bold main mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            StockView
          </h3>
          <p className="font-medium my-4 main text-neutral-800 text-lg leading-relaxed">
            A free analytics tool for chess users who want to analyze their
            games and improve. It provides insights on openings, endgames, and
            overall performance.
          </p>
          <div className="my-6">
            <Link href="https://github.com/cherriae/stockview">
              <Button
                color="primary"
                className="font-bold main text-center px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
                onMouseEnter={() => handleButtonHover("stockview-btn", true)}
                onMouseLeave={() => handleButtonHover("stockview-btn", false)}
              >
                Link to Github
                <motion.div
                  animate={{ x: hoveredButtons["stockview-btn"] ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiArrowRight size={20} />
                </motion.div>
              </Button>
            </Link>
          </div>
          <ProjectImage src="/stockview.png" alt="StockView Screenshot" />
        </motion.div>
      ),
    },
    {
      title: "Graph Theory Art Gallery Problem Visualization",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <p className="text-xl font-bold secondary mb-2 bg-gradient-to-r from-white-200 to-gray-500 bg-clip-text text-transparent italic">
            2025
          </p>
          <h3 className="text-3xl font-bold main mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Art Gallery Simulation
          </h3>
          <p className="font-medium my-4 main text-neutral-800 text-lg leading-relaxed">
            A visualization of the Art Gallery Problem, a classic problem in
            graph theory. The simulation allows the user to place points which
            are paintings in an art gallery and calculates the minimum number of
            guards needed to watch over all the paintings. It also provides a
            visual representation of the guards' coverage areas.
          </p>
          <div className="my-6">
            <Link href="https://github.com/cherriae/GT-Art-Gallery">
              <Button
                color="primary"
                className="font-bold main text-center px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
                onMouseEnter={() => handleButtonHover("art-gallery-btn", true)}
                onMouseLeave={() => handleButtonHover("art-gallery-btn", false)}
              >
                Link to Github
                <motion.div
                  animate={{ x: hoveredButtons["art-gallery-btn"] ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiArrowRight size={20} />
                </motion.div>
              </Button>
            </Link>
          </div>
          <ProjectImage
            src="/gt-project.png"
            alt="Art Gallery Simulation Screenshot"
          />
        </motion.div>
      ),
    },
    {
      title:
        "Mini Math Research Paper: Sum of Arrangements from 1 to 2005 with Steps 2 or 3",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <p className="text-xl font-bold secondary mb-2 bg-gradient-to-r from-white-200 to-gray-500 bg-clip-text text-transparent italic">
            2025
          </p>
          <h3 className="text-3xl font-bold main mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Sum of Arrangements from 1 to 2005 with Steps 2 or 3
          </h3>
          <p className="text-neutral-700 text-lg leading-relaxed mb-4">
            This paper investigates the number of valid arrangements from 1 to
            2005 where consecutive terms differ by 2 or 3, as well as the sum of
            all such arrangements. By modeling the problem as a graph and
            testing small cases, a recurrence relation was discovered:
          </p>

          {/* Equation */}
          <p className="text-center text-lg font-mono my-4">
            f(n) = f(n − 2) + f(n − 3)
          </p>

          <p className="text-neutral-700 text-lg leading-relaxed mb-4">
            This recurrence counts the number of valid paths. Extending this
            idea, a recurrence for the sum was derived:
          </p>

          {/* Equation */}
          <p className="text-center text-lg font-mono my-4">
            S(n) = S(n − 1) + S(n − 2) − S(n − 4)
          </p>

          <p className="text-neutral-700 text-lg leading-relaxed">
            This allows efficient computation of large values. The investigation
            shows how simple constraints can lead to complex exponential growth.
            This combines ideas from graph theory and combinatorics while
            opening directions for further exploration. To further compute
            larger values, I implemented a BFS algorithm to compute the number
            of arrangements and their sum from 1 to n.
          </p>
          <div className="my-6">
            <Link href="https://app.pickcode.io/project/cmjbuiungaz5h12r46itujts4">
              <Button
                color="primary"
                className="font-bold main text-center px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
                onMouseEnter={() => handleButtonHover("sum-arrangements-btn", true)}
                onMouseLeave={() => handleButtonHover("sum-arrangements-btn", false)}
              >
                Pickcode BFS Algorithmn
                <motion.div
                  animate={{ x: hoveredButtons["sum-arrangements-btn"] ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiArrowRight size={20} />
                </motion.div>
              </Button>
            </Link>
          </div>
          <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-lg border">
            <iframe src="/Mini-Research-Paper.pdf" className="w-full h-full" />
          </div>
        </motion.div>
      ),
    },
    {
      title: "National History Day Website",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <p className="text-xl font-bold secondary mb-2 bg-gradient-to-r from-white-200 to-gray-500 bg-clip-text text-transparent italic">
            2026
          </p>
          <h3 className="text-3xl font-bold main mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            National History Day Website
          </h3>
          <p className="font-medium my-4 main text-neutral-800 text-lg leading-relaxed">
            A website for National History Day on the Haitian Revolution and its
            enduring continuities through the lens of many different
            perspectives.
          </p>
          <div className="my-6">
            <Link href="https://github.com/cherriae/Haitian-Revolution-NHD">
              <Button
                color="primary"
                className="font-bold main text-center px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
                onMouseEnter={() =>
                  handleButtonHover("haitian-revolution-btn", true)
                }
                onMouseLeave={() =>
                  handleButtonHover("haitian-revolution-btn", false)
                }
              >
                Link to Github
                <motion.div
                  animate={{
                    x: hoveredButtons["haitian-revolution-btn"] ? 5 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <FiArrowRight size={20} />
                </motion.div>
              </Button>
            </Link>
          </div>
          <ProjectImage
            src="/nhd.png"
            alt="National History Day Website Screenshot"
          />
        </motion.div>
      ),
    },
    {
      title: "Shot Planner For FRC 2026 Rebuilt",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <p className="text-xl font-bold secondary mb-2 bg-gradient-to-r from-white-200 to-gray-500 bg-clip-text text-transparent italic">
            2026
          </p>
          <h3 className="text-3xl font-bold main mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Shot Planner For FRC 2026 Rebuilt
          </h3>
          <p className="font-medium my-4 main text-neutral-800 text-lg leading-relaxed">
            A shot planner for the FRC 2026 Rebuilt robot, designed to optimize
            shot angle and velocity for maximum efficiency.
          </p>
          <div className="my-6">
            <Link href="https://github.com/cherriae/shotPlanner2025">
              <Button
                color="primary"
                className="font-bold main text-center px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
                onMouseEnter={() => handleButtonHover("shot-planner-btn", true)}
                onMouseLeave={() =>
                  handleButtonHover("shot-planner-btn", false)
                }
              >
                Link to Github
                <motion.div
                  animate={{
                    x: hoveredButtons["shot-planner-btn"] ? 5 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <FiArrowRight size={20} />
                </motion.div>
              </Button>
            </Link>
          </div>
          <ProjectImage
            src="/shot-planner.png"
            alt="Shot Planner For FRC 2026 Rebuilt Screenshot"
          />
        </motion.div>
      ),
    },
    {
      title: "Fermat Last Theorem and Pythagorean Triplets",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <p className="text-xl font-bold secondary mb-2 bg-gradient-to-r from-white-200 to-gray-500 bg-clip-text text-transparent italic">
            2026
          </p>
          <h3 className="text-3xl font-bold main mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Fermat Last Theorem and Pythagorean Triplets
          </h3>
          <p className="font-medium my-4 main text-neutral-800 text-lg leading-relaxed">
            A calculator that find Pythagorean triplets and also demonstrates
            Fermat's Last Theorem by showing that there are no integer solutions
            for a^n + b^n = c^n when n {">"} 2.
          </p>
          <div className="my-6">
            <Link href="https://github.com/cherriae/NT-Project">
              <Button
                color="primary"
                className="font-bold main text-center px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
                onMouseEnter={() => handleButtonHover("nt-project-btn", true)}
                onMouseLeave={() => handleButtonHover("nt-project-btn", false)}
              >
                Link to Github
                <motion.div
                  animate={{
                    x: hoveredButtons["nt-project-btn"] ? 5 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <FiArrowRight size={20} />
                </motion.div>
              </Button>
            </Link>
          </div>
          <ProjectImage src="/nt-project.png" alt="NT Project Screenshot" />
        </motion.div>
      ),
    },
    {
      title: "APUSH Roaring Twenties Project",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <p className="text-xl font-bold secondary mb-2 bg-gradient-to-r from-white-200 to-gray-500 bg-clip-text text-transparent italic">
            2026
          </p>
          <h3 className="text-3xl font-bold main mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            APUSH Roaring Twenties Project
          </h3>
          <p className="font-medium my-4 main text-neutral-800 text-lg leading-relaxed">
            A game that simulates the Harlem Renaissance and key figures of the
            Roaring Twenties, allowing players to explore the rich culture of
            the Harlem Renaissance through a big map.
          </p>
          <div className="my-6">
            <Link href="https://github.com/cherriae/APUSH-Roaring-Twenties-Project">
              <Button
                color="primary"
                className="font-bold main text-center px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
                onMouseEnter={() => handleButtonHover("apush-btn", true)}
                onMouseLeave={() => handleButtonHover("apush-btn", false)}
              >
                Link to Github
                <motion.div
                  animate={{
                    x: hoveredButtons["apush-btn"] ? 5 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <FiArrowRight size={20} />
                </motion.div>
              </Button>
            </Link>
          </div>
          <ProjectImage
            src="/roaring-twenties.png"
            alt="APUSH Roaring Twenties Project Screenshot"
          />
        </motion.div>
      ),
    },
  ];

  return (
    <section className="relative bg-gradient-to-tr from-[#020617] via-[#9fb0ff] to-[#ffffff] w-full py-20">
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#020617] to-[#2563eb] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Timeline
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          <Timeline
            data={data}
            lineClassName="bg-gradient-to-b from-blue-500 to-purple-500"
            dotClassName="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
