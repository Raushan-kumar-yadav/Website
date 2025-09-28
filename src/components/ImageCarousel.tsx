import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';



    
type imageProps = {
    url:string,
    title:string,
    description:string
}

type imagesProps = {
    images:imageProps[]
}
    
const ImageCarousel: React.FC = ({images}:imagesProps) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);



    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setTimeout(() => setIsTransitioning(false), 500);
    };



    const toggleAutoPlay = () => {
        setIsAutoPlaying(!isAutoPlaying);
    };

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, currentIndex]);

    return (
        <div className="py-5 px-6 max-w-5xl mx-auto relative">
            <div className="relative w-full max-w-6xl mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                {/* Main carousel container */}
                <div className="relative h-96 md:h-[500px] overflow-hidden">
                    {/* Images */}
                    <div
                        className="flex transition-transform duration-500 ease-in-out h-full"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images.map((image, index) => (
                            <div key={index} className="w-full h-full flex-shrink-0 relative">
                                <img
                                    src={image.url}
                                    alt={image.title}
                                    className="w-full h-full object-cover"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                {/* Image info */}
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                                    <p className="text-gray-200 text-sm max-w-md opacity-50">{image.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Auto-play toggle */}
                    <button
                        onClick={toggleAutoPlay}
                        className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
                    >
                        {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                </div>

            </div>
            <div className="flex justify-center mt-3 mb-5">
                <div className="bg-card px-3 py-2 rounded-full shadow-xl border border-gray-600">
                    <div className="flex items-center space-x-6 ">
                        <button
                            onClick={prevSlide}
                            disabled={isTransitioning}
                            className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 shadow-lg"
                        >
                            <ChevronLeft className="w-3 h-3" />
                        </button>

                        <div className="text-white text-sm font-medium min-w-[3rem] text-center">
                            {currentIndex + 1} / {images.length}
                        </div>
                    
                        <button
                            onClick={nextSlide}
                            disabled={isTransitioning}
                            className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 shadow-lg"
                        >
                            <ChevronRight className="w-3 h-3" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;