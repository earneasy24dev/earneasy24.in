import Card from "../../components/atoms/card/card";

const Documents = () => {
  return (
    <div>
      <div className="lg:px-16 px-10 py-16 lg:py-20 bg-lightpink">
        <div className="flex justify-center text-center my-12">
          <span className="text-40 lg:text-54 text-deepBlue font-cunia">
            Documents
          </span>
        </div>
        <div className="grid lg:grid-cols-4  gap-12">
          <Card className="border-2 border-bgBlue ">
            <a
              className="flex flex-col items-center text-4c4c4c py-6 h-full"
              href={
                "https://captchas-new.s3.ap-south-1.amazonaws.com/aircraft-documents/mca.jpeg"
              }
              without
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-28 text-center mx-4 text-deepBlue font-cunia">
                MCA Certificate
              </span>
              <img
                loading="lazy"
                src={
                  "https://captchas-new.s3.ap-south-1.amazonaws.com/aircraft-documents/mca.jpeg"
                }
                alt="Earn Easy Money App OR Earn Easy App"
                className="h-full w-full object-fit mt-3"
              />
            </a>
          </Card>

          <Card className="border-2 border-bgBlue ">
            <a
              className="flex flex-col items-center text-4c4c4c py-6 h-full"
              href={
                "https://captchas-new.s3.ap-south-1.amazonaws.com/aircraft-documents/gst.jpeg"
              }
              without
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-28 text-center mx-4 text-deepBlue font-cunia">
                GST Certificate
              </span>
              <img
                loading="lazy"
                src={
                  "https://captchas-new.s3.ap-south-1.amazonaws.com/aircraft-documents/gst.jpeg"
                }
                alt="Earn Easy Money App OR Earn Easy App"
                className="h-full w-full object-fit mt-3"
              />
            </a>
          </Card>

          <Card className="border-2 border-bgBlue ">
            <a
              className="flex flex-col items-center text-4c4c4c py-6 h-full"
              href={
                "https://captchas-new.s3.ap-south-1.amazonaws.com/aircraft-documents/iso.jpeg"
              }
              without
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-28 text-center mx-4 text-deepBlue font-cunia">
                ISO Certificate
              </span>
              <img
                loading="lazy"
                src={
                  "https://captchas-new.s3.ap-south-1.amazonaws.com/aircraft-documents/iso.jpeg"
                }
                alt="Earn Easy Money App OR Earn Easy App"
                className="h-full w-full object-fit mt-3"
              />
            </a>
          </Card>

          <Card className="border-2 border-bgBlue ">
            <a
              className="flex flex-col items-center text-4c4c4c py-6 h-full"
              href={
                "https://captchas-new.s3.ap-south-1.amazonaws.com/aircraft-documents/sdl.jpeg"
              }
              without
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-28 text-center mx-4 text-deepBlue font-cunia">
                DIN Certificate
              </span>
              <img
                loading="lazy"
                src={
                  "https://captchas-new.s3.ap-south-1.amazonaws.com/aircraft-documents/sdl.jpeg"
                }
                alt="Earn Easy Money App OR Earn Easy App"
                className="h-full w-full object-fit mt-3"
              />
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Documents;
