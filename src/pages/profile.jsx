// scss files:
import "../styles/pages/profile.scss";
import "../styles/library/classes.scss";

function Profile() {
  return (
    <>
      <h1>profile</h1>
      <div className="profile-page">
        <div className="personal-data">
          <div className="main flex-center">
            <img src={require("../imgs/avatar.png")} alt="avatar" />
            <h3>osama elzero</h3>
            <span>level 20</span>
            <div className="load"></div>
            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p>550 rating</p>
          </div>
          <div className="general">
            <div className="row">
              <h4>general information</h4>
              <div className="data">
                <p>
                  full name: <span>osama mohamed</span>
                </p>
                <p>
                  gender: <span>male</span>
                </p>
                <p>
                  country: <span>egypt</span>
                </p>
                <label>
                  <input
                    type="checkbox"
                    name="on"
                    id="on"
                    className="toggle-check"
                  />
                  <div className="toggle-switch"></div>
                </label>
              </div>
            </div>
            <div className="row">
              <h4>personal information</h4>
              <div className="data">
                <p>
                  email: <span className="txt-lower">o@nn.sa</span>
                </p>
                <p>
                  phone: <span>019123456789</span>
                </p>
                <p>
                  date of birth: <span>25/10/1982</span>
                </p>
                <label>
                  <input
                    type="checkbox"
                    name="on"
                    id="on"
                    className="toggle-check"
                  />
                  <div className="toggle-switch"></div>
                </label>
              </div>
            </div>
            <div className="row">
              <h4>job information</h4>
              <div className="data">
                <p>
                  title: <span>full stack developer</span>
                </p>
                <p>
                  programming language: <span>python</span>
                </p>
                <p>
                  years of experience: <span>15+</span>
                </p>
                <label>
                  <input
                    type="checkbox"
                    name="on"
                    id="on"
                    className="toggle-check"
                  />
                  <div className="toggle-switch"></div>
                </label>
              </div>
            </div>
            <div className="row">
              <h4>billing information</h4>
              <div className="data">
                <p>
                  payment method: <span>paypal</span>
                </p>
                <p>
                  email: <span className="txt-lower">email@website.com</span>
                </p>
                <p>
                  subscription: <span>monthly</span>
                </p>
                <label>
                  <input
                    type="checkbox"
                    name="on"
                    id="on"
                    className="toggle-check"
                  />
                  <div className="toggle-switch"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="other-data">
          <div className="skills widget">
            <div className="widget-info">
              <h2>my skills</h2>
              <p>complete skills list</p>
            </div>
            <ul>
              <li>
                <span className="btn-grey">HTML</span>
                <span className="btn-grey">pugjs</span>
                <span className="btn-grey">HAML</span>
              </li>
              <li>
                <span className="btn-grey">CSS</span>
                <span className="btn-grey">SASS</span>
                <span className="btn-grey">Stylus</span>
              </li>
              <li>
                <span className="btn-grey">JavaScript</span>
                <span className="btn-grey">TypeScript</span>
              </li>
              <li>
                <span className="btn-grey">vuejs</span>
                <span className="btn-grey">Reactjs</span>
              </li>
              <li>
                <span className="btn-grey">jest</span>
                <span className="btn-grey">jasmine</span>
              </li>
              <li>
                <span className="btn-grey">PHP</span>
                <span className="btn-grey">laravel</span>
              </li>
              <li>
                <span className="btn-grey">python</span>
                <span className="btn-grey">django</span>
              </li>
            </ul>
          </div>
          <div className="activities widget">
            <div className="widget-info">
              <h2>latest activities</h2>
              <p>latest activities done by the user</p>
            </div>
            <div className="row">
              <img src={require("../imgs/activity-01.png")} alt="activity" />
              <div className="txt">
                <h4>store</h4>
                <p>bought the mastering python course</p>
              </div>
              <div className="time">
                <p className="hour">18:10</p>
                <p className="day">yesterday</p>
              </div>
            </div>
            <div className="row">
              <img src={require("../imgs/activity-02.png")} alt="activity" />
              <div className="txt">
                <h4>academy</h4>
                <p>got the PHP certificate</p>
              </div>
              <div className="time">
                <p className="hour">16:05</p>
                <p className="day">yesterday</p>
              </div>
            </div>
            <div className="row">
              <img src={require("../imgs/activity-03.png")} alt="activity" />
              <div className="txt">
                <h4>badges</h4>
                <p>unlocked the 10 skills badge</p>
              </div>
              <div className="time">
                <p className="hour">18:06</p>
                <p className="day">yesterday</p>
              </div>
            </div>
            <div className="row">
              <img src={require("../imgs/activity-01.png")} alt="activity" />
              <div className="txt">
                <h4>store</h4>
                <p>bought the TypeScript course</p>
              </div>
              <div className="time">
                <p className="hour">12:05</p>
                <p className="day">yesterday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;