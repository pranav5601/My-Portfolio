import { resume } from "../assets";
import { download } from "../assets";
import { useState } from "react";

const DownloadPDF = () => {
  const [hover, setHover] = useState(false);

  //   console.log(hover);

  const handleHover = () => {
    setHover(true);
  };

  const handleHoverOut = () => {
    setHover(false);
  };

  const handleDownload = () => {
    fetch(resume).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Pranav_Resume.pdf";
        document.body.appendChild(alink);
        alink.click();
        document.body.removeChild(alink);
      });
    });
  };
  return (
    <div onMouseOver={handleHover} onMouseOut={handleHoverOut}>
      <button
        onClick={handleDownload}
        className="flex items-center gap-2 text-orange-500 rounded-[10px] px-2 py-1  hover:bg-orange-500 hover:text-white transition-colors duration-300"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={`${
            hover ? "fill-white duration-300" : "fill-secondary duration-300"
          } `}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 18L16 13H13V2H11V13H8L12 18Z" />
          <path d="M19 9H15V11H19V20H5V11H9V9H5C3.897 9 3 9.897 3 11V20C3 21.103 3.897 22 5 22H19C20.103 22 21 21.103 21 20V11C21 9.897 20.103 9 19 9Z" />
        </svg>
        <span
          className={`text-[16px] sm:text-[18px] font-bold hidden md:block ss:block `}
        >
          Resume
        </span>
      </button>
    </div>
  );
};

export default DownloadPDF;
