import Layout from "./Layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import NotFound from "./Components/NotFound/NotFound";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        {/* <Route path="*" element={<NotFound />}></Route> */}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
