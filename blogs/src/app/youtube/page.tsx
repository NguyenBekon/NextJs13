"use client";

import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

const Youtube = () => {
  const router = useRouter();
  const handleBtn = () => {
    router.push("/");
  };
  return (
    <div>
      This is Youtube page
      <div>
        <Button variant="success">Test button bootstrap</Button>
        <button onClick={() => handleBtn()}>Back to Home</button>
      </div>
    </div>
  );
};

export default Youtube;
