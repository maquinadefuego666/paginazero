﻿function Index() {
    return (
        <>
            <section class="pt-3 pb-4" id="count-stats">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-9 z-index-2 border-radius-xl mt-n10 mx-auto py-3 blur shadow-blur">
                            <div class="row">
                                <div class="col-md-4 position-relative">
                                    <div class="p-3 text-center">
                                        <h1 class="text-gradient text-primary"><span id="state1" countTo="70">0</span>+</h1>
                                        <h5 class="mt-3">Coded Elements</h5>
                                        <p class="text-sm">From buttons, to inputs, navbars, alerts or cards, you are covered</p>
                                    </div>
                                    <hr class="vertical dark" />
                                </div>
                                <div class="col-md-4 position-relative">
                                    <div class="p-3 text-center">
                                        <h1 class="text-gradient text-primary"> <span id="state2" countTo="15">0</span>+</h1>
                                        <h5 class="mt-3">Design Blocks</h5>
                                        <p class="text-sm">Mix the sections, change the colors and unleash your creativity</p>
                                    </div>
                                    <hr class="vertical dark" />
                                </div>
                                <div class="col-md-4">
                                    <div class="p-3 text-center">
                                        <h1 class="text-gradient text-primary" id="state3" countTo="4">0</h1>
                                        <h5 class="mt-3">Pages</h5>
                                        <p class="text-sm">Save 3-4 weeks of work when you use our pre-made pages for your website</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Index;
