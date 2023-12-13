import { useState, useEffect } from 'preact/hooks';

export default function Greeting({ interval = 5000 }) {
  
  const greetings = ["Hello! Thank you for visiting!", "Hola! Gracias por la visita!"]

  const randomMessage = () => greetings[(Math.floor(Math.random() * greetings.length))];

  const [greeting, setGreeting] = useState(greetings[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setGreeting(randomMessage());
    }, interval); // Changes the greeting every 'interval' milliseconds

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  return (
    <div>
      <h3>{greeting}</h3>
    </div>
  );
}
