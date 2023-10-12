import React from 'react'
import { Dots, Gallery, GalleryTwo, Menu, Pen, Plus, Time, Video } from './Icons'
import jhon_Doe from '../assets/images/svg/jhon_Doe.svg'
import { CardMapData } from './CardMapData'

const Chatroom = () => {
    return (
        <section>
            <div className="my_container">
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center gap-5'>
                        <span className='me-3'><Menu /></span>
                        <p className='me-3 mb-0 ff_inter fs_sm fw-normal text_rgba'><span className='me-1'><Pen /></span>Create a Post</p>
                        <p className='me-3 mb-0 ff_inter fs_sm fw-normal text_rgba'><span className='me-1'><Gallery /></span>Photo/Video Album</p>
                        <p className='mb-0 ff_inter fs_sm fw-normal text_rgba'><span className='me-1'><Video /></span>Live Video</p>
                    </div>
                    <span><Plus /></span>
                </div>
                <div className='underline mb-2'></div>
                <div className='chating_header mb-4'>
                    <div className='d-flex align-items-center'>
                        <img src={jhon_Doe} alt="jhon" />
                        <div className='ms-3'>
                            <p className='mb-0 text_140524 fs_md fw-normal ff_outfit'>Jhon Doe</p>
                            <p className='mb-0 ff_inter fs_sm fw-normal text_rgba'>Typing...</p>
                        </div>
                    </div>
                    <div className=' d-flex align-items-center gap-4 mt-4'>
                        <p className='me-3 buttons d-flex mb-0 ff_inter fs_sm fw-normal text_rgba'><span className='me-1'><GalleryTwo /></span>Photo/Video</p>
                        <p className='me-3 buttons d-flex mb-0 ff_inter fs_sm fw-normal text_rgba'><span className='me-1'><Time /></span>Feeling/Activity</p>
                        <span><Dots /></span>
                    </div>
                </div>
                {CardMapData.map((data) => {
                    return (
                        <div className='chatbox'>
                            <div>
                                <div className='d-flex align-items-center'>
                                    <img src={jhon_Doe} alt="jhon" />
                                    <div className='ms-3'>
                                        <p className='mb-0 text_140524 fs_md fw-normal ff_outfit'>{data.heading}</p>
                                        <p className='mb-0 ff_inter fs_sm fw-normal text_rgba'>{data.p1}</p>
                                    </div>
                                </div>
                                <img src={data.img3} alt="dots" />
                            </div>
                        </div>
                    );
                },
                )}
            </div>
        </section>
    )
}

export default Chatroom