// Next
import Link from "next/link";
import Image from "next/image";

// Enums
import { Route } from "@enums/routes.enum";

const Logo = () => {
  return (
    <div className="hidden md:flex md:px-3 md:pt-3 lg:px-0 lg:pt-0">
      <Link className="flex w-full max-w-[77px]" href={Route.HOME}>
        <Image
          src="/images/Logo.svg"
          className="w-full toggle-image"
          width={100}
          height={50}
          alt="Logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
