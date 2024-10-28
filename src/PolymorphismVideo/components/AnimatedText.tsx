import { interpolate, useCurrentFrame } from "remotion";

export const AnimatedText: React.FC<{
  text: string;
  color: string;
  delay?: number;
  fontSize?: number;
}> = ({ text, color, delay = 0, fontSize = 24 }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame - delay,
    [0, 30],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <p
      style={{
        fontSize,
        opacity,
        color,
        margin: "10px 0",
      }}
    >
      {text}
    </p>
  );
};