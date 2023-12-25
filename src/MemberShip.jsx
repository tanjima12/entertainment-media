import Navbar from "./Navbar/Navbar";

const MemberShip = () => {
  const setEmail = (e) => {
    e.preventDefault();
    const emailValue = e.target.email.value;
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "",
      Password: "",
      To: "",
      From: emailValue,
      Subject: "new Contact from enquery",
      Body: "And this is the body",
    }).then((message) => alert(message));
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-black  ">
        <h1 className="text-white text-center font-thin text-2xl pt-20 pb-5">
          Welcome to our media !!! And give us your <br></br>information and you
          will be member of our media .
        </h1>
        <section className="section_form flex justify-center items-center  pb-80">
          <form
            onSubmit={setEmail}
            id="consultation-form"
            className="feed-form"
            action="#"
          >
            <input required="" placeholder="Name" type="text" />
            <input name="phone" required="" placeholder="Phone number" />
            <input name="email" required="" placeholder="E-mail" type="email" />
            <button type="submit" className="button_submit">
              Confirmed
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default MemberShip;
