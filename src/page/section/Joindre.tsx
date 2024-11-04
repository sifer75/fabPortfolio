import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../component/Button";

function Joindre() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, phone, company, location } = formData;

    const subject = encodeURIComponent(`Contact de ${company}`);
    const body = encodeURIComponent(
      `Salut Fabien, je suis ${name}.\n 
        Je travaille actuellement dans l'entreprise ${location}.\n
        Notre siège se situe à ${company}.\n
        Tu peux me joindre à cet email: ${email}\n
        ou par téléphone au ${phone}.\n`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="Joindre" className="h-screen w-full p-10">
      <form
        onSubmit={handleSubmit}
        className="h-full flex flex-col justify-around items-center"
      >
        <div className="[&>input]:bg-transparent [&>input]:w-fit [&>input]:effect-shine text-yellow-300 font-Neue font-semibold text-xl xs:text-2xl sm:text-3xl lg:text-5xl">
          <span className="pr-2 inline-flex">Salut Fabien, je suis</span>
          <input
            type="name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            size={formData.name.length || 3}
            maxLength={49}
            placeholder="nom"
            className="focus:outline-none"
          ></input>
          <span>. </span>
          <span className="pr-2">
            Je travaille actuellement dans l'entreprise
          </span>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            size={formData.company.length || 8}
            placeholder="Entreprise"
            className="focus:outline-none"
          />
          <span>. </span>
          <span className="pr-2">Notre siège se situe à</span>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            size={formData.location.length || 3}
            placeholder="Lieu"
            className="focus:outline-none"
          />
          <span>. </span>
          <span className="pr-2">Tu peux me joindre à cet email :</span>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            size={formData.email.length || 4}
            placeholder="Email"
            className="focus:outline-none"
          />
          <span className="pr-2">ou par téléphone au</span>
          <input
            type="phone"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            size={formData.phone.length || 8}
            placeholder="téléphone"
            className="focus:outline-none"
          />
          <span>. </span>
        </div>
        <Button
          link=""
          onClick={handleSubmit}
          type="submit"
          title="Envoyer un mail"
        />
      </form>
    </section>
  );
}

export default Joindre;
