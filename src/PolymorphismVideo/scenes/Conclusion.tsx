import { AbsoluteFill } from "remotion";
import { Title } from "../components/Title";
import { AnimatedText } from "../components/AnimatedText";

export const Conclusion: React.FC<{
  darkMode: boolean;
  primaryColor: string;
  secondaryColor: string;
}> = ({ darkMode, primaryColor, secondaryColor }) => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
      }}
    >
      <Title text="Key Takeaways" color={primaryColor} />
      
      <div style={{ marginTop: 40 }}>
        <AnimatedText
          text="✓ Polymorphism enables flexible and maintainable code"
          color={secondaryColor}
          delay={30}
          fontSize={32}
        />
        <AnimatedText
          text="✓ Choose between compile-time and runtime based on needs"
          color={secondaryColor}
          delay={60}
          fontSize={32}
        />
        <AnimatedText
          text="✓ Real-world applications benefit from polymorphic design"
          color={secondaryColor}
          delay={90}
          fontSize={32}
        />
      </div>
      
      <div style={{ marginTop: 60 }}>
        <AnimatedText
          text="Start implementing polymorphism in your Java projects today!"
          color={primaryColor}
          delay={120}
          fontSize={36}
        />
      </div>
    </AbsoluteFill>
  );
};