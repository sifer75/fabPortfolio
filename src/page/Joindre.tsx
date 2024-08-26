import { FormEvent, useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        company: "",
        location: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Ici, vous pouvez ajouter la logique pour envoyer les données du formulaire
        const { email, company, location, message } = formData;

        const subject = encodeURIComponent(`Contact de ${company}`);
        const body = encodeURIComponent(
            `Email: ${email}\n` +
                `Entreprise: ${company}\n` +
                `Localisation: ${location}\n\n` +
                `Message:\n${message}`
        );

        window.location.href = `mailto:votre-email@example.com?subject=${subject}&body=${body}`;
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto w-full max-w-2xl flex flex-col  justify-center gap-8 mt-8 p-6"
        >
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder="Entreprise"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="Lieu"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full px-3 py-2 border border-gray-300 h-40 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Envoyer
            </button>
        </form>
    );
};

function Joindre() {
    return (
        <section
            id="Joindre"
            className="flex flex-grow min-h-screen h-screen w-full flex-col items-center justify-between pt-24 pb-10 px-10"
        >
            <h1
                className={`flex w-full text-8xl font-Merich text-yellow-100 pb-5`}
            >
                Joindre
            </h1>
            <div className="grid grid-cols-3 h-full w-full">
                <ContactForm />
                <div className="col-span-2 h-full bg-red-500 rounded-lg"></div>
            </div>
        </section>
    );
}

export default Joindre;
