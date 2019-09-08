import React from "react";
import "./Elixir.css";

const Elixir = ({ cards }) => {
  var sum = 0;
  for (var i = 0; i < cards.length; i++) {
    sum += cards[i].elixirCost;
  }

  var percentage = (sum / 8 / 10) * 100;

  return (
    <div id="average-power">
      <h3>Average Elixir Cost:</h3>
      <h2>
        <i class="fas fa-tint"> </i> {sum / 8}{" "}
      </h2>
      <div class="progress">
        <div
          class="progress-bar bg-warning"
          role="progressbar"
          style={{ width: `${percentage}%` }}
          aria-valuenow="60"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default Elixir;
