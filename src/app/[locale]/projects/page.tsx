import Projects from "@/components/pages/Projects";
import {headers} from "next/headers"
export default function Page() {
  const headersList = headers()
  const dynamicNextApiUrl = headersList.get("x-nextApiUrl")
  console.log(dynamicNextApiUrl)
  return (
    <>
      {/* <Projects projectsArr={}/> */}
    </>
  );
}