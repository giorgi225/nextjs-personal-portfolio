export type FilterBtnsArr = {
  text: string;
  val: string;
  icon?: string;
};

export type FilterBtnProps = {
  filterBtns: FilterBtnsArr[];
  filterSelected: FilterBtnsArr["val"];
  onFilter: (val: FilterBtnsArr["val"]) => {};
};
