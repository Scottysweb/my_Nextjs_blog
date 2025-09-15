// components/TextSlideshow.js
"use client";
import React, { useState, useEffect } from 'react';
import { slides } from '@/lib/ss'; // Assuming you have a data.js file
import { Quote } from "lucide-react";

const TextSlideshow = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlideIndex((prevIndex) =>
                (prevIndex + 1) % slides.length
            );
        }, 3000); // Change slide every 3 seconds (3000ms)

        return () => clearInterval(timer); // Cleanup on unmount
    }, []);

    const currentSlide = slides[currentSlideIndex];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">   
        <div className="slideshow-container">
            <Quote className="h-12 w-12 text-primary/30 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-serif font-medium text-foreground leading-relaxed mb-6 mx-auto text-center">
                {`"${currentSlide.text}"`}
            </blockquote>
            <blockquote className="text-xl text-center font-bold">
                {currentSlide.author}
            </blockquote>
            
                </div>
                </div>
        </section>

    );
};

export default TextSlideshow;