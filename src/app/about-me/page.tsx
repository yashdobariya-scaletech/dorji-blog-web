import Image from 'next/image';
import '../../assets/styles/main.scss';
import personal from '../../assets/images/about-me.webp'

const AboutMe = () => {
    return (
        <>
            <div className="about-wrapper mt-165 container">

                <h1 className='about-main-title mb-40 font-size-45'>About me and this blog</h1>


                <p className="about-description">The theme of my blog is #MaanKiBaat. It is a Hindi phrase meaning Words from the Heart. The phrase is not original. It is lifted from a radio/TV show featuring Indian Prime Minister, Narendra Modi.

                </p>
                <p className="about-description">I started using the phrase with a hastag together with punchy one liners on my social media pages. I target social issues and norms like water problem, sewage issue, power blackout, ATM malfunctions, etc. I started as a parody. As a joke to make people laugh and for people to ponder.  It became very popular among my readers. Many readers commented that they enjoyed my #MaanKiBaat than my blog.

                </p>
                <p className="about-description">Now I have decided to name my blog with this phrase.

                </p>
                <p className="about-description">This blog is about Bhutan and this blog is also non-political and non-religious.

                </p>
                <p className="about-description">                Engineer, communication scholar and educator – and a dog lover and passionate about airplanes, coffee and travelling

                </p>
                <p className="about-description">                I come from Trashigang – the eastern-most district in Bhutan. I am a Sharchop. My father was a bus driver and my mother a house wife. Both didn’t attend school – thus making me the first generation to go to school – in the family and in the country too.

                </p>
                <p className="about-description">                I graduated with laurea cum laude (distinction) in electronics engineering from the University of Bologna in Italy in 1995. I worked as the chief engineer for the Bhutan Broadcasting Service – leading the teams that brought both the FM radio services and television to Bhutan between 1997 and 1999. Subsequently, I made a career shift and moved to documentary filmmaking (following my passion), where I won three major international awards and several nominations. My best-known works are School Among Glaciers, Rocking the Himalayan Kingdom-Blof in Bhutan and Long Walk to Education.

                </p>
                <p className="about-description">                From 2009 to 2013, I served as the communications director and spokesperson for the Royal Family of Bhutan.

                </p>
                <p className="about-description">                As a third career, I have opted teaching and research. I taught in the Royal University of Bhutan as adjunct professor and briefly served as a dean at the Royal Thimphu College.

                </p>
                <p className="about-description">                I am, currently, pursuing doctoral studies in communication at the University of Macau – specialising in social media, discourse analysis and Buddhist communication.

                </p>
                <div className="personal-img-wrapper mt-40">

                    <Image
                        width={500}
                        src={personal}
                        style={{
                            padding: '5px',
                            border: '1px solid #ddd'
                        }}
                        alt="about-me"
                    />
                </div>
            </div>
        </>
    )
}
export default AboutMe
