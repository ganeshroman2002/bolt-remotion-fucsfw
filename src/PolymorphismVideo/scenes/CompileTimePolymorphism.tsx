import { AbsoluteFill } from "remotion";
import { Title } from "../components/Title";
import { AnimatedText } from "../components/AnimatedText";
import { CodeBlock } from "../components/CodeBlock";

export const CompileTimePolymorphism: React.FC<{
  darkMode: boolean;
  primaryColor: string;
  accentColor: string;
}> = ({ darkMode, primaryColor, accentColor }) => {
  const calculatorExample = `
class Calculator {
    // Basic addition
    double add(double a, double b) {
        return a + b;
    }
    
    // Triple addition
    double add(double a, double b, double c) {
        return a + b + c;
    }
    
    // Array addition
    double add(double[] numbers) {
        double sum = 0;
        for (double num : numbers) {
            sum += num;
        }
        return sum;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        
        // Different method calls
        System.out.println(calc.add(5.0, 3.0));         // Uses first method
        System.out.println(calc.add(5.0, 3.0, 2.0));    // Uses second method
        System.out.println(calc.add(new double[]{1.0, 2.0, 3.0, 4.0})); // Uses third method
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
      <Title text="Compile-Time Polymorphism" color={primaryColor} />
      
      <AnimatedText
        text="Method Overloading: Same name, different parameters"
        color={accentColor}
        delay={30}
        fontSize={32}
      />
      
      <div style={{ width: "80%", marginTop: 40 }}>
        <CodeBlock
          code={calculatorExample}
          darkMode={darkMode}
        />
      </div>
      
      <div style={{ marginTop: 40 }}>
        <AnimatedText
          text="✓ Resolved at compile time"
          color={accentColor}
          delay={90}
          fontSize={28}
        />
        <AnimatedText
          text="✓ Based on method signatures"
          color={accentColor}
          delay={120}
          fontSize={28}
        />
        <AnimatedText
          text="✓ Improves code readability"
          color={accentColor}
          delay={150}
          fontSize={28}
        />
      </div>
    </AbsoluteFill>
  );
};