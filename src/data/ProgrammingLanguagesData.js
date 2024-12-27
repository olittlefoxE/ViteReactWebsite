const ProgrammingLanguagesData = [
  {
    name: "HTML",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    founders: ["Tim Berners-Lee"],
    year: 1993,
    background:
      "HTML (HyperText Markup Language) is the standard language for creating and structuring content on the web.",
    relatedLanguages: ["CSS", "JavaScript"],
    website: "https://html.com",
  },
  {
    name: "CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    founders: ["Håkon Wium Lie"],
    year: 1996,
    background:
      "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML.",
    relatedLanguages: ["HTML", "JavaScript"],
    website: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Java",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    founders: ["James Gosling"],
    year: 1995,
    background:
      "Java is a class-based, object-oriented programming language designed to have minimal implementation dependencies. It is widely used for building enterprise-scale applications.",
    relatedLanguages: ["C#", "Kotlin", "Scala"],
    website: "https://www.java.com/",
  },
  {
    name: "JavaScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Javascript_on_figma.png",
    founders: ["Brendan Eich"],
    year: 1995,
    background:
      "JavaScript is a versatile programming language primarily used for web development. It allows developers to create interactive and dynamic web pages.",
    relatedLanguages: ["TypeScript", "CoffeeScript", "ActionScript"],
    website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Python",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Python_logo_01.svg",
    founders: ["Guido van Rossum"],
    year: 1991,
    background:
      "Python is a high-level, general-purpose programming language known for its simplicity and readability. It's widely used in data science, web development, and automation.",
    relatedLanguages: ["Ruby", "Julia", "Perl"],
    website: "https://www.python.org/",
  },
  {
    name: "C++",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
    founders: ["Bjarne Stroustrup"],
    year: 1985,
    background:
      "C++ is an extension of the C programming language. It is widely used for systems programming, game development, and performance-critical applications.",
    relatedLanguages: ["C", "Rust", "Objective-C"],
    website: "https://isocpp.org/",
  },
  {
    name: "C#",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/C-Sharp_Logo.svg",
    founders: ["Anders Hejlsberg"],
    year: 2000,
    background:
      "C# is a modern, object-oriented programming language developed by Microsoft. It is mainly used for Windows applications, game development (with Unity), and enterprise software.",
    relatedLanguages: ["Java", "F#", "VB.NET"],
    website: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    name: "Ruby",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg",
    founders: ["Yukihiro Matsumoto"],
    year: 1995,
    background:
      "Ruby is a dynamic, open-source programming language focused on simplicity and productivity. It is best known for its use in the Ruby on Rails framework.",
    relatedLanguages: ["Python", "Perl", "Crystal"],
    website: "https://www.ruby-lang.org/en/",
  },
  {
    name: "Go",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
    founders: ["Robert Griesemer", "Rob Pike", "Ken Thompson"],
    year: 2009,
    background:
      "Go, also known as Golang, is a statically typed language designed for simplicity and efficiency. It is commonly used in cloud computing, distributed systems, and server-side applications.",
    relatedLanguages: ["Rust", "C", "Python"],
    website: "https://go.dev/",
  },
  {
    name: "Rust",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
    founders: ["Graydon Hoare"],
    year: 2010,
    background:
      "Rust is a systems programming language that focuses on speed, memory safety, and parallelism. It is gaining popularity for web assembly, game engines, and blockchain development.",
    relatedLanguages: ["C++", "Go", "Haskell"],
    website: "https://www.rust-lang.org/",
  },
  {
    name: "Swift",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg",
    founders: ["Chris Lattner"],
    year: 2014,
    background:
      "Swift is a general-purpose programming language developed by Apple. It is used primarily for iOS and macOS application development.",
    relatedLanguages: ["Objective-C", "Kotlin", "Java"],
    website: "https://developer.apple.com/swift/",
  },
  {
    name: "Kotlin",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
    founders: ["JetBrains"],
    year: 2011,
    background:
      "Kotlin is a modern programming language fully interoperable with Java. It is widely used for Android development and gaining traction in web and server-side development.",
    relatedLanguages: ["Java", "Scala", "Swift"],
    website: "https://kotlinlang.org/",
  },
  {
    name: "Vue.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    founders: ["Evan You"],
    year: 2014,
    background:
      "Vue.js is a progressive JavaScript framework used for building user interfaces and single-page applications. It's designed to be incrementally adoptable.",
    relatedLanguages: ["JavaScript", "TypeScript", "React"],
    website: "https://vuejs.org/",
  },
  {
    name: "Solid.js",
    logo: "https://cdn.brandfetch.io/idJhxDJuoj/w/180/h/180/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B",
    founders: ["Ryan Carniato"],
    year: 2020,
    background:
      "Solid.js is a declarative JavaScript library for building user interfaces. It is known for its fine-grained reactivity and high performance.",
    relatedLanguages: ["JavaScript", "TypeScript"],
    website: "https://solidjs.com/",
  },
  {
    name: "Svelte",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
    founders: ["Rich Harris"],
    year: 2016,
    background:
      "Svelte is a component-based JavaScript framework that shifts much of the work to compile time, resulting in smaller, faster applications.",
    relatedLanguages: ["JavaScript", "TypeScript", "Vue"],
    website: "https://svelte.dev/",
  },
  {
    name: "Angular",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Angular_gradient.png",
    founders: ["Misko Hevery", "Brad Green"],
    year: 2010,
    background:
      "Angular is a platform and framework for building single-page client applications using HTML and TypeScript. It's a powerful framework for web applications.",
    relatedLanguages: ["JavaScript", "TypeScript"],
    website: "https://angular.io/",
  },
  {
    name: "Perl",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Perl_Code_Logo.svg",
    founders: ["Larry Wall"],
    year: 1987,
    background:
      "Perl is a high-level, general-purpose, interpreted, and dynamic programming language known for its powerful text processing capabilities.",
    relatedLanguages: ["Python", "Ruby"],
    website: "https://www.perl.org/",
  },
  {
    name: "R",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg",
    founders: ["Ross Ihaka", "Robert Gentleman"],
    year: 1993,
    background:
      "R is a programming language and software environment for statistical computing and graphics. It's widely used in data analysis and research.",
    relatedLanguages: ["Python", "MATLAB"],
    website: "https://www.r-project.org/",
  },
  {
    name: "Scala",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/Scala-full-color.svg",
    founders: ["Martin Odersky"],
    year: 2004,
    background:
      "Scala is a general-purpose programming language that integrates functional and object-oriented programming. It's often used in big data and distributed systems.",
    relatedLanguages: ["Java", "Kotlin", "Haskell"],
    website: "https://www.scala-lang.org/",
  },
  {
    name: "Haskell",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Haskell-Logo.svg",
    founders: ["Lennart Augustsson", "John Hughes", "Simon Peyton Jones"],
    year: 1990,
    background:
      "Haskell is a standardized, general-purpose, purely functional programming language with non-strict semantics.",
    relatedLanguages: ["Lisp", "Scala", "OCaml"],
    website: "https://www.haskell.org/",
  },
  {
    name: "Dart",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png",
    founders: ["Google"],
    year: 2011,
    background:
      "Dart is a client-optimized programming language for developing fast apps on any platform, especially for mobile and web development.",
    relatedLanguages: ["JavaScript", "TypeScript", "Kotlin"],
    website: "https://dart.dev/",
  },
  {
    name: "MATLAB",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png",
    founders: ["Cleve Moler"],
    year: 1984,
    background:
      "MATLAB is a high-performance language for technical computing, integrating computation, visualization, and programming.",
    relatedLanguages: ["R", "Python", "Octave"],
    website: "https://www.mathworks.com/",
  },
  {
    name: "Lisp",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Lisp_logo.svg",
    founders: ["John McCarthy"],
    year: 1958,
    background:
      "Lisp is one of the oldest high-level programming languages, known for its powerful macro system and use in artificial intelligence research.",
    relatedLanguages: ["Scheme", "Clojure", "Common Lisp"],
    website: "https://lisp-lang.org/",
  },
  {
    name: "Fortran",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Fortran_logo.svg",
    founders: ["John Backus"],
    year: 1957,
    background:
      "Fortran (Formula Translation) is a programming language that excels in numerical computation and scientific computing, still widely used in high-performance computing.",
    relatedLanguages: ["C", "Ada", "COBOL"],
    website: "https://fortran-lang.org/",
  },
  {
    name: "jQuery",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/JQuery_icon.svg",
    founders: ["John Resig"],
    year: 2006,
    background:
      "jQuery is a fast, small, and feature-rich JavaScript library. It simplifies things like HTML document traversal, event handling, and animation.",
    relatedLanguages: ["JavaScript"],
    website: "https://jquery.com/",
  },
  {
    name: "PHP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
    founders: ["Rasmus Lerdorf"],
    year: 1995,
    background:
      "PHP is a server-side scripting language designed for web development but also used as a general-purpose language. It is widely used for creating dynamic web pages.",
    relatedLanguages: ["JavaScript", "HTML", "CSS"],
    website: "https://www.php.net/",
  },
  {
    name: "SQL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Sql_data_base_with_logo.svg",
    founders: ["Donald D. Chamberlin", "Raymond F. Boyce"],
    year: 1974,
    background:
      "SQL (Structured Query Language) is a standard programming language used for managing and manipulating relational databases.",
    relatedLanguages: ["PL/SQL", "T-SQL"],
    website: "https://www.sql.org/",
  },
  {
    name: "TypeScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Typescript_fullstack_logo.png",
    founders: ["Anders Hejlsberg"],
    year: 2012,
    background:
      "TypeScript is a superset of JavaScript that adds static types. It helps developers catch errors early and enhances the development process for large-scale applications.",
    relatedLanguages: ["JavaScript"],
    website: "https://www.typescriptlang.org/",
  },
  {
    name: "ASP.NET",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/Asp.net.svg",
    founders: ["Microsoft"],
    year: 2002,
    background:
      "ASP.NET is an open-source, server-side web application framework developed by Microsoft for building dynamic websites, applications, and services.",
    relatedLanguages: ["C#", "VB.NET"],
    website: "https://dotnet.microsoft.com/en-us/apps/aspnet",
  },
  {
    name: "Shell Script",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/PowerShell_Core_6.0_icon.png",
    founders: ["Ken Thompson"],
    year: 1971,
    background:
      "Shell scripting involves writing scripts for Unix/Linux shell to automate tasks and execute commands in batch.",
    relatedLanguages: ["Python", "Perl", "Ruby"],
    website: "https://www.gnu.org/software/bash/",
  },
  {
    name: "Laravel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    founders: ["Taylor Otwell"],
    year: 2011,
    background:
      "Laravel is a PHP framework designed to make web development elegant and efficient. It provides features like routing, authentication, and a templating engine.",
    relatedLanguages: ["PHP", "JavaScript"],
    website: "https://laravel.com/",
  },
  {
    name: "COBOL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ea/COBOL_logo.svg",
    founders: ["Grace Hopper", "CODASYL Committee"],
    year: 1959,
    background:
      "COBOL (Common Business-Oriented Language) is a legacy programming language used in business, finance, and administrative systems.",
    relatedLanguages: ["Fortran", "Ada"],
    website: "https://opensource.com/article/20/7/cobol-resources",
  },
  {
    name: "Elixir",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/55/Elixir_logo.png",
    founders: ["José Valim"],
    year: 2011,
    background:
      "Elixir is a functional, concurrent programming language built on the Erlang VM. It's known for scalability and fault tolerance, often used in real-time systems.",
    relatedLanguages: ["Erlang", "Ruby"],
    website: "https://elixir-lang.org/",
  },
  {
    name: "Ada",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Ada_Programming_Language_logo.svg",
    founders: ["Jean Ichbiah"],
    year: 1980,
    background:
      "Ada is a structured, statically typed programming language used in mission-critical applications, including aerospace and defense systems.",
    relatedLanguages: ["C", "Pascal"],
    website: "https://www.adacore.com/",
  },
  {
    name: "Crystal",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/07/Crystal_Programming_Language_logo.svg",
    founders: ["Ary Borenszweig"],
    year: 2011,
    background:
      "Crystal is a programming language that combines the syntax of Ruby with the performance of compiled languages like C.",
    relatedLanguages: ["Ruby", "C"],
    website: "https://crystal-lang.org/",
  },
  {
    name: "Erlang",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/Erlang_logo.png",
    founders: ["Joe Armstrong", "Robert Virding", "Mike Williams"],
    year: 1986,
    background:
      "Erlang is a programming language used for building massively scalable soft real-time systems. It is known for its concurrency and fault tolerance.",
    relatedLanguages: ["Elixir", "Prolog"],
    website: "https://www.erlang.org/",
  },
];

export default ProgrammingLanguagesData;
