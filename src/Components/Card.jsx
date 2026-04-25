import React from 'react'
import { Bookmark } from 'lucide-react'
import './Card.css'

//   <<<<< PROPS + JSON >>>>>

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