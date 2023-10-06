import account from "../assets/account.svg"
import chPw from "../assets/cgPw.svg"
import security from "../assets/security.svg"
import connected from "../assets/connected.svg"
import privacy from "../assets/privacy.svg"
import mute from "../assets/mute.svg"
import filters from "../assets/notFilter.svg"
import languages from "../assets/language.svg"
import acessiblity from "../assets/acessiblity.svg"


export const settings = [
    {
        title: "Your Account",
        items: [
            {
                title: "Account information",
                body: "See your account information like your phone number and email.",
                link: "/main/settings/account-info",
                icon: account
            },
            {
                title: "Change your password",
                body: "Change your password at any time.",
                link: "/main/settings/change-password",
                icon: chPw
            }
        ]
    }, {
        title: "Security and account access",
        items: [
            {
                title: "Security manage",
                body: "Manage your account’s security.",
                link: "/main/settings/security-manage",
                icon: security
            }, {
                title: "Connected accounts",
                body: "Manage Google accounts connected to logo to log in.",
                link: "/main/settings/connected-accounts",
                icon: connected
            }
        ]
    }, {
        title: "Privacy and safety",
        items: [
            {
                title: "Privacy and safety",
                body: "Manage what information you allow other people on logo to see.",
                icon: privacy,
                link: "/main/settings/privacy-and-safety"
            },
            {
                title: "Mute and block",
                body: "the accounts, words, and notifications that you’ve muted or blocked.",
                icon: mute,
                link: "/main/settings/mute-block"
            }
        ]
    }, {
        title: "Notifications",
        items: [
            {
                title: "Filters",
                body: "Choose the notifications you’d like to see — and those you don’t.",
                link: "/main/settings/notifications",
                icon: filters
            }
        ]
    },{
        title:"Accessibility, display, and languages",
        items:[
            {
                title:"Accessibility",
                body:"Manage aspects of your Logo experience color contrast and motion.",
                link:"/main/settings/accessibility",
                icon:acessiblity
            },{
                title:"Languages",
                body:"Which languages are used to personalize your Videbucks experience.",
                link:"/main/settings/languages",
                icon:languages
            }
        ]
    }
]