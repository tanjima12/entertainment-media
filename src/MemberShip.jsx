const MemberShip = () => {
  return (
    <div>
      <h1>
        Welcome to our media!!!And give us your information and you will be
        member of our media .
      </h1>
      <section className="section_form flex justify-center items-center">
        <form id="consultation-form" className="feed-form" action="#">
          <input required="" placeholder="Name" type="text" />
          <input name="phone" required="" placeholder="Phone number" />
          <input name="email" required="" placeholder="E-mail" type="email" />
          <button className="button_submit">Confirmed</button>
        </form>
      </section>
    </div>
  );
};

export default MemberShip;
