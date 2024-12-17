import React from 'react';
import { ArrowDown } from 'lucide-react';
import { ScrollingText } from '../animations/ScrollingText';
import { useScrollVelocity } from '../../hooks/useScrollVelocity';
import { useScrollDirection } from '../../hooks/useScrollDirection';

export function Hero() {
  const scrollVelocity = useScrollVelocity();
  const scrollDirection = useScrollDirection();

  return (
    <section id="hero" 
      className="h-screen flex items-center justify-center px-6 bg-cover bg-center font-exo2"
      style={{ backgroundImage: "../src/images/headshot.jpg" }}>
      <div className="w-full space-y-2">
        <div className="space-y-1">
          <ScrollingText
            text="Cole Bregman --"
            baseSpeed={0.5}
            direction={scrollDirection}
            scrollVelocity={scrollVelocity}
            className="text-5xl md:text-7xl font-bold"
          />
        </div>
        
        <p className="text-xl text-gray-600 max-w-2xl">
          Hi, Cole Bregman. I craft products that combine technical excellence 
          with beautiful design. Currently studying Mechanical Engineering at Columbia University.
        </p>
        
        <div className="animate-bounce">
          <ArrowDown size={24} />
        </div>
      </div>
    </section>
  );
}