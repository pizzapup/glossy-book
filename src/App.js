import { SectionLayout } from "./components/SectionLayout/SectionLayout";
function App() {
  const data = {
    variant: "primary",
    variantType: "section",
    alignment: "center",
    headingText: "Section TextBlock",
    bodyText: "body content of primary textblock component",
    buttonText: "Section Button",
    images: [
      "https://place-puppy.com/400x600",
      "https://place-puppy.com/400x600",
    ],
    deviceView: "vertical",
    reverse: true,
  };
  return (
    <div>
      <SectionLayout {...data} />
    </div>
  );
}

export default App;
