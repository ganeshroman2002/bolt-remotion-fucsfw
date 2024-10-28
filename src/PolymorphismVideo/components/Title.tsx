import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export const Title: React.FC<{
  text: string;
  color: string;
  fontSize?: number;
}> = ({ text, color, fontSize = 80 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  return (
    <h1
      style={{
        fontSize,
        opacity,
        color,
        textAlign: "center",
        marginBottom: 20,
      }}
    >
      {text}
    </h1>
  );
};