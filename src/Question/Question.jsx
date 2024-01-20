/* eslint-disable react/no-unknown-property */

import "./Question.css";

const Question = () => {
  return (
    <div className="mt-20">
      <h1 className="text-center text-3xl text-[#669999] mb-5 font-julius font-bold">
        Frequently asked us Your question
      </h1>
      <ul className="overall">
        <li>
          <input type="radio" name="overall" id="first"></input>
          <label for="first">
            How can I create an account on your website?
          </label>
          <div className="content">
            <p>
              To create an account, click on the Sign Up button on the top-right
              corner of the homepage. Fill in the required information, and you
              will be registered to explore our entertainment content.
            </p>
          </div>
        </li>
        <li>
          <input type="radio" className="" name="overall" id="second"></input>
          <label for="second">What types of content do you offer?</label>
          <div className="content">
            <p>
              We provide a diverse range of entertainment content, including
              movies, TV shows, music, and more. Our platform caters to various
              interests and preferences.
            </p>
          </div>
        </li>
        <li>
          <input type="radio" name="overall" id="third"></input>
          <label for="third">Is there a subscription fee?</label>
          <div className="content">
            <p>
              We offer both free and premium subscription plans. While some
              content is available for free, a premium subscription provides
              access to exclusive, ad-free, and high-quality content. Check our
              subscription page for more details.
            </p>
          </div>
        </li>
        <li>
          <input type="radio" name="overall" id="fourth"></input>
          <label for="fourth">What devices are supported?</label>
          <div className="content">
            <p>
              Our platform is compatible with a wide range of devices, including
              smartphones, tablets, smart TVs, and web browsers. Check our
              supported devices page for a comprehensive list.
            </p>
          </div>
        </li>
        <li>
          <input type="radio" name="overall" id="fifth"></input>
          <label for="fifth">How frequently is new content added?</label>
          <div className="content">
            <p>
              We regularly update our library with fresh and exciting content.
              New movies, TV shows, and music are added regularly to keep our
              users entertained.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Question;
