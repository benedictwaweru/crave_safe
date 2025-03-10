import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

import { AuthenticationForm, Home } from "@/pages";

import "@mantine/core/styles.css";

export default function App() {
	return (
		<MantineProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/en" element={<Home />} />
					<Route path="/en/auth/login" element={<AuthenticationForm />} />
					<Route path="/en/auth/signup" element={<AuthenticationForm />} />
				</Routes>
			</BrowserRouter>
		</MantineProvider>
	);
}
