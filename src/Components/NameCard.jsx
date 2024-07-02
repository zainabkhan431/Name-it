import "./Namecard.css";

function NameCard({ names }) {
  const namecheapurl =
    "https://www.namecheap.com/domains/registration/results/?domain=";
  return (
    <a
      target="_black"
      rel="noreferrer"
      className="card-link"
      href={`${namecheapurl} ${names}`}
    >
      <div className="result-name-card">
        <p className="result-name">{names}</p>
      </div>
    </a>
  );
}

export default NameCard;
