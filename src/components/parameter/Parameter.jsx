import "./Parameter.css";

export default function Parameter({ planet, prm, ind }) {
  return (
    <div className="parameter">
      {ind === 0 || ind === 1 ? (
        <h3>
          {prm}
          <span> time</span>
        </h3>
      ) : ind === 3 ? (
        <h3>Avarage temp.</h3>
      ) : (
        <h3>{prm}</h3>
      )}
      <h4>{planet[prm.toLowerCase()]}</h4>
    </div>
  );
}
