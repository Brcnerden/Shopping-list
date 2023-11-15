import Dropdown from "react-bootstrap/Dropdown";
import * as D from "./DropdownStyled";

function Markets() {
  const marketsName = [
    {
      id: 1,
      name: "Metro",
    },
    {
      id: 2,
      name: "Migros",
    },
    {
      id: 3,
      name: "Carrefoursa",
    },
  ];

  const categoryNames = [
    {
      id: 1,
      name: "Elektronik",
    },

    {
      id: 2,
      name: "Gıda",
    },
    {
      id: 3,
      name: "Deterjan",
    },
  ];

  return (
    <>
      <D.Header>
        <div className="d-flex gap-2">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Markets
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {marketsName.map((market) => (
                <Dropdown.Item
                  value="market.name"
                  href="#/action-3"
                  key={market.id}
                >
                  {market.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Categories
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {categoryNames.map((category) => (
                <Dropdown.Item
                  name="category"
                  id="category"
                  value={category.name}
                  href="#/action-3"
                  key={category.id}
                >
                  {category.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </D.Header>
    </>
  );
}

export default Markets;
