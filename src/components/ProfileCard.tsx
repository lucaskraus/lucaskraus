import { Github, Linkedin, Twitter, Mail, Globe } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';
import profilePicture from '@/assets/profile.jpg';

export default function ProfileCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Create smooth spring animations with increased intensity
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, -20]), {
    stiffness: 400,
    damping: 20
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), {
    stiffness: 400,
    damping: 20
  });
  
  const translateZ = useSpring(0, {
    stiffness: 400,
    damping: 20
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate normalized position (-0.5 to 0.5) and clamp to prevent extreme values
    const normalizedX = Math.max(-0.5, Math.min(0.5, (e.clientX - centerX) / (rect.width / 2)));
    const normalizedY = Math.max(-0.5, Math.min(0.5, (e.clientY - centerY) / (rect.height / 2)));
    
    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };
  
  const handleHoverStart = () => {
    translateZ.set(50);
  };
  
  const handleHoverEnd = () => {
    mouseX.set(0);
    mouseY.set(0);
    translateZ.set(0);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/lucaskraus',
      color: 'hover:text-purple-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/lucaskraus',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/lucaskraus',
      color: 'hover:text-sky-400'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:hello@lucaskraus.com',
      color: 'hover:text-green-400'
    },
    {
      name: 'Website',
      icon: Globe,
      url: 'https://lucaskraus.com',
      color: 'hover:text-orange-400'
    }
  ];

  return (
    <div style={{ perspective: '1000px' }}>
      <motion.div
        ref={cardRef}
        className='flex rounded-xl metallic-button px-10 py-4 flex-col gap-4 items-center'
        style={{
          transformStyle: 'preserve-3d',
          rotateX,
          rotateY,
          translateZ,
        }}
        onMouseMove={handleMouseMove}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      >
        <img src={profilePicture} alt="Profile" className='w-40 h-40 rounded-full' />
        <h1 className='text-3xl font-vt323'>Lucas Kraus</h1>
        <div className='flex flex-col gap-2 items-start w-full'>
          <div className='flex flex-row gap-2 items-center'>
            <Github className='w-4 h-4' />
            <p className='text-base font-vt323'>lucaskraus</p>
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <Linkedin className='w-4 h-4' />
            <p className='text-base font-vt323'>GitHub</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

