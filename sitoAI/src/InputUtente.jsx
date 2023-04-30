import "./form.css"
function InputUtente() {
  return (
    <form action="post">
      <div className="input">
        <div>
          <label htmlFor="period">Period</label>
          <input
            type="number"
            name="period"
            id="period"
            className="user-input"
          />
        </div>
        <div>
          <label htmlFor="data-value">Data Value</label>
          <input
            type="number"
            name="data-value"
            id="data-value"
            className="user-input"
          />
        </div>
        <div>
          <label htmlFor="">Lower_CI</label>
          <input type="number" name="lower_CI" id="" className="user-input" />
        </div>
        <div>
          <label htmlFor="">Upper_CI</label>
          <input type="number" name="upper_CI" id="" className="user-input" />
        </div>
        <div>
          <label htmlFor="">Units</label>
          <select name="units" id="" className="user-input">
            <option value="100FTEs">Per 100,000 FTEs</option>
            <option value="injuries">Injuries</option>
            <option value="100people">Per 100,000 people</option>
            <option value="km">Per billion km</option>
            <option value="registered_veichles">
              Per thousand registered vehicles
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="">Cause</label>
          <select name="cause" id="" className="user-input">
            <option value="all">All</option>
            <option value="assault">Assault</option>
            <option value="drowning">Drowing</option>
            <option value="falls">Falls</option>
            <option value="intent-self-harm">Intentional self-harm</option>
            <option value="traffic-crash">Motor vehicle traffic crashes</option>
            <option value="work">Work</option>
            <option value="car-occupant">Car occupant</option>
            <option value="intentional">Intentional</option>
            <option value="pedestrian">Pedestrian</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Population</label>
          <select name="population" id="" className="user-input">
            <option value="maori">Maori</option>
            <option value="whole_pop">Whole pop</option>
            <option value="children">Children</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Age</label>
          <select name="age" id="" className="user-input">
            <option value="0-14">0-14 years</option>
            <option value="0-74">0-74 years</option>
            <option value="75+">75+ years</option>
            <option value="all_ages">All ages</option>
          </select>
        </div>
      </div>
      <div id="submit">
        <input
          type="submit"
          value="Clicca per sapere se il bro muore"
          className="btn"
        />
      </div>
    </form>
  )
}
export default InputUtente
