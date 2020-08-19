import React from "react";

function Do(props) {
  console.log(props);
  return (
    <div>
      <h3>{props.match.params.do_id}</h3>
    </div>
  );
}

export default Do;
