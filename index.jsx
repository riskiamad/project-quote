let stateObject = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "development",
  budget: "50000"
};

let errors = {
  errName: '',
  errEmail: '',
  errPhone: '',
  errCompany: ''
}

function Progress(props) {
  const step = props.step;
  return (
    <div className={'progress'}>
      <div className={'circle active'}>1</div>
      <div className={'progress-bar'}>
        {step === 1 && <div className={'progress-value half'}></div>}
        {step !== 1 && <div className={'progress-value'}></div>}
      </div>
      {step >= 2 && <div className={'circle active'}>2</div>}
      {step < 2 && <div className={'circle'}>2</div>}
      <div className={'progress-bar'}>
        {step < 2 && <div className={'progress-value empty'}></div>}
        {step === 2 && <div className={'progress-value half'}></div>}
        {step > 2 && <div className={'progress-value'}></div>}
      </div>
      {step >= 3 && <div className={'circle active'}>3</div>}
      {step < 3 && <div className={'circle'}>3</div>}
      <div className={'progress-bar'}>
        {step < 3 && <div className={'progress-value empty'}></div>}
        {step === 3 && <div className={'progress-value half'}></div>}
        {step > 3 && <div className={'progress-value'}></div>}
      </div>
      {step >= 4 && <div className={'circle active'}>4</div>}
      {step < 4 && <div className={'circle'}>4</div>}
    </div>
  );
}

function ContactDetails(props) {
  React.useEffect(() => {
    let name = document.getElementById('name');
    name.value = stateObject.name;

    let email = document.getElementById('email');
    email.value = stateObject.email;

    let phone = document.getElementById('phone');
    phone.value = stateObject.phone;

    let company = document.getElementById('company');
    company.value = stateObject.company;

    // set name field focus by default
    name.focus();

    if (errors.errCompany !== '') {
      company.focus();
    }

    if (errors.errPhone !== '') {
      phone.focus();
    }

    if (errors.errEmail !== '') {
      email.focus();
    }

    if (errors.errName !== '') {
      name.focus();
    }

  });

  return (
    <div className={'content'}>
      <Progress step={props.step}/>
      <div className={'content-section'}>
        <h3>Contact details</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisc.</p>
        <form className="form-contact">
          <div className="box-container">
            <label>
              Name
              <div className="input-container">
                <input type="text" id="name" name="name" placeholder="Name"/>
                <img src="assets/images/person.png" alt="name"/>
              </div>
              {(props.errors.errName !== '') && <div className="error-msg">{props.errors.errName}</div>}
            </label>
          </div>
          <div className="box-container">
            <label>
              Email
              <div className="input-container">
                <input type="text" id="email" name="email" placeholder="Email"/>
                <img src="assets/images/mail.png" alt="email"/>
              </div>
              {(props.errors.errEmail !== '') && <div className="error-msg">{props.errors.errEmail}</div>}
            </label>
          </div>
          <div className="box-container">
            <label>
              Phone Number
              <div className="input-container">
                <input type="text" id="phone" name="phone" placeholder="Phone"/>
                <img src="assets/images/phone.png" alt="phone"/>
              </div>
              {(props.errors.errPhone !== '') && <div className="error-msg">{props.errors.errPhone}</div>}
            </label>
          </div>
          <div className="box-container">
            <label>
              Company
              <div className="input-container">
                <input type="text" id="company" name="company" placeholder="Company"/>
                <img src="assets/images/company.png" alt="company"/>
              </div>
              {(props.errors.errCompany !== '') && <div className="error-msg">{props.errors.errCompany}</div>}
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

function OurServices(props) {
  React.useEffect(() => {
    let radios = document.getElementsByName('service');
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].value === stateObject.service) {
        radios[i].checked = true;
      }
    }
  });
  return (
    <div className={'content'}>
      <Progress step={props.step}/>
      <div className={'content-section'}>
        <h3>Our services</h3>
        <p>Please select which service you are interested in.</p>
        <form className="form-service">
          <label className="radio-container" htmlFor="development">
            <input type="radio" id="development" name="service" value="development"/>
            <div className="image-container"><img src="assets/images/dev.png" alt="dev"/></div>
            <h4>Development</h4>
          </label>
          <label className="radio-container" htmlFor="web_design">
            <input type="radio" id="web_design" name="service" value="web design"/>
            <div className="image-container"><img src="assets/images/web.png" alt="dev"/></div>
            <h4>Web Design</h4>
          </label>
          <label className="radio-container" htmlFor="marketing">
            <input type="radio" id="marketing" name="service" value="marketing"/>
            <div className="image-container"><img src="assets/images/marketing.png" alt="dev"/></div>
            <h4>Marketing</h4>
          </label>
          <label className="radio-container" htmlFor="other">
            <input type="radio" id="other" name="service" value="other"/>
            <div className="image-container"><img src="assets/images/other.png" alt="dev"/></div>
            <h4>Other</h4>
          </label>
        </form>
      </div>
    </div>
  );
}

function ProjectBudget(props) {
  React.useEffect(() => {
    let radios = document.getElementsByName('budget');
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].value === stateObject.budget) {
        radios[i].checked = true;
      }
    }
  })
  return (
    <div className={'content'}>
      <Progress step={props.step}/>
      <div className={'content-section'}>
        <h3>What’s your project budget?</h3>
        <p>Please select the project budget range you have in mind.</p>
        <form className="form-budget">
          <label className="radio-container" htmlFor="budget5000">
            <input type="radio" id="budget5000" name="budget" value="5000-10000"/>
            $5.000 - $10.000
          </label>
          <label className="radio-container" htmlFor="budget10000">
            <input type="radio" id="budget10000" name="budget" value="10000-20000"/>
            $10.000 - $20.000
          </label>
          <label className="radio-container" htmlFor="budget20000">
            <input type="radio" id="budget20000" name="budget" value="20000-50000"/>
            $20.000 - $50.000
          </label>
          <label className="radio-container" htmlFor="budget50000">
            <input type="radio" id="budget50000" name="budget" value="50000"/>
            $50.000 +
          </label>
        </form>
      </div>
    </div>
  );
}

function SubmitQuote(props) {
  return (
    <div className={'content'}>
      <Progress step={props.step}/>
      <div className={'content-section submission'}>
        <img src="assets/images/check.png" alt={"icon"}/>
        <h3>Submit your quote request</h3>
        <p>Please review all the information you previously typed in the past steps, and if all is okay, submit your
          message to receive a project quote in 24 - 48 hours.</p>
        <button className="next" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

const handleSubmit = () => alert(JSON.stringify(stateObject));

function App() {
  const [step, setStep] = React.useState(1);

  // manage state by choosing which content by number of step
  function RenderContent(step, errors) {
    switch (step) {
      case 1:
        return <ContactDetails step={step} errors={errors}/>;
      case 2:
        return <OurServices step={step}/>;
      case 3:
        return <ProjectBudget step={step}/>;
      case 4:
        return <SubmitQuote step={step}/>;
    }
  }

  // manage state by decreasing step
  const handlePrev = () => setStep(step - 1)

  const handleNext = () => {

    // get the current step to do right validation and handling
    switch (step) {
      case 1:
        let name = document.getElementById('name');
        let email = document.getElementById('email');
        let phone = document.getElementById('phone');
        let company = document.getElementById('company');

        // clear error object value
        errors.errName = '';
        errors.errEmail = '';
        errors.errPhone = '';
        errors.errCompany = '';

        // save current state, catch before interrupted by error exception
        stateObject.name = name.value;
        stateObject.email = email.value;
        stateObject.phone = phone.value;
        stateObject.company = company.value;

        if (!email.value.endsWith('@gmail.com') || !email.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
          errors.errEmail = 'email is invalid';
        }

        if (!phone.value.startsWith('08') || phone.value.length < 12 || phone.value.length > 16 || !/^\d+$/.test(phone.value)) {
          errors.errPhone = 'phone is invalid';
        }

        if (name.value === "") {
          errors.errName = 'name is required';
        }

        if (email.value === "") {
          errors.errEmail = 'email is required';
        }

        if (phone.value === "") {
          errors.errPhone = 'phone is required';
        }

        if (company.value === "") {
          errors.errCompany = 'company is required';
        }

        // check if any error caught when validate
        if (errors.errName !== '' || errors.errEmail !== '' || errors.errPhone !== '' || errors.errCompany !== '') {
          root.render(<App/>);
          return
        }

        break;
      case 2:
        let serviceRadios = document.getElementsByName('service');
        for (let i = 0; i < serviceRadios.length; i++) {
          if (serviceRadios[i].checked === true) {
            stateObject.service = serviceRadios[i].value;
          }
        }
        break;
      case 3:
        let budgetRadios = document.getElementsByName('budget');
        for (let i = 0; i < budgetRadios.length; i++) {
          if (budgetRadios[i].checked === true) {
            stateObject.budget = budgetRadios[i].value;
          }
        }
    }

    // manage state by increasing step
    setStep(step + 1)
  }

  return (
    <div className={'container'}>
      <div className={'header'}>
        <h1>Get a project quote</h1>
        <p>Please fill the form below to receive a quote for your project. Feel free to add as much detail as
          needed.</p>
      </div>
      <div id={"content"}></div>
      {RenderContent(step, errors)}
      <div className={'btn-container'}>
        {step !== 1 && <button className={'prev'} onClick={handlePrev}>Previous step</button>}
        {step !== 4 && <button className={'next'} onClick={handleNext} type="submit">Next step</button>}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>);
