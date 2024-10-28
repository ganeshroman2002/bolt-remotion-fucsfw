import { AbsoluteFill, Series } from "remotion";
import { Introduction } from "./scenes/Introduction";
import { TypesOfPolymorphism } from "./scenes/TypesOfPolymorphism";
import { CompileTimePolymorphism } from "./scenes/CompileTimePolymorphism";
import { RuntimePolymorphism } from "./scenes/RuntimePolymorphism";
import { RealWorldExample } from "./scenes/RealWorldExample";
import { Benefits } from "./scenes/Benefits";
import { Conclusion } from "./scenes/Conclusion";
import { z } from "zod";
import { polymorphismSchema } from "../Root";

export const PolymorphismVideo: React.FC<z.infer<typeof polymorphismSchema>> = ({
  darkMode,
  primaryColor,
  secondaryColor,
  accentColor,
}) => {
  const backgroundColor = darkMode ? "#121212" : "#ffffff";
  const textColor = darkMode ? "#ffffff" : "#000000";

  return (
    <AbsoluteFill
      style={{
        backgroundColor,
        color: textColor,
        fontFamily: "SF Pro Text, system-ui, sans-serif",
      }}
    >
      <Series>
        <Series.Sequence durationInFrames={900}>
          <Introduction
            darkMode={darkMode}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={1800}>
          <TypesOfPolymorphism
            darkMode={darkMode}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={2700}>
          <CompileTimePolymorphism
            darkMode={darkMode}
            primaryColor={primaryColor}
            accentColor={accentColor}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={2700}>
          <RuntimePolymorphism
            darkMode={darkMode}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={1800}>
          <RealWorldExample
            darkMode={darkMode}
            primaryColor={primaryColor}
            accentColor={accentColor}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={1800}>
          <Benefits
            darkMode={darkMode}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={900}>
          <Conclusion
            darkMode={darkMode}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};