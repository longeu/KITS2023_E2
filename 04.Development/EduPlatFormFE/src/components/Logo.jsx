/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
export default function Logo({src}) {
  const navigate = useNavigate();
  return (
    <div>
      <img src={src} alt="logo" width={120} height={50} onClick={() => navigate("/")}/>
    </div>
  )
}
