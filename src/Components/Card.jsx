import React from 'react'
import { Bookmark } from 'lucide-react'
import './Card.css'

//   <<<<< PROPS + JSON >>>>>

// HERE JSON USED WITH PROPS 

export const cardsData = [
  {
    job1: "Part-Time",
    job2: "Senior-Level",
    companyurl: "https://www.aboutamazon.com/about-us",
    img: "https://thumbs.dreamstime.com/z/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg?ct=jpeg",
    name: "Senior UI/UX Designer",
    price: "$120/hr",
    company: "Amazon",
    post_time: 5
  },
  {
    job1: "Part-Time",
    job2: "Flexible Schedule",
    companyurl: "https://about.google/",
    img: "https://53.fs1.hubspotusercontent-na1.net/hubfs/53/image8-2.jpg",
    name: "Graphic Designer",
    price: "$150-220k",
    company: "Google",
    post_time: 30
  },
  {
    job1: "Contract",
    job2: "Remote",
    companyurl: "https://dribbble.com/about",
    img: "https://similarpng.com/_next/image?url=https%3A%2F%2Fimage.similarpng.com%2Ffile%2Fsimilarpng%2Fvery-thumbnail%2F2020%2F05%2FLogo-Dribbble-realistic-icon-transparent-PNG.png&w=640&q=75",
    name: "Senior Motion Designer",
    price: "$85/hr",
    company: "Dribble",
    post_time: 18
  },
  {
    job1: "Full-Time",
    job2: "In office",
    companyurl: "https://www.figma.com/",
    img: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/b8d00b2e389e3a38f115ea00f7dc3dff3ef4f337/dbc32aa496f21ffa8508a4f6432d1e6c6f76e3b1",
    name: "UX Designer",
    price: "$200-250k",
    company: "Figma",
    post_time: 5
  },
  {
    job1: "Contract",
    job2: "Remote",
    companyurl: "https://news.airbnb.com/about-us/",
    img: "https://images.icon-icons.com/2108/PNG/512/airbnb_icon_131000.png",
    name: "Junior UI/UX Designer",
    price: "$100/hr",
    company: "Airbnb",
    post_time: 5
  },
  {
    job1: "Full-Time",
    job2: "Flexible Schedule",
    companyurl: "https://investor.apple.com/our_values/default.aspx",
    img: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    name: "Graphic Designer",
    price: "$85-120k",
    company: "Apple",
    post_time: 5
  }
];

const Card = (props) => {
  return (
    
    <div id="box"> {/* Main card container */}
      <div className="innerbox">

        {/* Top section: company logo + bookmark button */}
        <div className="info">
          <img src={props.data.img} alt="image" />
          <button id="bookmark">
            <Bookmark size={22} color="grey" />
          </button>
        </div>

        {/* Middle section: company info + job details */}
        <div className="nameinfo">
          
          {/* Company name + post time */}
          <div className="innertxtbox">
            <a href={props.data.companyurl}>{props.data.company}</a>
            <div className="innertxt">{props.data.post_time} days ago</div>
          </div>

          {/* Job role/title */}
          <div className="role">{props.data.name}</div>

          {/* Job type tags */}
          <div className="job">
            <div className="jobbox">{props.data.job1}</div>
            <div className="jobbox">{props.data.job2}</div>
          </div>
        </div>

        <br />
        <br />

        <hr /> {/* Divider line */}

        {/* Bottom section: price + apply button */}
        <div className="box_bottom">
          <div className="price_box">{props.data.price}</div>
          <button id="buttonpay">Apply Now</button>
        </div>

      </div>
    </div>
   
  );
};

export default Card;


  

// <<<<< PROPS + NO JSON CODE 

// MANUAL PROPS CODE 


// const Card = (props) => {
//   return (
//     <div id = "box">

//       <div className="innerbox">

//       <div className="info">
//         <img src={props.img} alt="image"></img>
//         <button id="bookmark"><Bookmark size={22} color="grey"/> </button>
//       </div>


//       <div className="nameinfo">

//         <div className='innertxtbox'>
//             <a href={props.companyurl} >{props.company}</a> 
//         <div className='innertxt'>{props.post_time} days ago</div>

//         </div>

//         <div className="role">{props.name}</div>
//         <div className="job">
         
//          <div className="jobbox">{props.job1}</div> 
//          <div className="jobbox">{props.job2}</div> 
        
//         </div>
//       </div>
//       <br></br>
//       <br></br>

//       <hr></hr>
//     <div className="box_bottom">

//       <div className="price_box">{props.price}</div><button id = "buttonpay">Apply Now</button>
      
//     </div>

//     </div>
//     </div>
//   )
// }

// export default Card