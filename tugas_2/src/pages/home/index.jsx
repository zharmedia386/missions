import React from 'react'
import Navbar from '../../components/Navbar'
import Headline from '../../components/Headline'
import List from '../../components/List'
import { image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26, image27 } from '../../components/List/image'

function Home() {
    return(
        <>
            <Navbar />
            <Headline />
            <List 
                title="Creating a Unique Personal Design Style"
                description="We’re all scrambling to be different and own our own slice of the design scene. Because of trends and the type of design that we’re exposed to, we all end up consuming the same art and influenced by the same design. Thus, we end up making work that looks similar."
                username="Meg Lewis"
                heroImage={image12}
                footerImage={image13}
            />
            <List 
                title="Start Learning 3D"
                description="Hey, this is Devon! I'm the creator of 3D for Designers. Last week, we talked about designing for the exciting world of augmented reality (AR). AR enriches your physical environment with an overlay of graphics and data, and is one of several platforms paving the future of desi..."
                username="Devon Ko"
                heroImage={image14}
                footerImage={image15}
            />
            <List 
                title="Designing for Augmented Reality"
                description="The definition of augment is to make (something) greater by adding to it. Augmented Reality (AR) is technology that sets out to do just that by adding a layer of data over the physical world. AR can be experienced in several ways, ranging from smartphones to wearable headset..."
                username="Bushra Mahmood"
                heroImage={image16}
                footerImage={image17}
            />
            <List 
                title="Design System Fundamentals"
                description="Design systems create a bridge between designers and developers. They describe the rules, constraints, and principles of your company’s design language. Design systems aren't exactly new. If you've ever visited New York City, there's a good chance you've benefited from the sub..."
                username="Diana Mounter"
                heroImage={image18}
                footerImage={image19}
            />
            <List 
                title="Getting started with design research"
                description="Design research is the systemic investigation of users and their needs. It employs various methodologies that will help you make more informed decisions when building your products."
                username="Joel Califa"
                heroImage={image20}
                footerImage={image21}
            />
            <List 
                title="User On-boarding and the New User Experience"
                description="The moment from sign-up (or download) to actual use is the most important ‘moment’ in any product’s design. Everything you do (or don’t do) matters — especially in a product that wants to attract a large consumer audience. It’s the biggest opportunity to frame your product, gu..."
                username="Matt Brown"
                heroImage={image22}
                footerImage={image23}
            />
            <List 
                title="User Research with Jobs To Be Done Interviews"
                description="Doing a bit of research before starting a project can save you from years of building the wrong product. In product design, typical research efforts center around understanding user demographics or personas. At their best, personas are incomplete, missing crucial information a..."
                username="Alex Baldwin"
                heroImage={image24}
                footerImage={image25}
            />
            <List 
                title="Designs that convert"
                description="Great designers don’t solely focus on making things pretty. They often also focus on the business goals, like getting more customers and increasing sales, which help you justify your salary and help you get ahead faster in your career. The most effective designs that convert d..."
                username="Daniel Zarick"
                heroImage={image26}
                footerImage={image27}
            />
        </>
    )
}

export default Home;