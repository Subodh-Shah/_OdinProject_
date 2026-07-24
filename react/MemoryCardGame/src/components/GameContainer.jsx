import ScoreContainer from "./ScoreContainer.jsx";
import MemoryCardContainer from "./MemoryCardContainer.jsx";

export default function GameContainer() {
  return (
    <div>
      {console.log("GameContainer is rendering")}
      <h2 style={{ textAlign: "center" }}>Memory Card Game</h2>
      <ScoreContainer />
      <MemoryCardContainer />
    </div>
  );
}
