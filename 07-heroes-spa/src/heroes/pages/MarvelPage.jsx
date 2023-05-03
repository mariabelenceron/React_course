import { HeroList } from "../components";

export const MarvelPage = () => {
  return (
    <>
      <h1>DC Comics</h1>
      <hr />
      <ul>
        <HeroList publisher={"Marvel Comics"} />
      </ul>
    </>
  );
};
