import React from 'react';

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-6">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="space-y-6 text-lg text-gray-600">
          <p>
            With over a decade of experience in software engineering, I specialize in 
            building scalable applications that solve complex problems while maintaining 
            elegant user experiences.
          </p>
          <p>
            My expertise spans full-stack development, distributed systems, and 
            cloud architecture. I'm passionate about clean code, performance optimization, 
            and creating intuitive interfaces.
          </p>
        </div>
      </div>
    </section>
  );
}