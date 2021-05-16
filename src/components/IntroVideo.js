import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

export default function IntroVideo() {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='4PLVNGufEio'
        onClose={() => setOpen(false)}
      />

      <button
        className='border-2 border-gray-400 rounded-full px-4 py-3 lg:px-6 lg:py-3 text-gray-400 cursor-pointer hover:bg-gray-600 hover:text-gray-200 uppercase font-montheavy text-sm sm:text-md xl:text-xl'
        onClick={() => setOpen(true)}
      >
        <i className='fas fa-play-circle mr-1' /> Intro video
      </button>
    </React.Fragment>
  );
}
