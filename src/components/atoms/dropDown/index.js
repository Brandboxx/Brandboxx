import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = ["Flex", "Lock", "Target"];

const defaultOption = options[0];

export const DropDown = () => (
  <Dropdown
    options={options}
    onChange={this._onSelect}
    value={defaultOption}
    placeholder="Select an option"
  />
);
