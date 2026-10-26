import { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

const DEFAULT_FALLBACK = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80';

export default function SafeImage({ src, alt, fallbackSrc = DEFAULT_FALLBACK, className, ...props }: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  return (
    <img
      src={hasError ? fallbackSrc : imgSrc}
      alt={alt || 'Shri Swami Samarth Packers & Movers'}
      className={className}
      onError={() => {
        if (!hasError) {
          setHasError(true);
          setImgSrc(fallbackSrc);
        }
      }}
      loading="lazy"
      {...props}
    />
  );
}
