const app = new Vue({
    el: "#app",
    data: {
        state: "close",

        email: '',
        
        errors: {
            email: false
        },
        
        navbarLinks: [
            {
                text: "Home",
                link: "#"
            },
            {
                text: "Landing",
                link: "#",
                elementDropdown: [
                    {
                        text: "Websait Hosting",
                        link: "#"
                    },
                    {
                        text: "Gaming Development",
                        link: "#"
                    },
                    {
                        text: "Cloud VPN",
                        link: "#"
                    }
                ],
                icon: "fa-chevron-down",
                pullDownMenu: false,

            },
            {
                text: "Pages",
                link: "#",
                icon: "fa-chevron-down",
                elementDropdown: [
                    {
                        text: "Web & Mobile Apps",
                        link: "#"
                    },
                    {
                        text: "Big Data Computing",
                        link: "#"
                    }
                ],
                pullDownMenu: false,


            }, {
                text: "Docs",
                link: "#",
                icon: "fa-chevron-down",
                elementDropdown: [
                    {
                        text: "Video Streaming Hosting",
                        link: "#"
                    },

                    {
                        text: "Startups",
                        link: "#"
                    }
                ],
                pullDownMenu: false,

            },

        ],

        navbarIcons: [
            {
                icon: ["fa-search", "fa-github", "fa-stack-overflow", "fa-user-alt"]
            }
        ],

        footerLink: 
        {
            companyData: [
                {
                    text: "About us",
                    icon: "fa-chevron-right "
                },
                {
                    text: "Services",
                    icon: "fa-chevron-right "
                },
                {
                    text: "Team",
                    icon: "fa-chevron-right "
                },
                {
                    text: "Pricing",
                    icon: "fa-chevron-right "
                },
                {
                    text: "Project",
                    icon: "fa-chevron-right "
                },
                {
                    text: "Careers",
                    icon: "fa-chevron-right "
                },
                {
                    text: "Blog",
                    icon: "fa-chevron-right "
                },
                {
                    text: "Login",
                    icon: "fa-chevron-right "
                }
            ],
            footerUsefulLink: [
                {
                    text: "Terms of Services",
                    icon: "fa-chevron-right "
                },
                {
                    text: "Privacy Policy",
                    icon: "fa-chevron-right "
                },
                {
                    text: "Documentation",
                    icon: "fa-chevron-right "
                },
                {
                    text: "Changelog",
                    icon: "fa-chevron-right "
                },
                {
                    text: "Components",
                    icon: "fa-chevron-right "
                }
            ],

        },
            
        listLandrick: [
            {
                text: "npm",
                active: false
            },
            {
                text: "nuget",
                active: false
            },{
                text: "spm",
                active: false
            },
            {
                text: "github",
                active: false
            }
        ]

    },
    methods: {
       
        clickMenu(currentLink) {
            if (!currentLink.elementDropdown) {
                return
            }
            currentLink.pullDownMenu = !currentLink.pullDownMenu;
        },
        clickText(currentText) {
            currentText.active = !currentText.active;
        },
        getpopup (){
   
            console.log({email: this.email})
            alert(`Benvenuto! L'iscrizione con l'indirizzo ${this.email} è avvenuta con successo!`)
        },

        validateEmail (){
            this.errors.email = !this.errors.email
        }
        
        
        

    },

})