import { Column } from "./Column";

export const Clues = () => {
  const acrossClues: string[] = ["sleeps out in the woods"];
  const downClues: string[] = [];

  return (
    <section className="clues">
      <Column direction="across" clues={acrossClues} />
      <Column direction="down" clues={downClues} />
    </section>
  );
};
