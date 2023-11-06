import './App.css';

function App() {
  return (
  <div className="App">
    <header>
         <h2> Representation </h2>
        <p> My name is Mikhail Makarevich and I have a <span>Github profile</span> that you can check using the link below</p>
     <nav> 
        <ul>
             <li> <a href="https://github.com/Mikhail4ch" id="links"> My profile </a> </li>
             <li> <a href="#photo" id="links"> The photo of me </a> </li>
        </ul>
     </nav>
    </header>
    <h3> Current location </h3>
         <p>I've been living in Norway for last two years, but before I moved here I'd lived in the northern part of Russia </p>
         <aside>
         <details>
             <summary>Guess my age</summary>
             <p id="links"> I am 20 years old</p>
         </details>
         </aside>
         <h3> Hobbies and own interests</h3>
          <ul class="container">
             <li> Making music in Fl Studio </li>
             <li> Exploration and speculations on crypto market</li>
             <li> Reading the works of famous sociologists and philosophers</li>
             <li> Gym at least two times in a week</li>
         </ul>
         <img src="../Mee.png" alt=''/> 
         <figure>
             <figcaption>The photo of me from 2022</figcaption>  
         </figure>
         <p> If you have some questions or you just wanna contact me be free! I will answer ASAP</p> 
         <footer>
     <h3>Way to contact:</h3>
     <form>
        <label for="name" > Your name:</label>
        <input type="text" id="name" name="name" required/><br/>

        <label for="email"> Your email:</label>
        <input type="email" id="email" name="email" required/><br/>

        <label for="comments"> Space for your comments:</label>
        <input type="comments" id="comments" name="comments" required/><br/>

        <button type="submit">Submit</button>
        <p>
        <a id="links" href="#core">Back to the main content</a> 
        </p>
     </form>
 </footer>         
</div>
  );
}

export default App;
