const ProgrammingLanguagesData = [
  {
    name: "JavaScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    founders: ["Brendan Eich"],
    year: 1995,
    background:
      "JavaScript is a versatile programming language primarily used for web development. It allows developers to create interactive and dynamic web pages.",
    relatedLanguages: ["TypeScript", "CoffeeScript", "ActionScript"],
    website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Python",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    founders: ["Guido van Rossum"],
    year: 1991,
    background:
      "Python is a high-level, general-purpose programming language known for its simplicity and readability. It's widely used in data science, web development, and automation.",
    relatedLanguages: ["Ruby", "Julia", "Perl"],
    website: "https://www.python.org/",
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
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
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
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Vue.js_Logo_2.svg",
    founders: ["Evan You"],
    year: 2014,
    background:
      "Vue.js is a progressive JavaScript framework used for building user interfaces and single-page applications. It's designed to be incrementally adoptable.",
    relatedLanguages: ["JavaScript", "TypeScript", "React"],
    website: "https://vuejs.org/",
  },
  {
    name: "Solid.js",
    logo: "https://solidjs.com/logo.png",
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
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Angular_logo.svg",
    founders: ["Misko Hevery", "Brad Green"],
    year: 2010,
    background:
      "Angular is a platform and framework for building single-page client applications using HTML and TypeScript. It's a powerful framework for web applications.",
    relatedLanguages: ["JavaScript", "TypeScript"],
    website: "https://angular.io/",
  },
  {
    name: "jQuery",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/JQuery_logo_2010.svg",
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
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/SQL_logo.svg",
    founders: ["Donald D. Chamberlin", "Raymond F. Boyce"],
    year: 1974,
    background:
      "SQL (Structured Query Language) is a standard programming language used for managing and manipulating relational databases.",
    relatedLanguages: ["PL/SQL", "T-SQL"],
    website: "https://www.sql.org/",
  },
  {
    name: "TypeScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/TypeScript_logo_2020.svg",
    founders: ["Anders Hejlsberg"],
    year: 2012,
    background:
      "TypeScript is a superset of JavaScript that adds static types. It helps developers catch errors early and enhances the development process for large-scale applications.",
    relatedLanguages: ["JavaScript"],
    website: "https://www.typescriptlang.org/",
  },
  {
    name: "ASP.NET",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/ASP.NET_Logo.svg",
    founders: ["Microsoft"],
    year: 2002,
    background:
      "ASP.NET is an open-source, server-side web application framework developed by Microsoft for building dynamic websites, applications, and services.",
    relatedLanguages: ["C#", "VB.NET"],
    website: "https://dotnet.microsoft.com/en-us/apps/aspnet",
  },
];

export default ProgrammingLanguagesData;


