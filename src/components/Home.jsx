// eslint-disable-next-line no-unused-vars
import React from 'react'
import vg from '../assets/2.webp'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'
const Home = () => {
  return (
    <>
    <div className='home' id='home'>
    <main>
    <h1>
        TechStar*
    </h1>
    <p>
    Solutions to all your problems....
    </p>
    </main>
   </div>
   <div className="home2">
    <img src={vg} alt="vector image" />
    <div>
        <p>
             We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
        </p>
    </div>
   </div>
   <div className="home3" id='about'>
    <div>
        <h1>
            who we are?
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam magnam aspernatur architecto repellat! Nemo consequatur sint repellat fuga, laboriosam magnam temporibus minus quasi. Repellat officia in perferendis vitae laborum iusto sint ipsam, ad accusantium tempora exercitationem dolorem aliquid libero corporis. Consequatur fuga repudiandae quis ab facilis quaerat a molestias est, minima nostrum. Quidem, cupiditate eum facere cum perferendis quisquam iusto est, blanditiis magni ipsum placeat sit suscipit at ut ipsam commodi, corrupti similique pariatur iure eaque! Recusandae laborum mollitia iste! Modi assumenda dicta eveniet. Provident, iste quis obcaecati aperiam cum cumque sunt nemo deleniti quae iusto, magni eum in dolores.
        </p>
    </div>
   </div>

   <div className="home4" id='brands'>
    <div>
        <h1>
            Brands
        </h1>
        <article>
         <div style={{
            animationDelay:'0.3s'
         }}>
         <AiFillGoogleCircle/>
         <p>Google</p>
         </div>
         <div style={{
            animationDelay:'0.5s'
         }}>
         <AiFillAmazonCircle/>
         <p>Amazon</p>
         </div>
         <div style={{
            animationDelay:'0.7s'
         }}>
         <AiFillYoutube/>
         <p>Youtube</p>
         </div>
         <div style={{
            animationDelay:'1s'
         }}>
         <AiFillInstagram/>
         <p>Instagram</p>
         </div>
        </article>
    </div>
   </div>
    </>
   
  )
}

export default Home