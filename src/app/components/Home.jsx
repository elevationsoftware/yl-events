import React from 'react';

import { ConnectedEvents } from './Events';

export const Home = () => (
    <main>
        <HomeBanner />
        <hr class="m-0" />
        <ConnectedEvents />
    </main>
);

const HomeBanner = () => (
    <div class="d-flex align-items-center mt-5 mb-3">
        <div>
            <h1 class="mb-0">YL <span class="text-primary">Events Admin</span></h1>
            {/* <div class="subheading">past &amp; upcoming</div> */}
        </div>
        {/* <aside class="display-3 ml-5">
            <i class="far fa-calendar-alt"></i>
        </aside> */}
    </div>
);