import "./Navbar.css";
// import { useSidebar} from "../../contexts/index";
// import { Link, useNavigate } from "react-router-dom";

export function Navbar() {
	// const { showSidebar } = useSidebar();
	// const navigate = useNavigate();

	return (
		<>
			<div className="default-navigation">
				<nav className="nav flex-sp-btwn ">
					<div className="nav-brand ml-10 center pl-10">My Cart</div>

					<div className="search">
						<input
							className="search-input pd-right"
							type="search"
							placeholder="what you are looking for?"
						/>
						<span className="material-icons-outlined search-icon">search</span>
					</div>

					<section className="flex-sp-btwn gap-1rem pd-right center">
						<button className="control-btn">Sign In</button>
						<button className="control-btn">Sign Up</button>
					</section>
				</nav>
			</div>

			<div className="mobile-navigation">
				<nav className="nav flex-row">
					<div className="nav-brand center">My Cart</div>

					<div className="mobile-menu center">
						<img
							className="mobile-rounded-avatar"
							src="https://i.pravatar.cc/200?img=4"
							alt="profile"
						/>
					</div>
				</nav>
			</div>
		</>
	);
}
