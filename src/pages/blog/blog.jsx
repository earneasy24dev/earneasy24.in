import React, { useRef, useEffect, useState } from "react";

import Blog1 from "../../images/blog1.jpg";
import Blog2 from "../../images/blog2.jpg";
import Blog3 from "../../images/blog3.jpg";
import Blog4 from "../../images/blog4.png";
import Blog5 from "../../images/blog5.png";
import Blog6 from "../../images/blogpicture6.jpg";
import Blog7 from "../../images/blog7.png";
import Blog8 from "../../images/blog8.jpg";

import Header from "../../components/organisms/header/header.component";
import { CardContent } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import Footer from "../../components/organisms/footer/footer.component";
import { useStore } from "../../store";
import axios from '../../axios';
const headersData = [
  {
    label: "Home",
    href: "/",
    id: "home",
  },

  {
    label: "Blog",
    href: "/",
    id: "blog",
  },

  // {
  //   label: "Contact",
  //   href: "/",
  // },
];

// const dataOfBlog=[
//   {
//     id:"125kjnkjn",
//     title: " How to Find the Right Captcha Solving Job for Students",
//     discription: "hj  k  k k klmklrfmewklfnkjewndkjandkjnewdn bdchj dkcne kjnkjdium ",
//     adddata: "whya udayn is use iun da syskj dn ",
//     url: "klmll.com",
//     content: [
//         {
//             header: "fgreferf",
//             headerData: "tgtrgtrgtrgtrgtrgtrg"
//         },
//         {
//             header: "gtrgtrg",
//           headerData: "rtgtrg trgtrgtrg trgtrhtrghtr trgtrghtr gtr gtrgtrghtrhtr htrht"
//         },
//         {
//             header: "rgtrgrgvr",
//             headerData: "rtgtrgtrgr trgtrgtrg  rttrtrgtrgtr gtrgtrgtrgrffesferghtyh rgtyhtr"
//         },
//         {
//             header: "ferferf ergrgdfew ",
//             headerData: "svvvrvrvrg ergtrgtr rtgtrg"
//         }
//     ],
//     image: "blob:http://localhost:4000/1aa23468-3fd8-478b-8725-1dda00938d06"
// },
//   {
//     id:"5515kjnkjn",
//     title: "test-2",
//     discription: "hj  k  k k klmklrfmewklfnkjewndkjandkjnewdn bdchj dkcne kjnkjdium ",
//     adddata: "whya udayn is use iun da syskj dn ",
//     url: "klmll.com",
//     content: [
//         {
//             header: "fgreferf",
//             headerData: "tgtrgtrgtrgtrgtrgtrg"
//         },
//         {
//             header: "gtrgtrg",
//           headerData: "rtgtrg trgtrgtrg trgtrhtrghtr trgtrghtr gtr gtrgtrghtrhtr htrht"
//         },
//         {
//             header: "rgtrgrgvr",
//             headerData: "rtgtrgtrgr trgtrgtrg  rttrtrgtrgtr gtrgtrgtrgrffesferghtyh rgtyhtr"
//         },
//         {
//             header: "ferferf ergrgdfew ",
//             headerData: "svvvrvrvrg ergtrgtr rtgtrg"
//         }
//     ],
//     image: "blob:http://localhost:4000/1aa23468-3fd8-478b-8725-1dda00938d06"
// },
//   {
//     id:"3131kjnkjn",
//     title: "test-3",
//     discription: "hj  k  k k klmklrfmewklfnkjewndkjandkjnewdn bdchj dkcne kjnkjdium ",
//     adddata: "whya udayn is use iun da syskj dn ",
//     url: "klmll.com",
//     content: [
//         {
//             header: "fgreferf",
//             headerData: "tgtrgtrgtrgtrgtrgtrg"
//         },
//         {
//             header: "gtrgtrg",
//           headerData: "rtgtrg trgtrgtrg trgtrhtrghtr trgtrghtr gtr gtrgtrghtrhtr htrht"
//         },
//         {
//             header: "rgtrgrgvr",
//             headerData: "rtgtrgtrgr trgtrgtrg  rttrtrgtrgtr gtrgtrgtrgrffesferghtyh rgtyhtr"
//         },
//         {
//             header: "ferferf ergrgdfew ",
//             headerData: "svvvrvrvrg ergtrgtr rtgtrg"
//         }
//     ],
//     image: "blob:http://localhost:4000/1aa23468-3fd8-478b-8725-1dda00938d06"
// },
// ]



const Blog = () => {
  const websiteContent = useStore((state) => state.websiteContent);
   const [dataOfBlog,setdataOfBlog]=useState([])
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const blogRef = useRef(null);
  const history = useHistory();

  var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


function dateFormat1(d) {
  var t = new Date(d);
  return t.getDate() + ' ' + monthNames[t.getMonth()] + ', ' + t.getFullYear();
}


  useEffect(() => {
    window.scrollTo(0, 0);

  }, []);

  useEffect(() => {
    axios
    .get("getBloggers")
    .then((res) => {
      if (res.data) {
      console.log(res.data);
      setdataOfBlog(res.data)
        // toast.success("Blog Added Successfully");
      }
    })
    .catch((err) => {
      // setLoading(false);
      // toast.error("Something went wrong. Please try again.");
    });

  }, []);

  return (
    <div className="w-full">
      <Header
        aboutRef={aboutRef}
        contactRef={contactRef}
        blogRef={blogRef}
        headersData={headersData}
        websiteContent={websiteContent}
      />
    <div className="">
      <div className="pb-20 mt-28 lg:px-40 w-full" ref={blogRef}>
        <div className="flex flex-col items-center py-4   ">
          <span className="text-40 lg:text-54 font-cunia text-deepBlue">
            Latest Blogs
          </span>
        </div>
        <div className="grid grid-cols lg:grid-cols-3 mt-8  xl:gap-10 gap-6 space-y-10 lg:space-y-0 p-3  ">
        {
            dataOfBlog&&dataOfBlog?.length>0&&dataOfBlog?.map((item)=>{
              return(
                
                <div
            className=" w-84 items-center  shadow-xl hover:shadow-2xl hover:scale-100 rounded-xl relative cursor-pointer m-auto" 
            // onClick={() => history.push(`/blog/${item.id}`)}
           
          >
            <Link to={`/blogID/${item.title}`}>
            <div>
              <img
                loading="lazy"
                src={item.image}
                className="object-cover rounded-t-md h-60 w-full"
                alt="Earn Easy Money App OR Earn Easy App"
              />
              <CardContent className="mb-8">
                <div className="px-3 text-deepBlue text-25 font-cunia mb-4">
                {item.title}
                </div>
              </CardContent>
            </div>
            <div className="bg-bgBlue rounded-b-xl absolute left-0 bottom-0 w-full py-2 px-4 mt-4">
              <div className=" px-3 text-12 text-coolGray font-semibold ">
             { dateFormat1(item.createdOn)}
              </div>
            </div>
            </Link>
          </div>
        
              )
            })
          }
       
        <div
            className="w-84 m-auto shadow-xl hover:shadow-2xl hover:scale-100 rounded-xl relative cursor-pointer"
            onClick={() => history.push("/blog/How-to-Find-the-Right-Captcha-Solving-Job-for-Students")}
          >
            <div>
              <img
                loading="lazy"
                src={Blog6}
                className="object-cover rounded-t-md h-60 w-full"
                alt="Earn Easy Money App OR Earn Easy App"
              />
              <CardContent className="mb-5">
                <div className="px-3 text-deepBlue text-25 font-cunia">
                How to Find the Right Captcha Solving Job for Students
                </div>
              </CardContent>
            </div>
            <div className="bg-bgBlue rounded-b-xl absolute left-0 bottom-0 w-full py-2 px-4">
              <div className=" px-3 text-12 text-coolGray font-semibold">
                january 17, 2024
              </div>
            </div>
          </div>

          <div
            className="w-84 m-auto shadow-xl hover:shadow-2xl hover:scale-100 rounded-xl relative cursor-pointer"
            onClick={() => history.push("/blog/How-to-Earn-Pocket-Money-for-Students")}
          >
            <div>
              <img
                loading="lazy"
                src={Blog7}
                className="object-cover rounded-t-md h-60 w-full"
                alt="Earn Easy Money App OR Earn Easy App"
              />
              <CardContent className="mb-5">
                <div className="px-3 text-deepBlue text-25 font-cunia">
                How to Earn Pocket Money for Students
                </div>
              </CardContent>
            </div>
            <div className="bg-bgBlue rounded-b-xl absolute left-0 bottom-0 w-full py-2 px-4">
              <div className=" px-3 text-12 text-coolGray font-semibold">
                january 17, 2024
              </div>
            </div>
          </div>


          <div
            className="w-84 m-auto shadow-xl hover:shadow-2xl hover:scale-100 rounded-xl relative cursor-pointer"
            onClick={() => history.push("/blog/From-Passion-to-Profit-Building-Your-Side-Hustle")}
          >
            <div>
              <img
                loading="lazy"
                src={Blog8}
                className="object-cover rounded-t-md h-60 w-full"
                alt="Earn Easy Money App OR Earn Easy App"
              />
              <CardContent className="mb-5">
                <div className="px-3 text-deepBlue text-25 font-cunia">
                From Passion to Profit: Building Your Side Hustle
                </div>
              </CardContent>
            </div>
            <div className="bg-bgBlue rounded-b-xl absolute left-0 bottom-0 w-full py-2 px-4">
              <div className=" px-3 text-12 text-coolGray font-semibold">
                january 17, 2024
              </div>
            </div>
          </div>
          <div
            className="w-84 m-auto shadow-xl hover:shadow-2xl hover:scale-105  rounded-xl cursor-pointer relative"
            onClick={() => history.push("/blog/Ways-To-Make-Money-Online")}
          >
            <div>
              <img
                loading="lazy"
                src={Blog5}
                className="object-cover rounded-t-xl h-60 w-full"
                alt="Earn Easy Money App OR Earn Easy App"
              />
              <CardContent className="mb-5">
                <div className="px-3 text-deepBlue text-24 font-cunia">
                  Earneasy24 - Ways to Make Money Online in 2023
                </div>
              </CardContent>
            </div>
            <div className="bg-bgBlue rounded-b-xl align-bottom absolute left-0 bottom-0 w-full py-2 px-4">
              <div className=" px-3 text-12 text-coolGray font-semibold">
                August 11, 2023
              </div>
            </div>
          </div>

          <div
            className="w-84 m-auto shadow-xl hover:shadow-2xl hover:scale-105  rounded-xl cursor-pointer relative"
            onClick={() => history.push("/blog/Earneasy24-Money-with-Captcha-Apps-Your-Daily-Money-Making-Solution")}
          >
            <div>
              <img
                loading="lazy"
                src={Blog4}
                className="object-cover rounded-t-xl h-60 w-full"
                alt="Earn Easy Money App OR Earn Easy App"
              />
              <CardContent className="mb-5">
                <div className="px-3 text-deepBlue text-24 font-cunia">
                  Earneasy24 Money with Captcha Apps - Your Daily Money-Making
                  Solution
                </div>
              </CardContent>
            </div>
            <div className="bg-bgBlue rounded-b-xl align-bottom absolute left-0 bottom-0 w-full py-2 px-4">
              <div className=" px-3 text-12 text-coolGray font-semibold">
                August 11, 2023
              </div>
            </div>
          </div>

          <div
            className="w-84 m-auto shadow-xl hover:shadow-2xl hover:scale-105  rounded-xl cursor-pointer relative"
            onClick={() => history.push("/blog/21-Money-Making-Apps-That-You-Need-To-Download-In-2021")}
          >
            <div>
              <img
                loading="lazy"
                src={Blog1}
                className="object-cover rounded-t-xl h-60 w-full"
                alt="Earn Easy Money App OR Earn Easy App"
              />
              <CardContent className="mb-5">
                <div className="px-3 text-deepBlue text-24 font-cunia">
                  21 Money Making Apps That You Need To Download In 2021
                </div>
              </CardContent>
            </div>
            <div className="bg-bgBlue rounded-b-xl align-bottom absolute left-0 bottom-0 w-full py-2 px-4">
              <div className=" px-3 text-12 text-coolGray font-semibold">
                December 21, 2020
              </div>
            </div>
          </div>
          <div
            className="w-84 m-auto shadow-xl hover:shadow-2xl hover:scale-100 rounded-xl relative cursor-pointer"
            onClick={() => history.push("/blog/13-Ways-To-Achieve-Financial-Freedom")}
          >
            <div>
              <img
                loading="lazy"
                src={Blog2}
                className="object-cover rounded-t-md h-60 w-full"
                alt="Earn Easy Money App OR Earn Easy App"
              />
              <CardContent className="mb-5">
                <div className="px-3 text-deepBlue text-24 font-cunia">
                  13 Ways To Achieve Financial Freedom
                </div>
              </CardContent>
            </div>

            <div className="bg-bgBlue rounded-b-xl absolute bottom-0 left-0 w-full py-2 px-4">
              <div className=" px-3 text-12 text-coolGray font-semibold">
                October 13, 2020
              </div>
            </div>
          </div>
{/* {////////////////////////////////////////////////////////////} */}

          <div
            className="w-84 m-auto shadow-xl hover:shadow-2xl hover:scale-100 rounded-xl relative cursor-pointer"
            onClick={() => history.push("/blog/21-AMAZING-WAYS-TO-MAKE-MONEY-ONLINE-IN-INDIA-FOR-STUDENTS-IN-2021")}
          >
            <div>
              <img
                loading="lazy"
                src={Blog3}
                className="object-cover rounded-t-md h-60 w-full"
                alt="Earn Easy Money App OR Earn Easy App"
              />
              <CardContent className="mb-5">
                <div className="px-3 text-deepBlue text-21 font-cunia">
                  21 AMAZING WAYS TO MAKE MONEY ONLINE IN INDIA FOR STUDENTS IN
                  2021
                </div>
              </CardContent>
            </div>
            <div className="bg-bgBlue rounded-b-xl absolute left-0 bottom-0 w-full py-2 px-4">
              <div className=" px-3 text-12 text-coolGray font-semibold">
                October 2, 2020
              </div>
            </div>
          </div>
        
        </div>
      </div>
      </div>
      {/* Footer*/}

      <Footer />
    </div>
  );
};

export default Blog;
