import "./form.css"

function InputUtente({ onSubmit }) {
  return (
    <form className="allInputs" onSubmit={(e) => onSubmit(e)}>
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
            name="data_value"
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
            <option value="Per%20100,000%20FTEs">Per 100,000 FTEs</option>
            <option value="Injuries">Injuries</option>
            <option value="Per%20100,000%20people">Per 100,000 people</option>
            <option value="Per%20billion%20km">Per billion km</option>
            <option value="Per%20thousand%20registered%20vehicles">
              Per thousand registered vehicles
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="">Cause</label>
          <select name="cause" id="" className="user-input">
            <option value="All">All</option>
            <option value="Assault">Assault</option>
            <option value="Drowing">Drowing</option>
            <option value="Falls">Falls</option>
            <option value="Intentional%20self-harm">
              Intentional self-harm
            </option>
            <option value="Motor%20vehicle%20traffic%20crashes">
              Motor vehicle traffic crashes
            </option>
            <option value="Work">Work</option>
            <option value="Car%20occupant">Car occupant</option>
            <option value="Intentional">Intentional</option>
            <option value="Pedestrian">Pedestrian</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Population</label>
          <select name="population" id="" className="user-input">
            <option value="Maori">Maori</option>
            <option value="Whole%20pop">Whole pop</option>
            <option value="Children">Children</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Age</label>
          <select name="age" id="" className="user-input">
            <option value="0-14%20years">0-14 years</option>
            <option value="0-74%20years">0-74 years</option>
            <option value="All%20ages">All ages</option>
          </select>
        </div>
      </div>
      <div id="submit">
        <input
          type="submit"
          value="Verifica la condizione della persona"
          className="btn"
        />
      </div>
    </form>
  )
}
export default InputUtente
