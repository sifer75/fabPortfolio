import { FormEvent, useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, phone, company, location } = formData;

    const subject = encodeURIComponent(`Contact de ${company}`);
    const body = encodeURIComponent(
      `Nom: ${name}\n` +
        `Email: ${email}\n` +
        `Telephone: ${phone}\n` +
        `Entreprise: ${company}\n` +
        `Localisation: ${location}\n\n`
    );

    window.location.href = `mailto:votre-email@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full flex flex-col gap-5 flex-end justify-around items-center p-5content-around"
    >
      <div className="w-full h-full flex justify-start flex-wrap p-5 content-around text-yellow-300  font-Neue font-semibold text-3xl ">
        <p className="min-w-fit h-fit px-2 flex items-center">
          Salut Fabien, mon nom est
        </p>
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
          className="h-fit max-w-full px-2 effect-shine flex flex-wrap bg-transparent border-b focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="h-fit flex items-center px-2">
          Je travaille actuellement dans l'entreprise
        </p>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
          size={formData.company.length || 8}
          placeholder="Entreprise"
          className="h-fit max-w-full effect-shine px-2 flex items-center bg-transparent border-b focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="h-fit flex items-center px-2">Notre siège se situe</p>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          size={formData.location.length || 4}
          placeholder="Lieu"
          className="h-fit max-w-full effect-shine px-2 flex items-center bg-transparent border-b focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="h-fit flex items-center px-2">
          Si vous souhaitez entrer en contact avec moi, vous pouvez me joindre à
          l'adresse suivante
        </p>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          size={formData.email.length || 4}
          placeholder="Email"
          className="h-fit max-w-full effect-shine px-2 flex items-center bg-transparent border-b focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <p className="h-fit flex items-center px-2">ou par téléphone au</p>
        <input
          type="phone"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          size={formData.phone.length || 8}
          placeholder="téléphone"
          className="h-fit max-w-full effect-shine px-2 flex items-center bg-transparent border-b focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-1/3 h-max bg-black text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 border border-white"
      >
        Envoyer
      </button>
    </form>
  );
};

function Joindre() {
  // const [isVisible, setisVisible] = useState<boolean>(false);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setisVisible(true);
  //       }
  //     },
  //     { threshold: 0.3 }
  //   );
  // }, []);
  return (
    <section
      id="Joindre"
      className="flex flex-grow min-h-screen h-screen w-full flex-col items-center justify-between pt-24 pb-10 px-10"
    >
      <h1 className={`flex w-full text-8xl font-Merich text-yellow-100 pb-5`}>
        Joindre
      </h1>
      <ContactForm />
    </section>
  );
}

export default Joindre;
