import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button
        className="btn btn-info"
        disabled={isLoading}
        onClick={() => decrement(1)}
      >
        Previous Quote
      </button>
      <button
        className="btn btn-info"
        disabled={isLoading}
        onClick={() => increment(1)}
      >
        Next Quote
      </button>
    </>
  );
};
