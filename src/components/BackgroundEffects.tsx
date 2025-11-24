"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(22, 163, 74, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(254, 240, 138, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(22, 163, 74, 0.1) 0%, transparent 50%), radial-gradient(circle at 60% 60%, rgba(254, 240, 138, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 60% 60%, rgba(220, 38, 38, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(22, 163, 74, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(254, 240, 138, 0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0"
      />
      
      {/* Floating ambient sparkles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 1200,
            y: Math.random() * 800,
            scale: 0,
            opacity: 0
          }}
          animate={{
            x: [
              Math.random() * 1200,
              Math.random() * 1200,
              Math.random() * 1200
            ],
            y: [
              Math.random() * 800,
              Math.random() * 800,
              Math.random() * 800
            ],
            scale: [0, Math.random() * 0.5 + 0.3, 0],
            opacity: [0, Math.random() * 0.6 + 0.2, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2
          }}
          className="absolute"
        >
          <Sparkles 
            className={`w-${Math.floor(Math.random() * 3) + 2} h-${Math.floor(Math.random() * 3) + 2} ${i % 2 === 0 ? 'text-red-300/40' : 'text-green-300/40'}`} 
          />
        </motion.div>
      ))}
      
      {/* Floating light particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          initial={{
            x: Math.random() * 1200,
            y: 850,
            scale: 0
          }}
          animate={{
            x: [
              Math.random() * 1200,
              Math.random() * 1200 + (Math.random() - 0.5) * 200
            ],
            y: [
              850,
              -50
            ],
            scale: [0, Math.random() * 0.8 + 0.2, 0],
            opacity: [0, Math.random() * 0.4 + 0.1, 0]
          }}
          transition={{
            duration: Math.random() * 8 + 12,
            repeat: Infinity,
            ease: "easeOut",
            delay: i * 0.8
          }}
          className={`absolute w-1 h-1 ${i % 3 === 0 ? 'bg-red-300/60' : i % 3 === 1 ? 'bg-green-300/60' : 'bg-yellow-300/60'} rounded-full blur-sm`}
        />
      ))}
      
      {/* Subtle light rays */}
      <motion.div
        animate={{
          opacity: [0.05, 0.15, 0.05],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-red-200/20 via-green-200/10 to-transparent rounded-full blur-3xl"
      />
    </div>
  );
}