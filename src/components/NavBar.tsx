import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

interface MenuItem {
  id: number;
  title: string;
  path: string;
}

const Navbar: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [language, setLanguage] = useState<"EN" | "FA">("EN");

  useEffect(() => {
    // Fetch menu items from the fake API
    fetch("http://localhost:5021/menuItems")
      .then((response) => response.json())
      .then((data) => setMenuItems(data))
      .catch((error) => console.error("Error fetching menu items:", error));
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "FA" : "EN"));
  };

  return (
    <nav className="bg-blue-900 text-white p-4 flex items-center justify-between rtl">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
        MyLogo
        </Link>
      </div>

      {/* Menu Items */}
      <ul className="flex space-x-4 space-x-reverse">
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link href={item.path}>
     {item.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Language Switcher */}
      <button onClick={toggleLanguage} className="mx-4 hover:text-blue-300">
        {language}
      </button>

      {/* Login/Sign In Icon */}
      <Link href="/login">
       
          <span className="material-icons">account_circle</span>
      
      </Link>

      {/* Button */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;
