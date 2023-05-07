import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import UploadData from "../components/UploadData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <UploadData />,
      },
    ],
  },
]);

export default router;
