import { useMessages } from "next-intl";

const Copyright = () => {
  const messages: any = useMessages();
  return (
    <div className="hidden md:flex w-full items-center justify-center">
      <p className="font-mainMedium text-black text-xs text-center">
        {messages["copyright"]}
      </p>
    </div>
  );
};

export default Copyright;
