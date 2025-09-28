import { motion } from "framer-motion";
import { 
  Smartphone, 
  Laptop, 
  Camera, 
  Headphones, 
  Watch,
  Tablet,
  Monitor,
  Speaker,
  Keyboard,
  Mouse,
  Printer,
  Wifi,
  Bluetooth,
  Battery,
  Cpu,
  HardDrive,
  MemoryStick,
  Usb,
  Webcam,
  Router,
  Globe,
  Zap
} from "lucide-react";

type logoProps = {
  logo:string
}
const IconsSection = ({logo}:logoProps )=> {
  
  const iconSets = [
    [Smartphone, Laptop, Camera, Headphones, Watch],
    [Tablet, Monitor, Speaker, Keyboard, Mouse, Printer],
    [Wifi, Bluetooth, Battery, Cpu, HardDrive, MemoryStick],
    [Usb, Webcam, Router, Globe, Zap],
    [Smartphone, Camera, Watch, Monitor, Headphones, Battery]
  ];


  const createInfiniteIcons = (iconSet) => {

    const copies = [];
    for (let i = 0; i < 6; i++) {
      copies.push(...iconSet);
    }
    return copies;
  };

  const fadeInUp = {
    start: {
      opacity: 0,
      y: 30
    },
    end: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-5 px-6 max-w-5xl mx-auto relative">
      
      {/* Icons Container */}
      <div className="relative mt-5 h-[380px] overflow-hidden">
        {/* Central Main Icon */}
        <div className="absolute inset-0 flex items-center justify-center bottom-1/6 z-20">
          <motion.div
            variants={fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className=" rounded-2xl shadow-2xl backdrop-blur-lg "
          >
            <img src={logo} alt="" className="text-white size-20 "/> 
          </motion.div>
        </div>

        {/* Infinite Scrolling Icons Rows */}
        {iconSets.map((iconSet, rowIndex) => {
          const infiniteIcons = createInfiniteIcons(iconSet);
          const isEvenRow = rowIndex % 2 === 0;
          const iconWidth = 52; 
          const singleSetWidth = iconSet.length * iconWidth;
          
          return (
            <div 
              key={rowIndex}
              className="absolute w-full overflow-hidden"
              style={{
                top: `${rowIndex * 55 + 15}px`,
                maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
              }}
            >
              <motion.div
                className="flex gap-1 py-2"
                style={{
                  width: `${infiniteIcons.length * iconWidth}px`
                }}
                animate={{
                  x: isEvenRow 
                    ? [-singleSetWidth, 0] // Move from left to right
                    : [0, -singleSetWidth] // Move from right to left
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: iconSet.length * 3, // Adjust speed as needed
                    ease: "linear",
                  },
                }}
                variants={fadeInUp}
                initial='start'
                whileInView='end'
                viewport={{ once: true }}
              >
                {infiniteIcons.map((IconComponent, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center
                             bg-gradient-to-br from-white/10 to-white/5
                             backdrop-blur-md border border-white/20 rounded-lg
                             shadow-lg hover:shadow-xl transition-all duration-300
                             hover:scale-110 hover:bg-white/15"
                  >
                    <IconComponent 
                      size={20} 
                      className="text-white/80 hover:text-white transition-colors duration-300" 
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          );
        })}

        
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default IconsSection;