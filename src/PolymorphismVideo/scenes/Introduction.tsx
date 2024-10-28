import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { CodeBlock } from "../components/CodeBlock";

export const Introduction: React.FC<{
  darkMode: boolean;
  primaryColor: string;
  secondaryColor: string;
}> = ({ darkMode, primaryColor, secondaryColor }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  const subtitleOpacity = spring({
    frame: frame - 30,
    fps,
    config: { damping: 200 },
  });

  const codeOpacity = interpolate(
    frame,
    [60, 90],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const shapeCode = `
abstract class Shape {
    abstract double area();
}

class Circle extends Shape {
    double radius;
    
    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    double width, height;
    
    @Override
    double area() {
        return width * height;
    }
}`;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
      }}
    >
      <h1
        style={{
          fontSize: 80,
          opacity: titleOpacity,
          color: primaryColor,
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Polymorphism in Java
      </h1>
      <h2
        style={{
          fontSize: 40,
          opacity: subtitleOpacity,
          color: secondaryColor,
          textAlign: "center",
          marginBottom: 60,
        }}
      >
        Dynamic Method Dispatch, Overloading & Overriding
      </h2>
      <div style={{ opacity: codeOpacity, width: "80%" }}>
        <CodeBlock
          code={shapeCode}
          darkMode={darkMode}
        />
      </div>
    </AbsoluteFill>
  );
};