import { AbsoluteFill } from "remotion";
import { Title } from "../components/Title";
import { AnimatedText } from "../components/AnimatedText";
import { CodeBlock } from "../components/CodeBlock";

export const RuntimePolymorphism: React.FC<{
  darkMode: boolean;
  primaryColor: string;
  secondaryColor: string;
}> = ({ darkMode, primaryColor, secondaryColor }) => {
  const animalExample = `
abstract class Animal {
    abstract void makeSound();
    abstract void move();
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Woof!");
    }
    
    @Override
    void move() {
        System.out.println("Running on four legs");
    }
}

class Bird extends Animal {
    @Override
    void makeSound() {
        System.out.println("Chirp!");
    }
    
    @Override
    void move() {
        System.out.println("Flying");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal dog = new Dog();
        Animal bird = new Bird();
        
        // Dynamic method dispatch in action
        dog.makeSound();  // Outputs: Woof!
        bird.makeSound(); // Outputs: Chirp!
        
        dog.move();      // Outputs: Running on four legs
        bird.move();     // Outputs: Flying
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
      <Title text="Runtime Polymorphism" color={primaryColor} />
      
      <AnimatedText
        text="Method Overriding: Same method, different implementations"
        color={secondaryColor}
        delay={30}
        fontSize={32}
      />
      
      <div style={{ width: "80%", marginTop: 40 }}>
        <CodeBlock
          code={animalExample}
          darkMode={darkMode}
        />
      </div>
      
      <div style={{ marginTop: 40 }}>
        <AnimatedText
          text="✓ Resolved at runtime"
          color={secondaryColor}
          delay={90}
          fontSize={28}
        />
        <AnimatedText
          text="✓ Based on actual object type"
          color={secondaryColor}
          delay={120}
          fontSize={28}
        />
        <AnimatedText
          text="✓ Enables flexible and extensible code"
          color={secondaryColor}
          delay={150}
          fontSize={28}
        />
      </div>
    </AbsoluteFill>
  );
};