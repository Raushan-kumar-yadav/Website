import type { JSX } from "react";

type SubmenuItem = {
  href: string;
  icon: JSX.Element;
  label: string;
  desc: string;
}

type MenuItem = {
  href: string;
  label: string;
  submenu?: SubmenuItem[]
};

export type { SubmenuItem, MenuItem };