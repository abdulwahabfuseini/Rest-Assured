import { Button } from "antd";
import React from "react";

import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="grid sm:place-content-center px-2 py-20 gap-y-8 w-full place-items-center">
      <div className=" text-center">
        <h1 className="text-8xl sm:text-9xl">404</h1>
        <h3 className="text-4xl sm:text-6xl">Page not found</h3>
      </div>
      <strong className="text-lg text-Red text-center">
        Server malfunctioned or has been shut down
      </strong>
      <div className=" leading-6 border-b-2 pb-6">
        <h4 className=" font-semibold">Possible reasons:</h4>
        <li>A misspelled URL</li>
        <li>
          The page has been moved or deleted and there's no redirect set up
        </li>
        <li>
          The URL wasn't correct when it was originally set up or it was linked
          incorrectly
        </li>
      </div>
      <Button type="primary"   className="text-center bg-blue-600 text-lg h-10">
      <Link to="/">Home Page</Link>
      </Button>
    </div>
  );
};

export default PageNotFound;
