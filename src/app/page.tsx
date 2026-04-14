import Title from "./components/Title";
import Grid from "./components/DestinationGrid";
import Container from "./components/Container";
import { travels, hotDest } from "@/lib/travels";

export default function Home() {
  return (
    <>
      <Title title="Passagens em destaque"/>
      <Grid travels={travels}/>
      <Title title="Lugares mais visitados"/>
      <Container hotDest={hotDest}/>
    </>
  );
}
