import React, { Fragment, useState, useEffect } from "react";
import { APP_NAME } from "../config";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import { signout, isAuth } from "../actions/auth";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import ".././node_modules/nprogress/nprogress.css";
import Search from "./blog/Search";

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <Navbar
        // color="dark"
        light
        expand="md"
        style={{
          backgroundColor: " #8d9db6",
        }}
      >
        {/* LOGO */}
        <Link href="/">
          <img src="/static/images/favicon.png" width="55" height="55" />
        </Link>

        <Link href="/">
          <NavLink
            className="font-weight-bold"
            style={{
              color: "black",
              fontFamily: "Georgia,sans-serif",
              fontSize: "25px",
              cursor: "pointer",
            }}
          >
            {APP_NAME}
          </NavLink>
        </Link>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link href="/blogs">
                {/* <NavLink>Blogs</NavLink> */}
                <button
                  className="btn btn-lg btn-primary rounded-pill mr-2 mt-1"
                  style={{
                    backgroundColor: "#daebe8",
                    color: " #6b5b95",
                    borderColor: "#8f5b95",
                    width: "100px",
                    fontSize: "16px",
                  }}
                >
                  Blogs
                </button>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/contact">
                {/* <NavLink>Blogs</NavLink> */}
                <button
                  className="btn btn-lg btn-primary rounded-pill mr-2 mt-1"
                  style={{
                    backgroundColor: "#daebe8",
                    color: " #6b5b95",
                    borderColor: "#8f5b95",
                    width: "100px",
                    fontSize: "16px",
                  }}
                >
                  Contact
                </button>
              </Link>
            </NavItem>

            {/* </Fragment> */}
            {!isAuth() && (
              <Fragment>
                <NavItem>
                  <Link href="/signin">
                    {/* <NavLink>Signin</NavLink> */}
                    <button
                      className="btn btn-lg btn-primary rounded-pill mr-2 mt-1"
                      style={{
                        backgroundColor: "#daebe8",
                        color: " #6b5b95",
                        borderColor: "#8f5b95",
                        width: "90px",
                        fontSize: "16px",
                      }}
                    >
                      Signin
                    </button>
                  </Link>
                </NavItem>

                <NavItem>
                  <Link href="/signup">
                    {/* <NavLink>Signup</NavLink> */}
                    <button
                      className="btn btn-lg btn-primary rounded-pill mr-2 mt-1"
                      style={{
                        backgroundColor: "#daebe8",
                        color: " #6b5b95",
                        borderColor: "#8f5b95",
                        width: "90px",
                        fontSize: "16px",
                      }}
                    >
                      Signup
                    </button>
                  </Link>
                </NavItem>
              </Fragment>
            )}
            {isAuth() && (
              <NavItem>
                {/* <NavLink
                  style={{ cursor: "pointer" }}
                  onClick={() => signout(() => Router.replace(`/signin`))}
                >
                  Signout
                </NavLink> */}
                <button
                  className="btn btn-lg btn-primary rounded-pill mr-2 mt-1"
                  style={{
                    backgroundColor: "#daebe8",
                    color: " #6b5b95",
                    borderColor: "#8f5b95",
                    width: "90px",
                    fontSize: "16px",
                  }}
                  onClick={() => signout(() => Router.replace(`/signin`))}
                >
                  Signout
                </button>
              </NavItem>
            )}
            {isAuth() && isAuth().role == 0 && (
              <NavItem>
                <Link href="/user">
                  {/* <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink> */}
                  <div>
                    <button
                      className="btn btn-lg btn-primary rounded-pill mr-2 mt-1"
                      style={{
                        backgroundColor: "#fff",
                        color: " #6b5b95",
                        borderColor: "#8f5b95",
                        fontWeight: "bold",
                        width: "auto",
                        fontSize: "16px",
                      }}
                    >{`${isAuth().name}'s Dashboard`}</button>
                  </div>
                </Link>
              </NavItem>
            )}

            {isAuth() && isAuth().role == 1 && (
              <NavItem>
                <Link href="/admin">
                  {/* <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink> */}
                  <div>
                    <button
                      className="btn btn-lg btn-info rounded-pill mr-2 mt-1"
                      style={{
                        backgroundColor: "#fff",
                        color: " #6b5b95",
                        borderColor: "#8f5b95",
                        fontWeight: "bold",
                        width: "auto",
                        fontSize: "16px",
                      }}
                    >{`${isAuth().name}'s Dashboard`}</button>
                  </div>
                </Link>
              </NavItem>
            )}

            <NavItem>
              <Link href="/user/crud/blog">
                <button
                  className="btn btn-lg btn-primary rounded-pill mr-2 mt-1"
                  style={{
                    backgroundColor: "#fff",
                    color: " #6b5b95",
                    // borderColor: "#8f5b95",
                    width: "auto",
                    fontSize: "18px",
                    fontWeight: "700",
                    border: "2px solid #8f5b95",
                  }}
                >
                  Write a Blog
                </button>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <Search />
    </Fragment>
  );
};
export default Header;
