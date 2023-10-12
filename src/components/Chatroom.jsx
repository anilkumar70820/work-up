import React from 'react'
import { Comment, Dots, DotsSecond, Gallery, GalleryTwo, Like, Menu, Pen, Plus, Share, Time, Video } from './Icons'
import jhon_Doe from '../assets/images/svg/jhon_Doe.svg'
import { CardMapData } from './CardMapData'
import like from '../assets/images/svg/like_icon.svg'
import done from '../assets/images/svg/done_icon.svg'
import smile from '../assets/images/svg/smile_icon.svg'
import left_circle1 from '../assets/images/png/left_circle1.png'
import left_circle2 from '../assets/images/png/left_circle2.png'
import right_circle from '../assets/images/png/right_circle.png'

const Chatroom = () => {
    return (
        <section className='pt-3 position-relative z-1'>
            <img className='left_circle1_abs z-n1' src={left_circle1} alt="circle" />
            <img className='left_circle2_abs z-n1' src={left_circle2} alt="circle" />
            <img className='left_circle2_abs2 z-n1' src={left_circle2} alt="circle" />
            <img className='right_circle_abs z-n1' src={right_circle} alt="circle" />
            <img className='right_circle_abs2 z-n1' src={right_circle} alt="circle" />
            <div className="my_container">
                <div className='d-flex justify-content-between align-sm-items-center'>
                    <div className='d-flex align-items-center gap-sm-5 gap-3 flex-wrap'>
                        <span className='me-3 cursor_pointer'><Menu /></span>
                        <p className='me-3 mb-0 ff_inter fs_sm fw-normal text_rgba cursor_pointer'><span className='me-1'><Pen /></span>Create a Post</p>
                        <p className='me-3 mb-0 ff_inter fs_sm fw-normal text_rgba cursor_pointer'><span className='me-1'><Gallery /></span>Photo/Video Album</p>
                        <p className='mb-0 ff_inter fs_sm fw-normal text_rgba cursor_pointer'><span className='me-1'><Video /></span>Live Video</p>
                    </div>
                    <span className='cursor_pointer'><Plus /></span>
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
                    <div className='d-flex align-items-sm-center gap-4 mt-4'>
                        <div className='d-flex align-items-center gap-4 flex-sm-row flex-wrap'>
                            <p className='me-3 buttons d-flex mb-0 ff_inter fs_sm fw-normal text_rgba cursor_pointer'><span className='me-1'><GalleryTwo /></span>Photo/Video</p>
                            <p className='me-3 buttons d-flex mb-0 ff_inter fs_sm fw-normal text_rgba cursor_pointer'><span className='me-1'><Time /></span>Feeling/Activity</p>
                        </div>
                        <span className='cursor_pointer'><Dots /></span>
                    </div>
                </div>
                {CardMapData.map((data) => {
                    return (
                        <div key={data.id} className='chatbox mb-4'>
                            <div className='d-flex justify-content-between pt-4 mx-4 mb-3'>
                                <div className='d-flex align-items-center'>
                                    <img src={jhon_Doe} alt="jhon" />
                                    <div className='ms-3'>
                                        <p className='mb-0 text_140524 fs_md fw-normal ff_outfit'>John Doe</p>
                                        <p className='mb-0 ff_inter fs_sm fw-normal text_rgba'>5 hrs</p>
                                    </div>
                                </div>
                                <span className='cursor_pointer'><DotsSecond /></span>
                            </div>
                            <p className='ms-4 ff_inter fs_sm fw-normal text_rgba mb-3'>Link any existing business account in seconds.</p>
                            <img className='w-100 cursor_pointer' src={data.img4} alt="charley" />
                            <div className='d-flex align-items-sm-center justify-content-between flex-sm-row flex-column ms-3 me-4 pe-2 mt-4'>
                                <div className='d-flex gap-3 flex-sm-row flex-wrap align-items-center'>
                                    <img className='cursor_pointer' src={like} alt="like" />
                                    <img className='cursor_pointer' src={done} alt="like" />
                                    <img className='cursor_pointer' src={smile} alt="like" />
                                    <p className='ff_inter fs_sm fw-normal text_rgba ms-sm-2 ps-sm-1 mb-sm-0 mb-2'>Lorem ipsum and 291 others</p>
                                </div>
                                <p className='ff_inter fs_sm fw-normal text_rgba mb-0 cursor_pointer'> 55 comments</p>
                            </div>
                            <div className='underline mb-2 ms-3 me-4 pe-1 mt-4'></div>
                            <div className='d-flex align-items-center gap-sm-4 gap-3 pb-4 ms-3 mt-3 pt-1 flex-wrap'>
                                <div className='d-flex align-items-center me-2'>
                                    <span className='me-3 cursor_pointer'><Share /></span>
                                    <p className='ff_inter fs_sm fw-normal text_rgba mb-0 cursor_pointer'>Share</p>
                                </div>
                                <div className='d-flex align-items-center me-2'>
                                    <span className='me-3 cursor_pointer'><Like /></span>
                                    <p className='ff_inter fs_sm fw-normal text_rgba mb-0 cursor_pointer'>Like</p>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <span className='me-3 cursor_pointer'><Comment /></span>
                                    <p className='ff_inter fs_sm fw-normal text_rgba mb-0 cursor_pointer'>Comment</p>
                                </div>
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