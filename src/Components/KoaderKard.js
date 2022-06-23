import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const key = "ubfjDrdBgdST2o1hK7PXPw==8D7NsOPI3q3De97y";

export default function KoaderKard({ person }) {
  const [hobby, setHobby] = useState('skipping stones');
  const [animal, setAnimal] = useState('ostrich');
  const [bucket, setBucket] = useState('swim with sharks');

  let params = useParams();
  

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

  return (
    <>
        <div className="card bg-dark text-white">
          <div className="card-body text-center">
            <h5 className="card-title fs-3">
              {person[0].first_name} {person[0].last_name}
            </h5>
            <img
              src="https://picsum.photos/100"
              className="card-img-top w-75"
              alt="lorem picsum"
            />
            <p className="card-text fs-4">
              Apart from coding,
              <strong> {person[0].first_name}</strong> enjoys{" "}
              {hobby.toLowerCase()} with their pet {animal} and has always
              wanted to {bucket}.
            </p>
            <Link to="/" className="btn btn-primary">
              Back to Kekambas Koaders
            </Link>
          </div>
        </div>
    </>
  );
}
