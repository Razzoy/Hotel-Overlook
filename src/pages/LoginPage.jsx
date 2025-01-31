import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { CustomButton } from "../components/CustomButton/CustomButton";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { InputField } from "../components/InputField/InputField";
import style from "./pageStyles/LoginPage.module.scss";
import { Section } from "../components/Section/Section";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { MarginContainer } from "../components/MarginContainer/MarginContainer";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isRegistering, setIsRegistering] = useState(false);

  const [error, setError] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const { setUserData } = useContext(UserContext);

  function validateInputs() {
    console.log("Validating inputs...");
    console.log({ email, password, firstname, lastname, confirmPassword });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const nameRegex = /^[A-Za-zÆØÅæøå]{2,}(?:[-\s][A-Za-zÆØÅæøå]+)*$/; // Minimum 2 bogstaver
    const minEmailLength = 3;

    if (email.length < minEmailLength || !emailRegex.test(email)) {
      console.log("Fejl: Ugyldig emailadresse");
      return "Ugyldig emailadresse (skal være mindst 3 tegn lang)";
    }

    if (!passwordRegex.test(password)) {
      console.log("Fejl: Adgangskoden opfylder ikke kravene");
      return "Adgangskoden skal være mindst 8 tegn, indeholde et stort bogstav, et lille bogstav og et tal";
    }

    if (isRegistering) {
      if (!nameRegex.test(firstname)) {
        console.log("Fejl: Ugyldigt fornavn");
        return "Fornavn skal være mindst 2 bogstaver og må kun indeholde bogstaver, mellemrum eller bindestreg";
      }

      if (!nameRegex.test(lastname)) {
        console.log("Fejl: Ugyldigt efternavn");
        return "Efternavn skal være mindst 2 bogstaver og må kun indeholde bogstaver, mellemrum eller bindestreg";
      }

      if (password !== confirmPassword) {
        console.log("Fejl: Adgangskoder matcher ikke");
        return "Adgangskoderne matcher ikke";
      }
    }

    console.log("Inputs er gyldige!");
    return "";
  }

  function submitData() {
    console.log("Forsøger at logge ind...");
    const validationError = validateInputs();

    if (validationError) {
      console.log("Fejl fundet:", validationError);
      setError(validationError);
      return;
    }

    console.log("Sender login data:", { email, password });

    const body = new URLSearchParams();
    body.append("username", email);
    body.append("password", password);

    fetch("http://localhost:4000/login", {
      method: "POST",
      body: body,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Server response:", data);

        if (data.access_token) {
          setUserData(data);
          setLoginMessage(
            `Du er nu logget ind.. Velkommen tilbage ${data.user.firstname}`
          );
          setError("");
        } else {
          setLoginMessage("Du har tastet forkert password eller email");
        }
      })
      .catch((err) => {
        console.error("Login fejl:", err);
        setError("Noget gik galt under login");
      });
  }

  function registerUser() {
    console.log("Forsøger at oprette bruger...");

    const validationError = validateInputs();
    if (validationError) {
      console.log("Fejl fundet:", validationError);
      setError(validationError);
      return;
    }

    console.log("Sender registreringsdata:", {
      firstname,
      lastname,
      email,
      password,
    });

    const body = new URLSearchParams();
    body.append("firstname", firstname);
    body.append("lastname", lastname);
    body.append("email", email);
    body.append("password", password);
    body.append("is_active", true);
    body.append("org_id", 1);
    body.append("refresh_token", 1234);
    body.append("groups", 1);

    fetch("http://localhost:4000/users", {
      method: "POST",
      body: body,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Server response:", data);

        if (data.message == "Record created") {
          setLoginMessage("Din konto er oprettet! Du kan nu logge ind.");
          setIsRegistering(false);
          setError("");
        } else {
          setError("Noget gik galt under oprettelsen");
        }
      })
      .catch((err) => {
        console.error("Registreringsfejl:", err);
        setError("Noget gik galt under registreringen");
      });
  }

  return (
    <Wrapper>
      <GridContainer fraction={"3fr 1fr"}>
        <MarginContainer
          border={"1px solid grey"}
          margin={"1rem"}
          height={"80vh"}
        >
          <Section title={isRegistering ? "Opret konto" : "Login"}>
            <form>
              <h6>
                {isRegistering
                  ? "Indtast dine oplysninger for at oprette en konto"
                  : "Indtast dit brugernavn og adgangskode for at logge ind"}
              </h6>

              {isRegistering && (
                <>
                  <InputField
                    type="text"
                    placeholder="Fornavn"
                    id="firstname"
                    action={(value) => {
                      setFirstname(value);
                      setError("");
                    }}
                  />
                  <InputField
                    type="text"
                    placeholder="Efternavn"
                    id="lastname"
                    action={(value) => {
                      setLastname(value);
                      setError("");
                    }} 
                  />
                </>
              )}

              <InputField
                type="email"
                placeholder={
                  isRegistering ? "Brugernavn / Email" : "Brugernavn"
                }
                id="email"
                action={(value) => {
                  setEmail(value);
                  setError("");
                }} 
              />
              <InputField
                type="password"
                placeholder="Adgangskode"
                id="password"
                action={(value) => {
                  setPassword(value);
                  setError("");
                }} 
              />

              {isRegistering && (
                <InputField
                  type="password"
                  placeholder="Gentag adgangskode"
                  id="confirmPassword"
                  action={(value) => {
                    setConfirmPassword(value);
                    setError("");
                  }} 
                />
              )}

              {error && <p className={style.error}>{error}</p>}
              {loginMessage && (
                <p className={style.success}>{loginMessage}</p>
              )}

              <section className={style.loginButtons}>
                {isRegistering ? (
                  <>
                    <CustomButton
                      label={"Opret"}
                      btnClass="btn-grad"
                      onClick={() => {registerUser();}}
                    />
                    <CustomButton
                      label={"Annuller"}
                      btnClass="btn-grad"
                      onClick={() => {setIsRegistering(false); setError("");}}
                    />
                  </>
                ) : (
                  <>
                    <CustomButton
                      label={"Login"}
                      btnClass="btn-grad"
                      onClick={() => {submitData();}}
                    />
                    <CustomButton
                      label={"Tilmeld dig"}
                      btnClass="btn-grad"
                      onClick={() => {setIsRegistering(true); setError("");}}
                    />
                  </>
                )}
              </section>
            </form>
          </Section>
        </MarginContainer>
        <MarginContainer></MarginContainer>
      </GridContainer>
    </Wrapper>
  );
}
