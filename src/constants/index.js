const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Testimonials",
        link: "#testimonials",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Design", imgPath: "/images/design.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Design", imgPath: "/images/design.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 4, suffix: "+", label: "Years of Experience" },
    { value: 15, suffix: "+", label: "Happy Clients" },
    { value: 20, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
        name: "Shopify logo",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
        name: "Microsoft logo",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
        name: "Adidas logo",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
        name: "Docker logo",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
        name: "Hostinger logo",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
        name: "Adobe logo",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
        name: "Appwrite logo",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
        name: "NVIDIA logo",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
        name: "Vercel logo",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
        name: "Linear logo",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
        name: "Loom logo",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackImgs = [
    {
        name: "HTML Developer",
        imgPath: "/images/logos/html.svg",
        alt: "HTML logo",
    },
    {
        name: "React Developer",
        imgPath: "/images/logos/react.svg",
        alt: "React logo",
    },
    {
        name: "Next.js Developer",
        imgPath: "/images/logos/nextjs.svg",
        alt: "Next.js logo",
    },
    {
        name: "Wordpress Developer",
        imgPath: "/images/logos/wordpress.svg",
        alt: "Wordpress logo",
    },
    {
        name: "Wix Designer",
        imgPath: "/images/logos/wix.svg",
        alt: "Wix logo",
    },
];

const expCards = [
    {
        review:
            "Anaf led AI training initiatives with clarity and precision. His leadership and adaptability across model systems made him a key asset to the team.",
        imgPath: "/images/phase-infotech.png",
        logoPath: "/images/nebe-fav.png",
        title: "Prompt Engineer",
        company: "Phase Infotech",
        date: "August 2024 - December 2024",
        responsibilities: [
            "Trained AI models using RLHF by prompting and scoring outputs based on clarity, accuracy, and usefulness, then creating high-quality reference answers for training.",
            "Built clean and responsive web apps using HTML, CSS, JavaScript, React.js, and Tailwind CSS, with a focus on real-world usability and performance.",
            "Led and trained developer teams across different AI projects, managing workflows and helping them adapt to various model systems.",
        ],
    },
    {
        review:
            "Anaf brought creativity and technical skill to frontend projects, delivering clean, responsive interfaces with React and Tailwind that consistently improved user experience.",
        imgPath: "/images/innovius-software.png",
        logoPath: "/images/innovius-software-fav.png",
        title: "Frontend Developer",
        company: "Innovius Software",
        date: "December 2023 - March 2024",
        responsibilities: [
            "Developed responsive websites using HTML5, CSS3, Bootstrap, and JavaScript, ensuring seamless user experiences and optimized performance across devices.",
            "Built dynamic Single Page Applications (SPAs) with React.js and Tailwind CSS, focusing on fast UI development and efficient styling.",
            "Managed version control and project workflows using Git, ensuring smooth collaboration and deployment from development to production.",
        ],
    },
];

const testimonials = [
    {
        name: "Rahul Lalwani",
        company: "Stealth",
        review:
            "Absolutely brilliant service! Anaf was incredibly helpful, responsive, and truly understood my needs. The final outcome was perfect. Couldn't be happier with the experience!",
        imgPath: "/images/client1.png",
    },
    // {
    //     name: "Wade Warren",
    //     company: "@wadewarren",
    //     review:
    //         "Coming Soon! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae deleniti doloremque aliquam magni, officia deserunt animi quia ut ad corporis assumenda repellendus magnam. Aspernatur, quod!",
    //     imgPath: "/images/client3.png",
    // },
    {
        name: "Krishal Modi",
        company: "Project Tree",
        review:
            "A highly professional developer who provides quick solutions with immediate response. Delivers clean, optimized code with great efficiency. Always reliable, fast, and attentive—an excellent choice for any project requiring real-time support and high-quality results.",
        imgPath: "/images/client2.png",
    },
    // {
    //     name: "Marvin McKinney",
    //     company: "@marvinmckinney",
    //     review:
    //         "Coming Soon! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae deleniti doloremque aliquam magni, officia deserunt animi quia ut ad corporis assumenda repellendus magnam.",
    //     imgPath: "/images/client5.png",
    // },
    {
        name: "Vansh Mehta",
        company: "Vardaan Smart Solutions",
        review:
            "Anaf did an outstanding job! Very professional, great communication, and delivered exactly what I needed on time. Highly recommend!",
        imgPath: "/images/client4.png",
    },
    // {
    //     name: "Albert Flores",
    //     company: "@albertflores",
    //     review:
    //         "Coming Soon! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatum sunt excepturi qui officiis, doloribus quisquam totam minima architecto quod. Aspernatur, quod! Praesentium, architecto?",
    //     imgPath: "/images/client6.png",
    // },
];

const socialImgs = [
    {
        name: "Github",
        url: "https://github.com/mohammedanaf",
        imgPath: "/images/github.svg",
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/mohammed-anaf",
        imgPath: "/images/linkedin.svg",
    },
    {
        name: "Discord",
        url: "https://discord.com/users/1285203411402227746",
        imgPath: "/images/discord.svg",
    },
    {
        name: "X",
        url: "https://x.com/PsycoticMonster",
        imgPath: "/images/x.svg",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    testimonials,
    socialImgs,
    techStackImgs,
    navLinks,
};