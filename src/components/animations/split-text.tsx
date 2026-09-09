
interface SplitTextProps {
  text: string;
  className?: string;
  charClassName?: string;
}

export function SplitText({ text, className = '', charClassName = '' }: SplitTextProps) {
  return (
    <span className={`inline-block ${className}`} aria-label={text}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`inline-block split-char ${charClassName}`}
          aria-hidden="true"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
