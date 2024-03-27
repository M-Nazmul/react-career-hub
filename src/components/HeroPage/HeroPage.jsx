import user from '../../assets/images/user.png'

const HeroPage = () => {
    return (
        <div className="hero min-h-[540px] bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <figure>
                    <img className='mx-auto w-[60%] md:w-[80%]' src= {user} />
                </figure>
                <div>
                <h1 className="text-3xl md:text-5xl font-bold">One Step Closer To Your Dream Job</h1>
                <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HeroPage;