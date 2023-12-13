import React, {useState} from 'react'

export default function Contact() {
     const [state, setstate] = useState(0);

    fetch("http://localhost:2000/contact")
    .then((response) =>{return response.text()})
    .then((response) =>{
        setstate(response);
    });

  return (
    <div>
          <h1>
            This is a Contact Page
            <div>
              {state}
            </div>
            </h1>
    </div>
  )
}
