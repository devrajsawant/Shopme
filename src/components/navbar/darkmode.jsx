import React from 'react'

const darkmode = () => {
  const [theme , setTheme] = React.useState(
      localStorage.getItem("theme") ? localStorage.getItem("theme"):"light"
  );

  const element = document.documentElement;

React.useEffect(() => {
  if ( theme === "dark"){
    element.classList.add("dark");
    localStorage.setItem("theme" , "dark");
  }
  else{
    element.classList.remove("dark");
    localStorage.setItem("theme" , "light");
  }
} , [theme])




  return (
    <div>
      <label class="relative inline-flex items-center cursor-pointer">
  <input class="sr-only peer" value="" type="checkbox" onClick={() => setTheme(theme === "light" ? "dark" : "light")} />
  <div
    class="w-10 h-10 rounded-full ring-0 peer duration-500 outline-none
     bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center
      after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute 
      before:h-8 before:w-8 before:top-1/2 before:bg-white before:rounded-full before:left-1 
      before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 
      peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400
       peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] 
       after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full 
       after:w-8 after:h-8 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100
        peer-checked:after:rotate-180 peer-checked:after:translate-y-0"
  ></div>
</label>

    </div>
  )
}

export default darkmode
