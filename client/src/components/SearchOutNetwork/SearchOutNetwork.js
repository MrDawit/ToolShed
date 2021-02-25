import React from "react";
import {
    Button,
    UncontrolledTooltip,
} from "reactstrap";

export default function SearchOutNetwork(){
return(
<>
<Button
  className="btn-simple"
  color="info"
  href="#pablo"
  id="tooltip22"
  onClick={(e) => e.preventDefault()}
>
  <i className="tim-icons icon-bulb-63" /> Search It!
</Button>
<UncontrolledTooltip delay={0} placement="bottom" target="tooltip22">
  Search Outside of Directory
</UncontrolledTooltip>
</>
)
}