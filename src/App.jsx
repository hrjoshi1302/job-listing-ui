import React from 'react'
import Card, { cardsData } from './Components/Card'
import './App.css'

// CODE IS CLEAN, LESS COMPLEX AND ALSO WORKS
// BELOW, PROPS ARE USED WITH JSON / DICTIONARY 

//      <<<<<< PROPS + JSON >>>>>>


const App = () => {
  return (
    
    <div className='webpagemain'>
      <div className='webpage'>

        <div className='row1'> 
          {
            // slice(0,3) → take first 3 items from cardsData
            // map() → loop through each item and render Card component
            cardsData.slice(0,3).map((item)=>(
              // key helps React identify each element uniquely
              // data prop sends entire object to Card component
              <Card key={item.company} data={item}/>
            ))
          }
        </div>

        <div className='row2'> 
          {
            // slice(3,7) → take next set of items (index 3 to 6)
            // map() → render remaining cards in second row
            cardsData.slice(3,7).map((item)=>(
              <Card key={item.company} data={item}/>
            ))
          }
        </div>

      </div>
    </div>

  )
}

export default App




// BELOW CODE WORKS BUT IT IS MORE COMPLEX 
// MANUAL PROPS DATA USAGE ---> NOT JSON / DICTIONARY

//.      <<<<< PROPS + NO JSON >>>>>>

// const App = () => {
//   return (
    
//     <div className='webpagemain'>
//     <div className='webpage'>
//      <div className='row1'> 
    
//      {/* <Card job1="Part-Time" job2="Senior-Level" companyurl="https://www.aboutamazon.com/about-us" img="https://thumbs.dreamstime.com/z/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg?ct=jpeg" name="Senior UI/UX Designer" price="$120/hr" company="Amazon" post_time={5} /> */}
//      {/* <Card job1="Part-Time" job2="Flexible Schedule" companyurl="https://about.google/" img="https://53.fs1.hubspotusercontent-na1.net/hubfs/53/image8-2.jpg" name="Graphic Designer" price="$150-220k" company="Google" post_time={30}/> */}
//      {/* <Card job1="Contract" job2="Remote" companyurl="https://dribbble.com/about" img="https://similarpng.com/_next/image?url=https%3A%2F%2Fimage.similarpng.com%2Ffile%2Fsimilarpng%2Fvery-thumbnail%2F2020%2F05%2FLogo-Dribbble-realistic-icon-transparent-PNG.png&w=640&q=75" name="Senior Motion Designer" price="$85/hr" company="Dribble" post_time={18}/> */}
//      </div>
//      <div className='row2'> 
     
//      {/* <Card job1="Full-Time" job2="In office" companyurl="https://www.figma.com/" img="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/b8d00b2e389e3a38f115ea00f7dc3dff3ef4f337/dbc32aa496f21ffa8508a4f6432d1e6c6f76e3b1" name="UX Designer" price="$200-250k" company="Figma" post_time={5}/> */}
//      {/* <Card job1="Contract" job2="Remote" companyurl="https://news.airbnb.com/about-us/" img="https://images.icon-icons.com/2108/PNG/512/airbnb_icon_131000.png" name="Junior UI/UX Designer" price="$100/hr" company="Airbnb"  post_time={5}/> */}
//      {/* <Card job1="Full-Time" job2="Flexible Schedule" companyurl="https://investor.apple.com/our_values/default.aspx" img="https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg" name="Graphic Designer" price="$85-120k" company="Apple" post_time={5}/>  */}
//      </div>
//      </div>
//     </div>

    
    
//   )
// }

// export default App
