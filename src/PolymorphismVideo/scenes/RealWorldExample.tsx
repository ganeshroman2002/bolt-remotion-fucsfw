import { AbsoluteFill } from "remotion";
import { Title } from "../components/Title";
import { AnimatedText } from "../components/AnimatedText";
import { CodeBlock } from "../components/CodeBlock";

export const RealWorldExample: React.FC<{
  darkMode: boolean;
  primaryColor: string;
  accentColor: string;
}> = ({ darkMode, primaryColor, accentColor }) => {
  const paymentExample = `
interface PaymentProcessor {
    void processPayment(double amount);
}

class CreditCardPayment implements PaymentProcessor {
    @Override
    public void processPayment(double amount) {
        System.out.println("Processing $" + amount + " via Credit Card");
        // Credit card processing logic
    }
}

class PayPalPayment implements PaymentProcessor {
    @Override
    public void processPayment(double amount) {
        System.out.println("Processing $" + amount + " via PayPal");
        // PayPal processing logic
    }
}

class CryptoPayment implements PaymentProcessor {
    @Override
    public void processPayment(double amount) {
        System.out.println("Processing $" + amount + " via Cryptocurrency");
        // Crypto processing logic
    }
}

class PaymentService {
    private PaymentProcessor processor;
    
    public PaymentService(PaymentProcessor processor) {
        this.processor = processor;
    }
    
    public void makePayment(double amount) {
        processor.processPayment(amount);
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
      <Title text="Real World Example" color={primaryColor} />
      
      <AnimatedText
        text="Payment Processing System"
        color={accentColor}
        delay={30}
        fontSize={32}
      />
      
      <div style={{ width: "80%", marginTop: 40 }}>
        <CodeBlock
          code={paymentExample}
          darkMode={darkMode}
        />
      </div>
      
      <div style={{ marginTop: 40 }}>
        <AnimatedText
          text="✓ Flexible payment method integration"
          color={accentColor}
          delay={90}
          fontSize={28}
        />
        <AnimatedText
          text="✓ Easy to add new payment types"
          color={accentColor}
          delay={120}
          fontSize={28}
        />
        <AnimatedText
          text="✓ Consistent interface across implementations"
          color={accentColor}
          delay={150}
          fontSize={28}
        />
      </div>
    </AbsoluteFill>
  );
};