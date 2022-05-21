import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages";

const routes = [
  {
    path: "/",
    component: <Home />,
  },
];

export const Router = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      {routes.map(({ component, path }) => (
        <Route key={path} path={path} element={component} />
      ))}
    </Routes>
  </BrowserRouter>
);
