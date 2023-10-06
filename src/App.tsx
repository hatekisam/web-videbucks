import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Plan from "./pages/Plan"
import Profile from "./pages/Profile"
import Chats from "./pages/Chats"
import Friends from "./pages/Friends"
import Streamers from "./pages/Streamers"
import Streams from "./pages/Streams"
import Home from "./pages/Home"
import Main from "./components/Main"
import About from "./pages/About"
import Landing from "./pages/Landing"
import Challenges from "./pages/Challenges"
import Settings from "./pages/Settings"
import ConnectBank from "./pages/ConnectBank"

function App() {

	return (
		<div className="w-screen h-screen overflow-hidden bg">
			<Router>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/about" element={<About />} />
					<Route path="/main" element={<Main />}>
						<Route path="/main" element={<Home />} />
						<Route path="/main/streams" element={<Streams />} />
						<Route path="/main/streamers" element={<Streamers />} />
						<Route path="/main/friends" element={<Friends />} />
						<Route path="/main/settings" element={<Settings />} />
						<Route path="/main/challenges" element={<Challenges />} />
						<Route path="/main/chats" element={<Chats />} />
						<Route path="/main/profile" element={<Profile />} />
						<Route path="/main/profile/connect-bank" element={<ConnectBank />} />
						<Route path="/main/plans" element={<Plan />} />
					</Route>
				</Routes>
			</Router>
		</div>
	)
}

export default App
