import { createLocation, History  } from "history";
import * as React from "react";
import { MouseEvent } from "react";
import * as ReactDOM from "react-dom";
import * as router from "react-router";
import { BrowserRouter, NavLink as RRNavLink, withRouter } from "react-router-dom";
import {
    Collapse,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown,
} from "reactstrap";



interface IHeaderProps {
    history: History;
    brand: string;
}

interface IHeaderState {
    collapseMenuOpen: boolean;
    isOpen: boolean;
}

export class Header extends React.Component <IHeaderProps, IHeaderState> {
    constructor(props: IHeaderProps) {
        super(props);
        this.state = {collapseMenuOpen : false, isOpen: false};
        this.toggle = this.toggle.bind(this);
        this.navigateTo = this.navigateTo.bind(this);
    }

    public render() {
        return <div className="MainMenu">
            <Navbar color="primary" inverse expand="md">
                <NavbarBrand href="/">PSROCKS</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.collapseMenuOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/home" onClick= {(e) => {e.preventDefault();
                                                                    this.navigateTo("/home"); }} >Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/edit" onClick= {(e) => {e.preventDefault();
                                                                    this.navigateTo("/edit"); }} >Edit</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about" onClick= {(e) => {e.preventDefault();
                                                                     this.navigateTo("/about"); }} >About</NavLink>
                        </NavItem>
                        <UncontrolledDropdown  nav >
                            <DropdownToggle nav caret>
                                 Options
                            </DropdownToggle>
                            <DropdownMenu >
                                <DropdownItem>
                                     Option 1
                                </DropdownItem>
                                <DropdownItem>
                                     Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>;
    }

    private navigateTo(path: string) {
         this.props.history.push(path);
    }

    private toggle(e: MouseEvent<HTMLAnchorElement>) {
        this.setState((prevState: IHeaderState) => {
            return {
                ...prevState,
                ...{
                    collapseMenuOpen : !prevState.collapseMenuOpen,
                },
            };
        });
    }
}
