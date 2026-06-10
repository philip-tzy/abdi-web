import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

type CarouselImage = {
  src: string;
  alt: string;
  caption?: string;
};

type ImageCarouselProps = {
  images: CarouselImage[];
  className?: string;
  imageClassName?: string;
  imageFitClassName?: string;
  showCaption?: boolean;
};

export function ImageCarousel({
  images,
  className = "",
  imageClassName = "h-56 sm:h-64",
  imageFitClassName = "object-cover",
  showCaption = true,
}: ImageCarouselProps) {
  const slides = useMemo(
    () =>
      images.length > 0
        ? images
        : [{ src: "/placeholder.svg", alt: "Documentation placeholder" }],
    [images],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = slides[activeIndex];
  const hasMultipleSlides = slides.length > 1;

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  return (
    <div className={`relative overflow-hidden rounded-xl border border-border/40 bg-muted/40 ${className}`}>
      <div className={`relative w-full overflow-hidden ${imageClassName}`}>
        <AnimatePresence mode="wait">
          <motion.img
            key={`${activeImage.src}-${activeIndex}`}
            src={activeImage.src}
            alt={activeImage.alt}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className={`h-full w-full ${imageFitClassName}`}
          />
        </AnimatePresence>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/35 to-transparent p-3">
          {showCaption && activeImage.caption && (
            <p className="text-sm font-medium text-foreground line-clamp-1">
              {activeImage.caption}
            </p>
          )}
          <div className="mt-2 flex items-center justify-between gap-3">
            <div className="flex items-center gap-1.5">
              <ImageIcon className="h-4 w-4 text-accent" />
              <span className="text-xs text-muted-foreground">
                {activeIndex + 1} / {slides.length}
              </span>
            </div>
            {hasMultipleSlides && (
              <div className="flex items-center gap-1.5">
                {slides.map((image, index) => (
                  <button
                    key={`${image.src}-${index}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show image ${index + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      activeIndex === index ? "w-6 bg-accent" : "w-2 bg-foreground/30"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {hasMultipleSlides && (
        <>
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-border/50 bg-background/80 text-foreground shadow-sm backdrop-blur transition hover:bg-background"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            aria-label="Next image"
            className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-border/50 bg-background/80 text-foreground shadow-sm backdrop-blur transition hover:bg-background"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}
    </div>
  );
}
