import ReactPlayer from 'react-player';

export default function IntroVideo() {
  return (
    <section className='introvideo bg-gray-300 p-5 hidden'>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
        className='mx-auto items-center'
        playing='true'
        controls='true'
      />
    </section>
  );
}
