import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Blogs from "./pages/Blogs.tsx";
import Articles from "./pages/Articles.tsx";
import Reports from "./pages/Reports.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <h1>THIS PAGE IS NOT FOUND!</h1>,
	},
	{
		path: "/blogs",
		element: <Blogs />,
	},
	{
		path: "/articles",
		element: <Articles />,
	},
	{
		path: "/reports",
		element: <Reports />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		{/*This is the entry point of the application: */}
		<RouterProvider router={router} />
	</React.StrictMode>
);
