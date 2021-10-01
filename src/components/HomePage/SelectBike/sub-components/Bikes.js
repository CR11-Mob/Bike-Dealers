import { useEffect } from "react";

export default function Bikes(props) {
  useEffect(() => {
    console.log("Bikes Grid:", props.displayBike);
  }, [props.displayBike]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {props.displayBike &&
        props.displayBike.map((bike, index) => (
          <div key={bike.model}>
            <div>
              <img height="100" width="100" src={bike.img} alt={`${index}`} />
            </div>
            <div>{bike.price}</div>
            <div>{bike.model}</div>
          </div>
        ))}
    </div>
  );
}
