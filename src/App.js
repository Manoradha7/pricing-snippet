import "./App.css";
import Button from "@mui/material/Button";

export default function App() {
  return (
    <div className="App">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

// free card detils
function Card() {
  return (
    <div className="card-content">
      <div class="card-head">
        <h5 className="text-hide">
          <center>FREE</center>
        </h5>
        <h6>
          <center>
            $0<span className="period">/month</span>
          </center>
        </h6>
      </div>
      <hr />

      {/*card body part*/}
      <div className="card-body">
        <ul>
          <li> ✔ Single User </li>
          <li> ✔ 5GB Storage </li>
          <li> ✔ Unlimited Public Projects </li>
          <li> ✔ Community Access </li>
          <li className="text-hide"> ❌ Unlimited Private Projects</li>
          <li className="text-hide"> ❌ Dedicated Phone Support</li>
          <li className="text-hide">❌ Free Subdomain</li>
          <li className="text-hide"> ❌ Monthly Status Reports</li>
        </ul>
      </div>
      <div className="buy">
        <Button className="btn" variant="contained">
          BUTTON
        </Button>
      </div>
    </div>
  );
}
// Plus Card details
function Card1() {
  return (
    <div className="card-content">
      {/*card head part*/}
      <div class="card-head">
        <h5 className="text-hide">
          <center>PLUS</center>
        </h5>
        <h6>
          <center>
            $9<span className="period">/month</span>
          </center>
        </h6>
      </div>
      <hr />

      {/*card body part*/}
      <div className="card-body">
        <ul>
          <li>
            ✔ <b>5 Users</b>
          </li>
          <li> ✔ 50GB Storage </li>
          <li> ✔ Unlimited Public Projects </li>
          <li> ✔ Community Access </li>
          <li> ✔ Unlimited Private Projects </li>
          <li> ✔ Dedicated Phone Support </li>
          <li> ✔ Free Subdomain </li>
          <li className="text-hide">❌ Monthly Status Reports</li>
        </ul>
      </div>
      <div className="buy">
        <Button className="btn" variant="contained">
          BUTTON
        </Button>
      </div>
    </div>
  );
}
// Pro Card details
function Card2() {
  return (
    <div className="card-content">
      {/*card head part*/}
      <div class="card-head">
        <h5 className="text-hide">
          <center>PRO</center>
        </h5>
        <h6>
          <center>
            $49<span className="period">/month</span>
          </center>
        </h6>
      </div>
      <hr />

      {/*card body part*/}
      <div className="card-body">
        <ul>
          <li>✔ <b>Unlimited Users</b></li>
          <li> ✔ 150GB Storage </li>
          <li> ✔ Unlimited Public Projects </li>
          <li> ✔ Community Access </li>
          <li> ✔ Unlimited Private Projects </li>
          <li> ✔ Dedicated Phone Support </li>
          <li>✔ <b>Unlimited</b> Free Subdomain</li>
          <li> ✔ Monthly Status Reports </li>
        </ul>
      </div>
      <div className="buy">
        <Button className="btn" variant="contained">
          BUTTON
        </Button>
      </div>
    </div>
  );
}
