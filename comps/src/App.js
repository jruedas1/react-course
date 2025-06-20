import { v4 as uuidv4 } from 'uuid';
import Accordion from "./components/Accordion";

function App(){
    const items = [
        {
            id: uuidv4(),
            label: 'Using React',
            content: 'React makes it easier to build dynamic user interfaces by managing state and rendering components efficiently. Its component-based structure promotes reusability and cleaner code organization.'
        },
        {
            id: uuidv4(),
            label: 'Using vanilla JS',
            content: "Vanilla JavaScript gives you full control over the DOM without relying on external libraries. It's lightweight and ideal for small projects or when you want to avoid the overhead of frameworks."
        },
        {
            id: uuidv4(),
            label: 'Custom CSS or frameworks',
            content: 'Custom CSS offers complete design flexibility and helps keep your styles minimal and tailored to your project. CSS frameworks like Bootstrap or Tailwind speed up development with prebuilt utilities but can add extra bloat if not managed carefully.'
        }
    ];

    return (
        <div>
            <Accordion items={items} />
        </div>
    );
}

export default App;