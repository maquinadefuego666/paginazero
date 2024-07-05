import { useLocation, useNavigate } from 'react-router-dom'

var navigate;
function GoHome() {
	navigate("/");
}
function About() {
	navigate = useNavigate();
	let location = useLocation();
	let { name, email} = location.state ?? { name: "", email: ""};
	return (
        <>
			<section>
				<div classNameName="page-header min-vh-100">
				
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-6 col-md-7 d-flex justify-content-center flex-column">
								<h1 className="text-gradient text-primary">Thanks for contacting us</h1>
								<h1 className="mb-4">{name}</h1>
								<p className="lead pe-5 me-5">We will send you an email to {email} once we review your request. </p>
								<div className="buttons">
									<button type="button" className="btn bg-gradient-primary mt-4" onClick={GoHome}>Back to Home</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default About;
