import './App.css';
import photo from './assets/images/photo.jpg'
import facebook from './assets/images/facebook.png'
import whatsapp from './assets/images/whatsapp.png'

function App() {
  return (
    <div className="App">
      <div class="main">
        <div class="card">
          <h1 className="title">Mayara Bacellar</h1>
          <div>
            <img src={photo} class="profile-image" />
          </div>
          <div className="about">
            <h3>Sobre mim</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec convallis nulla,
              eu convallis sem. Nam pharetra venenatis mattis. Sed sapien turpis, egestas at tempus tincidunt,
              euismod sed augue. Suspendisse potenti. Sed malesuada dui non lorem iaculis luctus. Nam quis sodales eros.
              Vestibulum eget mattis leo. Nulla eget efficitur enim.</p>
          </div>
          <div>
            <ul>
              <li>
                <a href="https://www.instagram.com/mayarabacellarpmu/">

                  <div className="social-media-div">
                    <svg className="instagram" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                    <span className="social-media-name">@mayarabacellarpmu</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/MayaraBMicro">
                  <div className="social-media-div">
                    <img src={facebook} width="35" height="35" />
                    <span className="social-media-name">@Mayara Bacellar</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=+5504399314788">
                  <div className="social-media-div">
                    <img src={whatsapp} width="35" height="35" />
                    <span className="social-media-name">WhatsApp</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
