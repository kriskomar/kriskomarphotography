import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import KrisCarousel from '../components/Carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

// Pics
import avatar from '../images/kris.jpg'
import logo from '../images/kris-komar-photography-logo-600.png'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Logo = styled.img`
  ${tw`rounded-lg w-4/5 xl:w-4/5 h-auto`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={4}>
      <Hero offset={0}>
      <KrisCarousel />
      <Logo src={logo} alt="Kris Komar Photography" />
        {/* <BigTitle>
          Hello, <br /> I'm Kris Komar.
        </BigTitle> */}
        <Subtitle className="stroke-font">Offering photographic services in the Treasure Valley area.<br />208.559.4595 - <a href="mailto:kriskomar@gmail.com">kriskomar@gmail.com</a></Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Types of photography offered</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Portraiture/Group Photos"
            link=""
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Get a professional studio look for your family or business at an affordable price.
          </ProjectCard>
          <ProjectCard
            title="Product Photos"
            link=""
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Trying to sell a new product? Get eCommerce and promotional shots that look great.
          </ProjectCard>
          <ProjectCard
            title="Real Estate Photos"
            link=""
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Are you a realtor or do you work with one that needs eye-catching photos of a listing to attract buyers? Try me out!
          </ProjectCard>
          <ProjectCard
            title="Everything else"
            link=""
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            I can do landscape, low-light, abstract, architectural, nature, wildlife, and every other kind of photography. If you need a photographer, try me out!
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={2}>
        <Title>About me</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Kris Komar" />
          <AboutSub>
            I'm inspired by a melding of art and science.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Originally from San Diego, CA, now married with 2 twin boys and settled in Kuna, ID, I finally got the courage
          to start my own photography company. I've had a passion for striking images and film my entire life, but I
          spent a great deal of time using the analytical and logical side of the brain as a software developer for
          Scentsy, Inc. and a few other companies. I get very excited about photography because aside from being an art
          form, it is intensely scientific and there is a lot of information to be learned. In photography one must be
          naturally artistic to be able to identify and frame a great image, yet also understand the science behind
          the equipment that is taking the photo. Only then can a truly beautiful image be captured. 
        </AboutDesc>
      </About>
      <Contact offset={3}>
        <Inner>
          <Title>Get in touch with me</Title>
          <ContactText>
            Email: <a href="mailto:kriskomar@gmail.com">kriskomar@gmail.com</a><br />
            Phone (call or text): 208.559.4595<br />
            Instagram: <a href="https://www.instagram.com/kriskomarphotography/">kriskomarphotography</a>
            <br /><br /><br />
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 Kris Komar Photography, LLC
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
