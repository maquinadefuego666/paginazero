import { useLocation, useParams, useNavigate } from 'react-router-dom'

var navigate;

function Submit(event) {
    event.preventDefault();

    let form = new FormData(event.target);
    let { formName, formEmail, message } = Object.fromEntries(form.entries());
    if (formName == '') {
        alert("Please add a name");
        return;
    }
    if (formEmail == '') {
        alert("Please add an email");
        return;
    }
    if (message == '') {
        alert("Please add a message");
        return;
    }
    navigate("/Confirm", { state: { name: formName, email: formEmail } });

}

function Contact() {
    let location = useLocation();
    navigate = useNavigate();
    let { mail } = useParams();
    let { name, email, text } = location.state ?? { name: "", email: "", text: "" };
    if (email == "") {
        if (typeof (mail) != 'undefined') {
            email = mail;
        }
        
    }
    
    return (
        <>
            <section className="pt-3 pb-4" id="count-stats">
                <div className="page-header min-vh-85">
                    <div>
                        <img className="position-absolute fixed-top ms-auto w-50 h-100 z-index-0 d-none d-sm-none d-md-block border-radius-section border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0" src="/img/curved-images/curved8.jpg" alt="image" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 d-flex justify-content-center flex-column">
                                <div className="card d-flex blur justify-content-center p-4 shadow-lg my-sm-0 my-sm-6 mt-8 mb-5">
                                    <div className="text-center">
                                        <h3 className="text-gradient text-primary">Contact us</h3>
                                        <p className="mb-0">
                                            For further questions, including partnership opportunities, please email hello@creative-tim.com
                                            or contact using our contact form.
                                        </p>
                                    </div>
                                    <form id="contact-form" method="post" autocomplete="off" onSubmit={Submit}>
                                        <div className="card-body pb-2">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Full Name</label>
                                                    <div className="input-group mb-4">
                                                        <input name="formName" className="form-control" placeholder="Full Name" aria-label="Full Name" type="text" defaultValue={name} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 ps-md-2">
                                                    <label>Email</label>
                                                    <div className="input-group">
                                                        <input name="formEmail" type="email" className="form-control" placeholder="hello@creative-tim.com" defaultValue={email} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group mb-0 mt-md-0 mt-4">
                                                <label>How can we help you?</label>
                                                <textarea name="message" className="form-control" id="message" rows="6" placeholder="Describe your problem in at least 250 characters">{text}</textarea>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <button type="submit" className="btn bg-gradient-primary mt-3 mb-0">Send Message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Contact;
