import { AbsoluteFill } from "remotion";
import { Title } from "../components/Title";
import { AnimatedText } from "../components/AnimatedText";
import { CodeBlock } from "../components/CodeBlock";

export const TypesOfPolymorphism: React.FC<{
  darkMode: boolean;
  primaryColor: string;
  secondaryColor: string;
}> = ({ darkMode, primaryColor, secondaryColor }) => {
  const compileTimeExample = `
class Calculator {
    // Method Overloading
    int add(int a, int b) {
        return a + b;
    }
    
    int add(int a, int b, int c) {
        return a + b + c;
    }
}`;

  const runtimeExample = `
class Animal {
    void makeSound() {
        System.out.println("Some sound");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Woof!");
    }
}`;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 40,
      }}
    >
      <Title text="Types of Polymorphism" color={primaryColor} />
      
      <div style={{ width: "100%", display: "flex", justifyContent: "space-around", marginTop: 40 }}>
        <div style={{ width: "45%" }}>
          <Title text="Compile-Time" color={secondaryColor} fontSize={50} />
          <AnimatedText
            text="Also known as Static Polymorphism"
            color={secondaryColor}
            delay={30}
          />
          <AnimatedText
            text="Achieved through Method Overloading"
            color={secondaryColor}
            delay={60}
          />
          <div style={{ marginTop: 20 }}>
            <CodeBlock
              code={compileTimeExample}
              darkMode={darkMode}
            />
          </div>
        </div>
        
        <div style={{ width: "45%" }}>
          <Title text="Runtime" color={secondaryColor} fontSize={50} />
          <AnimatedText
            text="Also known as Dynamic Polymorphism"
            color={secondaryColor}
            delay={30}
          />
          <AnimatedText
            text="Achieved through Method Overriding"
            color={secondaryColor}
            delay={60}
          />
          <div style={{ marginTop: 20 }}>
            <CodeBlock
              code={runtimeExample}
              darkMode={darkMode}
            />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};