import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobs = [
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
    companyName: "Google",
    datePosted: "2 weeks ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$150/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Cloud Solutions Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$180/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$200/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg",
    companyName: "Meta",
    datePosted: "3 weeks ago",
    post: "AR/VR UX Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$170/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    companyName: "IBM",
    datePosted: "4 days ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$160/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "6 days ago",
    post: "iOS Application Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$175/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNPKp7FnlnWKUi4m3GyH2scG9q4YG58b3ECg&s",
    companyName: "Intel",
    datePosted: "2 days ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$110/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
    companyName: "Oracle",
    datePosted: "1 month ago",
    post: "Database Performance Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$165/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
    companyName: "Tesla",
    datePosted: "2 weeks ago",
    post: "Autonomous Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$190/hr",
    location: "Remote"
  }
];  

  return (
    <div className='parent '>
      {jobs.map(function(elem, idx){
        
        return <div key={idx}>
          <Card companyName={elem.companyName} post={elem.post}
                tag1={elem.tag1} tag2={elem.tag2} datePosted={elem.datePosted}
                 pay={elem.pay} brandLogo={elem.brandLogo} />
        </div>
        
      })}      
    </div>
  )
}

export default App
