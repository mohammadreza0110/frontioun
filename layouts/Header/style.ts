const classes = {
  header: {
    wrapper:
      "relative flex justify-between lg:w-10/12 m-auto rounded-2xl py-6 lg:py-9 px-7 bg-primary-light shadow-md dark:bg-primary-dark mt-10",
    frontioun_logo: {
      wraper:
        "whitespace-nowrap text-4xl font-extrabold logo__gradient drop-shadow cursor-pointer m-auto lg:m-0",
      text: "hidden lg:inline-block px-1 max-w-max",
      tags: "text-4xl lg:text-base",
    },
    search_area: {
      wrapper: "w-1/2 hidden lg:block",
      // sr-only is a tailwind feature that usefull for screen readers and hidden for others
      label: "sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white",
      button:
        "text-white cursor-pointer absolute active:scale-90 left-1.5 bottom-[.4rem] bg-blue-700 hover:bg-blue-800 transition-all !outline-none font-medium rounded-xl text-sm px-6 py-2",
      input:
        "input input-bordered border-none bg-zinc-200 dark:bg-slate-700 placeholder:text-gray-500 dark:placeholder:text-white !rounded-2xl input-md w-full pr-10",
      icon: {
        wrapper: "absolute inset-y-0 right-0 flex items-center pr-8",
        svg: "w-5 h-5 text-gray-500 dark:text-white absolute right-2.5 bottom-3.5",
      },
    },

    user_area: {
      wrapper: "flex items-center justify-between gap-x-4",
      darkMode: {
        wrapper:
          "p-2 transition-colors rounded-full cursor-pointer swap swap-rotate hover:bg-slate-200 hover:dark:bg-slate-600",
        icon: "w-6 lg:w-8 fill-current text-slate-600 dark:text-primary-light",
      },
      cart: "hidden lg:block p-3 transition-colors rounded-full cursor-pointer hover:bg-slate-200",
    },

    subHeader: {
      wrapper:
        "hidden lg:block w-9/12 py-5 m-auto bg-slate-100 shadow-md rounded-b-2xl px-11 dark:bg-slate-400",
      navbar: "center-center gap-x-8",
      items: "cursor-pointer text-gray-700",
    },
  },

  side_bar: {
    wrapper: (active: string) =>
      `fixed inset-0 z-50 h-screen py-8 transition-all shadow-md w-[80vw] bg-primary-light dark:bg-primary-dark px-4 translate-x-0 lg:translate-x-full ${
        active ? "translate-x-0" : "translate-x-full"
      }`,
    hamburger_icon:
      "lg:hidden btn btn-circle swap swap-rotate !bg-transparent !border-none text-primary-dark dark:text-primary-light",
    frontioun_logo: {
      wraper:
        "whitespace-nowrap py-4 text-3xl text-center font-extrabold logo__gradient drop-shadow cursor-pointer",
      text: "px-1 max-w-max",
      tags: "text-sm",
    },
    search_area: {
      wrapper: "",
      // sr-only is a tailwind feature that usefull for screen readers and hidden for others
      label: "sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white",
      input:
        "input input-bordered border-none bg-zinc-200 dark:bg-slate-700 placeholder:text-gray-500 dark:placeholder:text-white !rounded-2xl input-md w-full pl-10",
      icon: {
        wrapper: "",
        svg: "w-5 h-5 text-gray-500 dark:text-white absolute left-2.5 bottom-3.5",
      },
    },
  },
};

export default classes;
