import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../pages/Login";
import { BrowserRouter as Router } from "react-router-dom";

describe("Login Page", () => {
  it("should render login form", () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  });

  it("should allow user to input email and password", () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password" },
    });
    expect(screen.getByPlaceholderText("Email").value).toBe("test@example.com");
    expect(screen.getByPlaceholderText("Password").value).toBe("password");
  });
});
