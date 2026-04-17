const NAV = [
  { label: "Home", path: "/" },
  { label: "Works", path: "/works" },
  { label: "News", path: "/news" },
  {
    label: "About",
    children: [
      { label: "Company", path: "/about/company" },
      { label: "Contact", path: "/about/contact" }
    ]
  }
];

export default NAV;
