import React, { useState } from "react";
import './Main.css';

function MainContent() {
  const [newText, setNewText] = useState(false);
  const [hide, setHide] = useState(true);

  const changeText = () => {
    setNewText(!newText);
  }

  const renderText = () => {
    return newText ? "Have a Good Time!" : "welcome message";
  }

  const showMoreProduct = () => {
    setHide(!hide);
  }

  return (
    <main>
      <section className="message" onClick={() => { changeText() }}>{renderText()}</section>

      <section className="product">
        <div className="title">section title</div>

        <div className="container">
          <div className="row">
            <div className="col col-md-6">
              <div className="item">content box1</div>
            </div>
            <div className="col col-md-6">
              <div className="item">content box2</div>
            </div>
            <div className="col col-md-6">
              <div className="item">content box3</div>
            </div>
            <div className="col col-md-6">
              <div className="item">content box4</div>
            </div>
          </div>
        </div>
      </section>

      <div className="add-product-btn">
        <input type="button" value="call to action" onClick={() => { showMoreProduct() }} />
      </div>

      <section id="add-product-list" className={hide ? "product hide" : "product"}>
        <div className="container">
          <div className="row">
            <div className="col col-md-6">
              <div className="item">content box5</div>
            </div>
            <div className="col col-md-6">
              <div className="item">content box6</div>
            </div>
            <div className="col col-md-6">
              <div className="item">content box7</div>
            </div>
            <div className="col col-md-6">
              <div className="item">content box8</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MainContent;