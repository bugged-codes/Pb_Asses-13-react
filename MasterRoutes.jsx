import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./src/pages/Home";
import DisplayStudents from "./src/pages/DisplayStudents";
import EditPage from "./src/pages/EditPage";
import NotfoundError from "./src/pages/NotfoundError";
import ContactUs from "./src/pages/ContactUs";

export default function MasterRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/Students" element={<DisplayStudents />} />
			<Route path="/Edit" element={<EditPage />} />
			<Route path="/ContactUs" element={<ContactUs />} />
			<Route path="*" element={<NotfoundError />} />
		</Routes>
	);
}
