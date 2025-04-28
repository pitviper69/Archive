export const Header = () => {
    return (
        <>
            <div className="fixed top-0 left-0 right-0 bg-space-gray z-30">
                <div className="w-full mx-auto">
                    <div className="mx-auto bg-[#cac6cb] text-[#464147] text-sm">
                        <div className="flex flex-row items-center justify-between p-1 bg-blue-primary m-1">
                            <div className="flex-1"></div>
                            <p className="text-white text-center">Whale cum to the Pit Viper Archive</p>
                            <div className="flex items-center space-x-0.5 flex-1 justify-end">
                                <button type="button"
                                        className="flex items-center justify-center w-4 h-4 bg-[#cac6cb] border border-white border-b-black border-r-black">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" stroke="#000" stroke-width="2"
                                              d="M7,7 L17,17 M7,17 L17,7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-16 flex items-center relative px-4">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex flex-1 items-center">
                            <figure className="flex flex-col items-center">
                                <span
                                    className="flex flex-row p-3 lato uppercase italic font-bold gap-3 text-base shadow-normal">
                                    <svg width="25px" height="25px" viewBox="0 0 25 21" version="1.1"
                                         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <g id="Navigation" stroke="none" stroke-width="1" fill="none"
                                           fill-rule="evenodd">
                                        <g id="PV_M_Nav" transform="translate(-28.000000, -42.000000)" fill="#000000"
                                           fill-rule="nonzero">
                                            <g id="Navigation-/-Mobile-/-Closed">
                                                <g id="Menu">
                                                    <g transform="translate(25.000000, 37.000000)">
                                                        <g id="Icon-/-Menu-/-Closed">
                                                            <g>
                                                                <path
                                                                    d="M3.5,5 L27.4994,5 L27.4994,8.00137137 L24.499475,8.00137137 L21.49955,8.00137137 L18.499625,8.00137137 L15.4997,8.00137137 L12.499775,8.00137137 L9.49985,8.00137137 L6.499925,8.00137137 L3.5,8.00137137 L3.5,5 Z M24.500075,14.0000643 L27.5,14.0000643 L27.5,16.9999357 L24.500075,16.9999357 L21.49865,16.9999357 L18.498725,16.9999357 L15.5003,16.9999357 L12.500375,16.9999357 L9.49895003,16.9999357 L6.49902502,16.9999357 L3.50059999,16.9999357 L3.50059999,14.0000643 L6.49902502,14.0000643 L9.49895003,14.0000643 L12.500375,14.0000643 L15.5003,14.0000643 L18.498725,14.0000643 L21.49865,14.0000643 L24.500075,14.0000643 Z M24.500075,23.0001286 L27.5,23.0001286 L27.5,26 L24.500075,26 L21.49865,26 L18.498725,26 L15.5003,26 L12.500375,26 L9.49895003,26 L6.49902502,26 L3.50059999,26 L3.50059999,23.0001286 L6.49902502,23.0001286 L9.49895003,23.0001286 L12.500375,23.0001286 L15.5003,23.0001286 L18.498725,23.0001286 L21.49865,23.0001286 L24.500075,23.0001286 Z"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                        </g>
                                    </svg>
                                    <p>Menu</p>
                                    <span className="sr-only">Open</span>
                                </span>
                                {/*<span className="">*/}
                                {/*    <svg width="25px" height="25px" viewBox="0 0 24 24" version="1.1">*/}
                                {/*        <g id="Navigation" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">*/}
                                {/*            <g id="PV_M_Nav-PitVipers" transform="translate(-28.000000, -39.000000)" fill="#000000" fill-rule="nonzero" stroke="#000000" stroke-width="0.25">*/}
                                {/*                <g id="Navigation-/-Mobile-/-Closed">*/}
                                {/*                    <g id="Menu">*/}
                                {/*                        <g transform="translate(25.000000, 37.000000)">*/}
                                {/*                            <g id="Icon-/-Menu-/-Closed">*/}
                                {/*                                <g id="Icon-/-Menu-/-Open">*/}
                                {/*                                    <path d="M4,5.44444444 L4,3 L6.44444444,3 L6.44444444,5.44444444 L4,5.44444444 Z M6.44444444,7.88888889 L6.44444444,5.44444444 L8.88888889,5.44444444 L8.88888889,7.88888889 L6.44444444,7.88888889 Z M8.88888889,10.3333333 L8.88888889,7.88888889 L11.3333333,7.88888889 L11.3333333,10.3333333 L8.88888889,10.3333333 Z M18.6666667,10.3333333 L18.6666667,7.88888889 L21.1111111,7.88888889 L21.1111111,10.3333333 L18.6666667,10.3333333 Z M21.1111111,7.88888889 L21.1111111,5.44444444 L23.5555556,5.44444444 L23.5555556,7.88888889 L21.1111111,7.88888889 Z M23.5555556,5.44444444 L23.5555556,3 L26,3 L26,5.44444444 L23.5555556,5.44444444 Z M11.3333333,12.7777778 L11.3333333,10.3333333 L13.7777778,10.3333333 L13.7777778,12.7777778 L11.3333333,12.7777778 Z M13.7777778,15.2222222 L13.7777778,12.7777778 L16.2222222,12.7777778 L16.2222222,15.2222222 L13.7777778,15.2222222 Z M16.2222222,17.6666667 L16.2222222,15.2222222 L18.6666667,15.2222222 L18.6666667,17.6666667 L16.2222222,17.6666667 Z M18.6666667,20.1111111 L18.6666667,17.6666667 L21.1111111,17.6666667 L21.1111111,20.1111111 L18.6666667,20.1111111 Z M21.1111111,22.5555556 L21.1111111,20.1111111 L23.5555556,20.1111111 L23.5555556,22.5555556 L21.1111111,22.5555556 Z M23.5555556,25 L23.5555556,22.5555556 L26,22.5555556 L26,25 L23.5555556,25 Z M16.2222222,12.7777778 L16.2222222,10.3333333 L18.6666667,10.3333333 L18.6666667,12.7777778 L16.2222222,12.7777778 Z M8.88888889,20.1111111 L8.88888889,17.6666667 L11.3333333,17.6666667 L11.3333333,20.1111111 L8.88888889,20.1111111 Z M11.3333333,17.6666667 L11.3333333,15.2222222 L13.7777778,15.2222222 L13.7777778,17.6666667 L11.3333333,17.6666667 Z M4,25 L4,22.5555556 L6.44444444,22.5555556 L6.44444444,25 L4,25 Z M6.44444444,22.5555556 L6.44444444,20.1111111 L8.88888889,20.1111111 L8.88888889,22.5555556 L6.44444444,22.5555556 Z"></path>*/}
                                {/*                                </g>*/}
                                {/*                            </g>*/}
                                {/*                        </g>*/}
                                {/*                    </g>*/}
                                {/*                </g>*/}
                                {/*            </g>*/}
                                {/*        </g>*/}
                                {/*    </svg>*/}
                                {/*    <figcaption>Close</figcaption>*/}
                                {/*    <span className="sr-only">Close</span>*/}
                                {/*</span>*/}
                            </figure>
                        </div>
                        <div className="flex justify-center flex-1">
                            <img src="/assets/Fangs-512.png" alt="Logo"/>
                        </div>
                        <div className="flex justify-end items-center flex-1">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}