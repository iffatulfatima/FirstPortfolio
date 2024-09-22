import Header from "../app/components/header"
import Footer from "../app/components/footer" 
import Image from "next/image"

// export default function Home() {
//   return (
// <div>
//   <Header/>
//   <h2>This is class 2 of next js</h2>
//   <Footer/>
// </div>)
// }
export default function Home() {
  return (
    <main>
      <div className="homeContainer">
<div className="childContainer">
        <h1>Hello!!</h1> 
          <br />
          <p>          My Name is <span className="pinkColor">Iffat Ul Fatima</span>
          <br />I am <span className="browncolor">Next JS Developer</span><br/>
          </p>
          <p>I'm learning<abbr title="Artificial Intelligence"> AI</abbr> from <abbr title="Governor Inititive Artificial Intelligence Certification">GIAIC</abbr></p>
<p>I have done <abbr title="Masters in Science">M.Sc</abbr> from <abbr title="University Of Karachi">UOK</abbr>
  </p>
  <p>I'm learning Next.js</p>
  <p>I want to become a cloud Native Applied Generative AI Engineer</p>
  <br />
 
  <div className="contact">
  <h2>For more Info</h2>
  <h3>Contact </h3>
          <div className="social-links">
         <a href="https://mail.google.com/mail/?view=cm&fs=1&to=iffatul2018@gmail.com" target="_blank">Email</a>
                    <a href="https://www.linkedin.com/in/iffat-ul-fatima-191128179/" target="_blank">LinkedIn</a>
                    <a href="https://github.com/iffatulfatima" target="_blank">GitHub</a>
        </div>
        </div>
          
        </div>
        <div className="childContainer">
        <div className="image-frame">
        <Image
          className="mt-0"
          src="/pics/iffat.png" // Correct path for image in public folder
          alt="Iffat image"
          width={200}
          height={20} // Size you can fix as you like
         >
         </Image>
         </div>
      </div>
      </div>
         </main>
  );
};
        