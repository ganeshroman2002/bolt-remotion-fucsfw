import { AbsoluteFill } from "remotion";
import { Title } from "../components/Title";
import { AnimatedText } from "../components/AnimatedText";

export const Benefits: React.FC<{
  darkMode: boolean;
  primaryColor: string;
  secondaryColor: string;
}> = ({ darkMode, primaryColor, secondaryColor }) => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 40,
      }}
    >
      <Title text="Benefits of Polymorphism" color={primaryColor} />
      
      <div style={{ marginTop: 60 }}>
        <AnimatedText
          text="1. Code Reusability"
          color={secondaryColor}
          delay={30}
          fontSize={36}
        />
        <AnimatedText
          text="Write once, use many times with different implementations"
          color={secondaryColor}
          delay={45}
          fontSize={24}
        />
        
        <AnimatedText
          text="2. Flexibility"
          color={secondaryColor}
          delay={90}
          fontSize={36}
        />
        <AnimatedText
          text="Easy to add new implementations without changing existing code"
          color={secondaryColor}
          delay={105}
          fontSize={24}
        />
        
        <AnimatedText
          text="3. Maintainability"
          color={secondaryColor}
          delay={150}
          fontSize={36}
        />
        <AnimatedText
          text="Clean, organized code that's easier to understand and modify"
          color={secondaryColor}
          delay={165}
          fontSize={24}
        />
        
        <AnimatedText
          text="4. Extensibility"
          color={secondaryColor}
          delay={210}
          fontSize={36}
        />
        <AnimatedText
          text="Simple to extend functionality through new implementations"
          color={secondaryColor}
          delay={225}
          fontSize={24}
        />
      </div>
    </AbsoluteFill>
  );
};