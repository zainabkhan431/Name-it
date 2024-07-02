import NameCard from "./NameCard";
import "./ResultContainer.css";

function ResultContainer({ result }) {
  const resultList = result.map((names, index) => {
    return <NameCard key={index} names={names} />;
  });
  return <div className="result-container">{resultList}</div>;
}

export default ResultContainer;
