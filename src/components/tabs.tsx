import React from "react";
interface Props {
  tabs: string[];
  disabled?: string[];
  activeTab: string;
  activeTabName?: string;
  handleTabChange: (tab: string) => void;
}

/**
 * Tabs component, to show tabs
 * @param tabs - tabs to show
 * @param activeTab - active tab
 * @param handleTabChange - function to handle tab change
 */
const Tabs: React.FC<Props> = (props) => {
  return (
    <div className='custom-tabs'>
      {props.tabs.map((tab, index: number) => {
        const onClick = () => {
          props.activeTab !== tab && props.handleTabChange(tab);
        };
        return (
          <button
            disabled={(props.disabled || []).includes(tab)}
            onClick={onClick}
            className={
              props.activeTab === tab || tab === props.activeTabName
                ? "btn-active m-5"
                : "m-5"
            }
            key={`${tab}${index}`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
