import { useState, useEffect } from "react";

function Table({ tabList = [] }) {
  const getActivetab = () => {
    const savedindex = localStorage.getItem("activeTab");

    return savedindex !== null ? parseInt(savedindex, 10) : 0;
  };

  const [activeTab, setActivetab] = useState(getActivetab);

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  return (
    <div className="app-wrapper">
      <div className="tabcontainer">
        {tabList.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActivetab(index)}
            className={index === activeTab ? "active" : ""}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tabcontent">{tabList[activeTab]?.content}</div>
    </div>
  );
}

export default Table;
