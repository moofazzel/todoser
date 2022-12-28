import { Navbar } from "flowbite-react";
import { Text, Dropdown, User } from "@nextui-org/react";
import Link from "next/link";

import { BiPlus } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";
import { MdTaskAlt } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-primary">
      <Navbar className="container !bg-inherit">
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            TODOser
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <li>
            <Link className="flex items-center text-inactiveText" href={"/"}>
              <BiPlus className="text-2xl" />
              Add Task
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center text-inactiveText"
              href={"/my_task"}
            >
              <TbListDetails className="text-2xl" />
              My Task
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center text-inactiveText"
              href={"/completed_task"}
            >
              <MdTaskAlt className="text-2xl" />
              Completed Task
            </Link>
          </li>
        </Navbar.Collapse>

        <div>
          <Dropdown placement="bottom-right">
            <Dropdown.Trigger>
              <User
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                name="Ariana Wattson"
              />
            </Dropdown.Trigger>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="warning"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
