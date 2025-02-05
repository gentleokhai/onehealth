//Team section in the about page

const TeamSection = () => {
    const researchers = [
        { name: "Dr. S. Olaye", position: "Project Leader", image: "/assets/team1.png" },
        { name: "Dr. Omorodion Irewoa", position: "Researcher", image: "/assets/team2.png" },
        { name: "Dr. D. Doke-Ogboje", position: "Researcher", image: "/assets/team3.png" },
        { name: "Dr. P. Rhasuedeen", position: "Researcher", image: "/assets/team4.png" },
        { name: "Engr. Moses Onosogie", position: "Researcher", image: "/assets/team5.png" },
        { name: "Dr. Florence Ekei", position: "Researcher", image: "/assets/team6.png" },
        { name: "Dr. Abraham Zira", position: "Researcher", image: "/assets/team7.png" },
        { name: "Mr. Yusuf Mahaita", position: "Researcher", image: "/assets/team8.png" },
    ];

    const developers = [
        { name: "Deborah Iwiena-Iheme", position: "Software Engineer", image: "/assets/team9.png" },
        { name: "Victor Edah", position: "Analyst Manager", image: "/assets/team10.png" },
        { name: "Daniel Okoh", position: "Developer", image: "/assets/team11.png" },
        { name: "Daniel Akinbusha", position: "Developer", image: "/assets/team12.png" },
        { name: "Elijah Ayera", position: "Developer", image: "/assets/team13.png" },
        { name: "Anointing Madukwe", position: "Developer", image: "/assets/team14.png" },
        { name: "David Oswalu", position: "Developer", image: "/assets/team15.png" },
        { name: "Inufuhk Moffat", position: "Developer", image: "/assets/team16.png" },
        { name: "Hope Aleiyem", position: "Developer", image: "/assets/team17.png" },
        { name: "Kadijat Kasali", position: "Developer", image: "/assets/team18.png" },
        { name: "Oghenemaro Ogbudu", position: "Developer", image: "/assets/team19.png" },
        { name: "Freeman Lucky-Igah", position: "Developer", image: "/assets/team20.png" },
        { name: "Usha Igie", position: "Developer", image: "/assets/team21.png" },
        { name: "Victor Warilokon-West", position: "Developer", image: "/assets/team22.png" },
        { name: "Peter Ogi", position: "Developer", image: "/assets/team23.png" },
        { name: "Williams Aigbe", position: "Developer", image: "/assets/team24.png" },
    ];

    return (
        <div className="container mx-auto py-12">
            {/* Researchers Section */}
            <h2 className="text-xl font-bold text-blue-700 mb-4">Researchers</h2>
            <div className="grid grid-cols-4 gap-6">
                {researchers.map((member, i) => (
                    <div key={i} className="text-center">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="rounded-full w-32 h-32 mx-auto object-cover"
                        />
                        <p className="mt-2 font-medium">{member.name}</p>
                        <p className="text-gray-600">{member.position}</p>
                    </div>
                ))}
            </div>

            {/* Developers Section */}
            <h2 className="text-xl font-bold text-blue-700 mt-10 mb-4">Developers</h2>
            <div className="grid grid-cols-4 gap-6 border-2 border-blue-500 p-4 rounded-md">
                {developers.map((member, i) => (
                    <div key={i} className="text-center">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="rounded-full w-32 h-32 mx-auto object-cover"
                        />
                        <p className="mt-2 font-medium">{member.name}</p>
                        <p className="text-gray-600">{member.position}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamSection;
