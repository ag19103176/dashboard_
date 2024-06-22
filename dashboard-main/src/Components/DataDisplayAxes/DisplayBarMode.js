import React, { useEffect, useState } from "react";
import BarChartCard from "../Graph/barChart";

import axios from "axios";
const DisplayBarMode = ({ data }) => {
  const [goal, setGoal] = useState(false);
  const [labelText, setLabelText] = useState("0");
  const [showDataLabels, setShowDataLabels] = useState(false);
  const [valueToShow, setValueToShow] = useState("Some");
  const [showXAxisLabel, setShowXAxisLabel] = useState(true);
  const [showYAxisLabel, setShowYAxisLabel] = useState(true);
  const [xAxisLabelDisplayMode, setXAxisLabelDisplayMode] = useState("Show");

  const handleGoalChange = (e) => {
    setGoal(e.target.checked);
  };

  const handleLabelChange = (e) => {
    setLabelText(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setShowDataLabels(e.target.checked);
  };

  const handleValueToShowChange = (e) => {
    setValueToShow(e.target.value);
  };

  const handleXAxisLabelChange = (e) => {
    setShowXAxisLabel(e.target.checked);
  };

  const handleYAxisLabelChange = (e) => {
    setShowYAxisLabel(e.target.checked);
  };
  const handleXAxisLabelDisplayModeChange = (e) => {
    setXAxisLabelDisplayMode(e.target.value);
  };
  // const ChartData = {
  //   labels: data.map(d => d.label),
  //   datasets: [
  //     {
  //       label: 'Dataset',
  //       data: data.map(d => d.value),
  //       backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //       borderColor: 'rgba(75, 192, 192, 1)',
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  return (
    <>
      <div className="display-section">
        <div className="legend">
          <label className="label">Goal Line</label>
          <label className="switch">
            <input type="checkbox" checked={goal} onChange={handleGoalChange} />
            <span className="slider round"></span>
          </label>
        </div>

        {goal && (
          <>
            <div>
              <div>
                <label>Goal Value</label>
              </div>
              <div>
                <input
                  type="number"
                  // value={labelText}
                  onChange={handleGoalChange}
                />
              </div>
            </div>
            {/* <div>
            <div>
              <label>Goal Label</label>
            </div>
            <div>
              <input type="text" value={labelText} onChange={handleGoalLabelChange} />
            </div>
          </div> */}
          </>
        )}

        <div className="legend">
          <label className="label">Show values on data points</label>
          <label className="switch">
            <input
              type="checkbox"
              checked={showDataLabels}
              onChange={handleCheckboxChange}
            />
            <span className="slider round"></span>
          </label>
        </div>

        {valueToShow && (
          <>
            <div>
              <div>
                <label>Value to Show</label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="Some"
                    checked={valueToShow === "Some"}
                    onChange={handleValueToShowChange}
                  />
                  Some
                </label>
                <label>
                  <input
                    type="radio"
                    value="All"
                    checked={valueToShow === "All"}
                    onChange={handleValueToShowChange}
                  />
                  All
                </label>
              </div>
            </div>
            <div>
              <div>
                <label>Auto Formatting</label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="Hide"
                    checked={xAxisLabelDisplayMode === "Hide"}
                    onChange={handleXAxisLabelDisplayModeChange}
                  />
                  Auto
                </label>
                {/* <label>
                <input
                  type="radio"
                  value="Compact"
                  checked={xAxisLabelDisplayMode === "Compact"}
                  onChange={handleXAxisLabelDisplayModeChange}
                />
                Compact
              </label>
              <label>
                <input
                  type="radio"
                  value="Show"
                  checked={xAxisLabelDisplayMode === "Show"}
                  onChange={handleXAxisLabelDisplayModeChange}
                />
                Show
              </label> */}
                <label>
                  <input
                    type="radio"
                    value="Rotate 45°"
                    checked={xAxisLabelDisplayMode === "Rotate 45°"}
                    onChange={handleXAxisLabelDisplayModeChange}
                  />
                  Rotate 45°
                </label>
                <label>
                  <input
                    type="radio"
                    value="Rotate 90°"
                    checked={xAxisLabelDisplayMode === "Rotate 90°"}
                    onChange={handleXAxisLabelDisplayModeChange}
                  />
                  Rotate 90°
                </label>
              </div>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={showXAxisLabel}
                  onChange={handleXAxisLabelChange}
                />
                Show X-Axis Label
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={showYAxisLabel}
                  onChange={handleYAxisLabelChange}
                />
                Show Y-Axis Label
              </label>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DisplayBarMode;
