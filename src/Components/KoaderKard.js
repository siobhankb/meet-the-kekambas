import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Home from '../Views/Home';
const key = "ubfjDrdBgdST2o1hK7PXPw==8D7NsOPI3q3De97y";

export default function KoaderKard({ person }) {
  const [hobby, setHobby] = useState('sleeping');
  const [animal, setAnimal] = useState('iguana');
  const [bucket, setBucket] = useState('swim with sharks');

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/hobbies?category=general', {
      method: 'GET',
      headers: { 'X-Api-Key': key },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        setHobby(data.hobby)
      })
  },[])
  console.log(hobby)
  
  useEffect(() => {
    let alphaNum = Math.floor(Math.random() * 26 + 97);
    let animalLetter = String.fromCharCode(alphaNum);
    fetch(`https://api.api-ninjas.com/v1/animals?name=${animalLetter}`, {
      method: "GET",
      headers: { "X-Api-Key": key },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        setAnimal(data[0].name);
      });
  }, []);
  console.log(animal);

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/bucketlist', {
      method: 'GET',
      headers: { 'X-Api-Key': key },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        const rawBucket = data.item
        const goodBucket =
          rawBucket.charAt(0).toLowerCase() + rawBucket.slice(1);
        setBucket(goodBucket);
      })
  }, [])
  console.log(bucket)

  console.log(person[0].first_name);
  return (
    <>
      <div className="card bg-dark text-white">
        <div class="card-body text-center">
          <h5 class="card-title fs-3">
            {person[0].first_name} {person[0].last_name}
          </h5>
          <img
            src="https://picsum.photos/100"
            class="card-img-top w-75"
            alt="lorem picsum"
          />
          <p class="card-text fs-4">
            Apart from coding,
            <strong> {person[0].first_name}</strong> enjoys {hobby.toLowerCase()}{" "}
            with their pet {animal} and has always wanted to {bucket}.
          </p>
          <Link to={<Home />} class="btn btn-primary">
            Back to Kekambas Koaders
          </Link>
        </div>
      </div>
    </>
    // <div class="card" style="width: 18rem;">
    //   <img src="https://picsum.photos/200" class="card-img-top" alt="lorem picsum" />
    //   <div class="card-body text-center">
    //     <h5 class="card-title">
    //       {" "}
    //       {person.first_name} {person.last_name}{" "}
    //     </h5>
    //     <p class="card-text">
    //       {" "}
    //       {person.first_name} likes to {}{" "}
    //     </p>
    //     <Link to={<Home />} class="btn btn-primary">
    //       Back to Kekambas
    //     </Link>
    //   </div>
    // </div>
  );
}
