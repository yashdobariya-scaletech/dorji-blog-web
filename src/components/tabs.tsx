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
    console.log(props);
    return (
        <div className="custom-tabs d-flex font-size-18 font-weight--600 ">
            {props.tabs.map((tab, index: number) => {
                const onClick = () => {
                    props.activeTab !== tab && props.handleTabChange(tab);
                };
                return (
                    <button
                        disabled={(props.disabled || []).includes(tab)}
                        onClick={onClick}
                        className={`tabs-btn ${
                            props.activeTab === tab ||
                            tab === props.activeTabName
                                ? "tabs-btn-active mx-10"
                                : "mx-10"
                        }`}
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
