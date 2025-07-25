import React from "react";

const SnowSunIcon: React.FC<React.SVGProps<SVGSVGElement>> = (_props) => (
  <svg
    height="1.5em"
    width="1.6em"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{ transform: "scale(0.7)" }}
  >
    {/* Левая половина лучей */}
    <path
      style={{ fill: "#FFA733" }}
      d="M256,512L256,512c-6.679,0-12.712-3.978-15.342-10.12l-42.827-105.456L96.913,436.783c-6.212,2.489-13.293,1.022-18.006-3.695c-4.723-4.717-6.18-11.804-3.695-18.011l40.37-100.902L10.12,271.348C3.978,268.718,0,262.674,0,256s3.978-12.718,10.12-15.348l105.462-42.827L75.212,96.924c-2.483-6.206-1.027-13.293,3.695-18.011c4.712-4.728,11.794-6.185,18.006-3.695l100.919,40.359L240.658,10.12C243.288,3.978,249.321,0,256,0"
      transform="translate(-20, 0)"
    />
    {/* Правая половина лучей */}
    <path
      style={{ fill: "#3078cb" }}
      d="M256,0c6.679,0,12.712,3.978,15.342,10.12l42.831,105.456l100.913-40.359c6.212-2.489,13.293-1.033,18.006,3.695c4.723,4.717,6.18,11.804,3.695,18l-40.365,100.924l105.456,42.815C508.022,243.282,512,249.326,512,256s-3.978,12.718-10.12,15.348l-105.456,42.815l40.365,100.924c2.483,6.195,1.027,13.283-3.695,18c-4.712,4.717-11.794,6.185-18.006,3.695l-100.913-40.359L271.343,501.88C268.712,508.022,262.679,512,256,512z"
      transform="translate(20, 0)"
    />
    {/* Левая половина центрального круга */}
    <path
      style={{ fill: "#FFDA44" }}
      d="M256,406.261c-82.853,0-150.261-67.403-150.261-150.261S173.147,105.739,256,105.739v300.522z"
      transform="translate(-20, 0)"
    />
    {/* Правая половина центрального круга */}
    <path
      style={{ fill: "#5793d7" }}
      d="M256,105.739c82.853,0,150.261,67.403,150.261,150.261S338.853,406.261,256,406.261V105.739z"
      transform="translate(20, 0)"
    />
  </svg>
);

export default SnowSunIcon;