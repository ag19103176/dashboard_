import React, { useState } from "react";
const Axes = () => {
  const [formState, setFormState] = useState({
    xAxisShowLabel: false,
    xAxisLabel: "",
    yAxisShowLabel: false,
    yAxisLabel: "",
    showLinesAndMarks: "Show",
    scale: "Ordinal",
  });

  const handleToggle = (event) => {
    const { name, checked } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="axes">
      <div className="form-group">
        <h4>X-Axis</h4>
        <div>
          <label htmlFor="xAxisShowLabel">Show Label</label>
          <label className="switch">
            <input
              type="checkbox"
              id="xAxisShowLabel"
              name="xAxisShowLabel"
              checked={formState.xAxisShowLabel}
              onChange={handleToggle}
            />
            <span className="slider round"></span>
          </label>
        </div>

        {formState.xAxisShowLabel && (
          <div>
            <label htmlFor="xAxisLabel">Label</label>
            <div>
              <input
                type="text"
                id="xAxisLabel"
                name="xAxisLabel"
                value={formState.xAxisLabel}
                onChange={handleChange}
                required={formState.xAxisShowLabel}
              />
            </div>
          </div>
        )}

        <div>
          <label htmlFor="showLinesAndMarks">Show Lines and Marks</label>
          <div>
            <select
              id="showLinesAndMarks"
              name="showLinesAndMarks"
              value={formState.showLinesAndMarks}
              onChange={handleChange}
            >
              <option value="Hide">Hide</option>
              <option value="Show">Show</option>
              <option value="Compact">Compact</option>
              <option value="Rotate45">Rotate 45</option>
              <option value="Rotate90">Rotate 90</option>
            </select>
          </div>
        </div>
      </div>

      <div className="form-group">
        <h4>Y-Axis</h4>
        <div>
          <label htmlFor="yAxisShowLabel">Show Label</label>
          <label className="switch">
            <input
              type="checkbox"
              id="yAxisShowLabel"
              name="yAxisShowLabel"
              checked={formState.yAxisShowLabel}
              onChange={handleToggle}
            />
            <span className="slider round"></span>
          </label>
        </div>

        {formState.yAxisShowLabel && (
          <div>
            <label htmlFor="yAxisLabel">Label</label>
            <div>
              <input
                type="text"
                id="yAxisLabel"
                name="yAxisLabel"
                value={formState.yAxisLabel}
                onChange={handleChange}
                required={formState.yAxisShowLabel}
              />
            </div>
          </div>
        )}
      </div>

      {/* <div className="form-group">
        <label htmlFor="autoYAxisRange">Auto Y-axis Range</label>
        <label className="switch">
          <input
            type="checkbox"
            id="autoYAxisRange"
            name="autoYAxisRange"
            checked={formState.autoYAxisRange}
            onChange={handleToggle}
          />
          <span className="slider round"></span>
        </label>
      </div> */}

      {/* {!formState.autoYAxisRange && (
        <div>
          <label htmlFor="yAxisMinValue">Minimum Value</label>
          <div><input
            type="number"
            id="yAxisMinValue"
            name="yAxisMinValue"
            value={formState.yAxisMinValue}
            onChange={handleChange}
          /></div>
        </div>
      )} */}

      {/* {!formState.autoYAxisRange && (
        <div>
          <label htmlFor="yAxisMaxValue">Maximum Value</label>
          <div><input
            type="number"
            id="yAxisMaxValue"
            name="yAxisMaxValue"
            value={formState.yAxisMaxValue}
            onChange={handleChange}
          /></div>
        </div>
      )} */}
      <div className="form-group">
        <label htmlFor="showLinesAndMarks">Show Lines and Marks</label>
        <div>
          <select
            id="showLinesAndMarks"
            name="showLinesAndMarks"
            value={formState.showLinesAndMarks}
            onChange={handleChange}
          >
            <option value="Hide">Hide</option>
            <option value="Show">Show</option>
            <option value="Compact">Compact</option>
            <option value="Rotate45">Rotate 45</option>
            <option value="Rotate90">Rotate 90</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Axes;
