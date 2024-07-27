export default function CaptchaDemo() {
  return (
    <div
      className="h-screen w-full flex justify-center items-center"
      style={{ background: "#0e0e52" }}
    >
      <div className="w-full p-4 max-w-[1000px] h-auto">
        <div
          className="relative w-full h-full"
          style={{ paddingTop: "56.25%" }}
        >
          <video
            controls
            poster="/images/11.png"
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source
              src="https://blogger-24.s3.ap-south-1.amazonaws.com/captcha+demo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
