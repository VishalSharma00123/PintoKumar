import React from 'react';
import './Services.css';
import { useState } from 'react';
function Services() {
    const [toggleState, setToggleState] = useState(3);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <>
            <div>

                <div className='container-5'>
                    <div className="my-5">
                        <h2 className="text-center ">Our Services</h2>
                    </div>
                    <div className='bloc-tabs'>
                        <div
                            className={toggleState === 1 ? 'tabs active-tabs-1' : 'tabs-1'}
                            onClick={() => toggleTab(1)}
                        >
                            Web development
                        </div>
                        <div
                            className={toggleState === 2 ? 'tabs active-tabs-1' : 'tabs-1'}
                            onClick={() => toggleTab(2)}
                        >
                            Order Management
                        </div>
                        <div
                            className={toggleState === 3 ? 'tabs active-tabs-1' : 'tabs-1'}
                            onClick={() => toggleTab(3)}
                        >
                            Delivery Management
                        </div>
                    </div>
                    <div className='content-tabs'>
                        <div
                            className={toggleState === 1 ? 'content active-content' : 'content'}
                        >
                            <div className='left'>

                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                                labore cumque aperiam sequi laudantium odit illum tenetur porro
                                adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                                molestiae maiores tempore voluptate excepturi possimus exercitationem?
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                                labore cumque aperiam sequi laudantium odit illum tenetur porro
                                adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                                molestiae maiores tempore voluptate excepturi possimus exercitationem?
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                                labore cumque aperiam sequi laudantium odit illum tenetur porro
                                adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                                molestiae maiores tempore voluptate excepturi possimus exercitationem?
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                                labore cumque aperiam sequi laudantium odit illum tenetur porro
                                adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                                molestiae maiores tempore voluptate excepturi possimus exercitationem?
                            </div>
                            <div className='right'>
                                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="My Image" />
                            </div>
                        </div>
                        <div
                            className={toggleState === 2 ? 'content active-content' : 'content'}
                        >
                            <div className='left'>

                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                                labore cumque aperiam sequi laudantium odit illum tenetur porro
                                adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                                molestiae maiores tempore voluptate excepturi possimus exercitationem?
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                                labore cumque aperiam sequi laudantium odit illum tenetur porro
                                adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                                molestiae maiores tempore voluptate excepturi possimus exercitationem?
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                                labore cumque aperiam sequi laudantium odit illum tenetur porro
                                adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                                molestiae maiores tempore voluptate excepturi possimus exercitationem?
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                                labore cumque aperiam sequi laudantium odit illum tenetur porro
                                adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                                molestiae maiores tempore voluptate excepturi possimus exercitationem?
                            </div>
                            <div className='right'>
                                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="My Image" />
                            </div>
                        </div>
                        <div
                            className={toggleState === 3 ? 'content active-content' : 'content'}
                        >
                            <div className='left'>

                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                                labore cumque aperiam sequi laudantium odit illum tenetur porro
                                adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                                molestiae maiores tempore voluptate excepturi possimus exercitationem?
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                                labore cumque aperiam sequi laudantium odit illum tenetur porro
                                adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                                molestiae maiores tempore voluptate excepturi possimus exercitationem?
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                                labore cumque aperiam sequi laudantium odit illum tenetur porro
                                adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                                molestiae maiores tempore voluptate excepturi possimus exercitationem?
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                                labore cumque aperiam sequi laudantium odit illum tenetur porro
                                adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                                molestiae maiores tempore voluptate excepturi possimus exercitationem?
                            </div>
                            <div className='right'>
                                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="My Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;
