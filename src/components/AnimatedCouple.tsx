import coupleSprites from "@/assets/kirti.png";
import { cn } from "@/lib/utils";

interface AnimatedCoupleProps {
  className?: string;
}

export const AnimatedCouple = ({ className }: AnimatedCoupleProps) => {
  return (
    <div className={cn("relative w-60 h-60 mx-auto relative overflow-hidden", className)}>
      <img
        src={coupleSprites}
        alt="Cute animated couple"
        className="w-full h-full object-contain pixelated scale-[2] -translate-x-10 absolute"
        style={{ imageRendering: "pixelated" }}
      />
    </div>
  );
};