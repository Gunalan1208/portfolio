import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'Hi, My name is Gunalan M. I am a Front End developer. I built beautiful Websites with React.js , Tailwind CSS + Bootstrap',
        line2: 'Proficient in modern web technologies, including HTML5,CSS3, JavaScript (ES6), and frameworks like React.js.',
        line3:' Skilled in implementing clean and efficient code,optimizing website performance, and ensuring cross-browser compatibility.',
        line4:' Passionate about UI/UX design principles and dedicated to delivering visually appealing and intuitive user interfaces.',
        line5:' A quick learner with excellent problem-solving skills, adaptability, and a team-oriented mindset, eager to contribute to innovative web development projects'  
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
                <p className='pb-5'>{config.line4}</p>
                <p className='pb-5'>{config.line5}</p>


            </div>
        </div>
    </section>
}