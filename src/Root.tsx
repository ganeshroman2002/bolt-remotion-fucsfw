import { Composition } from "remotion";
import { PolymorphismVideo } from "./PolymorphismVideo";
import { z } from "zod";

export const polymorphismSchema = z.object({
  darkMode: z.boolean(),
  primaryColor: z.string(),
  secondaryColor: z.string(),
  accentColor: z.string(),
});

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="JavaPolymorphism"
        component={PolymorphismVideo}
        durationInFrames={12600} // 7 minutes at 30fps
        fps={30}
        width={1920}
        height={1080}
        schema={polymorphismSchema}
        defaultProps={{
          darkMode: true,
          primaryColor: "#BB86FC",
          secondaryColor: "#03DAC6",
          accentColor: "#CF6679",
        }}
      />
    </>
  );
};