import questions from './Questions';
import './App.css';
import Cards from './components/Cards';

function App() {
  return (
    <div>
    <div className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200'>
    <div className='text-center'>
      <h1 className='text-4xl font-bold tracking-wider'>
        Questions
      </h1>
      {/* //underline */}
      <div className='bg-violet-400 h-[4px] w-1/5 mx-auto mt-1'></div>
      <Cards questions={questions}></Cards>
    </div> 
    </div>
        
    </div>
  );
}

export default App;
