"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryProps {
  images: string[];
}

export function Gallery({ images }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 2;
  const maxIndex = Math.max(0, images.length - imagesPerPage);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleImages = images.slice(currentIndex, currentIndex + imagesPerPage);

  return (
    <div className="bg-black/40 rounded-xl p-8 border border-[#232329] shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-white">Gallery</h2>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleImages.map((image, index) => (
            <div
              key={currentIndex + index}
              className="relative rounded-lg overflow-hidden border border-[#232329] bg-black/20"
            >
              <Image
                src={image}
                alt={`Gallery image ${currentIndex + index + 1}`}
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {images.length > imagesPerPage && (
          <>
            {/* Previous Arrow */}
            {currentIndex > 0 && (
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-black/80 hover:bg-black/90 text-white p-3 rounded-full transition-all z-10 border border-[#232329]"
                aria-label="Previous images"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}

            {/* Next Arrow */}
            {currentIndex < maxIndex && (
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-black/80 hover:bg-black/90 text-white p-3 rounded-full transition-all z-10 border border-[#232329]"
                aria-label="Next images"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}
          </>
        )}

        {/* Image Counter */}
        {images.length > imagesPerPage && (
          <div className="mt-4 text-center text-gray-400 text-sm">
            Showing {currentIndex + 1}-{Math.min(currentIndex + imagesPerPage, images.length)} of {images.length} images
          </div>
        )}
      </div>
    </div>
  );
}
