import Checkbox from './components/Checkbox/Checkbox';
import './App.css';

const App = () => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`Checkbox value is ${event.target.checked}`);
  };

  return (
    <div className="app">
      <Checkbox
        onChange={onChangeHandler}
        label="Subscribe to our newsletter."
        checked
      />
      <Checkbox label="Second box." />
      <Checkbox label="Disabled box." disabled />
      <Checkbox checked disabled />
    </div>
  );
};

export default App;
