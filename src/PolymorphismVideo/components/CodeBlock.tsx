import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015, docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const CodeBlock: React.FC<{
  code: string;
  darkMode: boolean;
  language?: string;
}> = ({ code, darkMode, language = "java" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 100 },
  });

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      <SyntaxHighlighter
        language={language}
        style={darkMode ? vs2015 : docco}
        customStyle={{
          padding: "20px",
          fontSize: "24px",
          borderRadius: "8px",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};