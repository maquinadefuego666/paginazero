function Header() {
    return (
        <header className="header-2">
            <div className="page-header min-vh-75 relative" style={{ backgroundImage: "url('/img/curved-images/curved.jpg')" }} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 text-center mx-auto">
                            <h1 className="text-white pt-3 mt-n5">Soft UI Design System</h1>
                            <p className="lead text-white mt-3">Free &amp; Open Source Web UI Kit built over Bootstrap 5. <br /> Join over 1.4 million developers around the world. </p>
                        </div>
                    </div>
                </div>

                <div className="position-absolute w-100 z-index-1 bottom-0">
                    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shape-rendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
                        </defs>
                        <g className="moving-waves">
                            <use xlinkHref="#gentle-wave" x="48" y="-1" fill="rgba(255,255,255,0.40"></use>
                            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.35)"></use>
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.25)"></use>
                            <use xlinkHref="#gentle-wave" x="48" y="8" fill="rgba(255,255,255,0.20)"></use>
                            <use xlinkHref="#gentle-wave" x="48" y="13" fill="rgba(255,255,255,0.15)"></use>
                            <use xlinkHref="#gentle-wave" x="48" y="16" fill="rgba(255,255,255,0.95"></use>
                        </g>
                    </svg>
                </div>
            </div>
        </header>
    );
}

export default Header;
