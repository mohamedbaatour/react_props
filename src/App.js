import './App.css';
import Profile from './profile/Profile';
import M1 from './Images/M1.jpg';


function App() {
  const bio= "Mohamed is not your average teenager. At the age of 14, he has already become an accomplished developer, creating software applications and websites that have garnered attention from industry professionals.He got interested in coding at a young age, tinkering with HTML and CSS to create simple websites for his school projects. As he got more experienced, he started learning more complex programming languages like HTML, CSS, JS , and began building more advanced projects.Despite his young age, Mohamed's skills are already highly sought after. He has even been hired by a local startup to help develop their mobile app. He also shares his knowledge with others by teaching coding classes at his local community center.Mohamed is not just a tech whiz, though. He also enjoys playing soccer and is a member of his school's robotics club. He believes in the power of technology to make the world a better place and hopes to use his skills to create innovative solutions to real-world problems.With his talent, passion, and drive, Mohamed is sure to achieve great things in the world of tech."
  const handleName = (name) => {
    alert (name);
  };
  return (
    <div className="App">
      <Profile fullName="Mohamed Baatour" bio={bio} profession="profession : Web Developer" handleName={handleName} >
        <img className='M1' src={M1} alt='pic 2' /></Profile>
    </div>
  );
}

export default App;
