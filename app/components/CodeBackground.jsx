"use client";

import React, { useState, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

// Add tons of code snippets
const codeSnippets = [
  `// Java Singleton
  public class Singleton {
    private static Singleton instance;
    private Singleton() {}
    public static Singleton getInstance() {
      if(instance == null) instance = new Singleton();
      return instance;
    }
  }`,
  `# Python Web Scraper
  import requests
  from bs4 import BeautifulSoup
  URL = "https://example.com"
  soup = BeautifulSoup(requests.get(URL).content, "html.parser")`,
  `// React Counter
  function Counter() {
    const [count,setCount] = useState(0);
    return <button onClick={()=>setCount(c=>c+1)}>{count}</button>;
  }`,
  `// SQL Join
  SELECT O.OrderID, C.CustomerName
  FROM Orders O
  INNER JOIN Customers C ON O.CustomerID=C.CustomerID;`,
  `// Spring Boot REST
  @RestController
  public class ApiController {
    @GetMapping("/hello")
    public String hello() { return "Hello, World!"; }
  }`,
  `// C++ Hello World
  #include<iostream>
  using namespace std;
  int main(){ cout<<"Hello World"; }`,
  `// JavaScript Promise
  const fetchData = async()=> {
    const res = await fetch("/api/data");
    return res.json();
  }`
];

// Generate long background text
const generateCodeBlock = (snippets, length = 300) => {
  let block = "";
  for (let i = 0; i < length; i++) {
    block += snippets[Math.floor(Math.random() * snippets.length)] + "\n\n";
  }
  return block;
};

const CodeBackground = () => {
  const [longCode, setLongCode] = useState("");

  const mouse = {
    x: useSpring(0, { stiffness: 300, damping: 30 }),
    y: useSpring(0, { stiffness: 300, damping: 30 }),
  };

  const maskPosition = useTransform(
    [mouse.x, mouse.y],
    ([latestX, latestY]) =>
      `radial-gradient(30rem circle at ${latestX}px ${latestY}px, white 20%, transparent 60%)`
  );

  useEffect(() => {
    setLongCode(generateCodeBlock(codeSnippets, 300));
    const handleMouseMove = (e) => {
      mouse.x.set(e.clientX);
      mouse.y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-50"> 
      {/* Static dim background */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03] dark:opacity-[0.02]">
        <pre className="text-[10px] font-mono text-gray-800 dark:text-gray-600 whitespace-pre-wrap w-[300vw] h-[300vh]">
          <code>{longCode}</code>
        </pre>
      </div>

      {/* Spotlight reveal */}
      <motion.div
        className="absolute inset-0"
        style={{
          maskImage: maskPosition,
          WebkitMaskImage: maskPosition,
        }}
      >
        <div className="absolute inset-0 overflow-hidden opacity-50 dark:opacity-40">
          <pre className="text-[10px] font-mono text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-500 whitespace-pre-wrap w-[300vw] h-[300vh]">
            <code>{longCode}</code>
          </pre>
        </div>
      </motion.div>
    </div>
  );
};

export default CodeBackground;
