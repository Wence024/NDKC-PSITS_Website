import React from 'react'

function About() {
  const teamMembers = [
    {
      img: "https://via.placeholder.com/150",
      name: "John Doe",
      position: "President",
    },
    {
      img: "https://via.placeholder.com/150",
      name: "Jane Smith",
      position: "Vice President",
    },
    {
      img: "https://via.placeholder.com/150",
      name: "Emily Johnson",
      position: "Secretary",
    },
    {
      img: "https://via.placeholder.com/150",
      name: "Michael Brown",
      position: "Treasurer",
    },
  ]

  return (
    <div className="about-container">
      <section className="statement-of-purpose">
        <h2>Our Purpose</h2>
        <p>
          Our club is dedicated to fostering a community of learners and
          innovators in the field of Information Technology. We aim to provide
          opportunities for skill development, collaboration, and leadership
          through workshops, competitions, and community outreach. Our purpose
          is to empower members to achieve their potential and contribute
          meaningfully to the tech industry and society.
        </p>
      </section>

      <section className="our-team-section">
        <h2>Meet Our Team</h2>
        <div className="our-team">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
            <img src={member.img} alt={`${member.name}`} className="team-img" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-position">{member.position}</p>
          </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;

// const About = () => {
//   return (

//   );
// };

// export default About;
