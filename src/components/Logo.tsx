// Inline SVG logo — crisp at any size, transparent background, matches brand palette.
const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    {/* ECG / heartbeat waveform */}
    <svg
      width="58"
      height="40"
      viewBox="0 0 44 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <polyline
        points="0,15 7,15 10,20 14,2 18,26 22,15 30,15 33,11 36,18 40,15 44,15"
        stroke="hsl(160, 70%, 45%)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

    {/* Wordmark */}
    <span
      className="font-heading font-bold tracking-tight leading-none select-none"
      style={{ fontSize: "1.5rem" }}
    >
      <span className="text-foreground">TheVitals</span>
      <span className="text-primary">.ai</span>
    </span>
  </div>
);

export default Logo;
