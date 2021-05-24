const app = new Vue ({
    el: "#app",
    data: {
        pullDownMenu: false,
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
                icon: "fa-chevron-down"
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

            },{
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
            },
            
        ],

        navbarIcons: [
            {
                icon: ["fa-search", "fa-github", "fa-stack-overflow", "fa-user-alt"]
            }    
        ]

    },
    methods : {
        //NON FUNZIONA
        clickMenu (textLink) {
            if(!textLink.elementDropdown) {
                return
            }
            this.pullDownMenu = !this.pullDownMenu;


        }
    }
})