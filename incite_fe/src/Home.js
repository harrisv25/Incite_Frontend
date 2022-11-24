import React, { Component } from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Home  = () => {
  const [searchTerm, setSearchTerm] = useState("")
  return (
      <div>
        <h1>Redirect Works</h1>
      </div>
    );
}

export default Home;
