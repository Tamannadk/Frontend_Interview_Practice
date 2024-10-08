import "./Tabs.css";
import { useState } from "react";
export default function Tabs({ tabsData, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  return (
    <div className="tabs">
      <div className="tabs_container">
        {tabsData.map((item, index) => {
          return (
            <button
              key={index}
              className={`${currentTabIndex === index ? "active" : ""}`}
              onClick={() => {
                setCurrentTabIndex(index);
                onChange(index);
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="tabs_content">{tabsData[currentTabIndex].content}</div>
    </div>
  );
}
