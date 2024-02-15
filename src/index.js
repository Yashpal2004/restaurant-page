import { initial_page } from "./initial-page-load";
import { menu_page } from "./menu-page-load";

initial_page()

const menu_button = document.getElementById("menu")

menu_button.addEventListener("click", menu_page)
