import React from 'react';
import media from "../consts/media";

const contacts = [
    {
        name: "discord",
        text: media.discordTag,
    },
    {
        name: "email",
        text: media.emailRaw,
    }
];

export default function Contacts({ section }) {
    return (
        <section className="contacts" id="contacts">
            <h2 className="h2">{section.title}</h2>
            <div className="contacts__content">
                <p className="contacts__description">{section.text}</p>
                <div className="contacts__media">
                    <h3 className="contacts__title">{section.media}</h3>
                    <div className="contacts__list">
                        {contacts.map((contact) => (
                            <a 
                                key={contact.name}
                                className="contact" 
                                href={media[contact.name]}
                            >
                                <img 
                                    src={`/src/assets/images/icons/${contact.name}.svg`} 
                                    alt={contact.name}
                                />
                                <div className="contact__name">{contact.text}</div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
