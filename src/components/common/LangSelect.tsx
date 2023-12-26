// Next
import { useState } from "react";

// Types
import type { LangOptionTypes } from "@/types/components/langselect.types";

// Controllers
import languageOptions from "@/controllers/language.controller";

// Components
import Select from "react-select";
import IconBase from "@components/icon/IconBase";
import { Link, usePathname } from "@/navigation";
import { useLocale } from "next-intl";

const LanguageSelect = ({ messages }: { messages: any }) => {
  const pathname = usePathname();
  const locale = useLocale();
  const languages: LangOptionTypes[] = languageOptions;

  const activeOption =
    languages.find((lang: LangOptionTypes) => lang.countryCode === locale) ||
    languages[0];
  const [selected, setSelected] = useState(activeOption);
  const changeLocale = (selectedOption: any) => {
    setSelected(selectedOption);
  };

  const customOption = ({ innerProps, label, data }: any) => (
    <Link
      href={pathname}
      locale={data.countryCode}
      {...innerProps}
      className={`${
        data.countryCode === selected.countryCode ? "bg-grayLight" : ""
      } flex items-center gap-2 p-2 hover:bg-grayLight2 cursor-default rounded`}
    >
      <img
        width="100"
        height="100"
        src={data.flag}
        className="w-[15px] h-auto"
        alt={data.countryName}
      />
      <p className="font-mainMedium text-sm text-black">
        {messages[data.countryName]}
      </p>
    </Link>
  );

  const customSingleValue = ({ innerProps, data }: any) => (
    <div {...innerProps} className="flex items-center gap-2 cursor-pointer">
      <p className="font-mainMedium text-sm text-black-80">
        {messages[data.countryName]}
      </p>
      <IconBase icon="ep:arrow-down" />
    </div>
  );

  return (
    <Select
      instanceId={"langSelect"}
      options={languages}
      value={selected}
      onChange={changeLocale}
      isSearchable={false}
      isClearable={false}
      components={{
        Option: customOption,
        SingleValue: customSingleValue,
        DropdownIndicator: null,
      }}
      classNames={{
        container: () => "relative",
        menu: () => "select-menu",
        control: () =>
          "!bg-transparent !p-0 !min-h-[25px] !border-[0px] !shadow-none !border-transparent",
        menuList: () => "flex flex-col gap-[4px]",
        valueContainer: () => "!flex",
      }}
    />
  );
};

export default LanguageSelect;
