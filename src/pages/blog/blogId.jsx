import React, { useRef, useEffect, useState } from "react";

import Image from "../../images/blogpicture6.jpg";

import { Helmet } from "react-helmet";
import axios from "../../axios";
import Header from "../../components/organisms/header/header.component";
import Footer from "../../components/organisms/footer/footer.component";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
const headersData = [
  {
    label: "About",
    href: "/",
    id: "about",
  },

  {
    label: "Blog",
    href: "/",
    id: "blog",
  },

  {
    label: "Contact",
    href: "/",
    id: "contact",
  },
];
// const dataOfBlog = [
//   {
//     id: "125kjnkjn",
//     title: " How to Find the Right Captcha Solving Job for Students",
//     discription:
//       "hj  k  k k klmklrfmewklfnkjewndkjandkjnewdn bdchj dkcne kjnkjdium ",
//     adddata: "whya udayn is use iun da syskj dn ",
//     url: "klmll.com",
//     content: [
//       {
//         header: "fgreferf",
//         headerData: "tgtrgtrgtrgtrgtrgtrg",
//       },
//       {
//         header: "gtrgtrg",
//         headerData:
//           "rtgtrg trgtrgtrg trgtrhtrghtr trgtrghtr gtr gtrgtrghtrhtr htrht",
//       },
//       {
//         header: "rgtrgrgvr",
//         headerData:
//           "rtgtrgtrgr trgtrgtrg  rttrtrgtrgtr gtrgtrgtrgrffesferghtyh rgtyhtr",
//       },
//       {
//         header: "ferferf ergrgdfew ",
//         headerData: "svvvrvrvrg ergtrgtr rtgtrg",
//       },
//     ],
//     image: "blob:http://localhost:4000/1aa23468-3fd8-478b-8725-1dda00938d06",
//   },
//   {
//     id: "5515kjnkjn",
//     title: "test-2",
//     discription:
//       "hj  k  k k klmklrfmewklfnkjewndkjandkjnewdn bdchj dkcne kjnkjdium ",
//     adddata: "whya udayn is use iun da syskj dn ",
//     url: "klmll.com",
//     content: [
//       {
//         header: "fgreferf",
//         headerData: "tgtrgtrgtrgtrgtrgtrg",
//       },
//       {
//         header: "gtrgtrg",
//         headerData:
//           "rtgtrg trgtrgtrg trgtrhtrghtr trgtrghtr gtr gtrgtrghtrhtr htrht",
//       },
//       {
//         header: "rgtrgrgvr",
//         headerData:
//           "rtgtrgtrgr trgtrgtrg  rttrtrgtrgtr gtrgtrgtrgrffesferghtyh rgtyhtr",
//       },
//       {
//         header: "ferferf ergrgdfew ",
//         headerData: "svvvrvrvrg ergtrgtr rtgtrg",
//       },
//     ],
//     image: "blob:http://localhost:4000/1aa23468-3fd8-478b-8725-1dda00938d06",
//   },
//   {
//     id: "3131kjnkjn",
//     title: "test-3",
//     discription:
//       "hj  k  k k klmklrfmewklfnkjewndkjandkjnewdn bdchj dkcne kjnkjdium ",
//     adddata: "whya udayn is use iun da syskj dn ",
//     url: "klmll.com",
//     content: [
//       {
//         header: "fgreferf",
//         headerData: "tgtrgtrgtrgtrgtrgtrg",
//       },
//       {
//         header: "gtrgtrg",
//         headerData:
//           "rtgtrg trgtrgtrg trgtrhtrghtr trgtrghtr gtr gtrgtrghtrhtr htrht",
//       },
//       {
//         header: "rgtrgrgvr",
//         headerData:
//           "rtgtrgtrgr trgtrgtrg  rttrtrgtrgtr gtrgtrgtrgrffesferghtyh rgtyhtr",
//       },
//       {
//         header: "ferferf ergrgdfew ",
//         headerData: "svvvrvrvrg ergtrgtr rtgtrg",
//       },
//     ],
//     image: "blob:http://localhost:4000/1aa23468-3fd8-478b-8725-1dda00938d06",
//   },
// ];

const BlogId = () => {
  const history = useHistory();
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const blogRef = useRef(null);
  const { id } = useParams();
  const [product, setProduct] = useState("");
  console.log(id);
  console.log(product);

  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var monthShortNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  function dateFormat1(d) {
    var t = new Date(d);
    return (
      t.getDate() + " " + monthNames[t.getMonth()] + ", " + t.getFullYear()
    );
  }

  function dateFormat2(d) {
    var t = new Date(d);
    return (
      t.getDate() + " " + monthShortNames[t.getMonth()] + ", " + t.getFullYear()
    );
  }

  console.log(new Date());
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   const predata = dataOfBlog?.find((el) => el.id == id);
  //   // console.log(predata);
  //   setProduct(predata);
  //   // console.log()
  //   // console.log(dateFormat2(new Date()))
  // }, []);
  useEffect(() => {
    axios
      .get("getBloggers")
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          const predata = res.data?.find((el) => el.title == id);
          // console.log(predata);
          setProduct(predata);
          // setdataOfBlog(res.data)
          // toast.success("Blog Added Successfully");
        }
      })
      .catch((err) => {
        // setLoading(false);
        // toast.error("Something went wrong. Please try again.");
      });

    // console.log(dateFormat1("2024-01-21T06:31:47.504Z"))
    // console.log(dateFormat2(new Date()))
  }, []);
//   useEffect(() => {
//     console.log('Product:', product);
//     if (product?.title) {
//        const updatedUrl = `/blogID/${encodeURIComponent(product.title)}`;
//        console.log('Updated URL:', updatedUrl);
//        history.replace(updatedUrl);
//     }
//  }, [product, history]);

  // if(product&&product.title.length>0) {
  //   history.replace( `/blogID/${product.title}` );
  // }
//   useEffect(() => {
//     // Get the current URL
//     const currentUrl = window.location.href;
// console.log(currentUrl);
//     // Decode the URL
//     const decodedUrl = decodeURIComponent(currentUrl);
//     console.log(decodedUrl);
//     // Replace %20 with spaces
//     const updatedUrl = decodedUrl.replace(/%20/g, ' ');
//     console.log(updatedUrl);
//     // Update the browser history without triggering a page reload
    
//     // window.history.replaceState({},document.title,updatedUrl);
//   }, []);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ways to Make Money Online in 2023 | Earneasy24</title>
        <meta
          name="description"
          content="Looking for a side hustle to bring in extra money or want to transfer out of your office job? There are many ways to make money online."
        />
      </Helmet>

      <Header
        aboutRef={aboutRef}
        contactRef={contactRef}
        blogRef={blogRef}
        headersData={headersData}
      />

      <div className="pb-20 mt-36 lg:px-64 px-10" ref={blogRef}>
        <div className="flex flex-col items-center py-4 text-deepBlue  ">
          <span className="text-40 lg:text-54 font-cunia text-center">
            {product && product?.title}
          </span>
        </div>
        <div>
          <div className="flex flex-col items-center my-6  ">
            <img
            
              loading="lazy"
              src={product && product?.image}
              alt="Earn Easy Money App OR Earn Easy App"
            ></img>
          </div>
          {/* <h1>
            <strong className="font-cunia">
              The Power of Captcha Earning in 2023:
            </strong>
          </h1> */}
          <br />
          <p>{product && product?.description}</p>
          <br />
          {product &&
            product?.content?.length > 0 &&
            product?.content?.map((item, index) => {
              return (
                <>
                  <p>
                    <strong className="text-19 text-deepBlue">
                      {index + 1}. {item.header}
                    </strong>
                  </p>
                  <br />
                 
                  
                  {item.contentImage&&item.contentImage?.length>0? <div className="flex flex-col items-center my-6 ">
            <img
              className="w-1/2"
              loading="lazy"
              src={item.contentImage}
              alt="Earn Easy Money App OR Earn Easy App"
            ></img>
          </div>:null}
                
                  <p>{item.headerData}</p>
                  <br />
                  <br />
                </>
              );
            })}
          <br />
          
          {/* <h2>
            <strong className="font-cunia">Know More</strong>
          </h2> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogId;
