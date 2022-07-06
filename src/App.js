
import React from "react";
const SlotM=(props)=>{
  // let x='😂';
  // let y='😂';
  // let z='😭';
  // let x=props.x;
  // let y=props.y;
  // let z=props.z;
  //let points = 0;
    let icons = ["😃", "👏", "🎨"];
    let x = icons[Math.floor(Math.random() * icons.length)];
    let y = icons[Math.floor(Math.random() * icons.length)];
    let z = icons[Math.floor(Math.random() * icons.length)];
if((x===y)&&(y===z))
{
  return(
    <>
<div className="slot_inner">
<h1>
{x}{y}{z}
</h1>
<h1>This is Matching</h1>
<hr/>
</div>
    </>
  );
}
else{
  return(
    <>
<div className="slot_inner">
<h1>
{x}{y}{z}
</h1>
<h1>This is not Matching.</h1>
<hr/>
</div>
    </>
  );
}
}
const App=()=>{
  return (
  <>
<h1 className="heading_style">
💻 Welcome To <span style={{fontWeight:'bold'}}>Slot machine game 💻</span>
</h1>
<div className="slotmachine">
<SlotM/>
{/* <hr/> */}
<SlotM/>
{/* <hr/> */}
<SlotM/>
{/* <hr/> */}
<SlotM/>
{/* <hr/> */}
<SlotM/>
</div>
  </>
  );
};

export default App;
